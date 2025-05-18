import { Link, useNavigate } from 'react-router-dom';
import {MainButton, MainInput} from "../../components";
import Left from "../../assets/icon/login/LeftPic";
const VerifyMain = ({forgetpassword}) => {
    return (
        <div className="w-full bg-none flex justify-center">
            <div className='w-[35%] xl:w-[55%] xl:md:w-[85%] xl:md:xs:w-[96%]'>
            {forgetpassword?
            <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری ندارید؟</p>
                <Link className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> ثبت نام کنید</Link>
            </div>
            :
            <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری دارید؟</p>
                <Link className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> وارد شوید</Link>
            </div>
            }
            <div className="w-[100%] bg-white shadow-mainBoxShadow h-[380px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                <div className='flex justify-center mb-[39px]'>
                    <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>ثبت کد تایید</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-IRANYekanBold text-[16px] text-mainBlue mb-[18px]'>کد تایید ارسال شده را با دقت وارد کنید</p>
                    <div className='w-[60%] sm:w-[90%] grid grid-cols-4 gap-4'>
                        <MainInput/>
                        <MainInput/>
                        <MainInput/>
                        <MainInput/>
                    </div>
                    <p className='font-IRANYekanBold text-[16px] text-buttonBlue mt-[25px]'>00 : 45</p>
                </div>
                <div className="mt-[31px] w-[100%] flex justify-center">
                    <div className="w-[100%]">
                        {forgetpassword?
                        <MainButton label={<div className="flex justify-center items-center"><p className="font-IRANYekanBold text-[16px] text-white ml-2">ادامه</p><Left/></div>}/>
                        :
                        <MainButton label={'ثبت نام'}/>
                        }
                    </div>
                </div>

            </div>
            <div className="w-[100%] bg-none flex justify-center">
                <p className="font-IRANYekanBold text-[10px] text-mainBlue">تمامی حقوق مادی و معنوی این سامانه، متعلق به وزارت تعاون، کار و رفاه اجتماعی می‌باشد.</p>
            </div>
            </div>
        </div>
    );
  };
  
  export default VerifyMain;