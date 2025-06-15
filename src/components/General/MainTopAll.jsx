import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import {MainModal,MainButton} from "../../components"
const MainTopAll = ({role,icon,title,text,adminRole}) => {
    let navigate=useNavigate();
    const [showUserTypeModal, setShowUserTypeModal] = useState(false);
    
        const userTypeModalFunction = () => {
            setShowUserTypeModal(true);
          }
    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex justify-start items-center">
                <div>{icon}</div>
                <p className="font-IRANYekanExtra text-mainBlue text-[15px] mr-2">{title}</p>
            </div>
            <div className='flex items-center'>
                <Link className="font-IRANYekanMedium text-[12px] text-mainBlue border-b-[1px] border-dashed border-mainBlue pb-[2px]">راهنمای استفاده از سامانه</Link>
                <div className="w-fit h-[40px] bg-white py-[7px] px-[12px] rounded-[6px] mr-[11px]">
                    {role === 'user' ? 
                    <div className='flex w-[320px] justify-between items-center'>
                        <div className='flex justify-start items-center'>
                            <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>علی علیزاده</p>
                            <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-1'>(کاربر اصلی)</p>
                        </div>
                        <Link onClick={userTypeModalFunction} className='font-IRANYekanMedium text-[12px] text-mainBlue border-b-[1px] border-dashed border-mainBlue pb-[2px]'>تغییر نقش</Link>
                    </div>
                    : role === 'expert' ? 
                    <div className='flex w-full justify-center items-center'>
                        {adminRole?
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>ادمین صندوق بازنشستگی کشوری خوش آمدید !</p>  
                        :
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>کارشناس صندوق بازنشستگی کشوری خوش آمدید !</p> 
                        } 
                    </div>
                :null }
                </div>

            </div>
            {showUserTypeModal && (
  <MainModal title={'انتخاب نقش'} noCross={true} setShowModal={setShowUserTypeModal}
  text={<div className="w-full flex flex-col items-center">
   <p className="font-IRANYekanBold w-[387px] text-[15px] text-center leading-7">لطفاً مشخص کنید که قصد دارید برای انجام کدام نوع از امور وارد سامانه شوید.</p>
   <p className="font-IRANYekanBold w-[387px] mt-1 text-[15px] text-center leading-7">با توجه به انتخاب شما، اطلاعات و بخش‌های مربوط به همان نقش نمایش داده خواهد شد.</p>
   </div>}
  modalButton={<div className="w-full flex">
   <div className="w-[49%] ml-[2%]"><MainButton onClickFunction={userTypeModalFunction} label={'درخواست مستمری برای خودم'}/></div>
   <div className="w-[49%]"><MainButton onClickFunction={userTypeModalFunction} label={'درخواست مستمری برای متوفی'}/></div>
  </div>}
   />
)}
        </div>
    );
  };
  
  export default MainTopAll;