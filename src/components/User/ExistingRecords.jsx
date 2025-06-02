import { MainButton, MainExplanation, ExistingRecordsMainBox } from "../../components";
import DayIcon from "../../assets/icon/user/DayIcon";
import MonthIcon from "../../assets/icon/user/MonthIcon";
import YearIcon from "../../assets/icon/user/YearIcon";


const ExistingRecords = () => {

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
            <div className="w-full flex justify-end">
                <div className="w-[186px] ml-4"><MainButton label={'+ افزودن صندوق مبدا'}/></div>
                <div className="w-[97px]"><MainButton gray={true} label={'تایید سوابق'}/></div>
            </div>
            <div className="w-full my-3">
                <MainExplanation text={<div>
                    <p>در این بخش، فهرستی از صندوق‌هایی که شما در آن‌ها سابقه بیمه‌پردازی داشته‌اید نمایش داده می‌شود. با انتخاب هر صندوق، سال‌هایی که در آن‌ها دارای سابقه هستید قابل مشاهده خواهد بود. سپس با انتخاب هر سال، می‌توانید ماه‌هایی که در آن‌ها بیمه‌پردازی انجام شده را مشاهده کنید.</p>
                    <p>در صورتی که در یک ماه، بیش از یک بازه بیمه‌پردازی داشته باشید، با استفاده از دکمه «مشاهده بازه‌ها» می‌توانید جزئیات تمامی بازه‌های آن ماه را بررسی نمایید. همچنین در قسمت «سوابق دارای همپوشانی»، لازم است یکی از صندوق‌ها را انتخاب کنید تا بازه‌های مربوط به آن صندوق به عنوان سابقه معتبر در نظر گرفته شوند. در صورتی که به سوابق اعلام‌شده در هر سال اعتراضی دارید، می‌توانید از طریق دکمه «اعتراض» بالای جدول سوابق همان سال، اعتراض خود را ثبت نمایید.</p>
                    <p>در صورتی که هنگام تکمیل فرم خوداظهاری، فراموش کرده‌اید صندوقی را اعلام کنید، می‌توانید با استفاده از دکمه «افزودن صندوق جدید» در بالای صفحه، آن صندوق را به سوابق خوداظهاری خود اضافه نمایید.</p>
                    </div>}/>
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
            <div className="w-full flex justify-between mt-10">
                <div className="w-[32%]"><ExistingRecordsMainBox title={'صندوق بازنشستگی کشوری'} des={'14560 روز'}/></div>  
                <div className="w-[32%]"><ExistingRecordsMainBox title={'صندوق حمایت از پژوهشگران و فناوران'} des={'در حال بررسی'}/></div>
                <div className="w-[32%]"><ExistingRecordsMainBox title={'صندوق بیمه اجتماعی کشاورزان، روستاییان و عشایر'} des={'212 روز'}/></div>
            </div>
            <div className="w-full px-[24px] grid grid-cols-12 gap-4  my-[38px]">
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>
                <div className="w-[82px]"><ExistingRecordsMainBox small={true} title={'1375'} des={'365 روز'}/></div>


            </div>
            

        </div>
    );
  };
  
  export default ExistingRecords;