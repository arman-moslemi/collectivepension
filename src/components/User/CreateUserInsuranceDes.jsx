import { MainExplanation, MainInput, MainButton, MainRadioInput, MainRadioInput2, MainModal } from "../../components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import OkIcon from "../../assets/icon/general/OkIcon";
import moment from 'jalali-moment';
import Cookies from 'universal-cookie';
import UserRamz from "./UserRamz";

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
  const [noticeOpen, setNoticeOpen] = useState(true);
  const [taminNoticeOpen, setTaminNoticeOpen] = useState(true);
  const [ramzModal, setRamzModal] = useState(false);
  const [ramz, setRamz] = useState(false);

  const [initialValues, setInitialValues] = useState({
    InsuranceId: 0,
    IsEndingInsurance: true,
    DepartmentName: '',
    CityId: 0,
    InsuranceIdNumber: '',
    TrackRecordType: '',
    TrackRecordDays: '',
    LastWorkplace: '',
    EmploymentStatusId: 10,
    QuitReason: '',
    QuitDate: '',
    StartDate: '',
    EndDate: '',
    UserInsuranceId: 0,
    IsActiveSubscriber: true
  });

  const cookies = new Cookies();

  let status = cookies.get("Status");
  const validationSchema = Yup.object().shape({
    DepartmentName: Yup.string().when('InsuranceId', {
      is: 1,
      then: (schema) => schema.notRequired(),
      otherwise: (schema) => schema.required('نام دستگاه اجرایی الزامی است')// or .nullable()
    }),
    CityId: Yup.number().min(1, 'لطفا شهر محل اشتغال را انتخاب کنید').required('لطفا شهر محل اشتغال را انتخاب کنید'),
    InsuranceIdNumber: Yup.string()
      .required('شماره شناسایی بیمه الزامی است').matches(/[0-9]$/, ' شماره شناسایی بیمه معتبر نیست'),
    // .matches(/^[0-9]+$/, 'شماره شناسایی بیمه باید عددی باشد'),
    TrackRecordType: Yup.string().required('نوع سابقه الزامی است'),
    TrackRecordDays: Yup.string().required('میزان سابقه الزامی است').matches(/[0-9]$/, '  میزان سابقه معتبر نیست'),
    // LastWorkplace: Yup.string().required('آخرین محل اشتغال الزامی است'),
    // EmploymentStatusId: Yup.number().min(1, 'وضعیت اشتغال الزامی است').required('وضعیت اشتغال الزامی است'),
    // StartDate: Yup.string().required('تاریخ شروع بیمه پردازی الزامی است'),
    // EndDate: Yup.string().required('تاریخ آخرین بیمه پردازی الزامی است')
    // EndDate: Yup.string()
    //   .required('تاریخ آخرین بیمه پردازی الزامی است')
    //   .test('is-greater', 'تاریخ پایان باید بعد از تاریخ شروع باشد', function (value) {
    //     const { StartDate } = this.parent;
    //     if (!StartDate || !value) return true; // let required handle empty fields
    //     // if you store as yyyy-mm-dd format:
    //     return new Date(value) > new Date(StartDate);

    //     // or if you use custom format (e.g., 'YYYY/MM/DD'):
    //     // return dayjs(value, 'YYYY/MM/DD').isAfter(dayjs(StartDate, 'YYYY/MM/DD'));
    //   }),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values)
      if (status > 1) {
        navigate('../createUserInsuranceOrigin')
      }
      // Prepare data for API
      const payload = {
        ...values,
        StartDate: moment().locale('fa').format('YYYY/MM/DD'),
        EndDate: moment().locale('fa').format('YYYY/MM/DD'),
        // StartDate: values.StartDate.length > 10 ?
        //   moment(values.StartDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : values.StartDate,
        // EndDate: values.EndDate.length > 10 ?
        //   moment(values.EndDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : values.EndDate,
        EmploymentStatusDescription: des
      };
      payload.DepartmentName = values.InsuranceId == 1 ? "تامین" : values.DepartmentName;
              console.log(10000)
              console.log(ramz)
              console.log(values.InsuranceId)

      if (values.InsuranceId == 1 && ramz != true) {
        console.log(11000)

      
          return alert("کد رمز را تایید کنید")
        
      }
      else {
console.log(20000)
        if (initialValues?.UserInsuranceId == 0) {
          const response = await axiosReq("Users/CreateUserInsurance", "post", payload);
          console.log(response)
          if (response?.status === 200) {
            navigate('../createUserInsuranceOrigin');
          }
          else {
            alert(response?.data)
          }
        }
        else {
          console.log(111111)

          // const response = await axiosReq("Users/UpdateUserInsurance", "put", payload);
          const response = await axiosReq("Users/UpdateUserInsurance", "post", payload);

          if (response?.status === 200) {
            navigate('../createUserInsuranceOrigin');
          }
          else {
            alert(response?.data)
          }
        }
      }
    } catch (error) {
      console.error("Error creating insurance:", error);
    }
  }
  const GetData = async () => {
    try {
      setIsLoading(true);

      // 1. Fetch user insurance data
      const userInsuranceRes = await axiosReq("Users/GetUserInsurance?isEndingInsurance=true", "get");
      console.log('User insurance data:', userInsuranceRes);

      // 2. Set initial values from API response
      if (userInsuranceRes?.data?.length > 0) {
        setInitialValues({
          UserInsuranceId: userInsuranceRes.data[0]?.userInsuranceId || 0,
          InsuranceId: userInsuranceRes.data[0].insuranceId || 0,
          IsEndingInsurance: userInsuranceRes.data[0].isEndingInsurance || false,
          IsActiveSubscriber: userInsuranceRes.data[0].isActiveSubscriber || false,
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

        const response = await axiosReq("Users/GetCities", "post", { provinceId: userInsuranceRes.data[0].provinceId });
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
      <div className="flex justify-start px-[32px] items-center overflow-x-auto whitespace-nowrap w-full md:pb-2 mb-2">
        <div className="flex justify-start items-center">
          <div className="rounded-full h-[48px] w-[48px]  md:w-[35px] md:h-[35px] flex justify-center items-center p-1  ">
            <div className="w-full h-full rounded-full bg-mainGreen flex justify-center items-center">
              <p className="font-IRANYekanExtra text-[18px] text-white">✔
              </p></div></div>
          <p className="font-IRANYekanExtra text-[15px] text-mainGreen mx-[6px]">اطلاعات هویتی متقاضی</p>

        </div>
        <div className="flex justify-start items-center">
          <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
          <div className="rounded-full h-[48px] w-[48px] md:w-[35px] md:h-[35px] flex justify-center items-center p-1 border-[1px] border-dashed border-buttonBlue "><div className="w-full h-full rounded-full bg-buttonBlue flex justify-center items-center"><p className="font-IRANYekanExtra text-[18px] text-white">2</p></div></div>
          <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mx-[6px]">اطلاعات در آخرین صندوق بازنشستگی(مقصد)</p>
          <div className="w-[40px] border-b-[1px] border-dashed border-buttonBlue md:w-[10px]" ></div>
        </div>
        <div className="flex justify-start items-center">
          <div className="ml-[10px] w-[40px] border-b-[1px] border-dashed border-darkGray"></div>
          <div className="rounded-full w-[40px] h-[40px] md:w-[35px] md:h-[35px] bg-mainBlue flex justify-center items-center"><p className="font-IRANYekanBold text-[18px] text-white">3</p></div>
          <p className="font-IRANYekanBold text-[15px] text-mainBlue mr-[6px] *:">اطلاعات در صندوق‌ بازنشستگی مبدا</p>
        </div>
      </div>
      {noticeOpen && (<div className="w-full min-h-[60px] flex items-center justify-center bg-[#2A78DD38] text-center relative px-10 py-2">
        <button
          type="button"
          onClick={() => setNoticeOpen(false)}
          aria-label="بستن اطلاعیه"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-black/5"
        >
          ✕
        </button>

        <span className="font-IRANYekanBold text-mainBlue leading-6">
          منظور از آخرین صندوق بازنشستگی، صندوقی است که در حال حاضر در آن عضو هستید و حق بیمه به آن پرداخت می‌کنید
        </span>
      </div>)}
      {taminNoticeOpen && (<div className="w-full min-h-[60px] flex items-center justify-center bg-[#2A78DD38] text-center relative px-10 py-2 mt-5">
        <button
          type="button"
          onClick={() => setTaminNoticeOpen(false)}
          aria-label="بستن اطلاعیه"
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-black/5"
        >
          ✕
        </button>

        <span className="font-IRANYekanBold text-mainBlue leading-6">
          متقاضی گرامی، در صورتی که در صندوق تامین اجتماعی عضو بوده‌اید لازم است پیش از ثبت درخواست مستمری جمع، نسبت به دریافت کد رمز تامین اجتماعی به صورت حضوری یا از طریق سامانه https://es.tamin.ir اقدام نمایید!
        </span>
      </div>)}
      <div className="mt-5 w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize // This allows Formik to update when initialValues changes
        >
          {({ values, setFieldValue, isSubmitting, errors, touched }) => (
            <Form className="px-[50px] w-full grid grid-cols-3 gap-4 md:px-1">
              {/* Insurance Dropdown - preselect if initial value exists */}
              <div className="mb-5 col-span-2 z940:col-span-3">
                <MainInput
                  label={'نام صندوق بازنشستگی'}
                  defaultVal={values.InsuranceId}
                  value={insurances.find(i => i.id === values.InsuranceId) || null}
                  onChange={(value) => { setFieldValue('InsuranceId', value?.id || 0); value?.id == 1 ? setTaminNoticeOpen(true) : setTaminNoticeOpen(false) }}
                  holder={'مثلا وزارت تعاون'}
                  listBox={true}
                  listItems={insurances}
                  necessary={true}
                  error={touched.InsuranceId && errors.InsuranceId}
                  errorText={errors.InsuranceId}
                  // disable={status > 1 ? true : false}
                  max={30}
                />
              </div>

              {/* Department Name - show existing value */}
              {
                values.InsuranceId == 1 ?
                  null
                  :


                  <div className="mb-5 col-span-1 z940:col-span-3">
                    <MainInput
                      // listBox={true}
                      // listItems={insurances}
                      label={'نام دستگاه اجرایی/کارگاه'}
                      onChange={(e) => setFieldValue('DepartmentName', e.target.value)}
                      value={values.DepartmentName}
                      necessary={true}
                      holder={'مثلا وزرات تعاون'}
                      error={touched.DepartmentName && errors.DepartmentName}
                      errorText={errors.DepartmentName}
                      disable={status > 1 ? true : false}
                      onKeyPress={(event) => {
                        if (/[a-z]/.test(event.key)) {
                          event.preventDefault();
                        }
                        if (/[A-Z]/.test(event.key)) {
                          event.preventDefault();
                        }


                      }}
                      max={40}

                    />
                  </div>
              }

              {/* Province - preselect if initial value exists */}
              <div className="mb-5 col-span-1 z940:col-span-3">
                <MainInput
                  label={'استان محل اشتغال'}
                  listBox={true}
                  listItems={provinces}
                  value={province}
                  necessary={true}
                  defaultVal={values?.ProvinceId}
                  onChange={(value) => {
                    setProvince(value);
                    GetCity(value?.id);
                    setFieldValue('CityId', 0); // Reset city when province changes
                  }}
                  listBoxHolder="انتخاب کنید"
                  disable={status > 1 ? true : false}
                />
              </div>

              {/* City - preselect if initial value exists */}
              <div className="mb-5 col-span-1 z940:col-span-3">
                <MainInput
                  label={'شهر'}
                  listBox={true}
                  listItems={cities}
                  necessary={true}
                  defaultVal={values.CityId}

                  value={cities.find(c => c.id === values.CityId) || null}
                  onChange={(value) => {
                    setFieldValue('CityId', value?.id || 0);
                  }}
                  error={touched.CityId && errors.CityId}
                  errorText={errors.CityId}
                  listBoxHolder="انتخاب کنید"
                  disable={status > 1 ? true : false}
                />
              </div>

              {/* <div className="mb-5 col-span-2 z940:col-span-3">
                <MainRadioInput value1={1} value2={2} value3={3}
                  onChange={(value) => setFieldValue('EmploymentStatusId', value)}
                  column={true}
                  necessary={true}

                  title={'وضعیت بیمه پردازی'}
                  text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'}
                  text2={'مشمول قانون کار'} text3={'سایر'}
                  onChangeInput={(e) => setDes(e)}
                  selectedValue={values.EmploymentStatusId}
                  disable={status > 1 ? true : false}
                  input={true} />
                {touched.EmploymentStatusId ?
                  <p className='font-IRANYekanBold text-redError text-[12px] mt-1'>{errors?.EmploymentStatusId}</p>
                  :
                  null}
              </div> */}
              {/* <div className="mb-5 col-span-1 z940:col-span-3">
                <MainRadioInput value1={true} necessary={true}
                  value2={false} selectedValue={values.IsActiveSubscriber}
                  onChange={(value) => setFieldValue('IsActiveSubscriber', value)} column={true}
                  title={'مشترک فعال صندوق بازنشستگی'} text1={'بله'} text2={'خیر'} />
              </div>
              {touched.isActiveSubscriber ?
                <p className='font-IRANYekanBold text-redError text-[12px] mt-1'>{errors?.IsEndingInsurance}</p>
                :
                null} */}

              {/* Insurance ID Number */}
              <div className="mb-5 z940:col-span-3">
                <MainInput
                  label={'شماره شناسایی بیمه'}
                  value={values.InsuranceIdNumber}
                  onChange={(e) => setFieldValue('InsuranceIdNumber', e.target.value)}
                  holder={'مثلا 053268986'}
                  necessary={true}
                  error={touched.InsuranceIdNumber && errors.InsuranceIdNumber}
                  errorText={errors.InsuranceIdNumber}
                  disable={status > 1 ? true : false}
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

              {/* Employment Status */}

              {/* Is Ending Insurance */}


              {/* Started Date */}
              {/* <div className="mb-5 z940:col-span-3">
                <MainInput
                  label={'تاریخ شروع بیمه پردازی'}
                   value={values.StartDate}
                 // value={moment(initialValues.StartDate,"jYYYY/jMM/jDD").toDate()}
                   defaultVal={initialValues.StartDate ? initialValues.StartDate : ""}
                  onChange={(value) => setFieldValue('StartDate', value)}
                  disable={status > 1 ? true : false}
                  necessary={true}
                  error={touched.StartDate && errors.StartDate}
                  errorText={errors.StartDate}
                  date={true}
                />
              </div> */}

              {/* End Date */}
              {/* <div className="mb-5 z940:col-span-3">
                <MainInput
                  label={'تاریخ آخرین بیمه پردازی'}
                  value={values.EndDate}
                  defaultVal={initialValues.EndDate ? initialValues.EndDate : ""}
                  onChange={(value) => setFieldValue('EndDate', value)}

                  necessary={true}
                  error={touched.EndDate && errors.EndDate}
                  errorText={errors.EndDate}
                  date={true}
                  disable={status > 1 ? true : false}
                />
              </div> */}

              {/* Quit Date (conditional) */}


              {/* Quit Reason (conditional) */}


              {/* Track Record Type */}
              <div className="mb-5 z940:col-span-3">
                <MainInput
                  label={'نوع سابقه'}
                  value={values.TrackRecordType}
                  listBox={true}
                  defaultVal={values.TrackRecordType}

                  listItems={[{ id: "دولتی", name: "دولتی" }, { id: "غیردولتی", name: "غیردولتی" }, { id: "هردو", name: "هردو" }]}
                  onChange={(value) => setFieldValue('TrackRecordType', value?.id)}
                  holder={'مثلا رسمی'}
                  necessary={true}
                  error={touched.TrackRecordType && errors.TrackRecordType}
                  errorText={errors.TrackRecordType}
                  disable={status > 3 ? true : false}

                />
              </div>

              {/* Track Record Days */}
              <div className="mb-5 z940:col-span-3">
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
                  disable={status > 1 ? true : false}
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

              <div className="mb-5 flex items-end  z940:col-span-3  justify-between gap-1">
                <MainInput
                  label={<div className="flex items-center">
                    {values.InsuranceId == 1 ?
                      <p className="font-IRANYekanBold text-[16px]  text-mainBlue"> کدرمز</p>

                      :
                      <p className="font-IRANYekanBold text-[16px]  text-mainBlue"> شماره دستگاه اجرایی/کارگاه</p>

                    }
                    {/* <p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]">(دستگاه اجرایی/کارگاه)</p> */}
                  </div>}
                  value={values.LastWorkplace}
                  onChange={(e) => setFieldValue('LastWorkplace', e.target.value)}
                  holder={'مثلا 0...'}
                  necessary={values.InsuranceId == 1 ? true : false}
                  error={touched.LastWorkplace && errors.LastWorkplace}
                  errorText={errors.LastWorkplace}
                  disable={status > 1 ? true : false}
                  max={40}

                />
              {values.InsuranceId == 1  ?
                <div className="w-[200px] flex items-end ">

                  <MainButton
                    onClickFunction={() => values.LastWorkplace!="" ?setRamzModal(true):alert("کد رمز را وارد نمایید")}
                    type={"button"}
                    label={'استعلام کد رمز '}
                  />


                </div>
                : null}
              </div>
              {ramzModal && (
                <MainModal
                  title={'جزییات'}
                  big={true}

                  // noCross={true}
                  setShowModal={setRamzModal}
                  text={
                    <UserRamz code={values.LastWorkplace} setRamz={setRamz} ramz={ramz} />
                  }
                  modalButton={
                    <div className="w-[140px] flex">

                      <MainButton
                        onClickFunction={() => ramz ? setRamzModal(false) : alert("لطفا تایید نمایید")}
                        type="button"

                        label={'تایید '}
                      />


                    </div>
                  }
                />
              )}
              {/* Last Workplace */}


              {/* <div className="col-span-3">
                <MainExplanation
                  color={'yellow'}
                  text={'چنانچه صندوق بازنشستگی مقصد، مربوط به سازمان تأمین اجتماعی نیروهای مسلح و صندوق بازنشستگی وزارت اطلاعات باشد، متقاضی (بیمه‌شده اصلی، بازمانده/وظیفه بگیر بیمه شده اصلی) از شمول درخواست مستمری جمع خارج است.'}
                />
              </div> */}

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

    </div>
  );
};

export default CreateUserInsuranceDes;