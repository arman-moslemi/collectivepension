import {MainInput} from "..";
const AcceptedRecordModal = () =>{

    return(
        <>
        <div className="w-full border-t border-t-borderGray p-4 z-1000">
        <span className="font-IRANYekanMedium text-[15px] text-mainBlue">
        بازه یا بازه‌های جدید را در این ماه، با توجه به اعتراض کاربر ثبت کنید.
                    
                </span>
                <MainInput date={true}/>
        </div>
        </>
    )
}

export default AcceptedRecordModal;