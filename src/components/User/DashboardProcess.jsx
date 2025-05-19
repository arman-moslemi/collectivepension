import {MainPicText, MainButton} from "../../components";
import RequestResponsePic from "../../assets/img/user/RequestResponsePic.png";


const DashboardProcess = () => {
    return(
        <div>
            <MainPicText pic={RequestResponsePic} 
                text={<div ><p className="text-mainBlue text-[19px] font-IRANYekanBold">درخواست شما با موفقیت ثبت شد.</p><p className="text-mainBlue">ابتدا شرایط شما برای دریافت مستمری جمع بررسی می‌شود. در صورتی که واجد شرایط باشید، نتیجه به شما اعلام خواهد شد و سپس فرآیند استعلام سوابق از صندوق‌ها آغاز می‌شود.</p><p className="text-mainBlue">فرآیند استعلام ممکن است تا ۲۰ روز کاری به طول انجامد. لطفاً پس از دریافت پیامک و گذشت مدت‌زمان اعلام‌شده، به پنل کاربری خود مراجعه کنید و سوابق اعلام‌شده را مشاهده و بررسی نمایید.</p></div>}
                pageButton={<div className="w-[186px]"><MainButton label={'بازگشت به میزکار'}/></div>} />
        </div>
    )
}

export default DashboardProcess;