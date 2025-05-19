import { useState } from "react";
import {MainExplanation, MainButton, UserDataInsuranceOrigin} from "../../components";
import { useNavigate } from "react-router-dom";
import OkIcon from "../../assets/icon/general/OkIcon";

const CreateUserInsuranceOrigin = () => {

    let navigate=useNavigate();
    const [forms, setForms] = useState([0]); // شروع با یک فرم
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
                        <div className="w-[140px]"><MainButton onClickFunction={() => navigate('../createUserInsuranceResponse')} label={'گام بعدی'}/></div>
                    </div>

                </div>

            </div>
        </div>
    );
  };
  
  export default CreateUserInsuranceOrigin;