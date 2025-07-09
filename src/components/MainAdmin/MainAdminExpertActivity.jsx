import { MainInput,MainButton,MainTable,MainModal } from "..";
import { useNavigate,Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import Download from "../../assets/icon/main/Download";
import { useState } from "react";

const titleRow = ["ردیف","نام صندوق","درخواست بازنشستگی در انتظار","درخواست بازنشستگی صادر شده","سوابق اعلام شده","مبلغ مستمری در انتظار اعلام","مبلغ مستمری اعلام شده","اعتراضات در انتظار بررسی","اعتراضات پاسخ داده شده","دریافت"];

const list = [
  {
    item1: "1",
    item2: "صندوق بازنشستگی کشوری",
    item3: "12",
    item4: "5",
    item5: "26",
    item6: "52",
    item7: "4",
    item8:"5",
    item9:"23",
    item10: 
    <div className="flex">
       <Link to="#">
       <div className='w-[38px] h-[38px] mx-auto rounded-full flex justify-center items-center ml-1'>
        <Download/></div></Link>
    </div>
    
  },
  {
    item1: "1",
    item2: "صندوق بازنشستگی کشوری",
    item3: "12",
    item4: "5",
    item5: "26",
    item6: "52",
    item7: "4",
    item8:"5",
    item9:"23",
    item10: 
    <div className="flex">
    <Link to="#">
    <div className='w-[38px] h-[38px] mx-auto rounded-full flex justify-center items-center ml-1'>
     <Download/></div></Link>
 </div>
    
  },
  {
    item1: "1",
    item2: "صندوق بازنشستگی کشوری",
    item3: "12",
    item4: "5",
    item5: "26",
    item6: "52",
    item7: "4",
    item8:"5",
    item9:"23",
    item10: 
    <div className="flex">
    <Link to="#">
    <div className='w-[38px] h-[38px] mx-auto rounded-full flex justify-center items-center ml-1'>
     <Download/></div></Link>
 </div>
    
  },
  
  ];
const MainAdminExpertActivity = () => {
 const [showAddModal, setShowAddModal] = useState(false);
    
    const AddModalFunction = () => {
        setShowAddModal(false);
    }
    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]">
            <div className='w-full grid gap-2 grid-cols-12 mb-[28px]'>
               
                <div className='col-span-4 w-full lg:col-span-12'><MainInput search={true} holder={'جستجو بر اساس نام صندوق'} leftIcon={<SearchIcon/>}/></div>
                
                    <div className='col-span-2 md:col-span-12'><MainInput date={true} holder={'از تاریخ'} leftIcon={<DateIcon/>}/></div>
                    <div className='col-span-2 md:col-span-12'><MainInput date={true} holder={'تا تاریخ'} leftIcon={<DateIcon/>}/></div>
             
                
               <div className="col-span-4 flex justify-end md:col-span-12">
               <div className="w-[123px]">
                    <MainButton label={'گزارش‌ گیری'}/>
                </div>
               </div>
            </div>
                <div className='w-full my-[20px]'>
                <MainTable center1={true} ic={false} list={list} titleRow={titleRow}/>
            </div>
                </div>
           
               
        </div>
    )
}

export default MainAdminExpertActivity;