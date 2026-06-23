import OkIcon from "../../assets/icon/general/OkIcon";
import { MainButton, MainPicText } from "../../components";
import { useNavigate } from "react-router-dom";
import RequestResponsePic from "../../assets/img/user/RequestResponsePic.png";
import { useState } from "react";
import Cookies from 'universal-cookie';


const CreateUserInsuranceResponse = () => {

    let navigate = useNavigate();
    const [webService, setWebService] = useState(true);
    const cookies = new Cookies();

let status=cookies.get('Status')
console.log(status)
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] pt-[40px] pb-[15px]">
            <div className="flex justify-start items-center overflow-x-auto w-full pb-2 whitespace-nowrap">
                <div className="flex justify-start items-center">
                    <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon /></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات هویتی متقاضی</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon /></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات در آخرین صندوق بازنشستگی(مقصد)</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white"><OkIcon /></p></div>
                    <p className="font-IRANYekanExtra text-[15px] text-midGreen mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
                </div>
            </div>
             { status==1 ?
                <div className="w-full">
                    <MainPicText pic={RequestResponsePic}
                        text={<div ><p className="text-mainBlue text-[19px] font-IRANYekanBold">درخواست شما با موفقیت ثبت شد.</p><p className="text-mainBlue">ابتدا شرایط شما برای دریافت مستمری جمع بررسی می‌شود. در صورتی که واجد شرایط باشید، نتیجه به شما اعلام خواهد شد و سپس فرآیند استعلام سوابق از صندوق‌ها آغاز می‌شود.</p><p className="text-mainBlue">فرآیند استعلام ممکن است تا ۲۰ روز کاری به طول انجامد. لطفاً پس از دریافت پیامک و گذشت مدت‌زمان اعلام‌شده، به پنل کاربری خود مراجعه کنید و سوابق اعلام‌شده را مشاهده و بررسی نمایید.</p></div>}
                        pageButton={<div className="w-[186px]"><MainButton onClickFunction={()=>navigate("/user/dashboardProcess")}  label={'بازگشت به میزکار'} /></div>} />
                </div>
                :
            status==3 ?
                <div className="w-full">
                    <MainPicText pic={RequestResponsePic}
                        text={<div ><p className="text-mainBlue">بر اساس اطلاعات اولیه ثبت‌شده، شما در حال حاضر شرایط اولیه برای بررسی امکان دریافت مستمری را دارید. لطفاً برای ادامه فرآیند، سوابق اعلام‌شده توسط صندوق‌های بیمه‌گر را بررسی نمایید. در صورت تأیید سوابق و تکمیل اطلاعات، امکان محاسبه مبلغ مستمری و ادامه روند بررسی فراهم خواهد شد.</p><p className="text-mainBlue">توجه داشته باشید که برخی از سوابق به‌صورت لحظه‌ای قابل مشاهده هستند، اما دریافت اطلاعات از برخی صندوق‌ها ممکن است تا ۲۰ روز زمان‌بر باشد.</p><p className="text-mainBlue">نتیجه نهایی واجد شرایط بودن شما، پس از بررسی کامل سوابق و اطلاعات بیمه‌پردازی مشخص خواهد شد. در صورتی که نسبت به نتیجه اعلام‌شده اعتراضی دارید، می‌توانید با کلیک روی دکمه "ثبت اعتراض"، درخواست خود را ثبت نمایید.</p></div>}
                        pageButton={<div className="flex"><div className="ml-3 w-[186px]"><MainButton onClickFunction={()=>navigate("/user/existingRecords")} label={'مشاهده سوابق'} /></div>

            
                        </div>} />
                </div>
                :
              <div className="w-full">
                    <MainPicText pic={RequestResponsePic}
                        text={<div ><p className="text-mainBlue"></p></div>}
                        pageButton={<div className="flex"><div className="ml-3 w-[186px]"><MainButton onClickFunction={()=>navigate("/user/existingRecords")} label={'مشاهده سوابق'} /></div>

            
                        </div>} />
                </div>
            }

        </div>
    );
};

export default CreateUserInsuranceResponse;