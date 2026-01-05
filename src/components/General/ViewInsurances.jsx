import { useState, useEffect } from "react";
import { MainButton, MainInput, MainTable, MainExplanation, MainRadioInput, MainRadioInput2, UploadFile } from "../../components";

const ViewInsurances = ({isEnding,data}) => {
return(
    isEnding?
      <div className="w-full px-[120px] h800:px-[15px] mb-8 grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام صندوق بازنشستگی'} value={data.name} />
                </div >
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'نام دستگاه اجرایی'} value={data.departmentName} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'استان محل اشتغال'} value={data.provinceName}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شهر'} value={data.cityName}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput column={true} title={'وضعیت بیمه پردازی'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'سایر'}
                     input={true} inputValue={data.employmentStatusDescription} disabled={true} value1={1} value2={2} value3={3}
                      selectedValue={data.employmentStatusId} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainRadioInput column={true} title={'مشترک فعال صندوق بازنشستگی'} text1={'بله'} text2={'خیر'} disabled={true} value1={true} value2={false} selectedValue={data.isActiveSubscriber} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره شناسایی بیمه'} value={data.insuranceIdNumber}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ شروع بیمه پردازی'}  value={data.startDate}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ آخرین بیمه پردازی'}  value={data.endDate}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نوع سابقه'} value={data.trackRecordType}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'میزان سابقه (به روز)'} value={data.trackRecordDays}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={' شماره دستگاه اجرایی/کارگاه '} value={data.lastWorkplace}/>
                </div>
                

            </div>
            :
               <div className="w-full px-[120px] h800:px-[15px] mb-9 grid grid-cols-3 gap-4">
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نام صندوق بازنشستگی'} value={data.name} />
                </div >
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={'نام دستگاه اجرایی'} value={data.departmentName} />
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'استان محل اشتغال'} value={data.provinceName}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شهر'} value={data.cityName}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainRadioInput column={true} title={'وضعیت بیمه پردازی'} text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'} text2={'مشمول قانون کار'} text3={'سایر'}
                     input={true} inputValue={data.employmentStatusDescription} disabled={true} value1={1} value2={2} value3={3}
                      selectedValue={data.employmentStatusId} />
                </div>
                <div className="col-span-1">
                    
                </div>
                 <div className="col-span-1 md:col-span-3">
                    <MainInput label={'شماره شناسایی بیمه'} value={data.insuranceIdNumber}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ شروع بیمه پردازی'}  value={data.startDate}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ آخرین بیمه پردازی'}  value={data.endDate}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'نوع سابقه'} value={data.trackRecordType}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'میزان سابقه (به روز)'} value={data.trackRecordDays}/>
                </div>
                <div className="col-span-2 md:col-span-3">
                    <MainInput label={' شماره دستگاه اجرایی/کارگاه '} value={data.lastWorkplace}/>
                </div>
                <div className="col-span-1 md:col-span-3">
                    <MainInput label={'تاریخ خروج از عضویت صندوق'} value={data.quitDate}/>
                </div>
                <div className="col-span-3">
                    <MainInput label={'علت خروج از صندوق (اخراج،استعفا،بازخرید خدمت،انتقال،انفصال دائم و تغییرات ناشی از ادغام، انحلال و واگذاری)'} value={data?.quitReason}/>
                </div>
                

            </div>
)
}
export default ViewInsurances;