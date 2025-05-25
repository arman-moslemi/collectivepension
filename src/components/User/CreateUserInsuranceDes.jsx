import {MainExplanation, MainInput, MainButton, MainRadioInput} from "../../components";
import { useNavigate } from "react-router-dom";
import OkIcon from "../../assets/icon/general/OkIcon";

const listItems = [
    {
      id: 1,
      name: 'اول',
      },
    {
      id: 2,
      name: 'دوم',
     },
    {
      id: 3,
      name: 'سوم',
      },
    {
      id: 4,
      name: 'چهارم',
      },
]
const provinceList = [
    {
      id: 1,
      name: 'تهران',
      },
    {
      id: 2,
      name: 'شیراز',
     },
    {
      id: 3,
      name: 'اصفهان',
      },
    {
      id: 4,
      name: 'خراسان رضوی',
      },
]
const cityList = [
    {
      id: 1,
      name: 'دماوند',
      },
    {
      id: 2,
      name: 'فیروزکوه',
     },
    {
      id: 3,
      name: 'ورامین',
      },
    {
      id: 4,
      name: 'پاکدشت',
      },
]
const CreateUserInsuranceDes = () => {

     let navigate=useNavigate();


    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <div className="flex justify-start items-center">
                <div className="flex justify-start items-center">
                    <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon/></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات هویتی متقاضی</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
                    <div className="rounded-full h-[48px] w-[48px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue "><div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center"><p className="font-IRANYekanExtra text-[18px] text-white">2</p></div></div>
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mx-[6px]">اطلاعات در صندوق  بازنشستگی مقصد</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-mainBlue flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white">3</p></div>
                    <p className="font-IRANYekanBold text-[15px] text-mainBlue mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
                </div>
            </div>
            <div className="w-full mt-[32px] mb-[40px]">
                <MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'}/></div>
            <div className="px-[90px] w-full grid grid-cols-3 gap-4">
                <div className="mb-5">
                    <MainInput label={'نام صندوق بازنشستگی'} listBox={true} listItems={listItems} necessary={true} />
                </div>
                <div className="mb-5 col-span-2">
                    <MainInput label={'نام دستگاه اجرایی'} holder={'مثلا وزرات تعاون'} necessary={true}/>
                </div>
                <div className="mb-5">
                    <MainInput label={'استان محل اشتغال'} listBox={true} listItems={provinceList} necessary={true} />
                </div>
                <div className="mb-5">
                    <MainInput label={'شهر محل اشتغال'} listBox={true} listItems={cityList} necessary={true} />
                </div>
                <div className="mb-5 col-span-2">
                    <MainRadioInput title={'وضعیت بیمه‌پردازی'} radioName={'abp'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'سایر'}/>
                </div>
                <div className="mb-5 col-span-1">
                    <MainRadioInput title={'مشترک فعال صندوق بازنشستگی'} radioName={'abp'} text1={'بله'} text2={'خیر'} />
                </div>
                <div className="mb-5 ">
                    <MainInput label={'شماره شناسایی بیمه'} holder={'053268986'} necessary={true}/>
                </div>
                <div className="mb-5 ">
                    <MainInput label={'تاریخ شروع بیمه پردازی'} holder={'1376/05/04'} necessary={true}/>
                </div>
                <div className="mb-5 ">
                    <MainInput label={'تاریخ آخرین بیمه پردازی'} holder={'1376/05/04'} necessary={true}/>
                </div>
                <div className="mb-5 ">
                    <MainInput label={'نوع سابقه'} holder={'مثلا ...'} necessary={true}/>
                </div>
                <div className="mb-5 ">
                    <MainInput label={<div className="flex items-center"><p className="font-IRANYekanBold text-[16px] text-mainBlue">میزان سابقه</p><p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]"> (به روز)</p></div>} holder={'756 روز'} necessary={true}/>
                </div>
                <div className="mb-5 ">
                    <MainInput label={<div className="flex items-center"><p className="font-IRANYekanBold text-[16px] text-mainBlue">آخرین محل اشتغال به کار</p><p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]"> (دستگاه اجرایی/کارگاه)</p></div>} holder={'مثلا ...'} necessary={true}/>
                </div>
                <div className="col-span-3">
                <MainExplanation color={'yellow'} text={'چنانچه صندوق بازنشستگی مقصد، مربوط به سازمان تأمین اجتماعی نیروهای مسلح و صندوق بازنشستگی وزارت اطلاعات باشد، متقاضی (بیمه‌شده اصلی، بازمانده/وظیفه بگیر بیمه شده اصلی) از شمول درخواست مستمری جمع خارج است.'}/>

                </div>
                <div className="col-span-3 mt-[33px] flex justify-end items-center">
                    <div className="flex">
                        <div className="w-[140px] ml-4"><MainButton onClickFunction={() => navigate('../updateUserBaseInfoHimself')} label={'گام قبلی'}/></div>
                    <div className="w-[140px]"><MainButton onClickFunction={() => navigate('../createUserInsuranceOrigin')} label={'گام بعدی'}/></div>
                    </div>
                </div>





            </div>
        </div>
    );
  };
  
  export default CreateUserInsuranceDes;