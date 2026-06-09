import { MainButton, MainInput, MainModal, MainRadioInput, } from "../../components";
import Cross from "../../assets/icon/general/Cross";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'jalali-moment';
import Cookies from 'universal-cookie';
import UserRamz from "./UserRamz";

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
const l1 = [
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

const UserDataInsuranceOrigin = ({ number, handleRemoveLastForm, inModal, data, reCheck, setRecheck,setTaminNoticeOpen }) => {

  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([])
  const [province, setProvince] = useState()
  const [cities, setCities] = useState([])
  const [insurances, setInsurances] = useState([])
  const [des, setDes] = useState('')
  const [isok, setIsok] = useState(true)
  const [isLoading, setIsLoading] = useState(true);
   const [ramzModal, setRamzModal] = useState(false);
    const [ramz, setRamz] = useState(false);
  const [initialValues, setInitialValues] = useState({
    InsuranceId: 0,
    IsEndingInsurance: false,
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
    UserInsuranceId: 0
  });


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
    LastWorkplace: Yup.string().required('آخرین محل اشتغال الزامی است'),
    // EmploymentStatusId: Yup.number().min(1, 'وضعیت اشتغال الزامی است').required('وضعیت اشتغال الزامی است'),
    // StartDate: Yup.string().required('تاریخ شروع بیمه پردازی الزامی است'),
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
    QuitDate: Yup.string()
      .required('تاریخ خروج الزامی است'),
    // .test('is-greater', 'تاریخ خروج باید بعد از تاریخ پایان باشد', function (value) {
    // const { EndDate } = this.parent;
    // if (!EndDate || !value) return true; // let required handle empty fields
    // return new Date(value) > new Date(EndDate);

    // }
    // ),
    QuitReason: Yup.string().required('علت خروج بیمه پردازی الزامی است'),

  });

  const cookies = new Cookies();

  let status = cookies.get("Status");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values)
      console.log(moment().locale('fa').format('YYYY/MM/DD'))
      if (status > 3) {
        navigate('../dashboard')
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
        QuitDate: values.QuitDate.length > 10 ?
          moment(values.QuitDate?.split("T")[0].replace("-", "/"), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD') : values.QuitDate,
        EmploymentStatusDescription: des
      };
      payload.DepartmentName = values.InsuranceId == 1 ? "تامین" : values.DepartmentName;
  if (values.InsuranceId == 1 && ramz != true) {
        console.log(11000)

      
          return alert("کد رمز را تایید کنید")
        
      }
      else {
      if (initialValues.UserInsuranceId == 0) {
        const response = await axiosReq("Users/CreateUserInsurance", "post", payload);

        if (response?.status === 200) {

          alert('عملیات با موفقیت انجام شد');
          setRecheck(!reCheck)
        }
        else {
          alert(response?.data)
        }
      }
      else {
        // const response = await axiosReq("Users/UpdateUserInsurance", "put", payload);
        const response = await axiosReq("Users/UpdateUserInsurance", "post", payload);

        if (response?.status === 200) {
          alert('عملیات با موفقیت انجام شد');
          setRecheck(!reCheck)

        }
        else {
          console.log(response)
          alert(response)
        }
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
          // StartDate: data.startDate || '',
          // EndDate: data.endDate || '',
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
    const response = await axiosReq("Users/DeleteUserInsurance?UserInsuranceId=" + data.userInsuranceId, "post");
    if (response.status == 200) {
      alert("با موفقیت حذف شد")
      setRecheck(!reCheck)

    }
  }
  return (
    <div className="w-full border-b-[2px] pb-3 border-borderGray">
      <div className={`w-full ${inModal ? 'mb-[22px]' : 'mb-[30px]'}  flex justify-between items-center`}>
        <p className="font-IRANYekanExtra text-[16px] text-mainBlue">اطلاعات فرد در صندوق بازنشستگی مبدا (شماره {number+1})</p>
        {/* {number === 1 || inModal ? null : <button onClick={handleRemoveLastForm}><Cross /></button>} */}
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
            <div className="mb-5 col-span-2 b1115:col-span-3">
              <MainInput
                label={'نام صندوق بازنشستگی'}
                defaultVal={values.InsuranceId}
                value={insurances.find(i => i.id === values.InsuranceId) || null}
                onChange={(value) => {setFieldValue('InsuranceId', value?.id || 0);value?.id==1?setTaminNoticeOpen(true):setTaminNoticeOpen(false)}}
                holder={'مثلا وزارت تعاون'}
                listBox={true}
                listItems={insurances}
                necessary={true}
                error={touched.InsuranceId && errors.InsuranceId}
                errorText={errors.InsuranceId}
                disable={status > 3 ? true : false}
                max={40}

              />
            </div>

            {/* City */}
            {
              values.InsuranceId == 1 ?
                null
                :
                <div className="mb-5 col-span-1 b1115:col-span-3">
                  <MainInput
                    label={'نام دستگاه اجرائی/کارگاه'}
                    onChange={(e) => setFieldValue('DepartmentName', e.target.value)}
                    value={values.DepartmentName}
                    necessary={true}
                    // listBox={true}
                    // listItems={l1}
                    holder={'مثلا وزرات تعاون'}
                    error={touched.DepartmentName && errors.DepartmentName}
                    errorText={errors.DepartmentName}
                    disable={status > 3 ? true : false}
                    max={40}
                  />
                </div>
            }
            <div className="mb-5 col-span-1 b1115:col-span-3">
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
                disable={status > 3 ? true : false}

              />
            </div>
            <div className="mb-5 col-span-1 b1115:col-span-3">
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
                disable={status > 3 ? true : false}

              />
            </div>
            {/* <div className="mb-5 col-span-3 b1115:col-span-3">
              <MainRadioInput v value1={1} value2={2} value3={3}
                onChange={(value) => setFieldValue('EmploymentStatusId', value)} column={true}
                title={'وضعیت بیمه پردازی'}
                necessary={true}
                text1={'مشمول قانون  مدیریت خدمات کشوری و سایر مقررات استخدامی'}
                text2={'مشمول قانون کار'} text3={'سایر'} onChangeInput={(e) => setDes(e)}
                selectedValue={values.EmploymentStatusId}
                disable={status > 3 ? true : false}

                input={true} />
              {touched.EmploymentStatusId ?
                <p className='font-IRANYekanBold text-redError text-[12px] mt-1'>{errors?.EmploymentStatusId}</p>
                :
                null}
            </div> */}
            {/* <div className="mb-5 col-span-1">
              <MainRadioInput value1={true} value2={false}selectedValue={values.IsEndingInsurance}
                onChange={(value) => setFieldValue('IsEndingInsurance', value)} column={true}
                title={'مشترک فعال صندوق بازنشستگی'} text1={'بله'} text2={'خیر'} />
            </div> */}

            {/* Insurance ID Number */}
            <div className="mb-5 b1115:col-span-3">
              <MainInput
                label={'شماره شناسایی بیمه'}
                value={values.InsuranceIdNumber}
                onChange={(e) => setFieldValue('InsuranceIdNumber', e.target.value)}
                holder={'مثلا 053268986'}
                max={10}
                necessary={true}
                error={touched.InsuranceIdNumber && errors.InsuranceIdNumber}
                errorText={errors.InsuranceIdNumber}
                disable={status > 3 ? true : false}
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
            {/* <div className="mb-5 b1115:col-span-3">
              <MainInput
                label={'تاریخ شروع بیمه پردازی'}
                value={values.StartDate}
                defaultVal={initialValues.StartDate ? initialValues.StartDate : ""}
                onChange={(value) => setFieldValue('StartDate', value)}

                necessary={true}
                error={touched.StartDate && errors.StartDate}
                errorText={errors.StartDate}
                date={true}
                disable={status > 3 ? true : false}

              />
            </div> */}

            {/* End Date */}
            {/* <div className="mb-5 b1115:col-span-3">
              <MainInput
                label={'تاریخ آخرین بیمه پردازی'}
                value={values.EndDate}
                defaultVal={initialValues.EndDate ? initialValues.EndDate : ""}
                onChange={(value) => setFieldValue('EndDate', value)}

                necessary={true}
                error={touched.EndDate && errors.EndDate}
                errorText={errors.EndDate}
                date={true}
                disable={status > 3 ? true : false}

              />
            </div> */}

            {/* Quit Date (conditional) */}


            {/* Quit Reason (conditional) */}


            {/* Track Record Type */}
            <div className="mb-5 b1115:col-span-3">
              <MainInput
                label={'نوع سابقه'}
                value={values.TrackRecordType}
                listBox={true}
                defaultVal={values.TrackRecordType}

                listItems={[{ id: "دولتی", name: "دولتی" }, { id: "غیردولتی", name: "غیردولتی" }]}
                onChange={(value) => setFieldValue('TrackRecordType', value?.id)}
                holder={'مثلا رسمی'}
                necessary={true}
                error={touched.TrackRecordType && errors.TrackRecordType}
                errorText={errors.TrackRecordType}
                disable={status > 3 ? true : false}

              />
            </div>

            {/* Track Record Days */}
            <div className="mb-5 b1115:col-span-3">
              <MainInput
                label={<div className="flex items-center">
                  <p className="font-IRANYekanBold text-[16px] text-mainBlue">میزان سابقه</p>
                  <p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]"> (به روز)</p>
                </div>}
                value={values.TrackRecordDays}
                onChange={(e) => setFieldValue('TrackRecordDays', e.target.value)}
                holder={'756 روز'}
                necessary={true}
                max={5}

                error={touched.TrackRecordDays && errors.TrackRecordDays}
                errorText={errors.TrackRecordDays}
                disable={status > 3 ? true : false}
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

            <div className="mb-5 flex items-end b1115:col-span-3 gap-2">
              <MainInput
                label={<div className="flex items-center">
                  {values.InsuranceId == 1 ?
                    <p className="font-IRANYekanBold text-[16px]  text-mainBlue"> کدرمز</p>

                    :
                    <p className="font-IRANYekanBold text-[16px] text-mainBlue"> شماره دستگاه اجرایی/کارگاه</p>
                  }
                  {/* <p className="font-IRANYekanMedium text-[10px] text-mainBlue mr-[3px]">(دستگاه اجرایی/کارگاه)</p> */}
                </div>}
                necessary={values.InsuranceId == 1 ? true : false}
                holder={'مثلا 0...'}
                value={values.LastWorkplace}
                onChange={(e) => setFieldValue('LastWorkplace', e.target.value)}
                error={touched.LastWorkplace && errors.LastWorkplace}
                errorText={errors.LastWorkplace}
                disable={status > 3 ? true : false}
                max={40}

              />
                  {values.InsuranceId == 1?
                              <div className="w-[200px] flex items-end ">
              
                                <MainButton
                    onClickFunction={() => values.LastWorkplace!="" ?setRamzModal(true):alert("کد رمز را وارد نمایید")}
                                  type={"button"}
                                  label={'استعلام کد رمز '}
                                />
              
              
                              </div>
                              : null}
            </div>

            {/* Last Workplace */}




            <div className={`${inModal ? 'mb-0' : 'mb-5'} col-span-3`}>
              <MainInput
                label={'علت خروج از صندوق '}
                holder={'مثلا ...'}
                listBox={true}
                defaultVal={values.QuitReason}

                listItems={[{ id: "اخراج", name: "اخراج" },
                { id: "استعفا", name: "استعفا" }, { id: "بازخرید خدمت", name: "بازخرید خدمت" },
                { id: "انتقال", name: "انتقال" },
                { id: "انفصال دائم", name: "انفصال دائم" },
                { id: " تغییرات ناشی از ادغام، انحلال و واگذاری", name: " تغییرات ناشی از ادغام، انحلال و واگذاری" },

                ]}
                necessary={true}
                value={values.QuitReason}
                onChange={(value) => setFieldValue('QuitReason', value?.id)}
                error={touched.QuitReason && errors.QuitReason}
                errorText={errors.QuitReason}
                disable={status > 3 ? true : false}
                max={150}

              />
            </div>
            <div className={`${inModal ? 'mb-0' : 'mb-5'} b1115:col-span-3`}>
              <MainInput label={'تاریخ خروج از عضویت صندوق'} necessary={true}
                value={values.QuitDate}
                defaultVal={initialValues.QuitDate ? initialValues.QuitDate : ""}
                onChange={(value) => setFieldValue('QuitDate', value)}
                error={touched.QuitDate && errors.QuitDate}
                errorText={errors.QuitDate}
                date={true}
                disable={status > 3 ? true : false}

              />
            </div>
            {data ?
              <div className="col-span-2 b1115:col-span-3">
                <div className="w-full h-full  flex justify-end items-end">
                  {/* <div className="w-[138px] ml-4">
                    <MainButton red={true} disabled={status > 1 ? true : false} onClickFunction={() => deleteInsu()}
                      label={'حذف صندوق'} />
                  </div> */}
                  <div className="w-[138px]">
                    <MainButton
                      type="submit"
                      disabled={status > 1 || isSubmitting ? true : false}
                      label={'ویرایش صندوق'} />
                  </div>


                </div>
              </div>
              :
              <div className="col-span-2 b1115:col-span-3">
                <div className="w-full h-full  flex justify-end items-end">
                  <div className="w-[138px]">
                    <MainButton
                      type="submit"
                      disabled={isSubmitting}
                      label={'ذخیره صندوق'} />
                  </div>


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