import WorkTablePic from "../../assets/icon/user/WorkTablePic";
import { MainButton, MainModal } from "../../components";
import { useState } from 'react';

const MainPicText = () => {

    const [showUserTypeModal, setShowUserTypeModal] = useState(true);

    const userTypeModalFunction = () => {
        setShowUserTypeModal(false);
      }

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <WorkTablePic/>
            <p className="font-IRANYekanMedium text-[18px] text-center leading-8 text-black w-[620px] mt-[58px] mb-[28px]">برای ثبت درخواست مستمری جمع، ابتدا فرم مربوطه را تکمیل کنید تا فرایند بررسی درخواست شما آغاز شود.</p>
            <div className="w-[240px]">
            <MainButton label={'درخواست مستمری جمع'}/>
            </div>

        </div>
    );
  };
  
  export default MainPicText;