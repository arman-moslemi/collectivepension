import { useState } from 'react';
import {MainPicText, MainButton, MainModal, MainInput, UploadFile} from "../../components";
import DashboardRejectedPic from "../../assets/img/user/DashboardRejectedPic.svg";


const DashboardRejected = () => {

    const [showProtestModal, setShowProtestModal] = useState(false);
    const [showSuccessfulProtestModal, setShowSuccessfulProtestModal] = useState(false);
    
    const ProtestModalFunction = () => {
        setShowProtestModal(false);
        setShowSuccessfulProtestModal(true);
    }
    const SuccessfulProtestModalFunction = () => {
        setShowSuccessfulProtestModal(false);
    }

    return(
        <div>
            <MainPicText pic={DashboardRejectedPic} 
                text={<div ><p className="text-[15px] font-IRANYekanMedium">براساس بررسی‌های انجام‌شده، شما واجد شرایط دریافت مستمری جمع شناخته نشده‌اید. در صورت تمایل، می‌توانید نسبت به نتیجه اعلام‌شده اعتراض ثبت نمایید تا توسط کارشناسان مربوطه مورد بررسی قرار گیرد.</p></div>}
                pageButton={<div className="w-[186px]"><MainButton onClickFunction={()=>{setShowProtestModal(true)}} label={'ثبت اعتراض'} red={true}/></div>} />




            {showProtestModal ? <MainModal title={'ثبت اعتراض'} setShowModal={setShowProtestModal}
           text={<div className="w-full flex flex-col items-center">
            <div className='w-full'><MainInput longText={true} label={'متن اعتراض خود را بنویسید تا برای کارشناس مربوطه ارسال شود.'}/></div>
            <div className='w-full flex items-center mt-4'><p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p><div><UploadFile small={true}/></div></div>
            </div>}
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={ProtestModalFunction} label={'ارسال'}/></div>
           </div>}
            /> : null}


            {showSuccessfulProtestModal ? <MainModal setShowModal={setShowSuccessfulProtestModal}
           text={<div className="w-full flex flex-col items-center">
            <p className='font-IRANYekanBold text-[15px] text-mainBlue'>اعتراض شما با موفقیت ثبت شد.</p>
            <p className='font-IRANYekanBold text-[15px] text-mainBlue mt-2'>نتیجه نهایی پس از بررسی، از طریق پیامک به اطلاع شما خواهد رسید.</p>
            <p className='font-IRANYekanBold text-[15px] text-mainBlue mt-2'>برای مشاهده پاسخ نهایی، لطفاً به پنل کاربری‌تان مراجعه کنید.</p>
            </div>}
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={SuccessfulProtestModalFunction} label={'بستن'}/></div>
           </div>}
            /> : null}
        </div>
    )
}

export default DashboardRejected;