import { MainExplanation, MainInput, MainButton, MainRadioInput } from "../../components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const UpdateUserBaseInfoHimself = () => {
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        name: '',
        family: '',
        fatherName: '',
        birthDate: '',
        nationalCode: '',
        isMan: '',
        // Editable fields:
        idcardNumber: '',
        phoneNumber: '',
        mobileNumber: '',
        address: '',
        isRetirement: '', // 'بازنشستگی' or 'از کار افتادگی کلی'
        personnelCode: ''
    });

    const validationSchema = Yup.object().shape({
        idcardNumber: Yup.string().required('شماره شناسنامه الزامی است'),
        phoneNumber: Yup.string().required('شماره ثابت الزامی است').matches(/^[0-9]{8,11}$/, 'شماره تلفن ثابت معتبر نیست'),
        mobileNumber: Yup.string()
            .required('شماره همراه الزامی است')
            .matches(/^09[0-9]{9}$/, 'شماره همراه معتبر نیست'),
        address: Yup.string().required('آدرس الزامی است'),
        personnelCode: Yup.string().required('کد پرسنلی الزامی است'),
        isRetirement: Yup.string().required('نوع درخواست مستمری الزامی است')
    });

    const getUser = async () => {
        try {
            const response = await axiosReq("Users/GetUser", "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                setInitialValues(prev => ({
                    ...prev,
                    ...response.data,
                    // Map API response to our form fields if needed
                }));
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            // Prepare only editable fields for API
            const updateData = {
                idcardNumber: values.idcardNumber,
                phoneNumber: values.phoneNumber,
                mobileNumber: values.mobileNumber,
                address: values.address,
                isRetirement: values.isRetirement,
                personnelCode: values.personnelCode
            };

            const response = await axiosReq("Users/UpdateUserInfo", "put", updateData);
            if (response?.status === 200) {
                navigate('../createUserInsuranceDes');
            }
        } catch (error) {
            console.error("Update failed:", error);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            {/* Progress steps (unchanged) */}
            <div className="flex justify-start items-center">
                {/* ... your existing progress steps JSX ... */}
            </div>

            <div className="w-full mt-[32px] mb-[40px]">
                <MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'} />
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ values, setFieldValue, isSubmitting, errors, touched }) => (
                    <Form className="px-[90px] w-full grid grid-cols-3 gap-4">
                        {/* Read-only fields */}
                        <div className="mb-5">
                            <MainInput label={'نام'} value={values.name} necessary={true} disable={true} />
                        </div>
                        <div className="mb-5">
                            <MainInput label={'نام خانوادگی'} value={values.family} necessary={true} disable={true} />
                        </div>
                        <div className="mb-5">
                            <MainInput label={'نام پدر'} value={values.fatherName} necessary={true} disable={true} />
                        </div>
                        <div className="mb-5">
                            <MainInput label={'تاریخ تولد'} value={values.birthDate} necessary={true} disable={true} />
                        </div>
                        <div className="mb-5">
                            <MainInput label={'کدملی'} value={values.nationalCode} necessary={true} disable={true} />
                        </div>
                        <div className="mb-5">
                            <MainInput label={'جنسیت'} value={values.isMan ? "مرد" : "زن"} necessary={true} disable={true} />
                        </div>

                        {/* Editable fields */}
                        <div className="mb-5">
                            <MainInput
                                label={'شماره شناسنامه'}
                                value={values.idcardNumber}
                                onChange={(e) => setFieldValue('idcardNumber', e.target.value)}
                                holder={'مثلا 8888'}
                                necessary={true}
                                error={touched.idcardNumber && errors.idcardNumber}
                                errorText={errors.idcardNumber}
                            />
                        </div>
                        <div className="mb-5">
                            <MainInput
                                label={'شماره تلفن ثابت'}
                                value={values.phoneNumber}
                                onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
                                holder={'مثلا 02144665522'}
                                necessary={true}
                                error={touched.phoneNumber && errors.phoneNumber}
                                errorText={errors.phoneNumber}
                            />
                        </div>
                        <div className="mb-5">
                            <MainInput
                                label={'شماره تلفن همراه'}
                                value={values.mobileNumber}
                                onChange={(e) => setFieldValue('mobileNumber', e.target.value)}
                                holder={'مثلا 09123333333'}
                                necessary={true}
                                error={touched.mobileNumber && errors.mobileNumber}
                                errorText={errors.mobileNumber}
                            />
                        </div>
                        <div className="col-span-3 mb-5">
                            <MainInput
                                label={'آدرس'}
                                value={values.address}
                                onChange={(e) => setFieldValue('address', e.target.value)}
                                holder={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}
                                necessary={true}
                                error={touched.address && errors.address}
                                errorText={errors.address}
                            />
                        </div>
                        <div className="col-span-2">
                            <MainRadioInput
                                title={'نوع درخواست مستمری جمع'}
                                radioName={'isRetirement'}
                                text1={'بازنشستگی'}
                                value1={true}
                                text2={'از کار افتادگی کلی'}
                                value2={false}

                                onChange={(value) => setFieldValue('isRetirement', value)}
                                selectedValue={values.isRetirement}
                            />
                        </div>
                        <div className="col-span-1">
                            <MainInput
                                label={'کد پرسنلی'}
                                value={values.personnelCode}
                                onChange={(e) => setFieldValue('personnelCode', e.target.value)}
                                holder={'مثلا 12569'}
                                necessary={true}
                                error={touched.personnelCode && errors.personnelCode}
                                errorText={errors.personnelCode}
                            />
                        </div>
                        <div className="col-span-3 mt-[33px] flex justify-end items-center">
                            <div className="w-[140px]">
                                <MainButton
                                    type="submit"
                                    label={isSubmitting ? 'در حال ذخیره...' : 'گام بعدی'}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateUserBaseInfoHimself;