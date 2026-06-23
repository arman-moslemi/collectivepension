import { useState } from 'react';
import {MainPicText, MainButton, MainModal, UserDataInsuranceOrigin} from "../../components";
import DashboardProcessPic from "../../assets/img/user/DashboardProcessPic.svg";


const DashboardProcess = () => {

    const [showAddOriginBoxModal, setShowAddOriginBoxModal] = useState(false);
  const [taminNoticeOpen, setTaminNoticeOpen] = useState(true);

    const AddOriginBoxModalFunction = () => {
        setShowAddOriginBoxModal(false);
    }

    return(
        <div>
            <MainPicText pic={DashboardProcessPic} 
                text={<div ><p className="text-[15px] font-IRANYekanMedium">فرآیند بررسی درخواست شما همچنان در حال انجام است.</p><p className="text-[15px] font-IRANYekanMedium">خواهشمند است تا دریافت نتیجه، شکیبا باشید.</p><p className="text-[15px] font-IRANYekanMedium"> اگر در فرم خوداظهاری، اعلام یک یا چند صندوق را فراموش کرده‌اید، می‌توانید با استفاده از دکمه زیر، صندوق موردنظر را به سوابق خوداظهاری خود اضافه کنید.</p></div>}
                pageButton={<div className="w-[186px]"><MainButton onClickFunction={()=>{setShowAddOriginBoxModal(true)}} label={'+ افزودن صندوق مبدا'}/></div>} />



            {showAddOriginBoxModal ? <MainModal big={true} title={'ثبت اطلاعات صندوق مبدا فراموش شده'} setShowModal={setShowAddOriginBoxModal}
                       text={<div className="w-full flex flex-col items-center">
                        <UserDataInsuranceOrigin inModal={true}setTaminNoticeOpen={setTaminNoticeOpen}/>
                        </div>}
                       modalButton={<div className="w-full flex justify-center">
                        <div className="w-[140px]"><MainButton onClickFunction={AddOriginBoxModalFunction} label={'ثبت'}/></div>
                       </div>}
                        /> : null}
        </div>
    )
}

export default DashboardProcess;