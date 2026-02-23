import MainPic from "../../assets/icon/login/LoginNavbarPic";
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <div className="w-[100%] h-[66px] flex justify-center items-start ">
            <div className="mt-[-6px] b1115:hidden">
                <MainPic />

            </div>
            <div className="h-[46px] z940:h-[74px] mt-[-2px] w-full bg-navBlue shadow-navShadow b1115:flex hidden">
            </div>
            <div className="flex w-full  justify-center z940:justify-between items-center absolute mt-2">
                <div className="flex z940:flex-col justify-center z940:items-start z940:mr-12 items-center">
                    <a href="/protocols.pdf" download className="font-IRANYekanMedium text-[14px] text-white ">آیین‌نامه</a>
                    <p className="font-IRANYekanBold text-[16px] text-white mx-[30px] z940:hidden">.</p>
                    <a href="/plans.pdf" download className="font-IRANYekanMedium text-[14px] text-white z940:mt-2">طرح‌ها و لوایح</a>
                </div>
                <div className="flex z940:flex-col justify-center z940:items-end z940:ml-12 items-center">
                    <p className="font-IRANYekanBold text-[16px] text-white mx-[30px] z940:hidden">.</p>
                    <a href="/userGuide.pdf" download className="font-IRANYekanMedium text-[14px] text-white">راهنمای استفاده از سامانه برای متقاضی</a>
                    <p className="font-IRANYekanBold text-[16px] text-white mx-[30px] z940:hidden">.</p>
                    <a href="/ExpertGuide.pdf" download className="font-IRANYekanMedium text-[14px] text-white z940:mt-2">راهنمای استفاده از سامانه برای کارشناس و ادمین صندوق</a>
                </div>
            </div>

        </div>
    );
};

export default LoginNavbar;