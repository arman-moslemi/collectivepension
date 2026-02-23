import { MainButton, MainInput, MainTable, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import { axiosReq } from "../../commons/axiosReq";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState, useEffect } from "react";
import { apiAsset } from "../../commons/inFormTypes";


const titleRow = [
    "ردیف",
    "نام و نام خانوادگی",
    "کدملی",
    "تاریخ ثبت اعتراض",
    "نوع",
    "وضعیت",
    "نام صندوق",
    "مشاهده"
];


const MainAdminProtestList = () => {

    let navigate = useNavigate();
    const [startDate,
        setStartDate] = useState("");
    const [endDate,
        setEndDate] = useState("");

    const [statues, setStatues] = useState([]);
    const [levels, setLevels] = useState([]);
    const [name, setName] = useState("");
    const [protestLevelId, setProtestLevelId] = useState("");
    const [protestStatusId, setProtestStatusId] = useState("");
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(10);
    const [data, setData] = useState([]);



    const getProtests = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetProtestsSP?page=" + page + "&&pageSize=" + row + "&&search=" + name + "&&endDate=" + endDate + "&&startDate=" + startDate + "&&protestStatusId=" + protestStatusId + "&&protestLevelId=" + protestLevelId, "post");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                setCount(response.data?.count)
                response.data?.data?.map((item, index) => {
                    console.log(88)
                    console.log(item)
                    console.log(88)
                    prot.push({
                        item1: index + 1,
                        item2: item.fullName,
                        item3: item.nationalCode,
                        item4: item.protestDate,
                        item5: item.protestLevel,
                        item6: item.protestStatus,
                        item7: item.insuranceName,
                        item8: (
                            //     <Link
                            //     to={`/mainAdmin/protestList/${item.id}`}
                            //     state={{ type: item.protestType, data: item }}
                            //   >
                            //     <div className="w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center">
                            //       <DetailTableIcon />
                            //     </div>
                            //   </Link>

                            <button onClick={() => navigate("/mainAdmin/protestDetail", {
                                state: {
                                    id: item.protestId,
                                    type: item.protestLevelId == 2 ? "RECORD" : item.protestLevelId == 4 ? "AMOUNT" : "GENERAL"
                                }
                            })}>
                                <div
                                    className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
                            </button>
                        ),

                    })
                })
                setData(prot);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getProtests();
    }, [name, protestLevelId, protestStatusId, page, row, startDate, endDate]);

    const getFiltersLevels = async () => {
        try {


            const response3 = await axiosReq("SuperAdmins/GetProtestLevels", "get");

            if (response3?.status === 200 || response3?.status === 204) {
                var sta = []
                response3.data?.map((item, index) => {
                    sta.push({
                        id: item.protestLevelId,
                        name: item.protestLevel,
                    })
                })
                setLevels(sta);

            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const getFiltersStatuses = async () => {
        try {


            const response4 = await axiosReq("SuperAdmins/GetProtestStatuses", "get");

            if (response4?.status === 200 || response4?.status === 204) {
                var sta = []
                response4.data?.map((item, index) => {
                    sta.push({
                        id: item.protestStatusId,
                        name: item.statusDescription,
                    })
                })
                setStatues(sta);
            }

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getFiltersLevels();
        getFiltersStatuses();

    }, []);

    const getExcel = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetProtestsSPExcel?search=" + name + "&&endDate=" + endDate + "&&startDate=" + startDate + "&&protestStatusId=" + protestStatusId + "&&protestLevelId=" + protestLevelId, "post");
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
            const response = await axiosReq(`Users/downloadExcel/${name}`, "get", {
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

    return (
        <div
            className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div className="w-full flex justify-end mb-3">
                <div className="w-[100px]">
                    <MainButton onClickFunction={() => getExcel()} label={"گزارش‌ گیری"} />
                </div>
            </div>
            <div className="w-full grid grid-cols-12 gap-2 items-end mb-2">

                <div className="col-span-4  b1115:col-span-12 flex items-center">
                    <MainInput
                        search={true}
                        onChange={(e) => setName(e.target.value)}
                        holder={"جستجو بر اساس نام یا کدملی"}
                        leftIcon={< SearchIcon />} />
                </div>

                <div className="col-span-2 b1115:col-span-6 b1115:xs:col-span-12 ">
                    <MainInput date={true} value={startDate}
                        onChange={(val1) => setStartDate(val1)} holder={"از تاریخ"} leftIcon={< DateIcon />} />
                </div>

                <div className="col-span-2 b1115:col-span-6 b1115:xs:col-span-12">
                    <MainInput date={true} value={endDate}
                        onChange={(val2) => setEndDate(val2)} holder={"تا تاریخ"} leftIcon={< DateIcon />} />
                </div>
                <div className="col-span-2 b1115:col-span-6 b1115:xs:col-span-12">
                    <MainInput
                        listBoxM1={true}
                        listItems={levels}
                        // For display, pass the selected object (or "" if not selected)
                        value={levels.find(i => String(i.id) === String(protestLevelId)) || ""}
                        // On change, always store only the id (as string) in Formik
                        onChange={(value) =>
                            setProtestLevelId(value.id)}
                        listBoxHolder={"نوع اعتراض"} />
                </div>
                <div className="col-span-2 b1115:col-span-6 b1115:xs:col-span-12">
                    <MainInput
                        listBoxM1={true}
                        listItems={statues}
                        // For display, pass the selected object (or "" if not selected)
                        value={statues.find(i => String(i.id) === String(protestStatusId)) || ""}
                        // On change, always store only the id (as string) in Formik
                        onChange={(value) =>
                            setProtestStatusId(value.id)}
                        listBoxHolder={"وضعیت"} />
                </div>
                <div className="col-span-1  mb-[1px]">

                </div>



            </div>

            <div className='w-full my-[20px]'>
                <MainTable center1={false} ic={false} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
            </div>

        </div>
    )
}

export default MainAdminProtestList;