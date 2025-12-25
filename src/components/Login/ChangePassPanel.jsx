import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { MainInput, MainButton } from "../../components";
import Reload from '../../assets/icon/login/Return';
import Left from '../../assets/icon/login/LeftPic';
import { Captcha } from "@nabidam/react-captcha";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import crypto from "crypto-js";
import { apiUrl } from "../../commons/inFormTypes";
const ChangePassPanel = () => {

    const [captcha, setCaptcha] = useState('');
    const [check, setCheck] = useState(false);
    const captchaRef = useRef();
    const navigate = useNavigate();
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
    // Validation Schema
    const validationSchema = Yup.object().shape({
        nationalCode: Yup.string()
            .required('کدملی الزامی است')
        // .matches(/^[0-9]{10}$/, 'کدملی باید 10 رقم باشد'),

    });

    // Initial Values
    const initialValues = {
        nationalCode: '',
        captcha: ''



    };

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {

        console.log('Form values:', values);

        // var hash = crypto.SHA512(captcha).toString()
        const CapId = captchaWord.captchaId;
        try {
            var updateOrg = await axios?.post(apiUrl + "Auth/ForgetPassword", {
                NationalCode: values.nationalCode?.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)),
                CaptchaInput: values.captcha,
                CaptchaId: CapId
            }, {
                headers: {
                    // Authorization: `Bearer ${hash}`,
                    'X-Frame-Options': 'Deny',
                    'X-Content-Type-Options': "nosniff",
                    'X-XSS-Protection': "1; mode=block",
                    "Referrer-Policy": "same-origin",
                    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload"
                }
            });
            if (updateOrg?.status == 200 || updateOrg?.status == 204) {

                setSubmitting(false);
                // navigate("/user/startRequest");
                navigate("/verifyChange", {
                    state: {
                        NationalCode: values.nationalCode,
                        Cap: captcha,

                    }
                });
            }
            else {
                console.log(55)

                alert(updateOrg?.response?.data)
                setRecap(!reCap)
            }
        } catch (error) {
            if (error?.response) {
                console.log(55)
                console.log(error?.response)

                alert(error?.response?.data)
                setRecap(!reCap)
            }
        }




    };

    return (
        <div className="w-full bg-none flex justify-center">
            <div className='w-[30%] xl:w-[55%] xl:md:w-[85%] xl:md:xs:w-[96%]'>
                {/* <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                    <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری ندارید؟</p>
                    <Link className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> ثبت نام کنید</Link>
                </div> */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                        <Form className="w-[100%] bg-white shadow-mainBoxShadow h-auto md:h-[960px] py-[35px] px-[24px] mb-2 rounded-[15px]">

                            <div className="w-[100%] bg-white shadow-mainBoxShadow h-[522px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                                <div className='flex justify-center mb-[39px]'>
                                    <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>تغییر رمزعبور</p>
                                </div>
                                <div>
                                    <div>
                                        <MainInput
                                            label="کدملی"
                                            necessary={true}
                                            value={values.nationalCode}
                                            onChange={(e) => setFieldValue('nationalCode', e.target.value)}
                                            error={touched.nationalCode && errors.nationalCode}
                                            errorText={errors.nationalCode}
                                        />                        </div>

                                    <div className='mt-[30px] flex items-end'>
                                        <MainInput
                                            onChange={(e) => setFieldValue('captcha', e.target.value)}

                                            label={<div className='flex items-center'
                                                max={4} onKeyPress={(event) => {
                                                
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
                                </div>
                                <div className="mt-[31px]">
                                    <div>
                                        <MainButton
                                            type="submit"
                                            label={
                                                <div className="flex justify-center items-center">
                                                    <p className="font-IRANYekanBold text-[16px] text-white ml-2">
                                                        {isSubmitting ? 'در حال پردازش...' : 'ادامه'}
                                                    </p>
                                                    <Left />
                                                </div>
                                            }
                                            disabled={isSubmitting}
                                        /></div>
                                </div>

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

export default ChangePassPanel;