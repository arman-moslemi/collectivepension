import { MainButton, MainInput, MainTable } from "../../components";
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

const status = [
    {
        id: 1,
        name: 'در انتظار اعلام سابقه'
    }, {
        id: 2,
        name: 'در انتظار اعلام مبلغ'
    }, {
        id: 3,
        name: 'در انتظار تایید مبلغ'
    }, {
        id: 4,
        name: 'تکمیل شده'
    }
]

const titleRow = [
    "ردیف",
    "نام و نام خانوادگی",
    "کدملی",
    "وضعیت حیات",
    "تاریخ ثبت درخواست",
    "وضعیت",
    "مشاهده"
];
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
const list = [
    {
        item1: "1",
        item2: "علی علیزاده",
        item3: "0020163258",
        item4: "در قید حیات",
        item5: "1402/02/08",
        item6: 'در انتظار اعلام سوابق',
        item7: <Link to="../../expert/requestsDetails">
            <div
                className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
        </Link>
    },
    {
        item1: "1",
        item2: "علی علیقتیثتزاده",
        item3: "0020163258",
        item4: "در قید حیات",
        item5: "1402/02/08",
        item6: 'در انتظار اعلام سوابق',
        item7: <Link to="../../expert/requestsDetails">
            <div
                className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
        </Link>
    },
    {
        item1: "1",
        item2: "علیرضا احمدآبادی",
        item3: "0054789635",
        item4: "فوت شده",
        item5: "1402/02/08",
        item6: 'در انتظار اعلام مبلغ',
        item7: <Link to="../../expert/requestsDetails">
            <div
                className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
        </Link>
    },
    {
        item1: "1",
        item2: "فاطمه سادات نوری زاده",
        item3: "0054789635",
        item4: "فوت شده",
        item5: "1402/02/08",
        item6: 'در انتظار تایید بازمانده',
        item7: <Link to="../../expert/requestsDetails">
            <div
                className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
        </Link>
    }
];

const ExpertRequests = ({ IsEnding }) => {

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
    const [name, setName] = useState();
    const [status, setStatus] = useState();
    const [type, setType] = useState();
    const [text, setText] = useState();
    const [count, setCount] = useState();
    const [page, setPage] = useState(1);
    const [row, setRow] = useState(10);

    const getProtests = async () => {
        try {

            const response = await axiosReq("Experts/GetRequests?page=" + page + "&&pageSize=" + row, "post", {
           
                    IsEndingInsurance: IsEnding,
                    InsuranceId: name,
                    ProtestLeveId: type,
                    ProtestStatusId: status
              
            });
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                setCount(response.data?.count)
                response.data?.data?.map((item, index) => {
                    prot.push({
                        item1: index + 1,
                        item2:

                            <div className="flex">{item.fullName}
                                {item?.isModifiedByUser == true ?
                                    <div className="mr-2 rounded-full bg-redError h-[25px] w-[25px] flex justify-center items-center"><IcPenIcon /></div>
                                    :
                                    item.isReturned == true ?
                                        <div className="mr-2 rounded-full bg-yellowError h-[25px] w-[25px] flex justify-center items-center"><IcReloadIcon /></div>
                                        :
                                        item.hasNewAgent == true ?
                                            <div className="mr-2 rounded-full bg-buttonBlue h-[25px] w-[25px] flex justify-center items-center"><p className="text-white text-[23px]">+</p></div>
                                            :
                                            null
                                }

                            </div>,

                        item3: item.nationalCode,
                        item4: item.isDeceased,
                        item5: item.requestDate,
                        item6: item.statusDescription,
                        item7: <Link to="../../expert/requestsDetails">
                            <div
                                className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>
                        </Link>,

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
    }, [name, type, status, page, row,]);
    const getFilters = async () => {
        try {


            const response3 = await axiosReq("Experts/GetRequestStatuses", "get");

            if (response3?.status === 200 || response3?.status === 204) {
                var sta = []
                response3.data?.map((item, index) => {
                    sta.push({
                        id: item.userInsuranceStatusId,
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
    return (
        <div
            className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div
                className="w-full grid grid-cols-12  gap-4 items-end mb-7">

                <div className="lg:col-span-12 xs:col-span-12 col-span-3">
                    <MainInput
                        search={true}
                        holder={"جستجو بر اساس نام یا کدملی"}
                        leftIcon={< SearchIcon />} />
                </div>

                <div className="lg:col-span-6 xs:col-span-12 col-span-2">
                    <div className="font-IRANYekanBold">
                        <MainInput
                            holder={'از تاریخ'}
                            date={true}
                            leftIcon={< DateIcon />}
                            value={startDate}
                            onChange={(val) => setStartDate(val)}
                            error={dateError} />
                    </div>
                </div>

                <div className="lg:col-span-6 xs:col-span-12 col-span-2">
                    <div className="font-IRANYekanBold">
                        <MainInput
                            holder={'تا تاریخ'}
                            date={true}
                            leftIcon={< DateIcon />}
                            value={endDate}
                            onChange={(val) => setEndDate(val)}
                            error={dateError} />
                    </div>
                </div>

                <div className="col-span-6 xs:col-span-12">
                    <MainInput listBoxM1={true} listItems={statues} onChange={(e) => setStatus(e.id)} listBoxHolder={"وضعیت"} />
                </div>

                <div
                    className="lg:col-span-6 xs:col-span-12 col-span-3 justify-self-end sm:justify-self-end">
                    <div className="w-[150px]">
                        <MainButton label={"گزارش‌ گیری"} />
                    </div>
                </div>
            </div>

            <div className='w-full mb-[10px]'>
                <MainTable list={data} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} />
            </div>


        </div>
    )
}

export default ExpertRequests;