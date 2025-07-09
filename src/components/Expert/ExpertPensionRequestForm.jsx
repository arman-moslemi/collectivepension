import { useState } from "react";
import { MainButton,MainInput, MainTable, MainExplanation, MainRadioInput, MainRadioInput2, UploadFile } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";


const ExpertPensionRequestForm = ({admin,webService,des}) => {

    const [disapproval, setDisapproval] = useState(false);

    let navigate = useNavigate();

    return (
        <div className="w-full">
            <div className="w-full px-[73px] h800:px-0 mb-6">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات هویتی متقاضی</p>
            </div>
            <div className="w-full px-[120px] h800:px-[15px] mb-8 grid grid-cols-3 gap-4 md:px-2">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام'} value={'علی'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام خانوادگی '} value={'علیزاده تهرانی'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام پدر'} value={'محمد هادی'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ تولد'} value={'1346/04/16'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'کدملی'} value={'0020456787'}/>
                </div>
                <div className="col-span-1 md:col-span-3"> 
                    <MainInput label={'شماره شناسنامه '} value={'مثلا 8888'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'جنسیت'} value={'مرد'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره تلفن ثابت '} value={'مثلا 02144665522'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره تلفن همراه'} value={'مثلا 09123333333'}/>
                </div>
                <div className="col-span-3">
                    <MainInput label={'آدرس'} value={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput title={'نوع درخواست مستمری جمع'} text1={'بازنشستگی'} text2={'از کار افتادگی کلی'} ml={'100'} mr={'30'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'کد پرسنلی'} value={'مثلا 09123333333'}/>
                </div>

            </div>
            <div className="w-full px-[73px] pb-10  h800:px-0">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات فرد در صندوق بازنشستگی مقصد</p>
            </div>
            <div className="w-full px-[120px] h800:px-[15px] mb-8 grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام صندوق بازنشستگی'} value={'صندوق بازنشستگی کشوری'}/>
                </div >
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'نام دستگاه اجرایی'} value={'دستگاه دولتی'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'استان محل اشتغال'} value={'تهران'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شهر'} value={'تهران'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput2 title={'وضعیت بیمه پردازی'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'سایر'} input={true} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainRadioInput2 title={'مشترک فعال صندوق بازنشستگی'} text1={'بله'} text2={'خیر'} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره شناسایی بیمه'} value={'053268986'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ شروع بیمه پردازی'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ آخرین بیمه پردازی'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نوع سابقه'} value={'مثلا ...'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'میزان سابقه (به روز)'} value={'756 روز'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'آخرین محل اشتغال به کار (دستگاه اجرایی/کارگاه)'} value={'مثلا 0...'}/>
                </div>
                

            </div>
            <div className="w-full px-[73px] pb-10 h800:px-0">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات فرد در صندوق بازنشستگی مبدا</p>
            </div>
            <div className="w-full px-[120px] h800:px-[15px] mb-9 grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام صندوق بازنشستگی'} value={'صندوق بازنشستگی کشوری'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'نام دستگاه اجرایی'} value={'دستگاه دولتی'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'استان محل اشتغال'} value={'تهران'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شهر'} value={'تهران'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput2 title={'وضعیت بیمه پردازی'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'سایر'} input={true} />
                </div>
                <div className="col-span-1">
                    
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره شناسایی بیمه'} value={'053268986'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ شروع بیمه پردازی'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ آخرین بیمه پردازی'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نوع سابقه'} value={'مثلا ...'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'میزان سابقه (به روز)'} value={'756 روز'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'آخرین محل اشتغال به کار (دستگاه اجرایی/کارگاه)'} value={'مثلا 0...'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ خروج از عضویت صندوق'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-3">
                    <MainInput label={'علت خروج از صندوق (اخراج،استعفا،بازخرید خدمت،انتقال،انفصال دائم و تغییرات ناشی از ادغام، انحلال و واگذاری)'} value={'مثلا ...'}/>
                </div>
                

            </div>
            <div className="border-t-[2px] border-dGray border-dashed pb-9 mx-[73px]"></div>
            <div className="w-full px-[73px] pb-10 h800:px-0">
                <p className="text-[18px] font-IRANYekanExtra">صندوق مبدا اضافه شده</p>
            </div>
            <div className="w-full px-[120px] h800:px-[15px] mb-8 grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام صندوق بازنشستگی'} value={'صندوق بازنشستگی کشوری'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'نام دستگاه اجرایی'} value={'دستگاه دولتی'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'استان محل اشتغال'} value={'تهران'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شهر'} value={'تهران'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput2 title={'وضعیت بیمه پردازی'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'سایر'} input={true} />
                </div>
                <div className="col-span-1">
                    
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره شناسایی بیمه'} value={'053268986'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ شروع بیمه پردازی'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ آخرین بیمه پردازی'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نوع سابقه'} value={'مثلا ...'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'میزان سابقه (به روز)'} value={'756 روز'}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'آخرین محل اشتغال به کار (دستگاه اجرایی/کارگاه)'} value={'مثلا 0...'}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ خروج از عضویت صندوق'} value={'1376/05/04'}/>
                </div>
                <div className="col-span-3">
                    <MainInput label={'علت خروج از صندوق (اخراج،استعفا،بازخرید خدمت،انتقال،انفصال دائم و تغییرات ناشی از ادغام، انحلال و واگذاری)'} value={'مثلا ...'}/>
                </div>
                

            </div>
            {des && !webService && !admin ?
            <div className="w-full px-[120px] flex justify-end items-center lg:px-0 lg:justify-center">
                <div className="w-[107px] ml-[10px]"><MainButton label={'تایید'}/></div>
                <div className="w-[107px]"><MainButton onClickFunction={()=>setDisapproval(true)} label={'عدم تایید'} red={true}/></div>
            </div>
            :null }
            {disapproval?
            <div className="w-full px-[120px] lg:px-0 lg:my-2">
                <div className="w-full">
                    <MainInput longText={true} label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'} holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'} />
                </div>
                <div className="w-full flex justify-between items-center mt-2 flex-wrap lg:mr-auto">
                    <div className="w-full flex items-center lg:flex-col lg:items-start">
                    <p className="text-[14px] font-IRANYekanMedium text-mainBlue ml-3">انتخاب فایل</p>
                    <div className="w-fit"><UploadFile/></div>
                    </div>
                    <div className="w-[125px] lg:mt-2"><MainButton label={'ارسال'}/></div>

                </div>

                
            </div>
            :null}


        </div>
    )
}

export default ExpertPensionRequestForm;