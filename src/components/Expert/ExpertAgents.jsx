import { useState } from "react";
import { MainButton,MainInput, MainTable, ExpertAgentForm } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";



const ExpertAgents = ({admin,webService,des}) => {

    const [mainOpen, setMainOpen] = useState(false);

    let navigate = useNavigate();

    return (
        <div className="w-full py-4 px-[70px]">
            {des && !admin ?
            <div className="w-full flex items-center justify-between mb-6">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات هویتی بازمانده تازه</p>
                <div className="w-[153px] h-[40px] rounded-full bg-yellowError flex justify-center items-center">
                    <p className="text-[16px] font-IRANYekanExtra text-white">در انتظار بررسی</p>
                </div>
            </div>
            :null}
            {des && !admin ?
            <div className="w-full mb-[38px]">
                <ExpertAgentForm/>
            </div>
            :null}
            {des && !admin ?
            <div className="w-full flex justify-end mb-[32px]">
                <div className="w-[97px] ml-[10px]"><MainButton label={'تایید'}/></div>
                <div className="w-[97px]"><MainButton red={true} label={'عدم تایید'}/></div>
            </div>
            :null}
            {des && !admin ?
            <div className="w-full border-b-[2px] border-dGray mb-[41px]">

            </div>
            :null}
            <div className="w-full">
                <p className="text-[18px] font-IRANYekanExtra mb-8">اطلاعات هویتی بازمانده‌های تایید شده</p>
            </div>
            <div className="w-full mb-28">
                <div className="w-full rounded-[10px] shadow-firstBoxShadow mb-6">
            <div className={`flex py-[27px] justify-between items-center ${mainOpen? 'border-b-[2px] border-dGray' : 'border-none'}  `}>
            <div className="flex items-center mr-5">
                <p className="text-[16px] text-mainBlue font-IRANYekanBold">احمدرضا بابایی</p>
            </div>
            <div onClick={()=>setMainOpen(!mainOpen)} className="ml-5 cursor-pointer">
            <DownSide/>
            </div>
            </div>
            {mainOpen?
            <div className="w-full px-[28px] py-[35px]">
            <ExpertAgentForm/>
            
            </div>
            :null}
           

                </div>
                <div className="w-full rounded-[10px] shadow-firstBoxShadow mb-6">
            <div className={`flex py-[27px] justify-between items-center ${mainOpen? 'border-b-[2px] border-dGray' : 'border-none'}  `}>
            <div className="flex items-center mr-5">
                <p className="text-[16px] text-mainBlue font-IRANYekanBold">احمدرضا بابایی</p>
            </div>
            <div onClick={()=>setMainOpen(!mainOpen)} className="ml-5 cursor-pointer">
            <DownSide/>
            </div>
            </div>
            {mainOpen?
            <div className="w-full px-[28px] py-[35px]">
            <ExpertAgentForm/>
            
            </div>
            :null}
           

                </div>

            </div>

        </div>
    )
}

export default ExpertAgents;