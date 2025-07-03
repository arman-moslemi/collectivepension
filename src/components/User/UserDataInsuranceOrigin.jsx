import { MainButton, MainInput, MainRadioInput, } from "../../components";
import Cross from "../../assets/icon/general/Cross";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'jalali-moment';

const listItems = [
  {
    id: 1,
    name: 'اول',
  },
  {
    id: 2,
    name: 'دوم',
  },
  {
    id: 3,
    name: 'سوم',
  },
  {
    id: 4,
    name: 'چهارم',
  },
]
const provinceList = [
  {
    id: 1,
    name: 'تهران',
  },
  {
    id: 2,
    name: 'شیراز',
  },
  {
    id: 3,
    name: 'اصفهان',
  },
  {
    id: 4,
    name: 'خراسان رضوی',
  },
]
const cityList = [
  {
    id: 1,
    name: 'دماوند',
  },
  {
    id: 2,
    name: 'فیروزکوه',
  },
  {
    id: 3,
    name: 'ورامین',
  },
  {
    id: 4,
    name: 'پاکدشت',
  },
]

const UserDataInsuranceOrigin = ({ number, handleRemoveLastForm, inModal, data, reCheck, setRecheck }) => {

  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([])
  const [province, setProvince] = useState()
  const [insurances, setInsurances] = useState([])
  const [cities, setCities] = useState([])
  const [des, setDes] = useState('')
  const [isok, setIsok] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    InsuranceId: 0,
    IsEndingInsurance: false,
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
    UserInsuranceId: 0
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
        StartDate: values.StartDate.length > 10 ?
          moment(values.StartDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : values.StartDate,
        EndDate: values.EndDate.length > 10 ?
          moment(values.EndDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : values.EndDate,
                  QuitDate: values.QuitDate.length > 10 ?
          moment(values.QuitDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : values.QuitDate,
        EmploymentStatusDescription: des
      };
      if (initialValues.UserInsuranceId == 0) {
        const response = await axiosReq("Users/CreateUserInsurance", "post", payload);

        if (response?.status === 200) {

          alert('عملیات با موفقیت انجام شد');
          setRecheck(!reCheck)
        }
        else{
          alert(response)
        }
      }
      else {
        const response = await axiosReq("Users/UpdateUserInsurance", "put", payload);

        if (response?.status === 200) {
          alert('عملیات با موفقیت انجام شد');
          setRecheck(!reCheck)

        }
         else{
          console.log(response)
          alert(response)
        }
      }
    } catch (error) {
      console.error("Error creating insurance:", error);
    }
  }

  const handlePrevious = () => {
    navigate('../updateUserBaseInfoHimself');
  };
  const GetData = async () => {
    try {
      setIsLoading(true);

      // 1. Fetch user insurance data


      // 2. Set initial values from API response
      if (data) {
        console.log(8888)
        console.log(data)
        setInitialValues({
          UserInsuranceId: data.userInsuranceId || 0,
          InsuranceId: data.insuranceId || 0,
          IsEndingInsurance: data.isEndingInsurance || false,
          DepartmentName: data.departmentName || '',
          CityId: data.cityId || 0,
          InsuranceIdNumber: data.insuranceIdNumber || '',
          TrackRecordType: data.trackRecordType || '',
          TrackRecordDays: data.trackRecordDays || '',
          LastWorkplace: data.lastWorkplace || '',
          EmploymentStatusId: data.employmentStatusId || 0,
          QuitReason: data.quitReason || '',
          QuitDate: data.quitDate || '',
          StartDate: data.startDate || '',
          EndDate: data.endDate || '',
          ProvinceId: data.provinceId || '',

        });

        // Set description if available
        if (data.employmentStatusDescription) {
          setDes(data.employmentStatusDescription);
        }

        // Load province and city if cityId is available
        // if (data.cityId) {
        //   await loadProvinceAndCity(data.cityId);
        // }

        const response = await axiosReq("Users/GetCities", "post", { provinceId: data?.provinceId });
        var prov = []

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
    GetData()
  }, [])
  if (isLoading) {
    return <div>Loading...</div>; // Add a proper loading indicator
  }
  const deleteInsu = async () => {
    const response = await axiosReq("Users/DeleteUserInsurance?UserInsuranceId=" + data.userInsuranceId, "delete");
    if (response.status == 200) {
      alert("با موفقیت حذف شد")
      setRecheck(!reCheck)

    }
  }
  return (
    <div className="w-full border-b-[2px] border-borderGray">
      <div className={`w-full ${inModal ? 'mb-[22px]' : 'mb-[30px]'}  flex justify-between items-center`}>
        <p className="font-IRANYekanExtra text-[16px] text-mainBlue">اطلاعات فرد در صندوق بازنشستگی مبدا (شماره {number})</p>
        {number === 1 || inModal ? null : <button onClick={handleRemoveLastForm}><Cross /></button>}
      </div>

      {/* <div className="w-full grid grid-cols-3 gap-4"> */}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className=" w-full grid grid-cols-3 gap-4">
            {/* Department Name */}
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

            {/* City */}
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
            <div className="mb-5 col-span-3">
              <MainRadioInput v value1={1} value2={2} value3={3}
                onChange={(value) => setFieldValue('EmploymentStatusId', value)} column={true}
                title={'وضعیت بیمه پردازی'}
                text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'}
                text2={'مشمول قانون کار'} text3={'سایر'} onChangeInput={(e) => setDes(e)}
                selectedValue={values.EmploymentStatusId}

                input={true} />
            </div>
            {/* <div className="mb-5 col-span-1">
              <MainRadioInput value1={true} value2={false}selectedValue={values.IsEndingInsurance}
                onChange={(value) => setFieldValue('IsEndingInsurance', value)} column={true}
                title={'مشترک فعال صندوق بازنشستگی'} text1={'بله'} text2={'خیر'} />
            </div> */}

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
                defaultVal={initialValues.StartDate ? initialValues.StartDate : new Date()}
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
                defaultVal={initialValues.EndDate ? initialValues.EndDate : new Date()}
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
                necessary={true}
                holder={'مثلا 0...'}
                value={values.LastWorkplace}
                onChange={(e) => setFieldValue('LastWorkplace', e.target.value)}
                error={touched.LastWorkplace && errors.LastWorkplace}
                errorText={errors.LastWorkplace}
              />
            </div>

            {/* Last Workplace */}




            <div className={`${inModal ? 'mb-0' : 'mb-5'} col-span-3`}>
              <MainInput
                label={'علت خروج از صندوق (اخراج،استعفا،بازخرید خدمت،انتقال،انفصال دائم و تغییرات ناشی از ادغام، انحلال و واگذاری)'}
                holder={'مثلا ...'}
                necessary={true}
                value={values.QuitReason}
                onChange={(e) => setFieldValue('QuitReason', e.target.value)}
                error={touched.QuitReason && errors.QuitReason}
                errorText={errors.QuitReason} />
            </div>
            <div className={`${inModal ? 'mb-0' : 'mb-5'}`}>
              <MainInput label={'تاریخ خروج از عضویت صندوق'} holder={'1376/05/04'} necessary={true}
                value={values.QuitDate}
                defaultVal={initialValues.QuitDate ? initialValues.QuitDate : new Date()}
                onChange={(value) => setFieldValue('QuitDate', value)}
                error={touched.QuitDate && errors.QuitDate}
                errorText={errors.QuitDate}
                date={true}

              />
            </div>
            {data ?
              <div className="col-span-2">
                <div className="w-full h-full pb-6 flex justify-end items-end">
                  <div className="w-[138px] ml-4">
                    <MainButton red={true} onClickFunction={() => deleteInsu()}
                      label={'حذف صندوق'} />
                  </div>
                  <div className="w-[138px]">
                    <MainButton
                      type="submit"
                      disabled={isSubmitting}

                      label={'ویرایش صندوق'} />
                  </div>


                </div>
              </div>
              :
              <div className="col-span-2">
                <div className="w-full h-full pb-6 flex justify-end items-end">
                  <div className="w-[138px]">
                    <MainButton
                      type="submit"
                      disabled={isSubmitting}
                      label={'ذخیره صندوق'} />
                  </div>


                </div>
              </div>
            }
          </Form>
        )}
      </Formik>

      {/* </div> */}
    </div>
  );
};

export default UserDataInsuranceOrigin;