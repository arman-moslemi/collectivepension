import { useState, useEffect } from "react";
import { MainButton, MainInput, MainTable, MainExplanation, MainModal } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import DownSide from "../../assets/icon/general/DownSide";
import TikIcon from "../../assets/icon/general/TikIcon";
import { axiosReq } from "../../commons/axiosReq";
import Cookies from 'universal-cookie';

const AddWorkPlace = ({ id, setForms, setYearsData, yearsData, data, statusId,setRecheck,reCheck }) => {
  const [mainOpen, setMainOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [province, setProvince] = useState(null);
  const [cities, setCities] = useState([]);
  const [years, setYears] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dateError, setDateError] = useState('');
  const [timeFrameErrors, setTimeFrameErrors] = useState({});

  const handleRemoveLastForm = () => {
    setForms(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  };

  const [formData, setFormData] = useState({
    UserInsuranceId: id,
    InsuranceIdNumber: data?.insuranceIdNumber || "",
    CityId: data?.cityId || 0,
    Branch: data?.branch || "",
    Workplace: data?.workplace || "",
    WorkplaceNumber: data?.workplaceNumber || "",
    TimeFrames: data?.timeFrames || [],
    TrackRecordType:data?.trackRecordType ||0
  });

  const [currentTimeFrame, setCurrentTimeFrame] = useState({
    startDate: "",
    endDate: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tableRows, setTableRows] = useState([]);

  const navigate = useNavigate();
  const titleRow = ["ردیف", "سال", "دستمزد مشمول کسر حق بیمه"];

  // Utility function to check date conflicts
  const hasDateConflict = (newStartDate, newEndDate, existingTimeFrames) => {
    const newStart = new Date(newStartDate);
    const newEnd = new Date(newEndDate);

    for (const frame of existingTimeFrames) {
      const existingStart = new Date(frame.startDate);
      const existingEnd = new Date(frame.endDate);

      // Check if dates overlap
      if (newStart <= existingEnd && existingStart <= newEnd) {
        return true;
      }
    }
    return false;
  };

  // Validate current time frame
  const validateCurrentTimeFrame = () => {
    if (!currentTimeFrame.startDate || !currentTimeFrame.endDate) {
      setDateError('لطفا هر دو تاریخ را وارد کنید');
      return false;
    }

    const start = new Date(currentTimeFrame.startDate);
    const end = new Date(currentTimeFrame.endDate);

    if (end <= start) {
      setDateError('تاریخ پایان باید بزرگتر از تاریخ شروع باشد');
      return false;
    }

    // Check for conflicts with existing time frames
    if (hasDateConflict(currentTimeFrame.startDate, currentTimeFrame.endDate, formData.TimeFrames)) {
      setDateError('این بازه زمانی با بازه‌های موجود تداخل دارد');
      return false;
    }

    setDateError('');
    return true;
  };

  // Validate all time frames for conflicts
  const validateAllTimeFrames = () => {
    const errors = {};
    const frames = formData.TimeFrames;

    for (let i = 0; i < frames.length; i++) {
      for (let j = i + 1; j < frames.length; j++) {
        const frameA = frames[i];
        const frameB = frames[j];

        const startA = new Date(frameA.startDate);
        const endA = new Date(frameA.endDate);
        const startB = new Date(frameB.startDate);
        const endB = new Date(frameB.endDate);

        if (startA <= endB && startB <= endA) {
          errors[i] = `بازه ${i + 1} با بازه ${j + 1} تداخل دارد`;
          errors[j] = `بازه ${j + 1} با بازه ${i + 1} تداخل دارد`;
        }
      }
    }

    setTimeFrameErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCityChange = (value) => {
    setFormData(prev => ({
      ...prev,
      CityId: value?.id || 0
    }));
  };

  const GetCity = async (id) => {
    try {
      const response = await axiosReq("Users/GetCities", "post", { provinceId: id });
      const citiesList = response.data.map(element => ({
        id: element.cityId,
        name: element.cityName
      }));
      setCities(citiesList);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // Find province by city ID
  const findProvinceByCityId = async (cityId) => {
    if (!cityId || provinces.length === 0) return null;

    try {
      // You might need to adjust this API call based on your backend
      const response = await axiosReq("Experts/GetProvinceByCityId?cityId=" + cityId);
      if (response.data && response.data.provinceId) {
        return provinces.find(p => p.id === response.data.provinceId) || null;
      }
    } catch (error) {
      console.error("Error finding province by city:", error);
      // Fallback: try to find in current provinces list
      return provinces.find(p => p.cities && p.cities.some(c => c.id === cityId)) || null;
    }
    return null;
  };

  const handleAddTimeFrame = () => {
    if (!validateCurrentTimeFrame()) {
      return;
    }

    setFormData(prev => ({
      ...prev,
      TimeFrames: [...prev.TimeFrames, currentTimeFrame]
    }));

    setCurrentTimeFrame({ startDate: "", endDate: "" });
    setDateError('');
  };

  const handleRemoveTimeFrame = (index) => {
    setFormData(prev => ({
      ...prev,
      TimeFrames: prev.TimeFrames.filter((_, i) => i !== index)
    }));

    // Remove error for this index
    setTimeFrameErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[index];
      return newErrors;
    });
  };

  const handleSalaryChange = (year, value) => {
    setYearsData(prevData => {
      const updatedData = prevData.map(item =>
        item.year === year ? { ...item, salary: value } : item
      );
      return updatedData;
    });

    setTableRows(prevRows =>
      prevRows.map(row => {
        if (row.item2 === year.toString()) {
          return {
            ...row,
            item3: (
              <div className="flex items-center">
                <div className="w-[170px]">
                  <MainInput
                    Custom1={true}
                    value={value}
                    onChange={(e) => handleSalaryChange(year, e.target.value)}
                    holder={'مبلغ را وارد کنید'}
                  />
                </div>
                <p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p>
              </div>
            )
          };
        }
        return row;
      })
    );
  };

  const handleSubmit = async () => {
    try {
      // Validate all time frames before submission
      if (!validateAllTimeFrames()) {
        setError('تداخل در بازه‌های زمانی وجود دارد. لطفا بازه‌ها را بررسی کنید.');
        return;
      }

      if (formData.TimeFrames.length === 0) {
        setError('حداقل یک بازه زمانی باید اضافه شود');
        return;
      }

      setLoading(true);
      setError(null);

      const response = await axiosReq("Experts/CreateTimeFrame", "post", formData);

      if (response.status === 200) {
        alert("با موفقیت ثبت شد");
        setOpenModal(false);
       setRecheck(!reCheck)
        // Additional logic for second step if needed
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("خطا در ثبت اطلاعات");
    } finally {
      setLoading(false);
    }
  };

  const ChangeStep = () => {
    setOpenModal(false);
    handleSubmit();
  };

  const GetData = async () => {
    try {
      setIsLoading(true);
      const provincesRes = await axiosReq("Users/GetProvinces", "get");
      const provincesList = provincesRes.data.map(p => ({
        id: p.provinceId,
        name: p.provinceName
      }));
      setProvinces(provincesList);

      // If we have existing data with CityId, set the province and cities
      if (data?.cityId) {
        // First, try to find the province that contains this city
        // const provinceWithCity = await findProvinceByCityId(data.cityId);
        // if (provinceWithCity) {
        //   setProvince(provinceWithCity);
        //   await GetCity(provinceWithCity.id);
        // }
        GetCity(data?.provinceId)
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Set default values when data changes
  useEffect(() => {
    if (data) {
      setFormData(prev => ({
        ...prev,
        InsuranceIdNumber: data.insuranceIdNumber || "",
        CityId: data.cityId || 0,
        Branch: data.branch || "",
        Workplace: data.workplace || "",
        WorkplaceNumber: data.workplaceNumber || "",
        TimeFrames: data.timeFrames || [],
        TrackRecordType:data?.trackRecordType|| 0
      }));
    }
  }, [data]);

  // Validate time frames whenever they change
  useEffect(() => {
    if (formData.TimeFrames.length > 0) {
      validateAllTimeFrames();
    } else {
      setTimeFrameErrors({});
    }
  }, [formData.TimeFrames]);

  // Initialize default values when component mounts or data changes
  useEffect(() => {
    GetData();
  }, []);

  // Get current city object for the dropdown
  const currentCity = cities.find(c => c.id === formData.CityId) || null;

  return (
    <div className="w-full rounded-[10px] shadow-firstBoxShadow">
      <div className="w-full px-[28px] pt-[35px]">
        <div className="w-full grid grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              holder={'شماره شناسایی بیمه را وارد کنید'}
              label={'شماره شناسایی بیمه'}
              value={formData.InsuranceIdNumber}
              disable={statusId > 4 ? true : false}
              onChange={(e) => handleInputChange('InsuranceIdNumber', e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              label={'استان محل اشتغال'}
              listBox={true}
              listItems={provinces}
              value={province}
              disable={statusId > 4 ? true : false}

              defaultVal={data?.provinceId}
              necessary={true}
              onChange={(value) => {
                setProvince(value);
                GetCity(value?.id);
                handleInputChange('CityId', 0); // Reset city when province changes
              }}
              listBoxHolder="انتخاب کنید"
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              label={'شهر'}
              listBox={true}
              listItems={cities}
              necessary={true}
              defaultVal={data?.cityId}
              disable={statusId>4?true:false}

              value={currentCity}
              onChange={(value) => {
                handleInputChange('CityId', value?.id || 0);
              }}
              listBoxHolder="انتخاب کنید"
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              disable={statusId > 4 ? true : false}

              holder={'شعبه را وارد کنید'}
              label={'شعبه'}
              value={formData.Branch}
              onChange={(e) => handleInputChange('Branch', e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              disable={statusId > 4 ? true : false}

              holder={'محل خدمت / نام کارگاه را وارد کنید'}
              label={'محل خدمت / نام کارگاه'}
              value={formData.Workplace}
              onChange={(e) => handleInputChange('Workplace', e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              disable={statusId > 4 ? true : false}

              holder={'شماره دستگاه / کارگاه را وارد کنید'}
              label={'شماره دستگاه / کارگاه'}
              value={formData.WorkplaceNumber}
              onChange={(e) => handleInputChange('WorkplaceNumber', e.target.value)}
            />
          </div>
            <div className="mb-5 z940:col-span-3">
                <MainInput
                  label={'نوع سابقه'}
                  value={formData.TrackRecordType}
                  listBox={true}
                  defaultVal={formData.TrackRecordType}

                  listItems={[{ id: "دولتی", name: "دولتی" }, { id: "غیردولتی", name: "غیردولتی" }, { id: "هردو", name: "هردو" }]}
                  onChange={(value) => handleInputChange('TrackRecordType', value?.id)}
                  holder={'مثلا رسمی'}
                  necessary={true}
                  // error={formData.TrackRecordType && errors.TrackRecordType}


                />
              </div>
        </div>
      </div>

      <div className="w-full px-[28px] py-[35px] lg:px-2 lg:py-2">
        <div className="w-full grid grid-cols-6 gap-4">
          <div className="col-span-6">
            <p className="text-[14px] text-mainBlue font-IRANYekanBold leading-6 mb-7">
              در این بخش بازه‌های بیمه‌پردازی کاربر در این کارگاه را ثبت کنید. برای تعریف بازه جدید، روی افزودن بازه کلیک کنید.
            </p>
          </div>

          {!secondStep && (
            <>
              <div className="col-span-2 md:col-span-6 font-IRANYekanMedium">
                <MainInput
                  date={true}
                  necessary={true}
                  disable={statusId > 4 ? true : false}

                  value={currentTimeFrame.startDate}
                  onChange={(val) => setCurrentTimeFrame(prev => ({ ...prev, startDate: val }))}
                  leftIcon={<DateIcon />}
                  holder={'تاریخ شروع را وارد کنید'}
                  label={'تاریخ شروع بیمه پردازی'}
                />
              </div>
              <div className="col-span-2 md:col-span-6 font-IRANYekanMedium">
                <MainInput
                  date={true}
                  necessary={true}
                  disable={statusId > 4 ? true : false}

                  value={currentTimeFrame.endDate}
                  onChange={(val) => setCurrentTimeFrame(prev => ({ ...prev, endDate: val }))}
                  leftIcon={<DateIcon />}
                  holder={'تاریخ پایان را وارد کنید'}
                  label={'تاریخ پایان بیمه پردازی'}
                />
              </div>

              {dateError && (
                <div className="col-span-full">
                  <p className='font-IRANYekanBold text-redError text-[12px] w-full mt-1'>
                    {dateError}
                  </p>
                </div>
              )}
              {
                statusId < 5 ?
                  <div className="col-span-2 md:col-span-6 w-full flex items-end md:justify-between">
                    <div className="mr-[4%] md:mx-0 ml-[6%] w-[47%]">
                      <MainButton
                        label={'افزودن بازه جدید'}
                        onClickFunction={handleAddTimeFrame}
                        disabled={!currentTimeFrame.startDate || !currentTimeFrame.endDate}
                      />
                    </div>
                    <div className="w-[43%]">
                      <MainButton
                        onClickFunction={() => {
                          if (validateAllTimeFrames()) {
                            setOpenModal(true);
                          }
                        }}
                        label={'ثبت'}
                        disabled={formData.TimeFrames.length === 0}
                      />
                    </div>
                  </div>
                  :
                  null
              }
            </>
          )}
        </div>

        <div className={`w-full flex flex-wrap items-center ${secondStep ? 'mt-0' : 'mt-[33px]'}`}>
          <p className="text-mainBlue text-[16px] lg:text-[14px] font-IRANYekanExtra ml-[19px] lg:mb-2">
            بازه‌های ثبت شده:
          </p>

          {formData.TimeFrames.map((timeFrame, index) => (
            <div
              key={index}
              className={`rounded-[50px] pr-[16px] pl-[9px] py-[6px] flex items-center w-fit ml-[10px] mb-2 ${timeFrameErrors[index] ? 'bg-red-100 border border-red-300' : 'bg-backBlue'
                }`}
            >
              <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">
                {timeFrame.startDate}
              </p>
              <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">تا</p>
              <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-4 lg:text-[12px]">
                {timeFrame.endDate}
              </p>
              {
                statusId < 5 ?

                  <div
                    className="w-[36px] h-[36px] lg:w-[20px] lg:h-[20px] rounded-full bg-buttonBlue flex justify-center items-center hover:cursor-pointer"
                    onClick={() => handleRemoveTimeFrame(index)}
                  >
                    <p className="font-IRANYekanBold text-[20px] text-white lg:text-[14px]">X</p>
                  </div>
                  :
                  null
              }
              {timeFrameErrors[index] && (
                <p className="text-redError text-[12px] font-IRANYekanMedium mr-2">
                  {timeFrameErrors[index]}
                </p>
              )}
            </div>
          ))}
        </div>

        {error && (
          <div className="w-full mt-4 p-3 bg-red-100 border border-red-300 rounded">
            <p className="text-redError text-[14px] font-IRANYekanMedium">
              {error}
            </p>
          </div>
        )}

        {secondStep && (
          <div className="w-full mt-[34px]">
            <p className="text-[16px] text-mainBlue font-IRANYekanMedium leading-6 mb-[34px]">
              در این قسمت لازم است تا دستمزد مشمول کسر حق بیمه یا درآمد مقطوع را برای هر سال وارد کنید.
            </p>
            <div className="w-full flex justify-center">
              <div className="w-[75%]">
                <MainTable cen5={true} list={tableRows} titleRow={titleRow} />
              </div>
            </div>
            <p className="text-[16px] text-mainBlue font-IRANYekanMedium leading-6 mt-8 mb-6">
              پس از ثبت دستمزد مشمول کسر حق بیمه به ازای هرسال، جهت محاسبه مجموع سوابق بر روی دکمه محاسبه سوابق کلیک کنید.
            </p>
          </div>
        )}
      </div>

      {openModal && (
        <MainModal
          setShowModal={setOpenModal}
          text={'آیا از درستی بازه‌های وارد شده اطمینان دارید؟'}
          modalButton={
            <div className="w-full flex justify-center">
              <div className="w-[100px] ml-4">
                <MainButton
                  onClickFunction={ChangeStep}
                  label={loading ? 'در حال ثبت...' : 'بله'}
                  disabled={loading}
                />
              </div>
              <div className="w-[100px]">
                <MainButton
                  onClickFunction={() => setOpenModal(false)}
                  label={'خیر'}
                  red={true}
                  disabled={loading}
                />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default AddWorkPlace;
