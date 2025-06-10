import { useState } from 'react';
import { MainButton, MainExplanation, MainModal, ExistingRecordsMainBox, UserDataInsuranceOrigin, MainTable } from "../../components";
import DayIcon from "../../assets/icon/user/DayIcon";
import MonthIcon from "../../assets/icon/user/MonthIcon";
import YearIcon from "../../assets/icon/user/YearIcon";
import DetailTableIcon from '../../assets/icon/general/DetailTableIcon';


const titleRow = ["ردیف","استان","شهر","شعبه","محل خدمت/نام کارگاه","شماره دستگاه/کارگاه","شماره شناسایی بیمه","سابقه (تعداد روز)","مشاهده"];


const ExistingRecords = ({setSelectedYearBox}) => {

    const [showAddOriginBoxModal, setShowAddOriginBoxModal] = useState(false);
    const [selectedBox, setSelectedBox] = useState(false);
    
        const AddOriginBoxModalFunction = () => {
            setShowAddOriginBoxModal(false);
        }


        const list = [
  {
    item1: "1",
    item2: "سیستان و بلوچستان",
    item3: "کنارک",
    item4: "15",
    item5: "شرکت توسعه هوشمند ورنا ایرانیان",
    item6: "14008759695",
    item7: "14008759695",
    item8: "25963",
    item9: <div onClick={() => setSelectedYearBox(true)} className='w-[38px] h-[38px] cursor-pointer rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>,
    
  },
  {
    item1: "1",
    item2: "سیستان و بلوچستان",
    item3: "کنارک",
    item4: "15",
    item5: "شرکت توسعه هوشمند ورنا ایرانیان",
    item6: "14008759695",
    item7: "14008759695",
    item8: "25963",
    item9: <div onClick={() => setSelectedYearBox(true)} className='w-[38px] h-[38px] cursor-pointer rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>,
    
  },
  
  
  ];

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
            <div className="w-full flex justify-end">
                <div className="w-[186px] ml-4"><MainButton onClickFunction={()=>{setShowAddOriginBoxModal(true)}} label={'+ افزودن صندوق مبدا'}/></div>
                <div className="w-[97px]"><MainButton gray={true} label={'تایید سوابق'}/></div>
            </div>
            <div className="w-full my-3">
                <MainExplanation text={<div>
                    <p>در این بخش، فهرستی از صندوق‌هایی که شما در آن‌ها سابقه بیمه‌پردازی داشته‌اید نمایش داده می‌شود. با انتخاب هر صندوق، سال‌هایی که در آن‌ها دارای سابقه هستید قابل مشاهده خواهد بود. سپس با انتخاب هر سال، می‌توانید ماه‌هایی که در آن‌ها بیمه‌پردازی انجام شده را مشاهده کنید.</p>
                    <p>در صورتی که در یک ماه، بیش از یک بازه بیمه‌پردازی داشته باشید، با استفاده از دکمه «مشاهده بازه‌ها» می‌توانید جزئیات تمامی بازه‌های آن ماه را بررسی نمایید. همچنین در قسمت «سوابق دارای همپوشانی»، لازم است یکی از صندوق‌ها را انتخاب کنید تا بازه‌های مربوط به آن صندوق به عنوان سابقه معتبر در نظر گرفته شوند. در صورتی که به سوابق اعلام‌شده در هر سال اعتراضی دارید، می‌توانید از طریق دکمه «اعتراض» بالای جدول سوابق همان سال، اعتراض خود را ثبت نمایید.</p>
                    <p>در صورتی که هنگام تکمیل فرم خوداظهاری، فراموش کرده‌اید صندوقی را اعلام کنید، می‌توانید با استفاده از دکمه «افزودن صندوق جدید» در بالای صفحه، آن صندوق را به سوابق خوداظهاری خود اضافه نمایید.</p>
                    </div>}/>
            </div>
            <div className='w-full flex justify-between items-center mt-3 mb-11'>
                <div>
                    <div className='flex mb-[14px]'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>نام و نام خانوادگی :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'> علی علیزاده</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>جنسیت :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>مرد</p>
                    </div>
                </div>
                <div>
                    <div className='flex mb-[14px]'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>کد ملی :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>0020145896</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>کد پرسنلی :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>125698</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='flex mb-[14px]'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>تاریخ تولد :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>1346/05/25</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>تاریخ ثبت درخواست :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>1346/05/25</p>
                    </div>
                </div>

            </div>
            <div className="w-[490px]">
                <div className="w-full flex justify-between mb-2">
                    <div className="w-[150px] h-[118px] pt-[20px] rounded-[6px] border-[2px] border-dashed border-ddGray flex flex-col items-center">
                        <DayIcon/>
                        <p className="font-IRANYekanMedium text-[18px] text-darkGray mt-2">درحال بررسی</p>
                    </div>
                    <div className="w-[150px] h-[118px] pt-[20px] rounded-[6px] border-[2px] border-dashed border-ddGray flex flex-col items-center">
                        <MonthIcon/>
                        <p className="font-IRANYekanMedium text-[18px] text-darkGray mt-2">درحال بررسی</p>
                    </div>
                    <div className="w-[150px] h-[118px] pt-[20px] rounded-[6px] border-[2px] border-dashed border-ddGray flex flex-col items-center">
                        <YearIcon/>
                        <p className="font-IRANYekanMedium text-[18px] text-darkGray mt-2">درحال بررسی</p>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue">مجموع سوابق</p>
                    <p className="font-IRANYekanExtra text-[15px] text-darkGray">درحال برررسی</p>
                </div>
            </div>
            <div className="w-full flex justify-between mt-14 mb-14">
                <div className="w-[32%] cursor-pointer" onClick={() => setSelectedBox(true)}><ExistingRecordsMainBox title={'صندوق بازنشستگی کشوری'} des={'14560 روز'}/></div>  
                <div className="w-[32%] cursor-pointer" onClick={() => setSelectedBox(true)}><ExistingRecordsMainBox title={'صندوق حمایت از پژوهشگران و فناوران'} des={'در حال بررسی'}/></div>
                <div className="w-[32%] cursor-pointer" onClick={() => setSelectedBox(true)}><ExistingRecordsMainBox title={'صندوق بیمه اجتماعی کشاورزان، روستاییان و عشایر'} des={'212 روز'}/></div>
            </div>
            {selectedBox?
            <div className="w-full mb-[32px]">
                <MainTable center3={true} list={list} titleRow={titleRow}/>
            </div>
            :
            null}
            
        {showAddOriginBoxModal ? <MainModal big={true} title={'ثبت اطلاعات صندوق مبدا فراموش شده'} setShowModal={setShowAddOriginBoxModal}
                       text={<div className="w-full flex flex-col items-center">
                        <UserDataInsuranceOrigin inModal={true}/>
                        </div>}
                       modalButton={<div className="w-full flex justify-center">
                        <div className="w-[140px]"><MainButton onClickFunction={AddOriginBoxModalFunction} label={'ثبت'}/></div>
                       </div>}
                        /> : null}


        </div>
    );
  };
  
  export default ExistingRecords;