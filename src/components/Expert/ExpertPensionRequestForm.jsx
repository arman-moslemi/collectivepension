import { useState, useEffect } from "react";
import { MainButton, MainInput, MainTable, MainExplanation, MainRadioInput, MainRadioInput2, UploadFile, ViewInsurances } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import { axiosReq } from "../../commons/axiosReq";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { apiAsset } from "../../commons/inFormTypes";

const ExpertPensionRequestForm = ({ admin, webService, des, id }) => {
    const [disapproval, setDisapproval] = useState(false);
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reason, setReason] = useState(null);
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                const response = await axiosReq("Experts/GetUserFormByRequest?userInsuranceId=" + id, "get");
                if (response.data) {
                    setFormData(response.data);
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
    const submit = async () => {
        try {
            const response = await axiosReq("Experts/Approve?userInsuranceId=" + id, "put");
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
    const disApprove = async () => {
        try {
            const response = await axiosReq("Experts/Disapprove?userInsuranceId=" + id, "put",{
                Reason:reason,
                UserInsuranceFiles:files
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
        return <div className="w-full flex justify-center py-10 text-redError font-IRANYekanBold">{error}</div>;
    }


    return (
        <div className="w-full">
            <div className="w-full px-[73px] h800:px-0 mb-6">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات هویتی متقاضی</p>
            </div>
            <div className="w-full px-[120px] h800:px-[15px] mb-8 grid grid-cols-3 gap-4 md:px-2">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام'} value={formData.name} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام خانوادگی '} value={formData.family} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام پدر'} value={formData.fatherName} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ تولد'} value={formData.birthDate} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'کدملی'} value={formData.nationalCode} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره شناسنامه '} value={formData.idcardNumber} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'جنسیت'} value={formData?.isMan ? "مرد" : "زن"} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره تلفن ثابت '} value={formData?.phoneNumber} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره تلفن همراه'} value={formData?.mobileNumber} />
                </div>
                <div className="col-span-3">
                    <MainInput label={'آدرس'} value={formData?.address} />
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput title={'نوع درخواست مستمری جمع'} selectedValue={formData?.isRetirement} value1={true} value2={false} text1={'بازنشستگی'} text2={'از کار افتادگی کلی'}
                        ml={'100'} mr={'30'} disabled={true} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'کد پرسنلی'} selectedValue={formData?.personnelCode} value={'مثلا 09123333333'} />
                </div>

            </div>
            <div className="w-full px-[73px] pb-10  h800:px-0">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات فرد در صندوق بازنشستگی مقصد</p>
            </div>
            <ViewInsurances isEnding={true} data={formData?.endingInsurance} />
            {
                formData?.startingInsurances.map((item, index) => {
                    return (
                        <>
                            <div className="w-full px-[73px] pb-10 h800:px-0">
                                <p className="text-[18px] font-IRANYekanExtra">اطلاعات فرد در صندوق بازنشستگی مبدا {index + 1}</p>
                            </div>

                            <ViewInsurances isEnding={false} data={item} />
                        </>
                    )
                })
            }

            <div className="border-t-[2px] border-dGray border-dashed pb-9 mx-[73px]"></div>

            {des && !webService && !admin &&  formData?.userStatusId==1?
                <div className="w-full px-[120px] flex justify-end items-center lg:px-0 lg:justify-center">
                    <div className="w-[107px] ml-[10px]"><MainButton onClickFunction={() => submit()} label={'تایید'} /></div>
                    <div className="w-[107px]"><MainButton onClickFunction={() => setDisapproval(true)} label={'عدم تایید'} red={true} /></div>
                </div>
                : null}
            {disapproval ?
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
                        <div className="w-[125px] lg:mt-2"><MainButton onClickFunction={() => disApprove()} label={'ارسال'} /></div>

                    </div>


                </div>
                : null}


        </div>
    )
}

export default ExpertPensionRequestForm;