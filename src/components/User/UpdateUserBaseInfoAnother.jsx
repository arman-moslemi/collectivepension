import { MainExplanation, MainInput, MainButton, UploadFile } from "../../components";
import { useNavigate } from "react-router-dom";
import Dot from "../../assets/icon/general/Dot";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { apiAsset } from "../../commons/inFormTypes";

const UpdateUserBaseInfoAnother = () => {

    let navigate = useNavigate();
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const [initialValues, setInitialValues] = useState({
        userName: '',
        userFamily: '',
        userFatherName: '',
        userBirthDate: '',
        userNationalCode: '',
        userIsMan: '',
        // Editable fields:
        userIdcardNumber: '',
        userPhoneNumber: '',
        userMobileNumber: '',
        userAddress: '',
        userisRetirement: '', // 'بازنشستگی' or 'از کار افتادگی کلی'
        // userPersonnelCode: '',
        relationship: "",
        agentPhoneNumber: "",
        agentIdcardNumber: "",
        agentMobileNumber: "",
        agentName: "",
        agentFamily: ""
    });

    const validationSchema = Yup.object().shape({
        userIdcardNumber: Yup.string().matches(/[0-9]$/, 'شماره شناسنامه معتبر نیست')
            .required('شماره شناسنامه الزامی است'),
        userPhoneNumber: Yup.string().required('شماره ثابت الزامی است').matches(/^[0-9]{8,11}$/, 'شماره تلفن ثابت معتبر نیست'),
        userMobileNumber: Yup.string()
            .required('شماره همراه الزامی است')
            .matches(/^09[0-9]{9}$/, 'شماره همراه معتبر نیست'),
        userAddress: Yup.string().required('آدرس الزامی است'),

        userIsRetirement: Yup.string().required('نوع درخواست مستمری الزامی است')
    });

    const getUser = async () => {
        try {
            const response = await axiosReq("Users/GetAgent", "get");
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
            console.log(values)
            console.log(validationSchema)
            // Prepare only editable fields for API
            const updateData = {
                IdcardNumber: values.userIdcardNumber,
                PhoneNumber: values.userPhoneNumber,
                MobileNumber: values.userMobileNumber,
                Address: values.userAddress,
                IsRetirement: values.userIsRetirement,
                // PersonnelCode: values.userPersonnelCode,
                PersonnelCode:"1",
                BirthDate: values.userBirthDate,
                AgentAddress: values.agentAddress,
                NationalCode: values.userNationalCode,
                Relationship: values.relationship,
                AgentPhoneNumber: values.agentPhoneNumber,
                AgentIdcardNumber: values.agentIdcardNumber,
                AgentMobileNumber: values.agentMobileNumber,
                AgentName: values.agentName,
                AgentFamily: values.agentFamily,
                InheritanceDoc: files

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


    useEffect(() => {
        handleFileChange()
    }, [file]);
    const handleFileChange = () => {

        if (file?.length > 0) {
            console.log("change")
            console.log(111)
            setFiles([...files, file])
        }
    }
    const download = async (name) => {
        try {
            const response = await axiosReq(`Users/download/${name}`, "get", {
                responseType: "blob", // important!
            });

            if (response.status === 200) {
                // Create a blob from the response
                const blob = new Blob([response.data], { type: response.headers['content-type'] });
                const url = window.URL.createObjectURL(blob);

                // Create a temporary link element
                const a = document.createElement('a');
                a.href = url;
                a.download = name; // you can also extract filename from headers if needed
                document.body.appendChild(a);
                a.click();

                // Cleanup
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        } catch (error) {
            console.error("Error downloading file:", error);
        }
    };
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <div className="flex justify-start px-[32px] items-center">
                <div className="flex justify-start items-center">
                    <div className="rounded-full h-[48px] w-[48px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue "><div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center"><p className="font-IRANYekanExtra text-[18px] text-white">1</p></div></div>
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mx-[6px]">اطلاعات هویتی متقاضی</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-mainBlue flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white">2</p></div>
                    <p className="font-IRANYekanBold text-[15px] text-mainBlue mx-[6px]">اطلاعات در آخرین صندوق بازنشستگی(مقصد)</p>
                    <div className="w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                </div>
                <div className="flex justify-start items-center">
                    <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                    <div className="rounded-full w-[40px] h-[40px] bg-mainBlue flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white">3</p></div>
                    <p className="font-IRANYekanBold text-[15px] text-mainBlue mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
                </div>
            </div>
            <div className="w-full mt-[32px] px-[32px] mb-[40px]">
                <MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است ! در فرم زیر اطلاعات مربوط به متوفی را با دقت وارد کنید.'} />
            </div>
            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                {({ values, setFieldValue, isSubmitting, errors, touched }) => (
                    <Form className="px-[90px] w-full">
                        <div className="w-full">
                            <div className="w-full grid grid-cols-3 gap-4">
                                <div className="flex justify-start col-span-3 items-center mb-10 ">
                                    <Dot />
                                    <p className="font-IRANYekanExtra text-[20px] mr-[5px] text-mainBlue">اطلاعات متوفی</p>

                                </div>
                                {/* <div className="w-full grid grid-cols-3 gap-4 mt-5"> */}

                                {/* Read-only fields */}
                                <div className="mb-5 md:col-span-3">
                                    <MainInput label={'نام'} value={values.userName} necessary={true} disable={true} />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput label={'نام خانوادگی'} value={values.userFamily} necessary={true} disable={true} />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput label={'نام پدر'} value={values.userFatherName} necessary={true} disable={true} />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput label={'تاریخ تولد'} value={values.userBirthDate} necessary={true} disable={true} />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput label={'کدملی'} value={values.userNationalCode} necessary={true} disable={true} />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput label={'جنسیت'} value={values.userIsMan ? "مرد" : "زن"} necessary={true} disable={true} />
                                </div>

                                {/* Editable fields */}
                                <div className="mb-5 md:col-span-3">
                                    <MainInput
                                        label={'شماره شناسنامه'}
                                        value={values.userIdcardNumber}
                                        onChange={(e) => setFieldValue('idcardNumber', e.target.value)}
                                        holder={'مثلا 8888'}
                                        necessary={true}
                                        error={touched.userIdcardNumber && errors.userIdcardNumber}
                                        errorText={errors.userIdcardNumber}
                                        max={10}
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
                                    />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput
                                        label={'شماره تلفن ثابت'}
                                        value={values.userPhoneNumber}
                                        onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
                                        holder={'مثلا 02144665522'}
                                        necessary={true}
                                        error={touched.userPhoneNumber && errors.userPhoneNumber}
                                        errorText={errors.userPhoneNumber}
                                        max={13}
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
                                    />
                                </div>
                                <div className="mb-5 md:col-span-3">
                                    <MainInput
                                        label={'شماره تلفن همراه'}
                                        value={values.userMobileNumber}
                                        onChange={(e) => setFieldValue('mobileNumber', e.target.value)}
                                        holder={'مثلا 09123333333'}
                                        necessary={true}
                                        error={touched.userMobileNumber && errors.userMobileNumber}
                                        errorText={errors.userMobileNumber}
                                        max={13}
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
                                    />
                                </div>
                                <div className="col-span-3 mb-5">
                                    <MainInput
                                        label={'آدرس'}
                                        value={values.userAddress}
                                        onChange={(e) => setFieldValue('address', e.target.value)}
                                        holder={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}
                                        necessary={true}
                                        error={touched.userAddress && errors.userAddress}
                                        errorText={errors.userAddress}
                                        onKeyPress={(event) => {
                                            if (/[a-z]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                            if (/[A-Z]/.test(event.key)) {
                                                event.preventDefault();
                                            }


                                        }}
                                        max={120}

                                    />
                                </div>

                                {/* <div className="col-span-1 md:col-span-3">
                                    <MainInput
                                        label={'کد پرسنلی'}
                                        value={values.userPersonnelCode}
                                        onChange={(e) => setFieldValue('personnelCode', e.target.value)}
                                        holder={'مثلا 12569'}
                                        necessary={false}
                                        max={20}
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
                                    />
                                </div> */}


                                {/* </div> */}
                            </div>
                            <div className="w-full my-[40px] border-b-[1px] border-dashed border-darkGray"></div>
                            <div className="w-full ">
                                <div className="flex justify-start items-center">
                                    <Dot />
                                    <p className="font-IRANYekanExtra text-[20px] mr-[5px] text-mainBlue">اطلاعات نماینده متوفی</p>

                                </div>
                                <div className="w-full grid grid-cols-3 gap-4 mt-5">

                                    {/* Read-only fields */}
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'نام'} value={values.agentName} necessary={true} disable={true} />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'نام خانوادگی'} value={values.agentFamily} necessary={true} disable={true} />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'نام پدر'} value={values.agentFatherName} necessary={true} disable={true} />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'تاریخ تولد'} value={values.agentBirthDate} necessary={true} disable={true} />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'کدملی'} value={values.agentNationalCode} necessary={true} disable={true} />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'جنسیت'} value={values.agentIsMan ? "مرد" : "زن"} necessary={true} disable={true} />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput
                                            label={'شماره شناسنامه'}
                                            value={values.agentIdcardNumber}
                                            onChange={(e) => setFieldValue('agentIdcardNumber', e.target.value)}
                                            holder={'مثلا 8888'}
                                            necessary={true}
                                            error={touched.userIdcardNumber && errors.userIdcardNumber}
                                            errorText={errors.userIdcardNumber}
                                        />
                                    </div>

                                    <div className="mb-5 md:col-span-3">
                                        <MainInput
                                            label={'شماره تلفن همراه'}
                                            holder={'مثلا 09123333333'}
                                            value={values.agentMobileNumber}
                                            onChange={(e) => setFieldValue('agentMobileNumber', e.target.value)}
                                            necessary={true}
                                            error={touched.agentMobileNumber && errors.agentMobileNumber}
                                            errorText={errors.agentMobileNumber}
                                        />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'شماره تلفن ثابت'}
                                            holder={'مثلا 02144665522'}
                                            necessary={true}
                                            value={values.agentPhoneNumber}
                                            onChange={(e) => setFieldValue('agentPhoneNumber', e.target.value)}
                                            error={touched.agentPhoneNumber && errors.agentPhoneNumber}
                                            errorText={errors.agentPhoneNumber}
                                        />
                                    </div>
                                    <div className="mb-5 md:col-span-3">
                                        <MainInput label={'نسبت با بیمه شده اصلی'}
                                            holder={'مثلا فرزند ارشد'}
                                            value={values.relationship}
                                            onChange={(e) => setFieldValue('relationship', e.target.value)}
                                            error={touched.relationship && errors.relationship}
                                            errorText={errors.relationship} />
                                    </div>
                                    <div className="mb-5 col-span-2 md:col-span-3">
                                        <MainInput label={'آدرس'} holder={'مثلا تهران،تهران،خیابان آزادی،پلاک 12،واحد 0'}
                                            value={values.agentAddress}
                                            onChange={(e) => setFieldValue('agentAddress', e.target.value)}
                                            error={touched.agentAddress && errors.agentAddress}
                                            errorText={errors.agentAddress} />
                                    </div>
                                    <div className="mb-5 col-span-3 md:col-span-3">
                                        <div className="flex">
                                            <label className="font-IRANYekanBold text-[16px] text-mainBlue">گواهی فوت</label>
                                            <p className="font-IRANYekanBold text-[16px] text-errorRed mr-[2px]">*</p>
                                        </div>

                                        <div className="mt-[10px] flex items-center">
                                            <p className=" font-IRANYekanMedium text-[14px] ml-3">انتخاب فایل</p>
                                            <UploadFile setFile={setFile} />
                                        </div>
                                    </div>
                                    <div className="mb-5 col-span-3 md:col-span-3">
                                        <div className="flex">
                                            <label className="font-IRANYekanBold text-[16px] text-mainBlue">حکم انحصار وراثت</label>
                                            <p className="font-IRANYekanBold text-[16px] text-errorRed mr-[2px]">*</p>
                                        </div>

                                        <div className="mt-[10px] flex items-center">
                                            <p className=" font-IRANYekanMedium text-[14px] ml-3">انتخاب فایل</p>
                                            <UploadFile setFile={setFile} />
                                        </div>
                                    </div>

                                    {
                                        files.map((item) => {
                                            return (

                                                <div onClick={() => download(item)} className="h-[36px] w-fit rounded-full bg-backBlue flex items-center pr-[20px] pl-[17px]">
                                                    <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px] cursor-pointer">{item}</p>
                                                    <ExportAgentFileIIcon />
                                                </div>
                                            )
                                        })
                                    }






                                </div>
                            </div>
                            <div className="w-full mt-4 flex justify-end">
                                <div className="w-[140px]">
                                    <MainButton
                                        type="submit"
                                        label={isSubmitting ? 'در حال ذخیره...' : 'گام بعدی'}
                                        disabled={isSubmitting}
                                    />                    </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default UpdateUserBaseInfoAnother;