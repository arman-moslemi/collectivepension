import { useState } from "react";
import { MainButton,MainInput, MainTable, MainExplanation } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";
import { div } from "framer-motion/client";



const titleRow = ["ردیف","سال","دستمزد مشمول کسر حق بیمه"];

const list = [
  {
    item1: "1",
    item2: "1372",
    item3: "125000 تومان",
  },
  {
    item1: "2",
    item2: "1373",
    item3: "125000 تومان",
  },
  {
    item1: "3",
    item2: "1374",
    item3: "125000 تومان",
  },
  {
    item1: "4",
    item2: "1375",
    item3: "125000 تومان",
  },
  {
    item1: "5",
    item2: "1376",
    item3: "125000 تومان",
  },
  
  ];


const WorkExperienceWithWebService = () => {

    const [mainOpen, setMainOpen] = useState(false);

    let navigate = useNavigate();

    return (
        <div className="w-full rounded-[10px] shadow-firstBoxShadow ">
            <div className={`flex py-[27px] lg:px-0 justify-between items-center ${mainOpen? 'border-b-[2px] border-dGray' : 'border-none'}  `}>
            <div className="flex items-center mr-5 flex-wrap">
                <p className="text-[16px] text-mainBlue font-IRANYekanExtra ml-2">محل خدمت / کارگاه :</p>
                <p className="text-[16px] text-mainBlue font-IRANYekanBold">شرکت توسعه هوشمند ورنا ایرانیان</p>
            </div>
            <div onClick={()=>setMainOpen(!mainOpen)} className="ml-5 cursor-pointer">
            <DownSide/>
            </div>
            </div>
            {mainOpen?
            <div className="w-full px-[28px] py-[35px] lg:px-0">
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput value={'12569'} label={'شماره شناسایی بیمه'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput value={'تهران'} label={'استان محل اشتغال'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput value={'تهران'} label={'شهر'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput value={'شعبه 1'} label={'شعبه'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput value={'شرکت توسعه هوشمند ورنا ایرانیان'} label={'محل خدمت / نام کارگاه '}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput value={'12569'} label={'شماره دستگاه / کارگاه '}/>
                </div>

            </div>
            <div className="w-full flex flex-wrap items-center mt-[33px]">
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
            <div className="w-full mt-[43px] flex justify-center">
                <div className="w-[50%]">
                <MainTable cen4={true} list={list} titleRow={titleRow}/>
                </div>
            </div>
            </div>
            :null}
           

        </div>
    )
}

export default WorkExperienceWithWebService;