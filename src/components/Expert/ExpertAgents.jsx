import { useState, useEffect } from "react";
import { MainButton, MainInput, MainTable, ExpertAgentForm, UploadFile } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";
import { axiosReq } from "../../commons/axiosReq";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { apiAsset } from "../../commons/inFormTypes";

const ExpertAgents = ({ admin, webService, des, id }) => {

    const [mainOpen, setMainOpen] = useState(false);

    let navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [formDataApproved, setFormDataApproved] = useState(null);
    const [formDataDisApproved, setFormDataDisApproved] = useState(null);
    const [showId, setShowId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [disapproval, setDisapproval] = useState(false);
    const [reason, setReason] = useState(null);
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const response = await axiosReq("Experts/GetAgentFormByRequest?userInsuranceId=" + id, "get");
                if (response.data) {

                    setFormData(response.data.filter(x => x.agentStatusId == 2));
                    setFormDataApproved(response.data.filter(x => x.agentStatusId == 3));
                    setFormDataDisApproved(response.data.filter(x => x.agentStatusId == 4));
                }
            } catch (err) {
                console.error("Error fetching form data:", err);
                setError("خطا در دریافت اطلاعات فرم");
            } finally {
                setLoading(false);
            }
        };

        fetchFormData();
    }, []);
    const approve = async (item) => {
        try {
            const response = await axiosReq("Experts/ApproveAgent?agentId=" + item, "put");
            if (response.data) {
                alert("با موفقیت انجام شد");
            }
        } catch (err) {
            console.error("Error fetching form data:", err);
            setError("خطا در دریافت اطلاعات ");
        } finally {
            setLoading(false);
        }
    };
    const disApprove = async (item) => {
        try {
            const response = await axiosReq("Experts/DisapproveAgent?agentId=" + id, "put", {
                Reason: reason,
                UserInsuranceFiles: files
            });
            if (response.data) {
                alert("با موفقیت انجام شد");
            }
        } catch (err) {
            console.error("Error fetching form data:", err);
            setError("خطا در دریافت اطلاعات ");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        handleFileChange()
    }, [file]);
    const handleFileChange = () => {

        if (file?.length > 0) {
            console.log("change")
            console.log(111)
            setFiles([...files, file])
        }
    }
    if (loading) {
        return <div className="w-full flex justify-center py-10">در حال بارگزاری...</div>;
    }

    if (error) {
        return <div className="w-full flex justify-center py-10 text-red-500">{error}</div>;
    }
    return (
        <div className="w-full py-4 px-[70px] lg:px-0">
            {des && !admin ?
                <div className="w-full flex items-center justify-between mb-6 flex-wrap">
                    <p className="text-[18px] font-IRANYekanExtra">اطلاعات هویتی بازمانده تازه</p>
                    <div className="w-[153px] lg:w-fit lg:px-[12px] lg:mr-auto lg:mt-2 h-[40px] rounded-full bg-yellowError flex justify-center items-center">
                        <p className="text-[16px] lg:text-[12px] font-IRANYekanExtra text-white">در انتظار بررسی</p>
                    </div>
                </div>
                : null}
            {des && !admin ?
                formData?.map((item) => {
                    return (
                        <>
                            <div className="w-full mb-[38px]">
                                <ExpertAgentForm formData={item} />
                            </div>

                            <div className="w-full flex justify-end mb-[32px]">
                                <div className="w-[97px] ml-[10px]"><MainButton onClickFunction={() => approve(item?.agentId)} label={'تایید'} /></div>
                                <div className="w-[97px]"><MainButton red={true} onClickFunction={() => {setDisapproval(true);setShowId(item.agentId)}} label={'عدم تایید'} /></div>
                            </div>
                            {disapproval && showId == item.agentId ?
                                <div className="w-full px-[120px] lg:px-0 lg:my-2">
                                    <div className="w-full">
                                        <MainInput longText={true} onChange={(e) => setReason(e.target.value)} label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'} holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'} />
                                    </div>
                                    <div className="w-full flex justify-between items-center mt-2 flex-wrap lg:mr-auto">
                                        <div className="w-full flex items-center lg:flex-col lg:items-start">
                                            <p className="text-[14px] font-IRANYekanMedium text-mainBlue ml-3">انتخاب فایل</p>
                                            <div className="w-fit">
                                                <UploadFile setFile={setFile} />
                                            </div>
                                        </div>
                                        {
                                            files.map((item) => {
                                                return (

                                                    <div onClick={() => window.open(apiAsset + item, '_blank')} className="h-[36px] w-fit rounded-full bg-backBlue flex items-center pr-[20px] pl-[17px]">
                                                        <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px] cursor-pointer">{item}</p>
                                                        <ExportAgentFileIIcon />
                                                    </div>
                                                )
                                            })
                                        }
                                        <div className="w-[125px] my-2"><MainButton onClickFunction={() => disApprove()} label={'ارسال'} /></div>

                                    </div>


                                </div>
                                : null}
                        </>
                    )
                })
                : null}

            {des && !admin ?
                <div className="w-full border-b-[2px] border-dGray mb-[41px]">

                </div>
                : null}
            <div className="w-full">
                <p className="text-[18px] font-IRANYekanExtra mb-8">اطلاعات هویتی بازمانده‌های تایید شده</p>
            </div>
            {
                formDataApproved?.map((item) => {
                    return (
                        <div className="w-full mb-28">
                            <div className="w-full rounded-[10px] shadow-firstBoxShadow mb-6">
                                <div className={`flex py-[27px] justify-between items-center ${mainOpen ? 'border-b-[2px] border-dGray' : 'border-none'}  `}>
                                    <div className="flex items-center mr-5">
                                        <p className="text-[16px] text-mainBlue font-IRANYekanBold">{item.name} {item.family}</p>
                                    </div>
                                    <div onClick={() => { setMainOpen(!mainOpen); setShowId(item.agentId) }} className="ml-5 cursor-pointer">
                                        <DownSide />
                                    </div>
                                </div>
                                {mainOpen && showId == item.agentId ?
                                    <div className="w-full px-[28px] py-[35px]">
                                        <ExpertAgentForm formData={item} />

                                    </div>
                                    : null}


                            </div>


                        </div>
                    )
                })
            }
            <div className="w-full">
                <p className="text-[18px] font-IRANYekanExtra mb-8">اطلاعات هویتی بازمانده‌های رد شده</p>
            </div>
            {
                formDataDisApproved?.map((item) => {
                    return (
                        <div className="w-full mb-28">
                            <div className="w-full rounded-[10px] shadow-firstBoxShadow mb-6">
                                <div className={`flex py-[27px] justify-between items-center ${mainOpen ? 'border-b-[2px] border-dGray' : 'border-none'}  `}>
                                    <div className="flex items-center mr-5">
                                        <p className="text-[16px] text-mainBlue font-IRANYekanBold">{item.name} {item.family}</p>
                                    </div>
                                    <div onClick={() => { setMainOpen(!mainOpen); setShowId(item.agentId) }} className="ml-5 cursor-pointer">
                                        <DownSide />
                                    </div>
                                </div>
                                {mainOpen && showId == item.agentId ?
                                    <div className="w-full px-[28px] py-[35px]">
                                        <ExpertAgentForm formData={item} />

                                    </div>
                                    : null}


                            </div>


                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExpertAgents;