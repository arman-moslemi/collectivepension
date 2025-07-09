import { MainButton,MainInput, MainTable, MainExplanation } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
  


const TotalWorkRecords = ({button}) => {

    let navigate = useNavigate();

    return (
        <div className="w-full rounded-[10px] shadow-firstBoxShadow  flex flex-col items-center justify-center py-[30px]">
            <p className="text-[20px] text-mainBlue font-IRANYekanExtra mb-[14px] lg:text-[12px]">مقدار محاسبه شده مجموع سابقه کاربر در صندوق شما</p>
            <div className="flex mb-[14px] flex-wrap">
                <div className="ml-[13px] flex flex-col items-center">
                    <p className="text-[16px] text-mainBlue font-IRANYekanBold mb-[7px]">روز</p>
                    <p className="text-[15px] font-IRANYekanBold h-[48px] w-[82px] flex justify-center items-center rounded-[6px] border-[1px] border-borderGray">125 روز</p>
                </div>
                <div className="ml-[13px] flex flex-col items-center">
                    <p className="text-[16px] text-mainBlue font-IRANYekanBold mb-[7px]">ماه</p>
                    <p className="text-[15px] font-IRANYekanBold h-[48px] w-[82px] flex justify-center items-center rounded-[6px] border-[1px] border-borderGray">11 ماه</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[16px] text-mainBlue font-IRANYekanBold mb-[7px]">سال</p>
                    <p className="text-[15px] font-IRANYekanBold h-[48px] w-[82px] flex justify-center items-center rounded-[6px] border-[1px] border-borderGray">12</p>
                </div>
            </div>
            <div className="flex">
                <p className="text-[20px] font-IRANYekanMedium text-mainBlue ml-2">مجموع سوابق :</p>
                <p className="text-[20px] font-IRANYekanMedium text-mainBlue ml-1">1256</p>
                <p className="text-[20px] font-IRANYekanMedium text-mainBlue">روز</p>
            </div>
            {button?
            <div className="w-[151px] mt-5">
                <MainButton label={'تایید و ارسال'}/>
                
            </div>
            :null}

           

        </div>
    )
}

export default TotalWorkRecords;