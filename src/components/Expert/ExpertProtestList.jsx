import { MainButton, MainInput, MainTable, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import IcPenIcon from "../../assets/icon/general/IcPenIcon";
import IcReloadIcon from "../../assets/icon/general/IcReloadIcon";
import Cookies from 'universal-cookie';

const statusee = [
    {
        id: 1,
        name: 'در انتظار بررسی'
    }, {
        id: 2,
        name: 'تایید شده'
    }, {
        id: 3,
        name: 'رد شده'
    }, {
        id: 4,
        name: 'تکمیل شده'
    }
]
const protestType = [
    {
        id: 1,
        name: 'اعتراض به احراز شرایط'
    }, {
        id: 2,
        name: 'اعتراض به سابقه اعلامی'
    }, {
        id: 3,
        name: 'اعتراض به مبلغ مستمری'
    }
]
const num = [
    {
        id: 1,
        name: '5 تا'
    }, {
        id: 2,
        name: '10 تا'
    }, {
        id: 3,
        name: '15 تا'
    }
]
const titleRow = [
    "ردیف",
    "نام و نام خانوادگی",
    "کدملی",
    "تاریخ ثبت اعتراض",
    "نوع",
    "وضعیت",
    "مشاهده"
];

const list = [
    {
        id: "1",
        fullName: "علی علیزاده",
        nationalCode: "0020163258",
        date: "1402/02/08",
        protestType: "RECORD",
        protestTypeLabel: "اعتراض به سابقه اعلامی",
        status: "در انتظار بررسی",
    },
    {
        id: "2",
        fullName: "علی علیزاده",
        nationalCode: "0020163258",
        date: "1402/02/08",
        protestType: "AMOUNT",
        protestTypeLabel: "اعتراض به مبلغ مستمری",
        status: "در انتظار بررسی",
    },
    {
        id: "3",
        fullName: "علی علیزاده",
        nationalCode: "0020163258",
        date: "1402/02/08",
        protestType: "GENERAL",
        protestTypeLabel: "اعتراض به احراز شرایط",
        status: "در انتظار بررسی",
    },
];
const tableData = list?.map((item) => ({
    item1: item.id,
    item2: item.fullName,
    item3: item.nationalCode,
    item4: item.date,
    item5: item.protestTypeLabel,
    item6: item.status,
    item7: (
        <Link
            to={`/expert/protestDetail/${item.id}`}
            state={{ type: item.protestType, data: item }}
        >
            <div className="w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center">
                <DetailTableIcon />
            </div>
        </Link>
    ),
}));
const ExpertProtestList = () => {

    let navigate = useNavigate();

    const [dateError,
        setDateError] = useState("");
    const [endDate,
        setEndDate] = useState("");
    const [startDate,
        setStartDate] = useState("");

    const [data, setData] = useState([]);
    const [insurances, setInsurances] = useState([]);
    const [types, setTypes] = useState([]);
    const [statues, setStatues] = useState([]);
    const [id, setId] = useState();
    const [name, setName] = useState("");
    const [status, setStatus] = useState(0);
    const [type, setType] = useState(0);
    const [text, setText] = useState();
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(10);
    const returnReq = async (id) => {
        try {

            const response = await axiosReq("Experts/ReturnProtest?protestId=" + id, "put");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                alert("موفقیت آمیز")
            }
            else {
                alert(response)
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    const getProtests = async () => {
        try {
            const cookies = new Cookies();


            const response = await axiosReq("Experts/GetProtestsEXP?page=" + page + "&&pageSize=" + row + "&&search=" + name + "&&endDate=" + endDate + "&&startDate=" + startDate +
                "&&protestStatusId=" + status + "&&protestLevelId=" + type + "&&search=" + name, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                setCount(response.data?.count)
                response.data?.data?.map((item, index) => {
                    console.log(88)

                    prot.push({
                        item1: index + 1,
                        item2:

                            <div className="flex">{item.fullName}
                                {
                                    item.isReturned == true ?
                                        <div className="mr-2 rounded-full bg-yellowError h-[25px] w-[25px] flex justify-center items-center"><IcReloadIcon /></div>
                                        :
                                     
                                            null
                                }

                            </div>
                        ,

                        item3: item.nationalCode,
                        item4: item.protestDate,
                        item5: item.protestLevel,
                        item6: item.protestStatus,
                        item7:
                            <div className="flex justify-between">
                                <button onClick={() => navigate("/expert/protestDetail", {
                                    state: {
                                        id: item.protestId,
                                        type: item.protestLevelId == 2 ? "RECORD" : item.protestLevelId == 4 ? "AMOUNT" : "GENERAL"
                                    }
                                })}>
                                    <div
                                        className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
                                </button>
                                {cookies.get("Role") == "Admin" ?
                                    <button onClick={() => returnReq(item.protestId)} >
                                        <div
                                            className='w-[38px] h-[38px] mx-2 rounded-full bg-backYellow flex justify-center items-center'>
                                            <IcReloadIcon />
                                        </div>

                                    </button>
                                    :
                                    null}
                            </div>
                        ,

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
    }, [name, type, status, page, row, startDate, endDate]);
    const getFilters = async () => {
        try {

            const response = await axiosReq("Experts/GetProtestLevels", "get");

            if (response?.status === 200 || response?.status === 204) {
                var lev = []
                response.data?.map((item, index) => {
                    lev.push({
                        id: item.protestLevelId,
                        name: item.protestLevel,
                    })
                })
                setTypes(lev);
            }
            const response3 = await axiosReq("Experts/GetProtestStatuses", "get");

            if (response3?.status === 200 || response3?.status === 204) {
                var sta = []
                response3.data?.map((item, index) => {
                    sta.push({
                        id: item.protestStatusId,
                        name: item.statusDescription,
                    })
                })
                setStatues(sta);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getFilters();
    }, []);
    const getExcel = async () => {
        try {

            const response = await axiosReq("Experts/GetProtestsEXPExcel?search=" + name + "&&endDate=" + endDate + "&&startDate=" + startDate + "&&userInsuranceStatusId=" + status, "post", {

                // IsEndingInsurance: IsEnding,


            });
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                alert("موفقیت آمیز")
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    return (
        <div
            className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div className="w-full grid grid-cols-12 gap-2 items-end mb-2">

                <div className="col-span-3 b1115:col-span-12 flex items-center">
                    <MainInput
                        search={true}
                        holder={"جستجو بر اساس نام یا کدملی"}
                        leftIcon={< SearchIcon />} />
                </div>

                <div className="col-span-2 b1115:col-span-6 md:col-span-12">
                    <MainInput date={true} value={startDate}
                        onChange={(val1) => setStartDate(val1)} holder={"از تاریخ"} leftIcon={< DateIcon />} />
                </div>

                <div className="col-span-2 b1115:col-span-6 md:col-span-12">
                    <MainInput date={true} value={endDate}
                        onChange={(val2) => setEndDate(val2)} holder={"تا تاریخ"} leftIcon={< DateIcon />} />
                </div>
                <div className="col-span-2 b1115:col-span-6 md:col-span-12">
                    <MainInput
                        listBoxM1={true}
                        listItems={types}
                        listBoxHolder={"نوع اعتراض"} />
                </div>
                <div className="col-span-2 md:col-span-12 b1115:col-span-6 ">
                    <MainInput listBoxM1={true} listItems={statues} listBoxHolder={"وضعیت"} />
                </div>



            </div>
            <div className="flex justify-end w-full mb-2
            ">
                <div className="w-[150px]">
                    <MainButton onClickFunction={() => getExcel()} label={"گزارش‌ گیری"} />
                </div>
            </div>
            <div className='w-full mb-[10px]'>
                <MainTable center1={true} list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
            </div>


        </div>
    )
}

export default ExpertProtestList;