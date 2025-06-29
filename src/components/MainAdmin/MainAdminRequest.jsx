import { MainButton,MainInput, MainTable } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";

const cityList = [
    {
      id: 1,
      name: 'در انتظار اعلام سوابق',
      },
    {
      id: 2,
      name: 'در انتظار اعلام مبلغ',
     },
    {
      id: 3,
      name: 'در انتظار تایید کاربر',
      },
    
]
const pagination = [
  {
    id: 1,
    name: '5',
    },
  {
    id: 2,
    name: '10',
   },
  {
    id: 3,
    name: '15',
    },
  
]
const titleRow = ["ردیف","نام و نام خانوادگی","کدملی","وضعیت حیات","تاریخ ثبت درخواست","صندوق مقصد","وضعیت","مشاهده"];

const list = [
  {
    item1: "1",
    item2: "علی علیزاده",
    item3: "0020163258",
    item4: "در قید حیات",
    item5: "1402/02/08",
    item6:'بازنشستگی کشوری',
    item7: 'در انتظار اعلام سوابق',
    item8: <Link to="../../mainAdmin/requestDetail"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div></Link>,
  },
  {
    item1: "1",
    item2: "علی علیزاده",
    item3: "0020163258",
    item4: "در قید حیات",
    item5: "1402/02/08",
    item6:'بازنشستگی کشوری',
    item7: 'در انتظار اعلام سوابق',
    item8: <Link to="../../mainAdmin/requestDetail"><div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div></Link>,
  },
  
  ];

const MainAdminRequest = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[24px] pt-[24px] pb-[38px]">
            <div className='w-full flex justify-between items-center mb-[28px]'>
                <div className="w-fit flex justify-start items-center">
                <div className='w-[400px] ml-3'><MainInput search={true} holder={'جستجو بر اساس نام یا کدملی'} leftIcon={<SearchIcon/>}/></div>
                <div className='flex justify-start items-center'>
                    <div className='ml-3 w-[150px]'><MainInput holder={'از تاریخ'} leftIcon={<DateIcon/>}/></div>
                    <div className='ml-3 w-[150px]'><MainInput holder={'تا تاریخ'} leftIcon={<DateIcon/>}/></div>
                    <div className='w-[180px]'><MainInput listBoxM1={true} listItems={cityList} listBoxHolder={'وضعیت'}/></div>
                </div>
                </div>
                <div className="w-[123px]">
                    <MainButton label={'گزارش‌ گیری'}/>
                </div>
            </div>
            <div className='w-full mb-[10px]'>
                <MainTable center1={true} ic={false} list={list} titleRow={titleRow}/>
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <p className='font-IRANYekanMedium text-[15px] pt-2 ml-[11px]'>تعداد نمایش در صفحه</p>
                    <div className='w-[90px]'><MainInput listBoxM1={true} listItems={pagination} listBoxHolder={'5 تا'}/></div>
                </div>
                <div className='flex justify-start items-center'>
                    <div className='ml-[5px] bg-tableGray w-[38px] h-[38px] rounded-[6px] flex justify-center items-center'><TableRightIcon/></div>
                    <div className='w-[38px] h-[38px] rounded-[6px] border-[1px] border-ddGray flex justify-center items-center'><TableLeftIcon/></div>

                </div>

            </div>

        </div>
    )
}

export default MainAdminRequest;