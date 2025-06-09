import { useState } from 'react';
import {ViewProtestTable } from "../../components";
import ViewFileIcon from '../../assets/icon/general/ViewFileIcon';


const titleRow = ["نوع","سال","ماه","بازه بیمه پردازی","تعداد روز","وضعیت"];

const list1 = [
  {
    item1: "خود اظهاری کاربر",
    item2: "1376",
    item3: "فروردین",
    item4: "02/01-02/31",
    item5: "31 روز",
  },
  
  ];

  const list2 = [
  {
    item1: "استعلام سیستم",
    item2: "1376",
    item3: "فروردین",
    item4: "02/01-02/28",
    item5: "28 روز",
    
  },
  
  
  ];

const ViewProtest = () => {
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white">
            <div className='w-full p-[24px] border-b-[1px] border-borderGray flex justify-between items-center'>
                <div>
                    <div className='mb-[14px] flex'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>نوع اعتراض :</p>
                        <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-[6px]'>اعتراض به سوابق</p>
                    </div>
                    <div className='flex'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>تاریخ ثبت  اعتراض :</p>
                        <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-[6px]'>  1404/02/01</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='mb-[14px] flex items-center'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>وضعیت :</p>
                        <div className='w-[87px] h-[28px] bg-[#0F956D] rounded-[50px] flex justify-center items-center mr-2'><p className='text-[15px] text-white font-IRANYekanMedium'>تایید شده</p></div>
                    </div>
                    <div className='flex'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>تاریخ به‌روزرسانی اعتراض :</p>
                        <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-[6px]'>  1404/02/01</p>
                    </div>
                </div>
            </div>
            <div className='w-full p-[24px] border-b-[1px] border-borderGray'>
                <p className='font-IRANYekanExtra text-[15px] text-mainBlue mb-[20px]'>اعتراض ثبت شده</p>
                <p className='font-IRANYekanBold text-[15px] text-mainBlue mb-[18px]'>با توجه به مدارک بارگزاری شده در پیوست مبلغ مستمری محسابه شده کمتر از مبلغی است که بنده استحقاق دریافتش را دارم.لطفا مجدد بررسی کنید.</p>
                <div className='w-fit h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px]'>
                    <p className='font-IRANYekanMedium text-[15px] text-white'>تاریخ شروع بیمه پردازی.pdf</p>
                    <div className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon/></div>
                </div>

            </div>
            <div className='w-full p-[24px] border-b-[1px] border-borderGray'>
                <p className='font-IRANYekanExtra text-[15px] text-mainBlue mb-[20px]'>جواب اعتراض</p>
                <p className='font-IRANYekanBold text-[15px] text-mainBlue mb-[18px]'>با توجه به مدارک بارگزاری شده در پیوست، بازه زمانی بیمه پردازی بنده اشتباه ثبت شده است لطفا مجدد بررسی بفرمایید.</p>
                <div className='w-fit h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px]'>
                    <p className='font-IRANYekanMedium text-[15px] text-white'>جواب اعتراض.pdf</p>
                    <div className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon/></div>
                </div>

            </div>
            <div className='w-full p-[24px]'>
                <p className='font-IRANYekanExtra text-[15px] text-mainBlue mb-[24px]'>جزئیات اعتراض ثبت شده</p>
                <div className='w-full mb-7'><ViewProtestTable list1={list1} list2={list2} titleRow={titleRow}/></div>

            </div>
        </div>
    )
}

export default ViewProtest;