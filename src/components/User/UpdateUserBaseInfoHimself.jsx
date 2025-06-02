import {MainExplanation, MainInput, MainButton, MainRadioInput} from "../../components";
import { useNavigate } from "react-router-dom";

const UpdateUserBaseInfoHimself = () => {

     let navigate=useNavigate();


    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <div className="flex justify-start items-center">
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
            <div className="w-full mt-[32px] mb-[40px]"><MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'}/></div>
            <div className="px-[90px] w-full grid grid-cols-3 gap-4">
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
                    <MainInput label={'تاریخ تولد'} value={'1346/04/16'} necessary={true} disable={true}/>
                </div>
                <div className="mb-5">
                    <MainInput label={'کدملی'} value={'0020456787'} necessary={true} disable={true}/>
                </div>
                <div className="mb-5">
                    <MainInput label={'شماره شناسنامه'} holder={'مثلا 8888'} necessary={true}/>
                </div>
                <div className="mb-5">
                    <MainInput label={'جنسیت'} value={'مرد'} necessary={true} disable={true}/>
                </div>
                <div className="mb-5">
                    <MainInput label={'شماره تلفن ثابت'} holder={'مثلا 02144665522'} necessary={true}/>
                </div>
                <div className="mb-5">
                    <MainInput label={'شماره تلفن همراه'} holder={'مثلا 09123333333'} necessary={true}/>
                </div>
                <div className="col-span-3 mb-5">
                    <MainInput label={'آدرس'} holder={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'} necessary={true}/>
                </div>
                <div className="col-span-2">
                    <MainRadioInput title={'نوع درخواست مستمری جمع'} radioName={'abs'} text1={'بازنشستگی'} text2={'از کار افتادگی کلی'}/>
                </div>
                <div className="col-span-1">
                <MainInput label={'کد پرسنلی'} holder={'مثلا 12569'} necessary={true}/>

                </div>
                <div className="col-span-3 mt-[33px] flex justify-end items-center">
                    <div className="w-[140px]"><MainButton onClickFunction={() => navigate('../createUserInsuranceDes')} label={'گام بعدی'}/></div>
                </div>





            </div>
        </div>
    );
  };
  
  export default UpdateUserBaseInfoHimself;