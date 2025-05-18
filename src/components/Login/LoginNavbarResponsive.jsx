import MainPic from "../../assets/icon/login/LoginNavbarPic";
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <div className="w-[100%] flex justify-center items-start ">
            <div className=" xl:md:w-[85%] xl:md:xs:w-[96%] flex justify-between items-start">
                <div className="flex flex-col">
                <Link className="font-IRANYekanMedium text-[14px] text-mainBlue mb-[6px] ">درباره سامانه</Link>
                <Link className="font-IRANYekanMedium text-[14px] text-mainBlue ">راهنمای استفاده از سامانه</Link>
                </div>
                <div className="flex flex-col items-end">
                <Link className="font-IRANYekanMedium text-[14px] text-mainBlue mb-[6px] ">تماس با پشتیبانی</Link>
                <Link className="font-IRANYekanMedium text-[14px] text-mainBlue ">سوالات متداول</Link> 
                </div>
            </div>

        </div>
    );
  };
  
  export default LoginNavbar;