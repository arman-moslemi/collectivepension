import React, { useState, useEffect } from "react";
import {
    MainButton,
    MainModal,
    MainExplanation,
    MainPicText,
    MainInput,
    MainTable
} from "../../components";
import { useNavigate } from "react-router-dom";
import RequestResponsePic from "../../assets/img/user/RequestResponsePic.png";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import DefExpertPenIcon from "../../assets/icon/expert/DefExpertPenIcon";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
const titleRow = [
    "ردیف",
    "تاریخ",
    "زمان ورود",
    "زمان خروج",
    "مدت حضور",
    "سابقه اعلام شده",
    "مبلغ اعلام شده",
    "اعتراض بررسی شده",
    "احکام صادر شده"
];

const list = [
    {
        item1: "1",
        item2: "1404/02/08",
        item3: "11:25",
        item4: "12:25",
        item5: "1:00",
        item6: "12",
        item7: "12",
        item8: "5",
        item9: "2"
    }, {
        item1: "1",
        item2: "1404/02/08",
        item3: "11:25",
        item4: "12:25",
        item5: "1:00",
        item6: "12",
        item7: "12",
        item8: "5",
        item9: "2"
    }, {
        item1: "1",
        item2: "1404/02/08",
        item3: "11:25",
        item4: "12:25",
        item5: "1:00",
        item6: "12",
        item7: "12",
        item8: "5",
        item9: "2"
    }

];

const data = [
    {
        name: 'احکام صادرشده',
        uv: 200
    }, {
        name: 'اعتراضات پاسخ‌داده',
        uv: 950
    }, {
        name: 'اعتراضات باز',
        uv: 500
    }, {
        name: 'انتظار تایید ثانویه',
        uv: 100
    }, {
        name: 'مبلغ اعلام‌شده',
        uv: 180
    }, {
        name: 'در انتظار مبلغ',
        uv: 650
    }, {
        name: 'سابقه اعلام‌شده',
        uv: 730
    }, {
        name: 'در انتظار سابقه',
        uv: 240
    }, {
        name: 'انتظار تایید اولیه',
        uv: 200
    }
];

