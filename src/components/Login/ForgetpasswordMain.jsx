import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {MainInput, MainButton} from "../../components";
import Reload from '../../assets/icon/login/Return';
import Left from '../../assets/icon/login/LeftPic';
import { Captcha } from "@nabidam/react-captcha";


const ForgetpasswordMain = () => {

    const [captcha, setCaptcha] = useState()
    const captchaRef = useRef();

    return (
        <div className="w-full bg-none flex justify-center">
            <div className='w-[30%] xl:w-[55%] xl:md:w-[85%] xl:md:xs:w-[96%]'>
            <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری ندارید؟</p>
                <Link className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> ثبت نام کنید</Link>
            </div>
            <div className="w-[100%] bg-white shadow-mainBoxShadow h-[522px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                <div className='flex justify-center mb-[39px]'>
                    <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>فراموشی رمزعبور</p>
                </div>
                <div>
                    <div>
                        <MainInput label={'کدملی'}/>
                    </div>
                    <div className='mt-[30px]'>
                        <MainInput label={'شماره تلفن همراه'} />
                    </div>
                    <div className='mt-[30px] flex items-end'>   
                        <MainInput label={<div className='flex items-center'><p className='font-IRANYekanBold text-mainBlue text-[16px] u390:text-[12px]'>کد امنیتی</p><p className='font-IRANYekanBold text-mainBlue text-[10px] mr-[6px]'>(بدون فاصله وارد کنید)</p></div>}/>
                        <div  className="flex mr-2 mb-2">
            <Captcha className="flex " setWord={setCaptcha} ref={captchaRef} reloadText=""
              persianChars={true} fontFamily={"IRANSans"} backgroundColor={"#0a2867"} fontColor="#fff" border="1px solid #000" />
            <button onClick={() => captchaRef.current.initializeCaptcha()} className="mr-2">
              <Reload />
            </button>
          </div>
                    </div>
                </div>
                <div className="mt-[31px]">
                    <div><MainButton label={<div className="flex justify-center items-center"><p className="font-IRANYekanBold text-[16px] text-white ml-2">ادامه</p><Left/></div>}/></div>
                </div>

            </div>
            <div className="w-[100%] bg-none flex justify-center">
                <p className="font-IRANYekanBold text-[10px] text-mainBlue">تمامی حقوق مادی و معنوی این سامانه، متعلق به وزارت تعاون، کار و رفاه اجتماعی می‌باشد.</p>
            </div>
            </div>
        </div>
    );
  };
  
  export default ForgetpasswordMain;