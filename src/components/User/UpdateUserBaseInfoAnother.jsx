import {MainExplanation, MainInput, MainButton, UploadFile} from "../../components";
import { useNavigate } from "react-router-dom";
import Dot from "../../assets/icon/general/Dot";

const UpdateUserBaseInfoAnother = () => {

     let navigate=useNavigate();


    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white  py-[40px]">
            <div className="flex justify-start px-[32px] items-center">
                <div className="flex justify-start items-center">
                    <div className="rounded-full h-[48px] w-[48px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue "><div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center"><p className="font-IRANYekanExtra text-[18px] text-white">1</p></div></div>
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mx-[6px]">اطلاعات هویتی متقاضی</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-mainBlue flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white">2</p></div>
                    <p className="font-IRANYekanBold text-[15px] text-mainBlue mx-[6px]">اطلاعات در صندوق  بازنشستگی مقصد</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-mainBlue flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white">3</p></div>
                    <p className="font-IRANYekanBold text-[15px] text-mainBlue mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
                </div>
            </div>
            <div className="w-full mt-[32px] px-[32px] mb-[40px]"><MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است ! در فرم زیر اطلاعات مربوط به متوفی را با دقت وارد کنید.'}/></div>
            <div className="w-full ">
                <div className="w-full px-[122px] ">
                    <div className="flex justify-start items-center">
                        <Dot/>
                        <p className="font-IRANYekanExtra text-[20px] mr-[5px] text-mainBlue">اطلاعات متوفی</p>

                    </div>
                    <div className="w-full grid grid-cols-3 gap-4 mt-5">
                                    <div className="mb-5">
                                        <MainInput label={'کدملی متوفی'} holder={'0020456787'} necessary={true} />
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'تاریخ تولد متوفی'} holder={'1346/04/16'} necessary={true} />
                                    </div>
                                    <div className="mb-5 flex items-end">
                                        <MainButton label={'استعلام'}/>
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'نام'} value={'علی'} necessary={true} disable={true}/>
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'نام خانوادگی'} value={'علیزاده تهرانی'} necessary={true} disable={true}/>
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'نام پدر'} value={'محمد هادی'} necessary={true} disable={true}/>
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'جنسیت'} value={'مرد'} necessary={true} disable={true}/>
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'شماره شناسنامه'} holder={'مثلا 8888'} necessary={true}/>
                                    </div>
                    
                    
                    
                    
                    
                    </div>
                </div>
                <div className="w-full my-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                <div className="w-full px-[122px] ">
                    <div className="flex justify-start items-center">
                        <Dot/>
                        <p className="font-IRANYekanExtra text-[20px] mr-[5px] text-mainBlue">اطلاعات نماینده متوفی</p>

                    </div>
                    <div className="w-full grid grid-cols-3 gap-4 mt-5">
                                    <div className="mb-5">
                                        <MainInput label={'نسبت با بیمه شده اصلی'} holder={'مثلا فرزند ارشد'} necessary={true} />
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'شماره تلفن همراه'} holder={'مثلا 09123333333'} necessary={true} />
                                    </div>
                                    <div className="mb-5">
                                        <MainInput label={'شماره تلفن ثابت'} holder={'مثلا 02144665522'} necessary={true} />
                                    </div>
                                    <div className="mb-5 col-span-3">
                                        <MainInput label={'آدرس'} holder={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'} necessary={true} />
                                    </div>
                                    <div className="mb-5 col-span-3">
                                        <div className="flex">
                                            <label className="font-IRANYekanBold text-[16px] text-mainBlue">حکم انحصار وراثت</label>
                                            <p className="font-IRANYekanBold text-[16px] text-errorRed mr-[2px]">*</p>
                                        </div>
                                        <div className="mt-[10px] flex items-center">
                                            <p className=" font-IRANYekanMedium text-[14px] ml-3">انتخاب فایل</p>
                                            <UploadFile/>
                                        </div>
                                        
                                    </div>
                                    
                    
                    
                    
                    
                    
                    </div>
                </div>
                <div className="w-full px-[122px] mt-4 flex justify-end">
                    <div className="w-[140px]"><MainButton label={'گام بعدی'}/></div>
                </div>
            </div>
        </div>
    );
  };
  
  export default UpdateUserBaseInfoAnother;