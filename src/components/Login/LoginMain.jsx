import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MainInput, MainChekbox, MainButton } from "../../components";
import PassIcon from "../../assets/icon/general/InputPassIcon";
import Reload from '../../assets/icon/login/Return';
import { Captcha } from "@nabidam/react-captcha";
import { apiUrl } from "../../commons/inFormTypes";
import axios from "axios";
import Cookies from 'universal-cookie';
import Alert from "../General/Alert";

const LoginMain = () => {
    const [captcha, setCaptcha] = useState()
    const captchaRef = useRef();
    const [user, setUser] = useState()
    const [erUser, setErUser] = useState(false)
    const [pass, setPass] = useState()
    const [show, setShow] = useState(false)
    const [erPass, setErPass] = useState(false);
    const [captchaIn, setCaptchaIn] = useState();
    const [erCaptcha, setErCaptcha] = useState(false)
    const [snipper, setSnipper] = useState(false);
    const [guid, setGuid] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [captchaWord, setCaptchaWord] = useState("");
    const [reCap, setRecap] = useState(false);
    const getCaptcha = async () => {
        try {
            const response = await axios.get(apiUrl + "Captcha/generate", {
                'X-Frame-Options': 'Deny',
                'X-Content-Type-Options': "nosniff",
                'X-XSS-Protection': "1; mode=block",
                "Referrer-Policy": "same-origin",
                "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"

            });
            console.log(555)
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                console.log(response.data)

                // setStatuses(response.data)
                // setSelectedBox(true)
                setCaptchaWord(response.data)
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getCaptcha();
    }, [reCap]);
    let navigate = useNavigate();

    const handleClick = event => {

        setIsModalOpen(true);

    };

    const login = () => {
        console.log(captcha)
        console.log(pass)

        if (!pass || !user) {
            if (!pass) {
                console.log(53)
                handleClick()
                setErPass(true)
                setRecap(!reCap)

            }
            if (!user) {
                handleClick()
                setErUser(true)
                setRecap(!reCap)
            }
            //     if (captchaIn !== captcha) {
            //         handleClick()
            //         setErCaptcha(true)
            // setRecap(!reCap)
            //     }
        }
        else {

            setErPass(false)
            setErUser(false)
            console.log(pass)
            console.log(captchaIn)
            const CapId = captchaWord.captchaId;
            // if(validateCaptcha(captcha)==false||!user || !pass){
            if (!user || !pass) {

                handleClick()
                console.log(52)
                setRecap(!reCap)

            }
            else {
                setSnipper(true)
                axios
                    .post(apiUrl + "Auth/Login", {
                        nationalCode: user.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
                        password: pass.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
                        CaptchaInput: captchaIn,
                        CaptchaId: CapId
                    })
                    .then(function (response) {
                        console.log(123456)
                        console.log(response)

                        if (response.request.status == 200) {
                            const cookies = new Cookies();
                            cookies.set('token', response.data.token, { path: '/',
                                //    httpOnly:true,
                                    secure:true,
                                    sameSite:"Strict", })

                            // console.log(response.data.token)
                            setSnipper(false)
                            if (response.data.role == "User") {
                                cookies.set('Role', response.data.role, { path: '/',
                                        // httpOnly:true,
                                    secure:true,
                                    sameSite:"Strict",
                                    
                                }
                            )
                                cookies.set('Name', response.data.name + " " + response.data.family, { path: '/' ,
                                        // httpOnly:true,
                                    secure:true,
                                    sameSite:"Strict",})
                                cookies.set('Status', response.data.userStatusId, { path: '/',
                                        // httpOnly:true,
                                    secure:true,
                                    sameSite:"Strict", })
                                let status = response.data.userStatusId;
                                if (status == 1) {

                                    navigate("/user/startRequest");
                                }
                                else if (status == 2) {

                                    navigate("/user/dashboardProcess");
                                }
                                else if (status == 4) {

                                    navigate("/user/dashboardRejected");
                                }
                                else if (status == 7) {

                                    navigate("/user/dashboardRejectedReasonEmployment");
                                }
                                else {
                                    navigate("/user/dashboard");
                                }
                            }
                            if (response.data.role == "Expert") {
                                cookies.set('Role', response.data.role, { path: '/' })
                                // cookies.set('Role',response.data.role, { path: '/karshenas' })
                                cookies.set('token', response.data.token, { path: '/karshenas' })
                                cookies.set('token', response.data.token, { path: '/karshenas/viewRequest' })

                                navigate("/Expert/dashboard");
                            }
                            if (response.data.role == "Admin") {
                                cookies.set('Role', response.data.role, { path: '/' })

                                cookies.set('Role', response.data.role, { path: '/admin' })

                                navigate("/Expert/dashboard");
                            }
                            if (response.data.role == "SuperAdmin") {
                                cookies.set('Role', response.data.role)

                                navigate("/mainAdmin/dashboard");
                            }
                            if (response.data.role == "Agent") {
                                cookies.set('Role', response.data.role)

                                navigate("/user/startRequest");
                            }
                        }
                        else {
                            handleClick()
                            setSnipper(false)
                            setRecap(!reCap)

                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        handleClick()
                        // setErPass(true)
                        setSnipper(false)
                        setRecap(!reCap)

                    });

            }

        }
    }

    useEffect(() => {
        if (isModalOpen && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1); // کاهش زمان هر ثانیه
            }, 1000); // هر ۱۰۰۰ میلی‌ثانیه = ۱ ثانیه

            return () => clearTimeout(timer); // پاکسازی تایمر
        } else if (countdown === 0) {
            setIsModalOpen(false); // بستن مدال وقتی زمان به صفر رسید
        }
    }, [isModalOpen, countdown]);
    return (
        <div className="w-full bg-none flex justify-center">
            {/*<div className='w-[35%] xl:w-[55%] xl:md:w-[85%] xl:md:xs:w-[96%]'>*/}
            <div className='w-full'>
                <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                    <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری ندارید؟</p>
                    <Link to={"/signup"} className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> ثبت نام کنید</Link>
                </div>
                <div className="w-[100%] bg-white shadow-mainBoxShadow h-[590px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                    <div className='flex justify-center mb-[39px]'>
                        <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>ورود به حساب کاربری</p>
                    </div>
                    <div>
                        <div>
                            <MainInput onChange={(e) => setUser(e.target.value)} max={20} error={erUser} errorText={"نام کاربری وارد کنید"} label={'کدملی'} />
                        </div>
                        <div className='mt-[30px]'>
                            <MainInput password={true} onChange={(e) => setPass(e.target.value)} min={8} max={12} label={'رمز عبور'} error={erPass} errorText={"رمز عبور را وارد کنید"} leftIcon={<PassIcon />} />
                        </div>
                        <div className='mt-[30px] flex items-end'>
                            <MainInput onChange={(e) => setCaptchaIn(e.target.value)} max={4} onKeyPress={(event) => {
                               
                                if (/[a-z]/.test(event.key)) {
                                    event.preventDefault();
                                }
                                if (/[A-Z]/.test(event.key)) {
                                    event.preventDefault();
                                }
                               
                            }} type="" label={<div className='flex items-center'><p className='font-IRANYekanBold text-mainBlue text-[16px] u390:text-[12px]'>کد امنیتی</p><p className='font-IRANYekanBold text-mainBlue text-[10px] mr-[6px]'>(بدون فاصله وارد کنید)</p></div>} />
                            <div className="flex mr-1 mb-[-7px] h-[48px] w-[230px] items-end">
                                {/* <Captcha className="flex " setWord={setCaptcha} ref={captchaRef} reloadText=""
                                    persianChars={true} fontFamily={"IRANSans"} backgroundColor={"#0a2867"} fontColor="#fff" border="1px solid #000" />
                               */}
                                <img
                                    src={`data:image/png;base64,${captchaWord?.imageData}`}
                                    alt="Base64"
                                // style={{ width: "200px", height: "auto" }}
                                />
                                <button
                                    //  onClick={() => captchaRef.current.initializeCaptcha()} 
                                    onClick={() => setRecap(!reCap)}
                                    className="mr-1 mb-3">
                                    <Reload />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[31px]">
                        <div className="mb-2"><MainChekbox label={'مرا به خاطر بسپار'} /></div>
                        <div className="mb-2"><MainButton onClickFunction={login} label={'ورود'} /></div>
                        <Link to={"/forgetpassword"} className="font-IRANYekanBold text-[15px] focus:text-buttonBlue focus:border-buttonBlue text-mainBlue border-b-[1px] border-mainBlue border-dashed pb-[2px]">فراموشی رمز عبور</Link>

                    </div>

                </div>
                {isModalOpen ?
                    <Alert error={true} text={"نام کاربری یا رمز عبور نادرست می باشد"} title={"خطا"} />
                    :
                    null}
                <div className="w-[100%] bg-none flex justify-center">
                    <p className="font-IRANYekanBold text-[10px] text-mainBlue">تمامی حقوق مادی و معنوی این سامانه، متعلق به وزارت تعاون، کار و رفاه اجتماعی می‌باشد.</p>
                </div>

            </div>
        </div>
    );
};

export default LoginMain;