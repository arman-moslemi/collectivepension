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




const ExpertDefinition = () => {
    const [thereIsExpert, setThereIsExpert] = useState(false);
    const [expertDefinitionModal, setExpertDefinitionModal] = useState(false);
    const [expertData, setExpertData] = useState();
    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [cha, setCha] = useState([]);
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    const initialValues = {
        Family: expertData?.family || '',
        NationalCode: expertData?.nationalCode || '',
        MobileNumber: expertData?.mobileNumber || '',
        Username: expertData?.userName || '',
        Password: ''
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            console.log(values)
            // Here you would typically call your API
            const payload = {
                ...values,
                Name: name,
                expertId: id

            };
            const response = await axiosReq(id == 0 ? "Experts/CreateExpert" : "Experts/UpdateExpert", id == 0 ? "post" : "put", payload);

            console.log(response)
            if (response?.status === 200 || response?.status === 204) {
                alert(response.data)
                setExpertDefinitionModal(false)
                setThereIsExpert(!thereIsExpert);
            }
        } catch (error) {
            console.error("Error creating expert:", error);
        } finally {
            setSubmitting(false);
        }
    };
    const expertSchema = Yup.object().shape({
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
        // .required('رمز عبور الزامی است')
    });
    const GetData = async () => {
        try {

            const response = await axiosReq("Experts/GetExpertDetails", "get");
            console.log(response)
            if (response?.status === 200 || response?.status === 204) {

                setExpertData(response.data);
                setName(response.data?.name);
                setId(response.data?.expertId)
                var ch = [];
                response.data?.requestsTypesCountDtos?.map((item) => {
                    ch.push({ name: item.requestType, uv: item.count })
                })

                setCha(ch);
                var dd = [];

                response.data?.getReportDtos?.map((item, index) => {
                    dd.push({
                        item1: index + 1,
                        item2: item?.date,
                        item3: item?.loginTime,
                        item4: item?.signOutTime,
                        item5: item?.duration,
                        item6: item?.recordDeclared,
                        item7: item?.pensionDeclared,
                        item8: item?.protestConsidered,
                        item9: item?.docsInserted,
                    })
                    setData(dd)
                })
                setThereIsExpert(true)
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        GetData();
    }, [thereIsExpert]);
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            {expertData ? (
                <div className="w-full">
                    <div className="w-full flex justify-end items-center mt-3">
                        <div className="w-[187px]"><MainButton onClickFunction={() => setExpertDefinitionModal(true)}
                            label={< div className="flex" > <p className="text-[16px] font-IRANYekanBold text-white ml-[15px]">ویرایش کارشناس</p> < DefExpertPenIcon /></div>} /></div>
                    </div>
                    <div className="w-full flex justify-between flex-wrap items-center mt-8 md:my-2">
                        <div className="flex md:my-2">
                            <p className="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">نام کارشناس :</p>
                            <p className="font-IRANYekanBold text-[14px] text-mainBlue">{expertData?.fullName}</p>
                        </div>
                        <div className="flex md:my-2">
                            <p className="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">نام کاربری :</p>
                            <p className="font-IRANYekanBold text-[14px] text-mainBlue">{expertData?.userName}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-between flex-wrap items-center mt-4 md:my-2 ">
                        <div className="flex">
                            <p className="font-IRANYekanExtra text-[15px] text-mainBlue ml-2">کدملی :</p>
                            <p className="font-IRANYekanBold text-[14px] text-mainBlue">{expertData?.nationalCode}</p>
                        </div>
                        <div className="flex md:my-2">
                            <p className="font-IRANYekanExtra text-[15px] text-mainBlue ml-2 ">شماره تماس :</p>
                            <p className="font-IRANYekanBold text-[14px] text-mainBlue">{expertData?.mobileNumber}</p>
                        </div>
                    </div>

                    <div className="w-full border-t-[1px] border-borderGray py-8 mt-8"></div>
                    <div className="w-full overflow-x-auto">
                        <div className="min-w-[600px] h-[350px]">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart
                                    width={600}
                                    height={300}
                                    data={cha}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 30,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis
                                        tickMargin={6} dataKey="name" interval={0} angle={-15} textAnchor="end" tick={{ dx: -50, dy: 35 }} />
                                    <YAxis tickMargin={24} />
                                    <Bar dataKey="uv" barSize={30} fill="#00c1b2" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div
                        className="w-full border-t-[1px] border-borderGray pt-6 flex md:block justify-between items-center mb-5">
                        <p className="font-IRANYekanExtra
                             text-[20px] text-mainBlue md:text-[14px]">گزارش عملکرد کارشناس</p>
                        <div className="w-[129px] md:mr-auto md:w-[100px] md:mt-[10px]"><MainButton label={'گزارش گیری'} /></div>

                    </div>
                    <div className="w-full mb-16">
                        <MainTable cen5={true} list={data} titleRow={titleRow} />

                    </div>
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
                    title={'تعریف یا ویرایش کارشناس'}
                    setShowModal={setExpertDefinitionModal}
                    text={
                        <Formik
                            initialValues={initialValues}
                            validationSchema={expertSchema}
                            onSubmit={handleSubmit}
                            enableReinitialize
                        >
                            {({ values, isSubmitting, setFieldValue, errors, touched }) => (
                                <Form className="w-full grid grid-cols-2 gap-4">
                                    <div>
                                        <MainInput
                                            label={'نام'}
                                            value={name}
                                            name="Names"
                                            onChange={(e) => setName(e.target.value)}
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
                                            onChange={(e) => setFieldValue('Family', e.target.value)}
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
                                            onChange={(e) => setFieldValue('NationalCode', e.target.value)}

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
                                            onChange={(e) => setFieldValue('MobileNumber', e.target.value)}
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
                                            onChange={(e) => setFieldValue('Username', e.target.value)}
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
                                            onChange={(e) => setFieldValue('Password', e.target.value)}
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