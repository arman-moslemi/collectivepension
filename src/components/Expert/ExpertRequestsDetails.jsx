import {  MainExplanation, ExpertPensionRequestForm } from "../../components";
import { useNavigate } from "react-router-dom";




const ExpertRequestsDetails = () => {



    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[17px] pt-[17px] pb-[38px]">
            <div className="w-full mb-6">
                <p className="text-[15px] text-mainBlue font-IRANYekanBold">لطفا جزئیات پرونده را با دقت بررسی کنید.</p>
            </div>
            <div className="w-full px-[73px] mb-[30px]">
                <div className="w-full flex justify-center">
                    <div className="w-[197px] h-[41px] bg-buttonBlue rounded-t-[6px] ml-4 flex justify-center items-center">
                        <p className="text-[15px] text-white font-IRANYekanExtra">فرم درخواست مستمری</p>
                    </div>
                    <div className="w-[197px] h-[41px] bg-mainBlue rounded-t-[6px] ml-4 flex justify-center items-center">
                        <p className="text-[15px] text-white font-IRANYekanMedium">کلیه سوابق</p>
                    </div>
                    <div className="w-[197px] h-[41px] bg-mainBlue rounded-t-[6px] ml-4 flex justify-center items-center">
                        <p className="text-[15px] text-white font-IRANYekanMedium">مبلغ مستمری </p>
                    </div>
                </div>
                <div className=" w-full border-b border-[2px] border-dGray "></div>
            </div>
            <div className="w-full px-[16px] mb-4">
                <MainExplanation color={'green'}
                text={
                    <div>
                        <p className="text-mainGreen text-[16px] font-IRANYekanExtra mb-[6px]">نتیجه اولیه بررسی شرایط دریافت مستمری از طریق سامانه :</p>
                        <p className="text-[14px] font-IRANYekanBold text-black">در ابتدا درخواست متقاضی به دلیل عدم احراز شرایط لازم، رد شده بود؛ اما با اعلام صندوق جدید و بررسی سوابق مرتبط، شرایط لازم احراز و درخواست در حال حاضر تأیید شده است.</p>
                    </div>
                }
                />
            </div>
            <div className="w-full">
                <ExpertPensionRequestForm/>
            </div>
            
        </div>
    )
}

export default ExpertRequestsDetails;