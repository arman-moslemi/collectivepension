import { useState } from 'react';
import {MainButton, MainModal, MainExplanation, CalculatedPensionBox, MainInput, UploadFile } from "../../components";
import CalculatedPensionIcon from "../../assets/icon/user/CalculatedPensionIcon";

const CalculatedPension = () => {

        const [showProtestModal, setShowProtestModal] = useState(false);
        const [showSuccessfulProtestModal, setShowSuccessfulProtestModal] = useState(false);
        const [bankInformationModal, setBankInformationModal] = useState(false);
        
        const ProtestModalFunction = () => {
            setShowProtestModal(false);
            setShowSuccessfulProtestModal(true);
        }
        const SuccessfulProtestModalFunction = () => {
            setShowSuccessfulProtestModal(false);
        }
        const BankInformationModalFunction = () => {
            setBankInformationModal(false);
        }

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white p-[20px]">
            <div className="w-full flex justify-end mb-[16px]">
                <div className="w-[155px]"><MainButton onClickFunction={()=>setBankInformationModal(true)} label={'تایید مبلغ مستمری'}/></div>
            </div>
            <div className="w-full mb-[22px]">
                <MainExplanation text={'در این بخش میزان مستمری محاسبه شده توسط هر صندوق به شما نشان داده می شود.در صورت نیاز می توانید نسبت به هرکدام اعتراض خود را ثبت کنید.'} />
            </div>
            <div className="w-[360px] h-[99px] rounded-[6px] border-ddGray border-[1px] border-dashed flex items-center justify-center mb-11">
                <CalculatedPensionIcon/>
                <div className="mr-[17px]">
                    <p className="font-IRANYekanExtra text-[18px] text-mainBlue mb-1">مجموع مستمری محاسبه شده :</p>
                    <div className="flex">
                        <p className="font-IRANYekanBold text-[16px] text-mainBlue ml-1">120000</p>
                        <p className="font-IRANYekanBold text-[16px] text-mainBlue">تومان</p>
                    </div>
                </div>

            </div>
            <div className="w-full grid grid-cols-3 gap-4 mb-16">
                <CalculatedPensionBox func={()=>setShowProtestModal(true)} title={'صندوق تامین اجتماعی'} days={'3965'} price={'800000'}/>
                <CalculatedPensionBox func={()=>setShowProtestModal(true)} title={'صندوق بازنشستگی کشوری'} days={'3965'} price={'800000'}/>
                <CalculatedPensionBox func={()=>setShowProtestModal(true)} title={'صندوق عشایر'} days={'3965'} price={'800000'}/>
            </div>
            
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


            {bankInformationModal ? <MainModal title={'ثبت اطلاعات بانکی'} setShowModal={setBankInformationModal}
           text={<div className="w-full grid grid-cols-2 gap-4">
            <div><MainInput label={'نام بانک'}/></div>
            <div><MainInput label={'نام شعبه'}/></div>
            <div className='col-span-2'><MainInput label={'شماره حساب بانکی خود را اینجا بنویسید'}/></div>
            
            </div>}
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={BankInformationModalFunction} label={'ثبت'}/></div>
           </div>}
            /> : null}
        </div>
    )
}

export default CalculatedPension;