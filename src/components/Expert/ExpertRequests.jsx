import {MainButton, MainInput, MainTable} from "../../components";
import {useNavigate, Link} from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState } from "react";
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

const ExpertRequests = () => {
    
    let navigate = useNavigate();
    const list = [
        {
            item1: "1",
            item2: "علی علیزاده",
            item3: "0020163258",
            item4: "در قید حیات",
            item5: "1402/02/08",
            item6: 'در انتظار اعلام سوابق',
            item7: <button onClick={()=>navigate("/expert/requestsDetails",{state:{id:true}})}>
                    <div
                        className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>
                </button>
        }, {
            item1: "1",
            item2: "علی علیزاده",
            item3: "0020163258",
            item4: "در قید حیات",
            item5: "1402/02/08",
            item6: 'در انتظار اعلام سوابق',
            item7:  <button onClick={()=>navigate("/expert/requestsDetails",{state:{id:false}})}>
                    <div
                        className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>
                </button>
        }, {
            item1: "1",
            item2: "علیرضا احمدآبادی",
            item3: "0054789635",
            item4: "فوت شده",
            item5: "1402/02/08",
            item6: 'در انتظار اعلام مبلغ',
            item7: <button to="../../expert/requestsDetails">
                    <div
                        className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>
                </button>
        }, {
            item1: "1",
            item2: "فاطمه سادات نوری زاده",
            item3: "0054789635",
            item4: "فوت شده",
            item5: "1402/02/08",
            item6: 'در انتظار تایید بازمانده',
            item7: <Link to="../../expert/requestsDetails">
                    <div
                        className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>
                </Link>
        }
    ];
    const [dateError,
        setDateError] = useState("");
        const [endDate,
            setEndDate] = useState("");
            const [startDate,
                setStartDate] = useState("");
    return (
        <div
            className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div
                className="w-full grid grid-cols-12  gap-4 items-end mb-7">

                <div className="lg:col-span-12 xs:col-span-12 col-span-3">
                    <MainInput
                        search={true}
                        holder={"جستجو بر اساس نام یا کدملی"}
                        leftIcon={< SearchIcon />}/>
                </div>

                <div className="lg:col-span-6 xs:col-span-12 col-span-2">
               <div className="font-IRANYekanBold">
               <MainInput
                        holder={'از تاریخ'}
                        date={true}
                        leftIcon={< DateIcon />}
                        value={startDate}
                        onChange={(val) => setStartDate(val)}
                        error={dateError}/>
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
                        error={dateError}/>
               </div>
                </div>

                <div className="lg:col-span-6 xs:col-span-12 col-span-2">
                    <MainInput listBoxM1={true} listItems={status} listBoxHolder={"وضعیت"}/>
                </div>

                <div
                    className="lg:col-span-6 xs:col-span-12 col-span-3 justify-self-end sm:justify-self-end">
                    <div className="w-[150px]">
                    <MainButton label={"گزارش‌ گیری"}/>
                    </div>
                </div>
            </div>

            <div className='w-full mb-[10px]'>
                <MainTable  ic={true} list={list} titleRow={titleRow}/>
            </div>
            <div className='w-full flex justify-between items-center md:items-end flex-wrap'>
                <div className='flex justify-start items-center md:flex-col md:items-start'>
                    <p className='font-IRANYekanMedium text-[14px] pt-2 ml-[11px] md:ml-0'>تعداد نمایش در صفحه</p>
                    <div className='w-[90px]'><MainInput listBoxM1={true} listItems={num} listBoxHolder={'5 تا'}/></div>
                </div>
                <div className='flex justify-start items-center k395:mt-3'>
                    <div
                        className='ml-[5px] bg-tableGray w-[38px] h-[38px] rounded-[6px] flex justify-center items-center'><TableRightIcon/></div>
                    <div
                        className='w-[38px] h-[38px] rounded-[6px] border-[1px] border-ddGray flex justify-center items-center'><TableLeftIcon/></div>

                </div>

            </div>

        </div>
    )
}

export default ExpertRequests;