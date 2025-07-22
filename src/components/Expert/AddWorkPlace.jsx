import { useState } from "react";
import { MainButton,MainInput, MainTable, MainExplanation ,MainModal} from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";
import TikIcon from "../../assets/icon/general/TikIcon";



const cityList = [
    {
      id: 1,
      name: 'دماوند',
      },
    {
      id: 2,
      name: 'فیروزکوه',
     },
    {
      id: 3,
      name: 'ورامین',
      },
    {
      id: 4,
      name: 'پاکدشت',
      },
]
const titleRow = ["ردیف","سال","دستمزد مشمول کسر حق بیمه","عملیات"];

const list = [
  {
    item1: "1",
    item2: "1372",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'}/></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon/></div></div>,
  },
  {
    item1: "2",
    item2: "1373",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'}/></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon/></div></div>,
  },
  {
    item1: "3",
    item2: "1374",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'}/></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon/></div></div>,
  },
  {
    item1: "4",
    item2: "1375",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'}/></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon/></div></div>,
  },
  {
    item1: "5",
    item2: "1376",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'}/></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon/></div></div>,
  },
  
  ];

const AddWorkPlace = () => {

    const [mainOpen, setMainOpen] = useState(false);
    const [showDiv, setShowDiv] = useState(true);
     const [openModal, setOpenModal] = useState(false);
    const [secondStep, setSecondStep] = useState(false);
        const [startDate,
        setStartDate] = useState("");
        const [endDate,
            setEndDate] = useState("");
 const ChangeStep=()=>{
        setOpenModal(false);
        setSecondStep(true);
    } 
    let navigate = useNavigate();

    return (
        <div className="w-full rounded-[10px] shadow-firstBoxShadow ">
            <div className="w-full px-[28px] pt-[35px]">
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput necessary={true} holder={'شماره شناسایی بیمه را وارد کنید'} label={'شماره شناسایی بیمه'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput necessary={true} listBox={true} listItems={cityList} label={'استان محل اشتغال'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput necessary={true} listBox={true} listItems={cityList} label={'شهر'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput necessary={true} holder={'شعبه را وارد کنید'} label={'شعبه'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput necessary={true} holder={'محل خدمت / نام کارگاه را وارد کنید'} label={'محل خدمت / نام کارگاه '}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput necessary={true} holder={'شماره دستگاه / کارگاه  را وارد کنید'} label={'شماره دستگاه / کارگاه '}/>
                </div>

            </div>
            </div>
        
            
           
          
            <div className="w-full px-[28px] py-[35px] lg:px-2 lg:py-2">
            <div className="w-full grid grid-cols-6 gap-4">
                <div className="col-span-6">
                    <p className="text-[14px] text-mainBlue font-IRANYekanBold leading-6 mb-7">در این بخش بازه‌های بیمه‌پردازی کاربر در این کارگاه را ثبت کنید.برای تعریف بازه جدید، روی افزودن بازه کلیک کنید.پس از وارد کردن تمامی بازه‌ها روی دکمه ثبت نهایی کلیک کنید سپس دستمزد مشمول کسر حق بیمه به ازای هر سال را وارد کنید.</p>
                </div>
                {secondStep? null:
                <div className="col-span-2 md:col-span-6 font-IRANYekanMedium">
                    <MainInput date={true} necessary={true} value={startDate}
                        onChange={(val1) => setStartDate(val1)} leftIcon={<DateIcon/>} holder={'تاریخ شروع را وارد کنید'} label={'تاریخ شروع بیمه پردازی'}/>
                </div>
                }
                {secondStep? null:
                <div className="col-span-2 md:col-span-6 font-IRANYekanMedium">
                    <MainInput date={true} necessary={true} value={startDate}
                        onChange={(val2) => setStartDate(val2)} leftIcon={<DateIcon/>} holder={'تاریخ پایان را وارد کنید'} label={'تاریخ پایان بیمه پردازی'}/>
                </div>
                }
                {secondStep? null:
                <div className="col-span-2 md:col-span-6 w-full flex items-end md:justify-between">
                    <div className="mr-[4%] md:mx-0 ml-[6%] w-[47%]"><MainButton label={'افزودن بازه جدید'}/></div>
                    <div className="w-[43%]"><MainButton onClickFunction={()=>setOpenModal(true)} label={'ثبت نهایی'}/></div>

                </div>
                }

            </div>
            <div className={`w-full flex flex-wrap items-center ${secondStep?'mt-0':'mt-[33px]'}`}>
                <p className="text-mainBlue text-[16px] lg:text-[14px] font-IRANYekanExtra ml-[19px] lg:mb-2">بازه‌های ثبت شده :</p>
               
                {showDiv && (
       <>
        <div className="rounded-[50px] bg-backBlue pr-[16px] pl-[9px] py-[6px] flex items-center w-fit ml-[10px] mb-2">
          <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">1372/01/01</p>
          <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">تا</p>
          <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-4 lg:text-[12px]">1376/01/01</p>
          <div
            className="w-[36px] h-[36px] lg:w-[20px] lg:h-[20px] rounded-full bg-buttonBlue flex justify-center items-center hover:cursor-pointer"
            onClick={() => setShowDiv(false)}
          >
            <p className="font-IRANYekanBold text-[20px] text-white lg:text-[14px]">X</p>
          </div>
        </div>
        <div className="rounded-[50px] bg-backBlue pr-[16px] pl-[9px] py-[6px] flex items-center w-fit ml-[10px] mb-2">
          <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">1372/01/01</p>
          <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">تا</p>
          <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-4 lg:text-[12px]">1376/01/01</p>
          <div
            className="w-[36px] h-[36px] lg:w-[20px] lg:h-[20px] rounded-full bg-buttonBlue flex justify-center items-center hover:cursor-pointer"
            onClick={() => setShowDiv(false)}
          >
            <p className="font-IRANYekanBold text-[20px] text-white lg:text-[14px]">X</p>
          </div>
        </div>
       </>
      )}
            </div>
            {secondStep?
            <div className="w-full mt-[34px]">
                <p className="text-[16px] text-mainBlue font-IRANYekanMedium leading-6 mb-[34px]">در این قسمت لازم است تا دستمزد مشمول کسر حق بیمه  یا درآمد مقطوع را برای هر سال وارد کنید. </p>
                <div className="w-full flex justify-center">
                    <div className="w-[75%]"><MainTable cen5={true} list={list} titleRow={titleRow}/></div>
                </div>
                <p className="text-[16px] text-mainBlue font-IRANYekanMedium leading-6 mt-8 mb-6">پس از ثبت دستمزد مشمول کسر حق بیمه به ازای هرسال، جهت محاسبه مجموع سوابق بر روی دکمه  محاسبه سوابق کلیک کنید تا سوابق این کاربر در شرکت مذکور ثبت شود.</p>
                <div className="w-full flex justify-end">
                    <div className="w-[151px]"><MainButton label={'محاسبه سوابق'}/></div>
                </div>
            </div>
            :null}
            </div>
          
           
        {openModal? <MainModal setShowModal={setOpenModal} text={'آیا از درستی باز‌ه‌های وارد شده اطمینان دارید؟'}
        modalButton={<div className="w-full flex justify-center"><div className="w-[100px] ml-4"><MainButton onClickFunction={ChangeStep} label={'بله'}/></div><div className="w-[100px]"><MainButton onClickFunction={()=>setOpenModal(false)} label={'خیر'} red={true}/></div></div>}/> :null}
       
           

        </div>
    )
}

export default AddWorkPlace;