import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {MainInput, MainButton} from "../../components";
import PassIcon from "../../assets/icon/general/InputPassIcon";
import Reload from '../../assets/icon/login/Return';
import Left from '../../assets/icon/login/LeftPic';
import { Captcha } from "@nabidam/react-captcha";
const SignupMain = () => {

    const [captcha, setCaptcha] = useState()
    const captchaRef = useRef();

    return(
        <div className="w-full bg-none flex justify-center">
            <div className='w-[55%] xl:w-[89%] xl:md:w-[96%]'>
            <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری دارید؟</p>
                <Link className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> وارد شوید</Link>
            </div>
            <div className="w-[100%] bg-white shadow-mainBoxShadow h-[590px] md:h-[960px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                <div className='flex justify-center mb-[39px]'>
                    <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>ثبت نام در سامانه</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <div>
                        <MainInput label={'کدملی'} necessary={true}/>
                    </div>
                    <div className="flex items-end">
                        <div className="w-[66%]"><MainInput label={'تاریخ تولد'} necessary={true}/></div>
                        <div className="w-[32%] mr-[2%]"><MainButton label={'استعلام'}/></div>

                    </div>
                    <div>
                        <MainInput label={'نام'} disable={true}/>
                    </div>
                    <div>
                        <MainInput label={'نام خانوادگی'} disable={true}/>
                    </div>
                    <div><MainInput label={'شماره تلفن همراه'} necessary={true}/></div>
                    <div className='flex items-end'>   
                        <MainInput label={<div className='flex items-center'><p className='font-IRANYekanBold text-mainBlue text-[16px] u390:text-[12px]'>کد امنیتی</p><p className='font-IRANYekanBold text-mainBlue text-[10px] mr-[6px]'>(بدون فاصله وارد کنید)</p></div>}/>
                        <div  className="flex mr-2 mb-2">
            <Captcha className="flex " setWord={setCaptcha} ref={captchaRef} reloadText=""
              persianChars={true} fontFamily={"IRANSans"} backgroundColor={"#0a2867"} fontColor="#fff" border="1px solid #000" />
            <button onClick={() => captchaRef.current.initializeCaptcha()} className="mr-2">
              <Reload />
            </button>
          </div>
                    </div>
                    <div><MainInput label={'رمزعبور'} necessary={true} leftIcon={<PassIcon/>}/></div>
                    <div><MainInput label={'تکرار رمزعبور'} necessary={true} leftIcon={<PassIcon/>}/></div>
                    
                </div>
                <div className="mt-[31px] w-[100%] flex justify-center">
                    <div className="w-[40%] c550:w-[100%]"><MainButton label={<div className="flex justify-center items-center"><p className="font-IRANYekanBold text-[16px] text-white ml-2">ادامه</p><Left/></div>}/></div>
                </div>

            </div>
            <div className="w-[100%] bg-none flex justify-center">
                <p className="font-IRANYekanBold text-[10px] text-mainBlue">تمامی حقوق مادی و معنوی این سامانه، متعلق به وزارت تعاون، کار و رفاه اجتماعی می‌باشد.</p>
            </div>
            </div>
        </div>
    );
    
  };
  
  export default SignupMain;