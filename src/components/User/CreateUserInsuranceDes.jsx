import { MainExplanation, MainInput, MainButton, MainRadioInput, MainRadioInput2 } from "../../components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
  const [provinces, setProvinces] = useState([])
  const [province, setProvince] = useState()
  const [insurances, setInsurances] = useState([])
  const [cities, setCities] = useState([])
  const [des, setDes] = useState('')

  const initialValues = {
    InsuranceId: 0,
    IsEndingInsurance: true,
    DepartmentName: '',
    CityId: 0,
    InsuranceIdNumber: '',
    TrackRecordType: '',
    TrackRecordDays: '',
    LastWorkplace: '',
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
        EmploymentStatusDescription: des
      };

      const response = await axiosReq("Users/CreateUserInsurance", "post", payload);

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
  const GetData = async () => {
    try {
      const response2 = await axiosReq("Insurances/GetInsurances", "get");
      var insu = []
      console.log(response2.data)
      response2?.data?.forEach(element => {
        insu.push({ id: element.insuranceId, name: element.name })
      });
      setInsurances(insu)


      const response = await axiosReq("Users/GetProvinces", "get");
      var prov = []
      console.log(response.data)

      response?.data.forEach(element => {
        prov.push({ id: element.provinceId, name: element.provinceName })
      });
      setProvinces(prov)

    } catch (error) {
      console.error("Error creating insurance:", error);
    }
  };

  const GetCity = async (id) => {
    try {



      const response = await axiosReq("Users/GetCities", "post", { provinceId: id });
      var prov = []
      console.log(response.data)

      response.data.forEach(element => {
        prov.push({ id: element.cityId, name: element.cityName })
      });
      setCities(prov)

    } catch (error) {
      console.error("Error creating insurance:", error);
    }
  };
  useEffect(() => {
    GetData()
  }, [])
  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
      {/* Stepper Section */}
      <div className="flex justify-start items-center">
        <div className="flex justify-start items-center">
          <div className="rounded-full w-[40px] h-[40px] bg-midGreen flex justify-center items-center">
            <p className="font-IRANYekanBold text-[18px] text-white"><OkIcon /></p>
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
        <MainExplanation text={'خواهشمند است فرم زیر را با نهایت دقت تکمیل فرمایید. اطلاعات ثبت‌شده مبنای ارزیابی اولیه کارشناسان جهت بررسی درخواست مستمری جمع خواهد بود. لازم به ذکر است که تکمیل تمامی موارد فرم زیر، اجباری است !'} />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="px-[90px] w-full grid grid-cols-3 gap-4">
            {/* Department Name */}
            <div className="mb-5 col-span-1">
              <MainInput
                label={'نام صندوق بازنشستگی'}
                value={values.InsuranceId}
                onChange={(e) => setFieldValue('InsuranceId', e.id)}
                holder={'مثلا وزارت تعاون'}
                listBox={true}
                listItems={insurances}
                necessary={true}
                error={touched.InsuranceId && errors.InsuranceId}
                errorText={errors.InsuranceId}
              />
            </div>

            {/* City */}
            <div className="mb-5 col-span-2">
              <MainInput
                label={'نام دستگاه اجرایی'}
                onChange={(e) => setFieldValue('DepartmentName', e.target.value)}
                value={values.DepartmentName}

                necessary={true}
                holder={'مثلا وزرات تعاون'}

                // value={cityList.find(c => c.id === values.CityId) || null}

                error={touched.DepartmentName && errors.DepartmentName}
                errorText={errors.DepartmentName}
                listBoxHolder="انتخاب کنید"
              />
            </div>
            <div className="mb-5 col-span-1">
              <MainInput
                label={'استان محل اشتغال'}
                listBox={true}
                listItems={provinces}
                value={province}

                necessary={true}
                // value={cityList.find(c => c.id === values.CityId) || null}
                onChange={(e) => {
                  GetCity(e.id)
                }}
                // error={touched.CityId && errors.CityId}
                // errorText={errors.CityId}
                listBoxHolder="انتخاب کنید"
              />
            </div>
            <div className="mb-5 col-span-1">
              <MainInput
                label={'شهر'}
                listBox={true}
                listItems={cities}

                necessary={true}
                value={cityList.find(c => c.id === values.CityId) || null}
                onChange={(value) => {
                  setFieldValue('CityId', value?.id || 0)
                }}
                error={touched.CityId && errors.CityId}
                errorText={errors.CityId}
                listBoxHolder="انتخاب کنید"
              />
            </div>
            <div className="mb-5 col-span-2">
              <MainRadioInput value1={1} value2={2} value3={3}
                onChange={(value) => setFieldValue('EmploymentStatusId', value)} column={true}
                title={'وضعیت بیمه پردازی'}
                text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'}
                text2={'مشمول قانون کار'} text3={'سایر'} onChangeInput={(e) => setDes(e)}
                selectedValue={values.EmploymentStatusId}

                input={true} />
            </div>
            <div className="mb-5 col-span-1">
              <MainRadioInput value1={true} value2={false}selectedValue={values.IsEndingInsurance}
                onChange={(value) => setFieldValue('IsEndingInsurance', value)} column={true}
                title={'مشترک فعال صندوق بازنشستگی'} text1={'بله'} text2={'خیر'} />
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

            {/* Is Ending Insurance */}


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


            {/* Quit Reason (conditional) */}


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

            <div className="mb-5">
              <MainInput
                label={<div className="flex items-center">
                  <p className="font-IRANYekanBold text-[16px] text-mainBlue">آخرین محل اشتغال به کار</p>
                  <p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]">(دستگاه اجرایی/کارگاه)</p>
                </div>}
                value={values.LastWorkplace}
                onChange={(e) => setFieldValue('LastWorkplace', e.target.value)}
                holder={'مثلا 0...'}
                necessary={true}
                error={touched.LastWorkplace && errors.LastWorkplace}
                errorText={errors.LastWorkplace}
              />
            </div>

            {/* Last Workplace */}


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