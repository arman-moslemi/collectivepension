import {MainInput,MainButton} from "..";
import DateIcon from "../../assets/icon/general/DateIcon";
const AcceptedRecordModal = () =>{

    return(
        <>
        <div className="w-full border-t border-t-borderGray p-4 z-1000">
        <span className="font-IRANYekanMedium text-[15px] text-mainBlue">
        بازه یا بازه‌های جدید را در این ماه، با توجه به اعتراض کاربر ثبت کنید.
                    
                </span>
                <div className="grid grid-cols-6 gap-4 w-[70%] mx-auto">
                    <div className="col-span-2">
                    <div  id="modalDatepicker">

                        <MainInput date={true} leftIcon={<DateIcon/>}/>
                        </div>
                    </div>
                    <div className="col-span-2">
                    <div  id="modalDatepicker">

                        <MainInput date={true} leftIcon={<DateIcon/>}/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <MainButton label={'افزودن بازه جدید'}/>
                    </div>
                    <div className="col-span-1">
                        <MainButton label={'محاسبه مجموع سابقه'}/>
                    </div>
                </div>
        </div>
        </>
    )
}

export default AcceptedRecordModal;