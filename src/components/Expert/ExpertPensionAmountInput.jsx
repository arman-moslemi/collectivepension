import { MainButton,MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";



const ExpertPensionAmountInput = ({setShift}) => {

    let navigate = useNavigate();

    return (
        <div className="w-full py-4 px-6">
            <p className="w-full text-[15px] text-mainBlue font-IRANYekanBold leading-7 mb-[24px]">با توجه به شرایط کاربر و سوابق ثبت شده در صندوق شما، مبلغ مستمری که به ایشان تعلق میگیرد را ثبت کنید و منتظر اعلام سوابق سایر صندوق ها و تایید کاربر باشیدسپس اقدام به صدور حکم بازنشستگی کنید.</p>
            <div className="w-full flex justify-center">
                <div className="w-fit flex justify-center items-end">
                    <div className="w-[330px] ml-2"><MainInput label={'مبلغ را ثبت کنید'} holder={'مبلغ را وارد کنید'}/></div>
                    <div className="w-[97px]"><MainButton onClickFunction={()=>setShift(true)} label={'ثبت مبلغ'}/></div>
                </div>

            </div>
           

        </div>
    )
}

export default ExpertPensionAmountInput;