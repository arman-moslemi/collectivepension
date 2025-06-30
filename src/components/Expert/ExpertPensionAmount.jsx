import { MainButton,MainInput, MainTable, MainExplanation } from "../../components";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { div } from "framer-motion/client";


const ExpertPensionAmount = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[17px] pt-[17px] pb-[38px]">
            <div className="w-full mb-6">
                <p className="text-[15px] text-mainBlue font-IRANYekanBold">لطفا جزئیات پرونده را با دقت بررسی کنید.</p>
            </div>
            <div className="w-full px-[73px] mb-[30px]">
                <div className="w-full flex justify-center">
                    <div className="w-[197px] h-[41px] bg-buttonBlue rounded-t-[6px] ml-4 flex justify-center items-center">
                        <p className="text-[15px] text-white font-IRANYekanExtra">فرم درخواست مستمری</p>
                    </div>
                    <div className="w-[197px] h-[41px] bg-mainBlue rounded-t-[6px] ml-4 flex justify-center items-center">
                        <p className="text-[15px] text-white font-IRANYekanMedium">کلیه سوابق</p>
                    </div>
                    <div className="w-[197px] h-[41px] bg-mainBlue rounded-t-[6px] ml-4 flex justify-center items-center">
                        <p className="text-[15px] text-white font-IRANYekanMedium">مبلغ مستمری </p>
                    </div>
                </div>
                <div className=" w-full border-b border-[2px] border-dGray "></div>
            </div>
            <div className="w-full px-[16px] mb-4">
                <MainExplanation color={'green'}
                text={
                    <div>
                        <p className="text-mainGreen text-[20px] font-IRANYekanExtra mb-[6px]">نتیجه اولیه بررسی شرایط دریافت مستمری از طریق سامانه :</p>
                        <p className="text-[15px] font-IRANYekanBold text-black">در ابتدا درخواست متقاضی به دلیل عدم احراز شرایط لازم، رد شده بود؛ اما با اعلام صندوق جدید و بررسی سوابق مرتبط، شرایط لازم احراز و درخواست در حال حاضر تأیید شده است.</p>
                    </div>
                }
                />
            </div>
            <div className="w-full px-[73px] mb-6">
                <p className="text-[18px] font-IRANYekanExtra">اطلاعات هویتی متقاضی</p>
            </div>
            <div className="w-full px-[120px] mb-8 grid grid-cols-3 gap-4">
                <div>
                    <MainInput label={'نام'} value={'علی'}/>
                </div>
                <div>
                    <MainInput label={'نام خانوادگی '} value={'علیزاده تهرانی'}/>
                </div>
                <div>
                    <MainInput label={'نام پدر'} value={'محمد هادی'}/>
                </div>
                <div>
                    <MainInput label={'تاریخ تولد'} value={'1346/04/16'}/>
                </div>
                <div>
                    <MainInput label={'کدملی'} value={'0020456787'}/>
                </div>
                <div>
                    <MainInput label={'شماره شناسنامه '} value={'مثلا 8888'}/>
                </div>
                <div>
                    <MainInput label={'جنسیت'} value={'مرد'}/>
                </div>
                <div>
                    <MainInput label={'شماره تلفن ثابت '} value={'مثلا 02144665522'}/>
                </div>
                <div>
                    <MainInput label={'شماره تلفن همراه'} value={'مثلا 09123333333'}/>
                </div>

            </div>

        </div>
    )
}

export default ExpertPensionAmount;