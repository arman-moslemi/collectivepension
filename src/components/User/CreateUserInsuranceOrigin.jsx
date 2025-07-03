import { useState } from "react";
import {MainExplanation, MainButton, UserDataInsuranceOrigin,MainModal,MainChekbox} from "../../components";
import { useNavigate } from "react-router-dom";
import OkIcon from "../../assets/icon/general/OkIcon";

const CreateUserInsuranceOrigin = () => {
    const [showUnderTakingModal, setShowUnderTakingModal] = useState(false);

    const underTakingModalFunction = () => {
        setShowUnderTakingModal(true);
      }
    let navigate=useNavigate();
    const [forms, setForms] = useState([0]); 
    const handleAddForm = () => {
        setForms(prev => [...prev, prev.length]);
    };
    const handleRemoveLastForm = () => {
    setForms(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
    };

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <div className="flex justify-start items-center">
                <div className="flex justify-start items-center">
                    <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon/></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات هویتی متقاضی</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon/></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات در صندوق  بازنشستگی مقصد</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
                    <div className="rounded-full h-[48px] w-[48px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue "><div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center"><p className="font-IRANYekanExtra text-[18px] text-white">3</p></div></div>
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
                </div>
            </div>
            <div className="w-full mt-[32px] mb-[40px]"><MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'}/></div>
            <div className="px-[90px] w-full ">
                <div className="w-full">
                    {forms.map((_, idx) => (
                        <div key={idx} className="mb-6">
                            <UserDataInsuranceOrigin number={idx + 1} handleRemoveLastForm={handleRemoveLastForm}/>
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-end justify-between my-5">
                    <div className="w-fit max-w-[434px] ">
                        <p className="font-IRANYekanBold text-[15px] text-mainBlue mb-3">اگر در صندوق مبدا دیگری بیمه پردازی داشتید،روی دکمه زیر کلیک کرده و اطلاعات خود را تکمیل کنید.</p>
                        <div className="w-[217px]"><MainButton onClickFunction={handleAddForm} label={'افزودن صندوق مبدا بعدی'}/></div>
                    </div>
                    <div className="flex">
                        <div className="w-[140px] ml-4"><MainButton onClickFunction={() => navigate('../createUserInsuranceDes')} label={'گام قبلی'}/></div>
                        <div className="w-[140px]"><MainButton onClickFunction={underTakingModalFunction} label={'گام بعدی'}/></div>
                    </div>

                </div>
                {showUnderTakingModal && (
  <MainModal
    title={'تعهدنامه'}
    noCross={false}
    setShowModal={setShowUnderTakingModal}
    text={
      <div className="w-full flex flex-col items-center">
        <p className="font-IRANYekanMedium  text-[14px] text-mainBlue text-justify leading-7">
        اینجانب 
        <span className="font-IRANYekanExtra mx-2">علی علیزاده</span>
         متعهد می‌گردم در هیچ یک از صندوق‌های بازنشستگی از مزایای مستمری بازنشستگی/ ازکارافتادگی کلی/ بازماندگان استفاده ننموده‌ام و در صورت برقراری مستمری جمع و احراز شرایط برقراری مستمری استحقاقی در هر یک از صندوق‌ها و تمایل به بهره‌مندی از مزایای آن صندوق (بدون احتساب مزایای مستمری جمع)، مراتب انصراف خود را از برقراری مستمری جمع اعلام نمایم.
        </p>
    <div className="mt-5 w-full">
    <MainChekbox
     label={'موارد فوق الذکر مورد تایید اینجانب می‌باشد.'}
     />
     </div>
      </div>
    }
    modalButton={
      <div className="w-[140px] flex">
        
          <MainButton
            onClickFunction={() => navigate('../createUserInsuranceResponse')}
            label={'ثبت و ارسال'}
          />
        
        
      </div>
    }
  />
)}

            </div>
        </div>
    );
  };
  
  export default CreateUserInsuranceOrigin;