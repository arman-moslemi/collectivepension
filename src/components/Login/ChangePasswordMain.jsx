import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MainInput, MainButton } from "../../components";
import Reload from '../../assets/icon/login/Return';
import PassIcon from "../../assets/icon/general/InputPassIcon";
import { Captcha } from "@nabidam/react-captcha";
import axios from "axios";
import { apiUrl } from "../../commons/inFormTypes";
import Countdown from 'react-countdown';
import crypto from "crypto-js";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Left from '../../assets/icon/login/LeftPic';
import { useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ChangePasswordMain = () => {

    const [captcha, setCaptcha] = useState()
    const captchaRef = useRef();
    const navigate = useNavigate();
    const { state } = useLocation();

    // Validation Schema
    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('رمزعبور الزامی است')
            .min(8, 'رمزعبور باید حداقل 8 کاراکتر باشد'),
        confirmPassword: Yup.string()
            .required('تکرار رمزعبور الزامی است')
            .oneOf([Yup.ref('password'), null], 'رمزعبور و تکرار آن باید یکسان باشند')
    });
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

    // Initial Values
    const initialValues = {

        password: '',
        confirmPassword: '',


    };

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('Form values:', values);
        console.log(state)
        // var hash = crypto.SHA512(state?.Cap).toString()
        const CapId = captchaWord.captchaId;
                        const cookies = new Cookies();

        var updateOrg = await axios.post(apiUrl + "Auth/NewPassword", {
            NewPassword: values.password,
            Username: state?.Username?.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
            CaptchaInput: values.captcha,
            CaptchaId: CapId
        }, {
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
                'X-Frame-Options': 'Deny',
                'X-Content-Type-Options': "nosniff",
                'X-XSS-Protection': "1; mode=block",
                "Referrer-Policy": "same-origin",
                "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
            }
        });
        console.log(updateOrg)
        if (updateOrg?.status == 200 || updateOrg?.status == 204) {

            setSubmitting(false);
            // navigate("/user/startRequest");
            alert("رمز با موفقیت تغییر کرد.")
            navigate("/login")
        }
        else {
            alert(updateOrg.data)
        }



    };

    return (
        <div className="w-full bg-none flex justify-center">
            <div className='w-[30%] xl:w-[55%] xl:md:w-[85%] xl:md:xs:w-[96%]'>
                <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                    <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری ندارید؟</p>
                    <Link className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> ثبت نام کنید</Link>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                        <Form className="w-[100%] bg-white shadow-mainBoxShadow h-auto md:h-[960px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                            <div className='flex justify-center mb-[39px]'>
                                <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>تغییر رمزعبور</p>
                            </div>
                            <div>
                                <div>
                                    <MainInput label="رمزعبور"
                                        necessary={true}
                                        leftIcon={<PassIcon />}
                                        value={values.password}
                                        password={true}
                                        onChange={(e) => setFieldValue('password', e.target.value)}
                                        error={touched.password && errors.password}
                                        errorText={errors.password}
                                        min={8}
                                        max={12} />
                                </div>
                                <div className='mt-[30px]'>
                                    <MainInput label="تکرار رمزعبور"
                                        necessary={true}
                                        leftIcon={<PassIcon />}
                                        password={true}
                                        value={values.confirmPassword}
                                        onChange={(e) => setFieldValue('confirmPassword', e.target.value)}
                                        error={touched.confirmPassword && errors.confirmPassword}
                                        errorText={errors.confirmPassword}
                                        min={8}
                                        max={12} />
                                </div>

                                <div className='mt-[30px] flex items-end'>
                                    <MainInput label={<div className='flex items-center'
                                        max={4} onKeyPress={(event) => {
                                            if (/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                            if (/[a-z]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                            if (/[A-Z]/.test(event.key)) {
                                                event.preventDefault();
                                            }

                                        }}
                                    ><p className='font-IRANYekanBold text-mainBlue text-[16px] u390:text-[12px]'>کد امنیتی</p><p className='font-IRANYekanBold text-mainBlue text-[10px] mr-[6px]'>(بدون فاصله وارد کنید)</p></div>} />
                                    <div className="flex mr-1  h-[48px] w-[230px] items-end ">
                                        {/* <Captcha className="flex " setWord={setCaptcha} ref={captchaRef} reloadText=""
                                                persianChars={true} fontFamily={"IRANSans"} backgroundColor={"#0a2867"} fontColor="#fff" border="1px solid #000" /> */}
                                        <img
                                            src={`data:image/png;base64,${captchaWord?.imageData}`}
                                            alt="Base64"
                                        // style={{ width: "200px", height: "auto" }}
                                        />
                                        <button onClick={() => setRecap(!reCap)} className="mr-2">
                                            <Reload />
                                        </button>
                                    </div>
                                </div>
                                {/* <div className='mt-[30px] flex items-end'>
                            <MainInput label={<div className='flex items-center'><p className='font-IRANYekanBold text-mainBlue text-[16px] u390:text-[12px]'>کد امنیتی</p><p className='font-IRANYekanBold text-mainBlue text-[10px] mr-[6px]'>(بدون فاصله وارد کنید)</p></div>} />
                            <div className="flex mr-2 mb-2">
                                <Captcha className="flex " setWord={setCaptcha} ref={captchaRef} reloadText=""
                                    persianChars={true} fontFamily={"IRANSans"} backgroundColor={"#0a2867"} fontColor="#fff" border="1px solid #000" />
                                <button onClick={() => captchaRef.current.initializeCaptcha()} className="mr-2">
                                    <Reload />
                                </button>
                            </div>
                        </div> */}
                            </div>
                            <div className="mt-[31px]">
                                <div>   <MainButton
                                    type="submit"
                                    label={
                                        <div className="flex justify-center items-center">
                                            <p className="font-IRANYekanBold text-[16px] text-white ml-2">
                                                {isSubmitting ? 'در حال پردازش...' : 'تغییر رمز'}
                                            </p>
                                            <Left />
                                        </div>
                                    }
                                    disabled={isSubmitting}
                                /></div>
                            </div>

                        </Form>
                    )}
                </Formik>

                <div className="w-[100%] bg-none flex justify-center">
                    <p className="font-IRANYekanBold text-[10px] text-mainBlue">تمامی حقوق مادی و معنوی این سامانه، متعلق به وزارت تعاون، کار و رفاه اجتماعی می‌باشد.</p>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordMain;