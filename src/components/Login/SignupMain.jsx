import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MainInput, MainButton, MainRadioInput, MainChekbox } from "../../components";
import PassIcon from "../../assets/icon/general/InputPassIcon";
import Reload from '../../assets/icon/login/Return';
import Left from '../../assets/icon/login/LeftPic';
import { Captcha } from "@nabidam/react-captcha";
import { axiosReq } from "../../commons/axiosReq";
import axios from "axios";
import crypto from "crypto-js";
import { apiUrl } from "../../commons/inFormTypes";

const SignupMain = () => {
    const [captcha, setCaptcha] = useState('');
    const [check, setCheck] = useState(false);
    const captchaRef = useRef();
    const navigate = useNavigate();

    // Validation Schema
    const validationSchema = Yup.object().shape({
        nationalCode: Yup.string()
            .required('کدملی الزامی است')
            .matches(/^[0-9]{10}$/, 'کدملی باید 10 رقم باشد'),
        birthDate: Yup.string()
            .required('تاریخ تولد الزامی است'),
        phoneNumber: Yup.string()
            .required('شماره تلفن همراه الزامی است')
            .matches(/^09[0-9]{9}$/, 'شماره تلفن همراه معتبر نیست'),
        captcha: Yup.string()
            .required('کد امنیتی الزامی است')
            .test('captcha', 'کد امنیتی نادرست است', (value) => value === captcha),
        password: Yup.string()
            .required('رمزعبور الزامی است')
            .min(8, 'رمزعبور باید حداقل 8 کاراکتر باشد'),
        confirmPassword: Yup.string()
            .required('تکرار رمزعبور الزامی است')
            .oneOf([Yup.ref('password'), null], 'رمزعبور و تکرار آن باید یکسان باشند')
    });

    // Initial Values
    const initialValues = {
        nationalCode: '',
        birthDate: '',
        phoneNumber: '',
        captcha: '',
        password: '',
        confirmPassword: '',
        deceasedNationalCode: '',
        deceasedBirthDate: '',

    };
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

    // Submit Handler
    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('Form values:', values);

        const CapId = captchaWord.captchaId;

        var updateOrg = await axios.post(apiUrl + "Auth/SMS1", {
            NationalCode: values.nationalCode,
            Mobile: values.phoneNumber,
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
        console.log(updateOrg)
        if (updateOrg?.status == 200 || updateOrg?.status == 204) {

            setSubmitting(false);
            // navigate("/user/startRequest");
            navigate("/verify", {
                state: {
                    NationalCode: values.nationalCode,
                    Mobile: values.phoneNumber,
                    Cap: captcha,
                    Password: values.password,
                    BirthDate: values.birthDate,
                    DeceasedNationalCode: values.deceasedNationalCode,
                    DeceasedBirthDate: values.deceasedBirthDate
                }
            });
        }
        else {
            setRecap(!reCap)
            alert(updateOrg.data)
        }



    };

    return (
        <div className="w-full bg-none flex justify-center">
            <div className='w-[55%] xl:w-[89%] xl:md:w-[96%]'>
                <div className="w-[100%] bg-none flex justify-end items-center mb-2">
                    <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-1'>حساب کاربری دارید؟</p>
                    <Link to="/login" className='font-IRANYekanExtra text-[14px] text-mainBlue ml-2'> وارد شوید</Link>
                </div>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue, values, errors, touched }) => (
                        <Form className="w-[100%] bg-white shadow-mainBoxShadow h-auto md:h-[960px] py-[35px] px-[24px] mb-2 rounded-[15px]">
                            <div className='flex justify-center mb-[39px]'>
                                <p className='font-IRANYekanExtra text-[20px] text-mainBlue'>ثبت نام در سامانه</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                                {/* National Code */}
                                <MainInput
                                    label="کدملی"
                                    necessary={true}
                                    value={values.nationalCode}
                                    max={10}
                                    min={10}
                                    onKeyPress={(event) => {
                                        if (/[a-z]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                        if (/[A-Z]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                        if (/[۱-۹]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                        if (/[آ-ی]/.test(event.key)) {
                                            event.preventDefault();
                                        }

                                    }}
                                    onChange={(e) => setFieldValue('nationalCode', e.target.value)}
                                    error={touched.nationalCode && errors.nationalCode}
                                    errorText={errors.nationalCode}
                                />

                                {/* Birth Date */}
                                <MainInput
                                    label="تاریخ تولد"
                                    necessary={true}
                                    date={true}
                                    value={values.birthDate}

                                    onChange={(value) => setFieldValue('birthDate', value)}
                                    error={touched.birthDate && errors.birthDate}
                                    errorText={errors.birthDate}
                                />

                                {/* Phone Number */}
                                <MainInput
                                    label="شماره تلفن همراه"
                                    necessary={true}
                                    onKeyPress={(event) => {
                                        if (/[a-z]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                        if (/[A-Z]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                        if (/[۱-۹]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                        if (/[آ-ی]/.test(event.key)) {
                                            event.preventDefault();
                                        }

                                    }}
                                    max={11}
                                    min={11}
                                    value={values.phoneNumber}
                                    onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
                                    error={touched.phoneNumber && errors.phoneNumber}
                                    errorText={errors.phoneNumber}
                                />

                                {/* Captcha */}
                                <div className='flex items-end'>
                                    <MainInput
                                        label={
                                            <div className='flex items-center'>
                                                <p className='font-IRANYekanBold text-mainBlue text-[16px] u390:text-[12px]'>کد امنیتی</p>
                                                <p className='font-IRANYekanBold text-mainBlue text-[10px] mr-[6px]'>(بدون فاصله وارد کنید)</p>
                                            </div>
                                        }
                                        onKeyPress={(event) => {
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
                                        value={values.captcha}
                                        onChange={(e) => setFieldValue('captcha', e.target.value)}
                                        error={touched.captcha && errors.captcha}
                                        errorText={errors.captcha}
                                    />
                                    <div className={`flex mr-1  h-[48px] w-[230px] items-end ${touched.captcha && errors.captcha ? "mb-[22px]" : "mb-2"}`}>

                                        <img
                                            src={`data:image/png;base64,${captchaWord?.imageData}`}
                                            alt="Base64"
                                        // style={{ width: "200px", height: "auto" }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setRecap(!reCap)}
                                            className="mr-2"
                                        >
                                            <Reload />
                                        </button>
                                    </div>
                                </div>

                                {/* Password */}
                                <MainInput
                                    label="رمزعبور"
                                    necessary={true}
                                    leftIcon={<PassIcon />}
                                    value={values.password}
                                    password={true}
                                    onChange={(e) => setFieldValue('password', e.target.value)}
                                    error={touched.password && errors.password}
                                    errorText={errors.password}
                                    min={8}
                                    max={12}
                                />

                                {/* Confirm Password */}
                                <MainInput
                                    label="تکرار رمزعبور"
                                    necessary={true}
                                    leftIcon={<PassIcon />}
                                    password={true}
                                    value={values.confirmPassword}
                                    onChange={(e) => setFieldValue('confirmPassword', e.target.value)}
                                    error={touched.confirmPassword && errors.confirmPassword}
                                    errorText={errors.confirmPassword}
                                    min={8}
                                    max={12}
                                />
                            </div>
                            <div className="my-4">
                                <MainChekbox
                                    label={"این کاربر نماینده متوفی است."}
                                    checked={check}
                                    onChange={e => {
                                        const checked = e.target.checked;
                                        setCheck(checked);

                                    }}
                                />

                            </div>
                            {
                                check ?

                                    <div className="my-4 pt-4 border-t border-borderGray">
                                        <span className="text-mainBlue font-IRANYekanExtra">
                                            اطلاعات متوفی
                                        </span>
                                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-4">
                                            {/* National Code */}
                                            <MainInput
                                                label="کدملی"
                                                necessary={true}
                                                value={values.deceasedNationalCode}
                                                onChange={(e) => setFieldValue('deceasedNationalCode', e.target.value)}
                                                error={touched.deceasedNationalCode && errors.deceasedNationalCode}
                                                errorText={errors.deceasedNationalCode}
                                            />

                                            {/* Birth Date */}
                                            <MainInput
                                                label="تاریخ تولد"
                                                necessary={true}
                                                date={true}
                                                value={values.deceasedBirthDate}
                                                onChange={(value) => setFieldValue('deceasedBirthDate', value)}
                                                error={touched.deceasedBirthDate && errors.deceasedBirthDate}
                                                errorText={errors.deceasedBirthDate}
                                            />
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <div className="mt-[31px] w-[100%] flex justify-center">
                                <div className="w-[40%] c550:w-[100%]">
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
                                    />
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>

                <div className="w-[100%] bg-none flex justify-center mb-4">
                    <p className="font-IRANYekanBold text-[10px] text-mainBlue">تمامی حقوق مادی و معنوی این سامانه، متعلق به وزارت تعاون، کار و رفاه اجتماعی می‌باشد.</p>
                </div>
            </div>
        </div>
    );
};

export default SignupMain;