const ExpertDefinition = () => {
    const [thereIsExpert, setThereIsExpert] = useState(false);
    const [expertDefinitionModal, setExpertDefinitionModal] = useState(false);
    const [expertData, setExpertData] = useState(null);
    const [name, setName] = useState();
    let navigate = useNavigate();

    const initialValues = {
        Family: '',
        NationalCode: '',
        MobileNumber: '',
        Username: '',
        Password: ''
    };

    const handleSubmit =async (values, { setSubmitting }) => {
        try {
                 console.log(values)
            // Here you would typically call your API
             const payload = {
                    ...values,
                    Name:name
                  
                  };
              const response=  await axiosReq("Experts/CreateExpert", "post", payload);
            
            console.log(response)
            if (response?.status === 200 || response?.status === 204) {

           
                setThereIsExpert(!thereIsExpert);
            }
        } catch (error) {
            console.error("Error creating expert:", error);
        } finally {
            setSubmitting(false);
        }
    };
    const expertSchema = Yup.object().shape({
        Names: Yup.string().required('نام الزامی است'),
        Family: Yup.string().required('نام خانوادگی الزامی است'),
        NationalCode: Yup.string()
            .matches(/^[0-9]{10}$/, 'کدملی باید 10 رقم باشد')
            .required('کدملی الزامی است'),
        MobileNumber: Yup.string()
            .matches(/^[0-9]{11}$/, 'شماره موبایل باید 11 رقم باشد')
            .required('شماره تماس الزامی است'),
        Username: Yup.string().required('نام کاربری الزامی است'),
        Password: Yup.string()
            .min(6, 'رمز عبور باید حداقل 6 کاراکتر باشد')
            .required('رمز عبور الزامی است')
    });
    const GetData = async () => {
        try {

            const response = await axiosReq("Experts/GetExpertDetails", "get");
            console.log(response)
            if (response?.status === 200 || response?.status === 204) {

                setExpertData(response.data);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        GetData();
    }, [thereIsExpert]);
    return (
        <div classNames="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            {thereIsExpert && expertData ? (
                <div classNames="w-full">
                    <div classNames="w-full flex justify-end items-center mt-3">
                        <div classNames="w-[187px]">
                            <MainButton
                                label={
                                    <div classNames="flex">
                                        <p classNames="text-[16px] font-IRANYekanBold text-white ml-[15px]">ویرایش کارشناس</p>
                                        <DefExpertPenIcon />
                                    </div>
                                }
                                onClickFunction={() => setExpertDefinitionModal(true)}
                            />
                        </div>
                    </div>

                    <div classNames="w-full flex justify-between flex-wrap items-center mt-8 md:my-2">
                        <div classNames="flex md:my-2">
                            <p classNames="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">نام کارشناس :</p>
                            <p classNames="font-IRANYekanBold text-[14px] text-mainBlue">{expertData.name} {expertData.family}</p>
                        </div>
                        <div classNames="flex md:my-2">
                            <p classNames="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">نام کاربری :</p>
                            <p classNames="font-IRANYekanBold text-[14px] text-mainBlue">{expertData.username}</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-between flex-wrap items-center mt-4 md:my-2">
                        <div className="flex">
                            <p className="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">کدملی :</p>
                            <p className="font-IRANYekanBold text-[14px] text-mainBlue">{expertData.nationalCode}</p>
                        </div>
                        <div className="flex md:my-2">
                            <p className="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">شماره تماس :</p>
                            <p className="font-IRANYekanBold text-[14px] text-mainBlue">{expertData.mobileNumber}</p>
                        </div>
                    </div>

                    {/* ... rest of your existing UI for when there is an expert ... */}
                </div>
            ) : (
                <div className="w-full pt-12 pb-16">
                    <MainPicText
                        pic={RequestResponsePic}
                        text={
                            <div>
                                <p className="text-mainBlue text-[20px] md:text-[12px] font-IRANYekanBold">
                                    شما تاکنون کارشناسی تعریف نکرده‌اید !
                                </p>
                            </div>
                        }
                        pageButton={
                            <div className="flex">
                                <div className="ml-3 w-[186px] md:w-[150px]">
                                    <MainButton
                                        onClickFunction={() => setExpertDefinitionModal(true)}
                                        label={'تعریف کارشناس'}
                                    />
                                </div>
                            </div>
                        }
                    />
                </div>
            )}

            {expertDefinitionModal && (
                <MainModal
                    big={false}
                    title={'تعریف کارشناس'}
                    setShowModal={setExpertDefinitionModal}
                    text={
                        <Formik
                            initialValues={initialValues}
                               validationSchema={expertSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ values, isSubmitting, setFieldValue, errors, touched }) => (
                                <Form className="w-full grid grid-cols-2 gap-4">
                                    <div>
                                        <MainInput
                                            label={'نام'}
                                            value={values.Names}
                                            name="Names"
                                            onChange={(e) => setName( e.target.value)}
                                            holder={'نام را بنویسید'}
                                            // error={name.length==0}
                                            // errorText={'نام را بنویسید'}
                                        />
                                    </div>
                                    <div>
                                        <MainInput
                                            label={'نام خانوادگی'}
                                            name="Family"
                                            value={values.Family}
                                            onChange={(e) => setFieldValue('Family',  e.target.value)}
                                            holder={'نام خانوادگی را بنویسید'}
                                            error={touched.Family && errors.Family}
                                            errorText={errors.Family}
                                        />
                                    </div>
                                    <div>
                                        <MainInput
                                            label={'کدملی'}
                                            name="NationalCode"
                                            value={values.NationalCode}
                                          onChange={(e) => setFieldValue('NationalCode',  e.target.value)}

                                            holder={'کدملی را بنویسید'}
                                            error={touched.NationalCode && errors.NationalCode}
                                            errorText={errors.NationalCode}
                                        />
                                    </div>
                                    <div>
                                        <MainInput
                                            label={'شماره تماس'}
                                            name="MobileNumber"
                                            value={values.MobileNumber}
                                            onChange={(e) => setFieldValue('MobileNumber',  e.target.value)}
                                            holder={'شماره تماس را بنوسید'}
                                            error={touched.MobileNumber && errors.MobileNumber}
                                            errorText={errors.MobileNumber}
                                        />
                                    </div>
                                    <div>
                                        <MainInput
                                            label={'نام کاربری'}
                                            name="Username"
                                            value={values.Username}
                                            onChange={(e) => setFieldValue('Username',  e.target.value)}
                                            holder={'نام کاربری را بنویسید'}
                                            error={touched.Username && errors.Username}
                                            errorText={errors.Username}
                                        />
                                    </div>
                                    <div>
                                        <MainInput
                                            label={'رمزعبور'}
                                            name="Password"
                                            type="password"
                                            value={values.Password}
                                            onChange={(e) => setFieldValue('Password',  e.target.value)}
                                            holder={'رمز عبور را بنویسید'}
                                            error={touched.Password && errors.Password}
                                            errorText={errors.Password}
                                        />
                                    </div>
                                    <div className="h-full flex justify-center items-end col-span-2 mt-6">
                                        <div className="w-[60%]">

                                    <MainButton
                                        type="submit"
                                        label={isSubmitting ? 'در حال ثبت...' : 'ثبت کارشناس'}
                                        disabled={isSubmitting}
                                    />
                                        </div>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    }
                    // modalButton={
                    //     <div className="w-full flex justify-center">
                    //         <div className="w-[134px]">
                    //         </div>
                    //     </div>
                    // }
                />
            )}

        </div>
    );
};

export default ExpertDefinition;