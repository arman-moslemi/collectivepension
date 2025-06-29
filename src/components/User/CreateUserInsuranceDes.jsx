import { MainExplanation, MainInput, MainButton, MainRadioInput } from "../../components";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import OkIcon from "../../assets/icon/general/OkIcon";

const employmentStatusOptions = [
  { id: 1, name: 'مشمول قانون مدیریت خدمات کشوری' },
  { id: 2, name: 'مشمول قانون کار' },
  { id: 3, name: 'سایر' }
];

const cityList = [
  { id: 1, name: 'تهران' },
  { id: 2, name: 'شیراز' },
  { id: 3, name: 'اصفهان' },
  { id: 4, name: 'مشهد' }
];

const CreateUserInsuranceDes = () => {
  const navigate = useNavigate();
  
  const initialValues = {
    InsuranceId: 0,
    IsEndingInsurance: false,
    RequestDate: new Date().toISOString(),
    DepartmentName: '',
    CityId: 0,
    InsuranceIdNumber: '',
    TrackRecordType: '',
    TrackRecordDays: '',
    LastWorkplace: '',
    EmploymentStatusId: 0,
    QuitReason: '',
    QuitDate: '',
    StartedDate: '',
    EndDate: ''
  };

  const validationSchema = Yup.object().shape({
    DepartmentName: Yup.string().required('نام دستگاه اجرایی الزامی است'),
    CityId: Yup.number().min(1, 'لطفا شهر محل اشتغال را انتخاب کنید').required('لطفا شهر محل اشتغال را انتخاب کنید'),
    InsuranceIdNumber: Yup.string()
      .required('شماره شناسایی بیمه الزامی است')
      .matches(/^[0-9]+$/, 'شماره شناسایی بیمه باید عددی باشد'),
    TrackRecordType: Yup.string().required('نوع سابقه الزامی است'),
    TrackRecordDays: Yup.string().required('میزان سابقه الزامی است'),
    LastWorkplace: Yup.string().required('آخرین محل اشتغال الزامی است'),
    EmploymentStatusId: Yup.number().min(1, 'وضعیت اشتغال الزامی است').required('وضعیت اشتغال الزامی است'),
    StartedDate: Yup.string().required('تاریخ شروع بیمه پردازی الزامی است'),
    EndDate: Yup.string().required('تاریخ آخرین بیمه پردازی الزامی است')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Prepare data for API
      const payload = {
        ...values,
        RequestDate: new Date().toISOString() // Use current date as request date
      };

      const response = await axiosReq("Insurance/CreateUserInsurance", "post", payload);
      
      if (response?.status === 200) {
        navigate('../createUserInsuranceOrigin');
      }
    } catch (error) {
      console.error("Error creating insurance:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrevious = () => {
    navigate('../updateUserBaseInfoHimself');
  };

  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
      {/* Stepper Section */}
      <div className="flex justify-start items-center">
        <div className="flex justify-start items-center">
          <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center">
            <p className="font-IRANYekanBold text-[18px] text-white"><OkIcon/></p>
          </div>
          <p className="font-IRANYekanExtra text-[15px] text-midGreen mx-[6px]">اطلاعات هویتی متقاضی</p>
          <div className="w-[40px] border-b-[1px] border-dashed border-midGreen"></div>
        </div>
        <div className="flex justify-start items-center">
          <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
          <div className="rounded-full h-[48px] w-[48px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue">
            <div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center">
              <p className="font-IRANYekanExtra text-[18px] text-white">2</p>
            </div>
          </div>
          <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mx-[6px]">اطلاعات در صندوق بازنشستگی مقصد</p>
          <div className="w-[40px] border-b-[1px] border-dashed border-buttonBlue"></div>
        </div>
        <div className="flex justify-start items-center">
          <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
          <div className="rounded-full w-[40px] h-[40px] bg-mainBlue flex justify-center items-center">
            <p className="font-IRANYekanBold text-[18px] text-white">3</p>
          </div>
          <p className="font-IRANYekanBold text-[15px] text-mainBlue mr-[6px]">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
        </div>
      </div>

      <div className="w-full mt-[32px] mb-[40px]">
        <MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'}/>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="px-[90px] w-full grid grid-cols-3 gap-4">
            {/* Department Name */}
            <div className="mb-5 col-span-2">
              <MainInput
                label={'نام دستگاه اجرایی'}
                value={values.DepartmentName}
                onChange={(e) => setFieldValue('DepartmentName', e.target.value)}
                holder={'مثلا وزارت تعاون'}
                necessary={true}
                error={touched.DepartmentName && errors.DepartmentName}
                errorText={errors.DepartmentName}
              />
            </div>

            {/* City */}
            <div className="mb-5">
              <MainInput
                label={'شهر محل اشتغال'}
                listBox={true}
                listItems={cityList}
                necessary={true}
                value={cityList.find(c => c.id === values.CityId) || null}
                onChange={(value) => {
                  setFieldValue('CityId', value?.id || 0);
                  setFieldValue('CityName', value?.name || '');
                }}
                error={touched.CityId && errors.CityId}
                errorText={errors.CityId}
                listBoxHolder="انتخاب کنید"
              />
            </div>

            {/* Insurance ID Number */}
            <div className="mb-5">
              <MainInput
                label={'شماره شناسایی بیمه'}
                value={values.InsuranceIdNumber}
                onChange={(e) => setFieldValue('InsuranceIdNumber', e.target.value)}
                holder={'مثلا 053268986'}
                necessary={true}
                error={touched.InsuranceIdNumber && errors.InsuranceIdNumber}
                errorText={errors.InsuranceIdNumber}
              />
            </div>

            {/* Employment Status */}
            <div className="mb-5 col-span-2">
              <MainRadioInput
                title={'وضعیت اشتغال'}
                radioName={'EmploymentStatusId'}
                options={employmentStatusOptions.map(status => ({
                  value: status.id,
                  text: status.name
                }))}
                selectedValue={values.EmploymentStatusId}
                onChange={(value) => setFieldValue('EmploymentStatusId', value)}
                error={touched.EmploymentStatusId && errors.EmploymentStatusId}
              />
            </div>

            {/* Is Ending Insurance */}
            <div className="mb-5 col-span-1">
              <MainRadioInput
                title={'آیا بیمه به پایان رسیده است؟'}
                radioName={'IsEndingInsurance'}
                text1={'بله'}
                value1={true}
                text2={'خیر'}
                value2={false}
                selectedValue={values.IsEndingInsurance}
                onChange={(value) => setFieldValue('IsEndingInsurance', value)}
              />
            </div>

            {/* Started Date */}
            <div className="mb-5">
              <MainInput
                label={'تاریخ شروع بیمه پردازی'}
                value={values.StartedDate}
                onChange={(value) => setFieldValue('StartedDate', value)}
                holder={'1376/05/04'}
                necessary={true}
                error={touched.StartedDate && errors.StartedDate}
                errorText={errors.StartedDate}
                date={true}
              />
            </div>

            {/* End Date */}
            <div className="mb-5">
              <MainInput
                label={'تاریخ آخرین بیمه پردازی'}
                value={values.EndDate}
                onChange={(value) => setFieldValue('EndDate', value)}
                holder={'1402/05/04'}
                necessary={true}
                error={touched.EndDate && errors.EndDate}
                errorText={errors.EndDate}
                date={true}
              />
            </div>

            {/* Quit Date (conditional) */}
            {values.IsEndingInsurance && (
              <div className="mb-5">
                <MainInput
                  label={'تاریخ ترک کار'}
                  value={values.QuitDate}
                  onChange={(value) => setFieldValue('QuitDate', value)}
                  holder={'1402/05/04'}
                  date={true}
                />
              </div>
            )}

            {/* Quit Reason (conditional) */}
            {values.IsEndingInsurance && (
              <div className="mb-5 col-span-2">
                <MainInput
                  label={'دلیل ترک کار'}
                  value={values.QuitReason}
                  onChange={(e) => setFieldValue('QuitReason', e.target.value)}
                  holder={'مثلا بازنشستگی'}
                />
              </div>
            )}

            {/* Track Record Type */}
            <div className="mb-5">
              <MainInput
                label={'نوع سابقه'}
                value={values.TrackRecordType}
                onChange={(e) => setFieldValue('TrackRecordType', e.target.value)}
                holder={'مثلا رسمی'}
                necessary={true}
                error={touched.TrackRecordType && errors.TrackRecordType}
                errorText={errors.TrackRecordType}
              />
            </div>

            {/* Track Record Days */}
            <div className="mb-5">
              <MainInput
                label={<div className="flex items-center">
                  <p className="font-IRANYekanBold text-[16px] text-mainBlue">میزان سابقه</p>
                  <p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]"> (به روز)</p>
                </div>}
                value={values.TrackRecordDays}
                onChange={(e) => setFieldValue('TrackRecordDays', e.target.value)}
                holder={'756 روز'}
                necessary={true}
                error={touched.TrackRecordDays && errors.TrackRecordDays}
                errorText={errors.TrackRecordDays}
              />
            </div>

            {/* Last Workplace */}
            <div className="mb-5 col-span-3">
              <MainInput
                label={'آخرین محل اشتغال'}
                value={values.LastWorkplace}
                onChange={(e) => setFieldValue('LastWorkplace', e.target.value)}
                holder={'مثلا وزارت تعاون، کار و رفاه اجتماعی'}
                necessary={true}
                error={touched.LastWorkplace && errors.LastWorkplace}
                errorText={errors.LastWorkplace}
              />
            </div>

            <div className="col-span-3">
              <MainExplanation 
                color={'yellow'} 
                text={'چنانچه صندوق بازنشستگی مقصد، مربوط به سازمان تأمین اجتماعی نیروهای مسلح و صندوق بازنشستگی وزارت اطلاعات باشد، متقاضی (بیمه‌شده اصلی، بازمانده/وظیفه بگیر بیمه شده اصلی) از شمول درخواست مستمری جمع خارج است.'}
              />
            </div>

            <div className="col-span-3 mt-[33px] flex justify-end items-center">
              <div className="flex">
                <div className="w-[140px] ml-4">
                  <MainButton 
                    type="button"
                    onClickFunction={handlePrevious} 
                    label={'گام قبلی'}
                  />
                </div>
                <div className="w-[140px]">
                  <MainButton 
                    type="submit"
                    label={isSubmitting ? 'در حال ذخیره...' : 'گام بعدی'}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateUserInsuranceDes;