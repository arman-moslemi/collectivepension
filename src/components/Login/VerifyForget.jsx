import { Link, useNavigate, useLocation } from 'react-router-dom';
import { MainButton, MainInput } from "..";
import Left from "../../assets/icon/login/LeftPic";
import axios from "axios";
import { apiUrl } from "../../commons/inFormTypes";
import Countdown from 'react-countdown';
import crypto from "crypto-js";
import React, { useState, useEffect, useRef } from "react";
import LeftPic from '../../assets/icon/login/LeftPic';
// import { DateIcon } from "../../assets/icon/general/DateIcon";

const VerifyForget = ({ forgetpassword }) => {

    const { state } = useLocation();
    let navigate = useNavigate();

    const [code, setCode] = useState("");
    const [erPass, setErPass] = useState(false)
    const [k, setK] = useState(false);
    const [onsms, setOnSms] = useState(false);
    const Addsms = () =>
        <div className="flex items-center justify-center">
            <p className="font-thin text-sm ml-2">
                دریافت مجدد کد از طریق
            </p>
            <button onClick={() => smsreload()} className="text-mainColor border-b border-dashed">
                پیامک
            </button>
        </div>;
    const onCompleteTimeFun = () => {
        console.log("Resetting Time");
        if (onsms) {
            setK((i) => !i);
        }
        else {
            return <Addsms />
        }
    };
    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }
    const smsreload = () => {
        var hash = crypto.SHA512(state?.Cap).toString()
        setK((i) => !i);
        axios
            .post(apiUrl + "Auth/SMS1", {
                Mobile: state?.Mobile.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
                NationalCode: state?.NationalCode.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
                Cap: state?.Cap

            }, {
                headers: {
                    Authorization: `Bearer ${hash}`,
                    'X-Frame-Options': 'Deny',
                    'X-Content-Type-Options': "nosniff",
                    'X-XSS-Protection': "1; mode=block",
                    "Referrer-Policy": "same-origin",
                    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
                }
            })
            .then(function (response2) {
                console.log("sms")
                console.log(response2)
                console.log(response2.data)
                setOnSms(true)
                if (response2.request.status == 200) {
                    alert("با موفقیت ارسال شد")


                }
                else {
                    alert("شماره موبایل نادرست می باشد")


                    // navigate("/Verify",{state: {id:"1234" ,Mobile:mobile,NationalCode:nationalCodeManager, Password:pass, BirthayManager:birthday}});

                }
            })
            .catch(function (error) {
                console.log(error);


            });
    }
    const verifyCode = () => {
        console.log(555)
            console.log(state)

        if (code == "") {
            setErPass(true)
        }
        else {
            console.log(999)
            console.log(state)
            console.log(state?.allValues)

            axios
                .post(apiUrl + "Auth/VerifyForget", {
                    NationalCode: state?.NationalCode?.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
                    Code: code,
                  
                })
                .then(function (response2) {
                    console.log("verify")
                    console.log(response2)
                    console.log(response2?.data)

                    if (response2.status == 200) {
                        // alert("ثبت نام با موفقیت انجام شد")
                        navigate("/changePassword",{Cap:state?.Cap,NationalCode:state?.NationalCode})
                    }
                    else {
                        console.log(response2?.data)
                        alert(response2?.data)
                    }
                })
        }


    };



    const renderer = ({ hours, minutes, seconds, completed }) => {

        // Render a countdown
        if (completed) {
            return <Addsms />
        }
        else
            return <>
                <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                    <span >
                        {minutes}:{seconds}
                    </span>
                    <p className="mr-2 font-thin text-sm">


                        مانده تا دریافت مجدد کد
                    </p>
                </div>

            </>;

    };
    return (
        <div className="w-full bg-none flex justify-center">
            <div className='w-[35%] xl:w-[55%] xl:md:w-[85%] xl:md:xs:w-[96%]'>
                {forgetpassword ?
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
                        <div class="relative my-6">
                            <div class="absolute top-[22px] right-2 flex items-center pl-3 pointer-events-none">
                                <LeftPic />
                            </div>                            {/* <MainInput/>
                        <MainInput/>
                        <MainInput/>
                        <MainInput/> */}
                            <input onChange={(e) => { setErPass(false); setCode(e.target.value) }}
                                maxLength={6}
                                onInput={maxLengthCheck}
                                leftIcon={<Left />}
                                type="number"
                                id="input-group-1" class="pr-9  text-right right-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md mt-5 my-2 focus:ring-mainColor focus:border-mainColor block w-full pl-10 p-2.5  " placeholder="کد تایید" />
                            {
                                erPass ?
                                    <span class="flex items-center font-medium tracking-wide text-[#ff0000] text-xs mt-1 ml-1">
                                        لطفا فیلد را وارد نمایید !
                                    </span>
                                    :
                                    null
                            }
                        </div>
                        {/* <p className='font-IRANYekanBold text-[16px] text-buttonBlue mt-[25px]'>00 : 45</p> */}
                        <Countdown
                            key={k}
                            date={Date.now() + 90000}
                            renderer={renderer}
                            //  onComplete={onCompleteTimeFun}
                            className='font-IRANYekanBold text-[16px] text-buttonBlue mt-[25px]'
                        />
                    </div>
                    <div className="mt-[31px] w-[100%] flex justify-center">
                        <div className="w-[100%]">

                            <MainButton onClickFunction={() => verifyCode()}  label={'تایید'} />
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

export default VerifyForget;