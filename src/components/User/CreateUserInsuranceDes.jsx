import { MainExplanation, MainInput, MainButton, MainRadioInput, MainRadioInput2 } from "../../components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import OkIcon from "../../assets/icon/general/OkIcon";
import moment from 'jalali-moment';

const employmentStatusOptions = [
  { id: 1, name: 'مشمول قانون مدیریت خدمات کشوری' },
  { id: 2, name: 'مشمول قانون کار' },
  { id: 3, name: 'سایر' }
];

const CreateUserInsuranceDes = () => {
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState();
  const [insurances, setInsurances] = useState([]);
  const [cities, setCities] = useState([]);
  const [des, setDes] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    InsuranceId: 0,
    IsEndingInsurance: true,
    DepartmentName: '',
    CityId: 0,
    InsuranceIdNumber: '',
    TrackRecordType: '',
    TrackRecordDays: '',
    LastWorkplace: '',
    EmploymentStatusId: 0,
    QuitReason: '',
    QuitDate: '',
    StartDate: '',
    EndDate: '',
  UserInsuranceId:0
  });

 
  const validationSchema = Yup.object().shape({
    DepartmentName: Yup.string().required('نام دستگاه اجرایی الزامی است'),
    CityId: Yup.number().min(1, 'لطفا شهر محل اشتغال را انتخاب کنید').required('لطفا شهر محل اشتغال را انتخاب کنید'),
    InsuranceIdNumber: Yup.string()
      .required('شماره شناسایی بیمه الزامی است'),
      // .matches(/^[0-9]+$/, 'شماره شناسایی بیمه باید عددی باشد'),
    TrackRecordType: Yup.string().required('نوع سابقه الزامی است'),
    TrackRecordDays: Yup.string().required('میزان سابقه الزامی است'),
    LastWorkplace: Yup.string().required('آخرین محل اشتغال الزامی است'),
    EmploymentStatusId: Yup.number().min(1, 'وضعیت اشتغال الزامی است').required('وضعیت اشتغال الزامی است'),
    StartDate: Yup.string().required('تاریخ شروع بیمه پردازی الزامی است'),
    EndDate: Yup.string().required('تاریخ آخرین بیمه پردازی الزامی است')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Prepare data for API
      const payload = {
        ...values,
        StartDate:values.StartDate.length>10?
        moment(values.StartDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'):values.StartDate,
                EndDate:values.EndDate.length>10?
        moment(values.EndDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'):values.EndDate,
        EmploymentStatusDescription: des
      };
if(initialValues.UserInsuranceId==0 )
   {   const response = await axiosReq("Users/CreateUserInsurance", "post", payload);

      if (response?.status === 200) {
        navigate('../createUserInsuranceOrigin');
      }
     else{
          alert(response)
        }
    }
      else{
        const response = await axiosReq("Users/UpdateUserInsurance", "put", payload);

      if (response?.status === 200) {
        navigate('../createUserInsuranceOrigin');
      }
       else{
          alert(response)
        }
      }
    } catch (error) {
      console.error("Error creating insurance:", error);
    }}
  const GetData = async () => {
    try {
      setIsLoading(true);
      
      // 1. Fetch user insurance data
      const userInsuranceRes = await axiosReq("Users/GetUserInsurance?isEndingInsurance=true", "get");
      console.log('User insurance data:', userInsuranceRes.data[0]);
      
      // 2. Set initial values from API response
      if (userInsuranceRes.data) {
        setInitialValues({
          UserInsuranceId:userInsuranceRes.data[0].userInsuranceId ||0 ,
          InsuranceId: userInsuranceRes.data[0].insuranceId || 0,
          IsEndingInsurance: userInsuranceRes.data[0].isEndingInsurance || false,
          DepartmentName: userInsuranceRes.data[0].departmentName || '',
          CityId: userInsuranceRes.data[0].cityId || 0,
          InsuranceIdNumber: userInsuranceRes.data[0].insuranceIdNumber || '',
          TrackRecordType: userInsuranceRes.data[0].trackRecordType || '',
          TrackRecordDays: userInsuranceRes.data[0].trackRecordDays || '',
          LastWorkplace: userInsuranceRes.data[0].lastWorkplace || '',
          EmploymentStatusId: userInsuranceRes.data[0].employmentStatusId || 0,
          QuitReason: userInsuranceRes.data[0].quitReason || '',
          QuitDate: userInsuranceRes.data[0].quitDate || '',
          StartDate: userInsuranceRes.data[0].startDate || '',
          EndDate: userInsuranceRes.data[0].endDate || '',
                    ProvinceId: userInsuranceRes.data[0].provinceId || '',

        });
        
        // Set description if available
        if (userInsuranceRes.data[0].employmentStatusDescription) {
          setDes(userInsuranceRes.data[0].employmentStatusDescription);
        }
        
        // Load province and city if cityId is available
        // if (userInsuranceRes.data[0].cityId) {
        //   await loadProvinceAndCity(userInsuranceRes.data[0].cityId);
        // }

         const response = await axiosReq("Users/GetCities", "post", { provinceId:userInsuranceRes.data[0].provinceId});
      var prov = []
      console.log(response.data)

      response.data.forEach(element => {
        prov.push({ id: element.cityId, name: element.cityName })
      });
      setCities(prov)
      }
      
      // 3. Fetch other required data (insurances, provinces)
      const [insurancesRes, provincesRes] = await Promise.all([
        axiosReq("Insurances/GetInsurances", "get"),
        axiosReq("Users/GetProvinces", "get")
      ]);
      
      setInsurances(insurancesRes.data.map(i => ({ id: i.insuranceId, name: i.name })));
      setProvinces(provincesRes.data.map(p => ({ id: p.provinceId, name: p.provinceName })));
     
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
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
    GetData();
  }, []);
 const handlePrevious = () => {
    navigate('../updateUserBaseInfoHimself');
  };
  // ... keep your other functions (handleSubmit, handlePrevious, GetCity) unchanged

  if (isLoading) {
    return <div>Loading...</div>; // Add a proper loading indicator
  }

  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
      {/* Stepper Section - keep unchanged */}
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize // This allows Formik to update when initialValues changes
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="px-[90px] w-full grid grid-cols-3 gap-4">
            {/* Insurance Dropdown - preselect if initial value exists */}
            <div className="mb-5 col-span-1">
              <MainInput
                label={'نام صندوق بازنشستگی'}
                defaultVal={insurances.find(i => i.id === values.InsuranceId) || null}
                value={insurances.find(i => i.id === values.InsuranceId) || null}
                onChange={(value) => setFieldValue('InsuranceId', value?.id || 0)}
                holder={'مثلا وزارت تعاون'}
                listBox={true}
                listItems={insurances}
                necessary={true}
                error={touched.InsuranceId && errors.InsuranceId}
                errorText={errors.InsuranceId}
              />
            </div>

            {/* Department Name - show existing value */}
            <div className="mb-5 col-span-2">
              <MainInput
                label={'نام دستگاه اجرایی'}
                onChange={(e) => setFieldValue('DepartmentName', e.target.value)}
                value={values.DepartmentName}
                necessary={true}
                holder={'مثلا وزرات تعاون'}
                error={touched.DepartmentName && errors.DepartmentName}
                errorText={errors.DepartmentName}
              />
            </div>

            {/* Province - preselect if initial value exists */}
            <div className="mb-5 col-span-1">
              <MainInput
                label={'استان محل اشتغال'}
                listBox={true}
                listItems={provinces}
                value={province}
                necessary={true}
                defaultVal={provinces.find(i => i.id === values.ProvinceId) || null}
                onChange={(value) => {
                  setProvince(value);
                  GetCity(value?.id);
                  setFieldValue('CityId', 0); // Reset city when province changes
                }}
                listBoxHolder="انتخاب کنید"
              />
            </div>

            {/* City - preselect if initial value exists */}
            <div className="mb-5 col-span-1">
              <MainInput
                label={'شهر'}
                listBox={true}
                listItems={cities}
                necessary={true}
                defaultVal={cities.find(i => i.id === values.CityId) || null}

                value={cities.find(c => c.id === values.CityId) || null}
                onChange={(value) => {
                  setFieldValue('CityId', value?.id || 0);
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
                value={values.StartDate}
                defaultVal={initialValues.StartDate?initialValues.StartDate:new Date()}
                onChange={(value) => setFieldValue('StartDate', value)}
                holder={'1376/05/04'}
                necessary={true}
                error={touched.StartDate && errors.StartDate}
                errorText={errors.StartDate}
                date={true}
              />
            </div>

            {/* End Date */}
            <div className="mb-5">
              <MainInput
                label={'تاریخ آخرین بیمه پردازی'}
                value={values.EndDate}
                defaultVal={initialValues.EndDate?initialValues.EndDate:new Date()}
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