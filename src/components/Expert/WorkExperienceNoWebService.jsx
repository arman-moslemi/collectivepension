import { useState } from "react";
import { MainButton,MainInput, MainTable, MainExplanation, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TikIcon from "../../assets/icon/general/TikIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";
import { div } from " ";


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


const WorkExperienceNoWebService = () => {

    const [mainOpen, setMainOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [secondStep, setSecondStep] = useState(false);

    let navigate = useNavigate();

    const ChangeStep=()=>{
        setOpenModal(false);
        setSecondStep(true);
    } 

    return (
        <div className="w-full rounded-[10px] shadow-firstBoxShadow ">
            <div className={`flex py-[27px] justify-between items-center ${mainOpen? 'border-b-[2px] border-dGray' : 'border-none'}  `}>
            <div className="flex items-center mr-5">
                <p className="text-[16px] text-mainBlue font-IRANYekanExtra ml-2">محل خدمت / کارگاه :</p>
                <p className="text-[16px] text-mainBlue font-IRANYekanBold">شرکت توسعه هوشمند ورنا ایرانیان</p>
            </div>
            <div onClick={()=>setMainOpen(!mainOpen)} className="ml-5 cursor-pointer">
            <DownSide/>
            </div>
            </div>
            {mainOpen?
            <div className="w-full px-[28px] py-[35px]">
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="col-span-3">
                    <p className="text-[14px] text-mainBlue font-IRANYekanBold leading-6 mb-7">در این بخش بازه‌های بیمه‌پردازی کاربر در این کارگاه را ثبت کنید.برای تعریف بازه جدید، روی افزودن بازه کلیک کنید.پس از وارد کردن تمامی بازه‌ها روی دکمه ثبت نهایی کلیک کنید سپس دستمزد مشمول کسر حق بیمه به ازای هر سال را وارد کنید.</p>
                </div>
                {secondStep? null:
                <div>
                    <MainInput necessary={true} leftIcon={<DateIcon/>} holder={'تاریخ شروع را وارد کنید'} label={'تاریخ شروع بیمه پردازی'}/>
                </div>
                }
                {secondStep? null:
                <div>
                    <MainInput necessary={true} leftIcon={<DateIcon/>} holder={'تاریخ پایان را وارد کنید'} label={'تاریخ پایان بیمه پردازی'}/>
                </div>
                }
                {secondStep? null:
                <div className="w-full flex items-end">
                    <div className="mr-[4%] ml-[6%] w-[47%]"><MainButton label={'افزودن بازه جدید'}/></div>
                    <div className="w-[43%]"><MainButton onClickFunction={()=>setOpenModal(true)} label={'ثبت نهایی'}/></div>

                </div>
                }

            </div>
            <div className={`w-full flex flex-wrap items-center ${secondStep?'mt-0':'mt-[33px]'}`}>
                <p className="text-mainBlue text-[16px] font-IRANYekanExtra ml-[19px]">بازه‌های ثبت شده :</p>
                <div className="rounded-[50px] bg-backBlue pr-[16px] pl-[9px] py-[6px] flex items-center w-fit ml-[10px]">
                    <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2">1372/01/01</p>
                    <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2">تا</p>
                    <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-4">1376/01/01</p>
                    <div className="w-[36px] h-[36px] rounded-full bg-buttonBlue flex justify-center items-center">
                        <p className="font-IRANYekanBold text-[20px] text-white">X</p>
                    </div>
                </div>
                <div className="rounded-[50px] bg-backBlue pr-[16px] pl-[9px] py-[6px] flex items-center w-fit ml-[10px]">
                    <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2">1372/01/01</p>
                    <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2">تا</p>
                    <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-4">1376/01/01</p>
                    <div className="w-[36px] h-[36px] rounded-full bg-buttonBlue flex justify-center items-center">
                        <p className="font-IRANYekanBold text-[20px] text-white">X</p>
                    </div>
                </div>
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
            :null}
           
        {openModal? <MainModal setShowModal={setOpenModal} text={'آیا از درستی باز‌ه‌های وارد شده اطمینان دارید؟'}
        modalButton={<div className="w-full flex justify-center"><div className="w-[100px] ml-4"><MainButton onClickFunction={ChangeStep} label={'بله'}/></div><div className="w-[100px]"><MainButton onClickFunction={()=>setOpenModal(false)} label={'خیر'} red={true}/></div></div>}/> :null}
        </div>
    )
}

export default WorkExperienceNoWebService;