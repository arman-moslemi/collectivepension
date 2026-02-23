import MainPic from "../../assets/icon/login/LoginNavbarPic";
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <div className="w-[100%] flex justify-center items-start ">
            <div className=" xl:md:w-[85%] xl:md:xs:w-[96%] flex justify-between items-start px-3 pb-4">
                <div className="flex flex-col">
                    <a href="/protocols.pdf" download className="font-IRANYekanMedium text-[13px] text-mainBlue mb-[6px] ">آیین‌نامه</a>
                    <a href="/plans.pdf" download className="font-IRANYekanMedium text-[13px] text-mainBlue mb-[6px] ">طرح‌ها و لوایح</a>

                    <a href="/userGuide.pdf" download className="font-IRANYekanMedium text-[13px] text-mainBlue mb-[6px] ">راهنمای استفاده از سامانه برای متقاضی</a>
                    <a href="/ExpertGuide.pdf" download className="font-IRANYekanMedium text-[13px] text-mainBlue ">راهنمای استفاده از سامانه برای کارشناس و ادمین صندوق</a>
                </div>
            </div>

        </div>
    );
};

export default LoginNavbar;