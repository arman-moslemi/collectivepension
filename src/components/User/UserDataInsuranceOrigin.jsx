import {MainExplanation, MainInput, MainButton, MainRadioInput,} from "../../components";
import Cross from "../../assets/icon/general/Cross";

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

const UserDataInsuranceOrigin = ({number, handleRemoveLastForm}) => {
    return (
        <div className="w-full">
            <div className="w-full mb-[30px] flex justify-between items-center">
                <p className="font-IRANYekanExtra text-[16px] text-mainBlue">اطلاعات فرد در صندوق بازنشستگی مبدا (شماره {number})</p>
                {number === 1 ? null : <button onClick={handleRemoveLastForm}><Cross/></button> }
            </div>
            
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="mb-5">
                    <MainInput label={'نام صندوق بازنشستگی'} listBox={true} listItems={listItems} necessary={true} />
                </div>
                <div className="mb-5 col-span-2">
                    <MainInput label={'نام دستگاه اجرایی'} holder={'مثلا وزرات تعاون'} necessary={true}/>
                </div>
                <div className="mb-5 col-span-3">
                    <MainRadioInput title={'وضعیت استخدامی'} radioName={'abp'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'مشمول قوانین خاص'}/>
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
                <div className="mb-5 col-span-3">
                    <MainInput label={'علت خروج از صندوق (اخراج،استعفا،بازخرید خدمت،انتقال،انفصال دائم و تغییرات ناشی از ادغام، انحلال و واگذاری)'} holder={'مثلا ...'} necessary={true}/>
                </div>
                <div className="mb-5 ">
                    <MainInput label={'تاریخ خروج از عضویت صندوق'} holder={'1376/05/04'} necessary={true}/>
                </div>

            </div>
        </div>
    );
  };
  
  export default UserDataInsuranceOrigin;