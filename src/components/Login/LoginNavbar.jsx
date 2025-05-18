import MainPic from "../../assets/icon/login/LoginNavbarPic";
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <div className="w-[100%] h-[66px] flex justify-center items-start ">
            <div className="mt-[-6px] b1115:hidden">
            <MainPic/>
            
            </div>
            <div className="h-[46px] mt-[-2px] w-full bg-navBlue shadow-navShadow b1115:flex hidden">
            </div>
            <div className="flex justify-center items-center absolute mt-2">
                <Link className="font-IRANYekanMedium text-[14px] text-white">درباره سامانه</Link>
                <p className="font-IRANYekanBold text-[16px] text-white mx-[60px] z940:mx-[25px] z940:sm:mx-3">.</p>
                <Link className="font-IRANYekanMedium text-[14px] text-white">راهنمای استفاده از سامانه</Link>
                <p className="font-IRANYekanBold text-[16px] text-white mx-[60px] z940:mx-[25px] z940:sm:mx-3">.</p>
                <Link className="font-IRANYekanMedium text-[14px] text-white">سوالات متداول</Link>
                <p className="font-IRANYekanBold text-[16px] text-white mx-[60px] z940:mx-[25px] z940:sm:mx-3">.</p>
                <Link className="font-IRANYekanMedium text-[14px] text-white">تماس با پشتیبانی</Link>
            </div>

        </div>
    );
  };
  
  export default LoginNavbar;