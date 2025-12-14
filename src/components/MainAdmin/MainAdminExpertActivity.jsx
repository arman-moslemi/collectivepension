import { MainInput, MainButton, MainTable, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import { axiosReq } from "../../commons/axiosReq";
import DateIcon from "../../assets/icon/general/DateIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import Download from "../../assets/icon/main/Download";
import { apiAsset } from "../../commons/inFormTypes";

const titleRow = ["ردیف", "نام صندوق", "در انتظار تایید اولیه", "در انتظار اعلام سابقه", "سوابق اعلام شده", "در انتظار تایید ثانویه", "در انتظار اعلام مبلغ مستمری", "مبلغ مستمری اعلام شده", "احکام صادر شده", "اعتراضات در انتظار بررسی", "اعتراضات پاسخ داده شده ", "دریافت"];

const MainAdminExpertActivity = () => {

    let navigate = useNavigate();

    const [data, setData] = useState([]);
    const [insuranceId, setInsuranceId] = useState(0);
    const [statues, setStatues] = useState([]);
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(10);
    const [reportResponse, setReportResponse] = useState("");

    const getProtests = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetRequestsTypesCountByInsuranceId?page=" + page + "&&pageSize=" + row + "&&insuranceId=" + insuranceId, "get");
            console.log(response)
            console.log('sss');

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                setCount(response.data?.count)
                response.data?.data.map((item, index) => {
                    console.log(88)
                    console.log(item)
                    console.log(88)
                    prot.push({
                        item1: index + 1,
                        item2: item.insuranceName,
                        item3: item.firstApproveWaiting,
                        item4: item.recordDeclareWaiting,
                        item5: item.recordDeclared,
                        item6: item.pensionDeclareWaiting,
                        item7: item.pensionDeclared,
                        item8: item.secondApproveWaiting,
                        item9: item.waitingProtests,
                        item10: item.answeredProtests,
                        item11: item.docsDeclared,
                        item12:
                            <div className="flex" onClick={() => handleInsuranceReport()}>
                                <div className='w-[38px] h-[38px] mx-auto rounded-full flex justify-center items-center ml-1'>
                                    <Download /></div>
                            </div>,

                    })
                })
                setData(prot);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getProtests();
    }, [insuranceId, page, row,]);
    const getFilters = async () => {
        try {


            const response3 = await axiosReq("Insurances/GetInsurances", "get");

            if (response3?.status === 200 || response3?.status === 204) {
                var sta = []
                response3.data?.map((item, index) => {
                    sta.push({
                        id: item.insuranceId,
                        name: item.name,
                    })
                })
                setStatues(sta);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getFilters();
    }, []);
    const getExcel = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetRequestsTypesCountExcel", "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                alert("موفقیت آمیز")
                download(response.data)

            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const download = async (name) => {
        try {
            const response = await axiosReq(`Users/download/${name}`, "get", {
                responseType: "blob", // important!
            });

            if (response.status === 200) {
                // Create a blob from the response
                const blob = new Blob([response.data], { type: response.headers['content-type'] });
                const url = window.URL.createObjectURL(blob);

                // Create a temporary link element
                const a = document.createElement('a');
                a.href = url;
                a.download = name; // you can also extract filename from headers if needed
                document.body.appendChild(a);
                a.click();

                // Cleanup
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };
    const handleInsuranceReport = async (id) => {
        try {
            const response = await axiosReq("SuperAdmins/GetRequestsTypesCountByInsuranceIdExcel", "get", {
                insuranceId: id,
            });
            setReportResponse(response.data);
            if (response?.status === 200) {
                alert("موفقیت آمیز")
               // window.open(apiAsset + response.data, '_blank')
download(response.data)
                // getProtests();
            }
        } catch (error) {
            console.error("Error reporting insurance:", error);
        }
    }



    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]">
                <div className='w-full grid gap-2 grid-cols-12 mb-[28px]'>

                    <div className='col-span-4 w-full lg:col-span-12'><div className="mb-4 flex justify-between items-center">
                        <span className="font-IRANYekanBold min-w-[110px] text-[15px] text-black">
                            انتخاب صندوق
                        </span>
                        <div className="w-full">
                            <MainInput
                                listBox={true}
                                listItems={statues}
                                necessary={false}
                                // For display, pass the selected object (or "" if not selected)
                                value={statues.find(i => String(i.id) === String(insuranceId)) || ""}
                                // On change, always store only the id (as string) in Formik
                                onChange={(value) =>
                                    setInsuranceId(value.id)}

                            />
                        </div>
                    </div></div>

                    {/* <div className='col-span-2 md:col-span-12'><MainInput date={true} holder={'از تاریخ'} leftIcon={<DateIcon />} /></div>
                    <div className='col-span-2 md:col-span-12'><MainInput date={true} holder={'تا تاریخ'} leftIcon={<DateIcon />} /></div> */}


                    <div className=" flex justify-end col-span-8">
                        <div className="w-[123px] mt-2">
                            <MainButton onClickFunction={() => getExcel()} label={'گزارش‌ گیری'} />
                        </div>
                    </div>
                </div>
                <div className='w-full my-[20px]'>
                    <MainTable center1={true} ic={false} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
                </div>
            </div>


        </div>
    )
}

export default MainAdminExpertActivity;