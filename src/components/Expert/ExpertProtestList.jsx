import {MainButton, MainInput, MainTable,MainModal} from "..";
import {useNavigate, Link} from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import {useState} from "react";

const status = [
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
  const tableData = list.map((item) => ({
    item1: item.id,
    item2: item.fullName,
    item3: item.nationalCode,
    item4: item.date,
    item5: item.protestTypeLabel,
    item6: item.status,
    item7: (
        <Link
        to={`/expert/protestList/${item.id}`}
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
    const [startDate,
        setStartDate] = useState("");
        const [endDate,
            setEndDate] = useState("");
    return (
        <div
            className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div className="w-full grid grid-cols-12 gap-2 items-end mb-2">

                <div className="col-span-3 flex items-center">
                    <MainInput
                        search={true}
                        holder={"جستجو بر اساس نام یا کدملی"}
                        leftIcon={< SearchIcon />}/>
                </div>

                <div className="col-span-2">
                    <MainInput date={true} value={startDate}
                        onChange={(val1) => setStartDate(val1)} holder={"از تاریخ"} leftIcon={< DateIcon />}/>
                </div>

                <div className="col-span-2">
                    <MainInput date={true} value={endDate}
                        onChange={(val2) => setEndDate(val2)} holder={"تا تاریخ"} leftIcon={< DateIcon />}/>
                </div>
                <div className="col-span-2">
                    <MainInput
                        listBoxM1={true}
                        listItems={protestType}
                        listBoxHolder={"نوع اعتراض"}/>
                </div>
                <div className="col-span-2">
                    <MainInput listBoxM1={true} listItems={status} listBoxHolder={"وضعیت"}/>
                </div>

            

            </div>
            <div className="flex justify-end w-full mb-2
            ">
            <div className="w-[150px]">
            <MainButton label={"گزارش‌ گیری"} />
            </div>
            </div>
            <div className='w-full mb-[10px]'>
                <MainTable center1={true} ic={true} list={tableData} titleRow={titleRow}/>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <p className='font-IRANYekanMedium text-[15px] pt-2 ml-[11px]'>تعداد نمایش در صفحه</p>
                    <div className='w-[90px]'><MainInput listBoxM1={true} listItems={num} listBoxHolder={'5 تا'}/></div>
                </div>
                <div className='flex justify-start items-center'>
                    <div
                        className='ml-[5px] bg-tableGray w-[38px] h-[38px] rounded-[6px] flex justify-center items-center'><TableRightIcon/></div>
                    <div
                        className='w-[38px] h-[38px] rounded-[6px] border-[1px] border-ddGray flex justify-center items-center'><TableLeftIcon/></div>

                </div>

            </div>
        
        </div>
    )
}

export default ExpertProtestList;