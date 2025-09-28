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

const list = [
  {
    item1: "1",
    item2: "1372",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'} /></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon /></div></div>,
  },
  {
    item1: "2",
    item2: "1373",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'} /></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon /></div></div>,
  },
  {
    item1: "3",
    item2: "1374",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'} /></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon /></div></div>,
  },
  {
    item1: "4",
    item2: "1375",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'} /></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon /></div></div>,
  },
  {
    item1: "5",
    item2: "1376",
    item3: <div className="flex items-center"><div className="w-[170px]"><MainInput Custom1={true} holder={'مبلغ را وارد کنید'} /></div><p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p></div>,
    item4: <div className="w-full flex justify-center items-center"><div className="w-[40px] h-[40px] rounded-full bg-mainGreen flex justify-center items-center"><TikIcon /></div></div>,
  },

];


const AddWorkPlace = ({ id, setForms
  , setYearsData, yearsData, data
}) => {
  const [mainOpen, setMainOpen] = useState(false);
  const [showDiv, setShowDiv] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [secondStep, setSecondStep] = useState(false);
  const [provinces, setProvinces] = useState([])
  const [province, setProvince] = useState()
  const [cities, setCities] = useState([])
  const [years, setYears] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [dateError, setDateError] = useState('');

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
    TimeFrames: data?.timeFrames || []
  });
  const [currentTimeFrame, setCurrentTimeFrame] = useState({
    startDate: "",
    endDate: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const titleRow = ["ردیف", "سال", "دستمزد مشمول کسر حق بیمه"];


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
  const handleAddTimeFrame = () => {
    console.log(currentTimeFrame.startDate)
    //  if (!validateDates()) {
    //     return; // Stop submission if validation fails
    //   }
    if (currentTimeFrame.startDate && currentTimeFrame.endDate) {
      setFormData(prev => ({
        ...prev,
        TimeFrames: [...prev.TimeFrames, currentTimeFrame]
      }));
      setCurrentTimeFrame({ startDate: "", endDate: "" });
    }
  };

  const handleRemoveTimeFrame = (index) => {
    setFormData(prev => ({
      ...prev,
      TimeFrames: prev.TimeFrames.filter((_, i) => i !== index)
    }));
  };
  const [tableRows, setTableRows] = useState([]);

  const initializeYearsData = (yearsFromApi) => {
    const initialData = yearsFromApi.map(year => ({
      year: year.year,
      salary: ""
    }));
    setYearsData(initialData);
    return initialData;
  };

  const handleSalaryChange = (year, value) => {
    // Update yearsData state
    setYearsData(prevData => {
      const updatedData = prevData.map(item =>
        item.year === year ? { ...item, salary: value } : item
      );
      return updatedData;
    });

    // Update the table rows to reflect the change
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

      setLoading(true);
      const response = await axiosReq("Experts/CreateTimeFrame", "post", formData);

      if (response.status === 200) {
        // Initialize yearsData
        // const initialYearsData = initializeYearsData(response.data);

        // // Create initial table rows
        // const initialTableRows = response.data.map((item, index) => ({
        //   item1: (index + 1).toString(),
        //   item2: item.year.toString(),
        //   item3: (
        //     <div className="flex items-center">
        //       <div className="w-[170px]">
        //         <MainInput 
        //           Custom1={true}
        //           value={initialYearsData.find(y => y.year === item.year)?.salary || ""}
        //           onChange={(e) => handleSalaryChange(item.year, e.target.value)}
        //           holder={'مبلغ را وارد کنید'}
        //         />
        //       </div>
        //       <p className="text-[15px] font-IRANYekanMedium mr-4">تومان</p>
        //     </div>
        //   )
        // }));

        // setTableRows(initialTableRows);
        // setSecondStep(true);
        alert("با موفقیت ثبت شد")
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("خطا در ثبت اطلاعات");
    } finally {
      setLoading(false);
    }
  };

  const validateDates = () => {
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

    setDateError('');
    return true;
  };





  const ChangeStep = () => {
    setOpenModal(false);
    handleSubmit();
  };
  const GetData = async () => {
    try {
      setIsLoading(true);

      const [provincesRes] = await Promise.all([
        axiosReq("Users/GetProvinces", "get")
      ]);

      setProvinces(provincesRes.data.map(p => ({ id: p.provinceId, name: p.provinceName })));

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    GetData()
  }, [])
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
              onChange={(e) => handleInputChange('InsuranceIdNumber', e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">

            <MainInput
              label={'استان محل اشتغال'}
              listBox={true}
              listItems={provinces}
              value={province}
              necessary={true}
              // defaultVal={provinces.find(i => i.id === values.ProvinceId) || null}
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

              // value={cities.find(c => c.id === values.CityId) || null}
              value={formData.CityId || null}
              onChange={(value) => {
                handleInputChange('CityId', value?.id || 0);
              }}

              listBoxHolder="انتخاب کنید"
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              holder={'شعبه را وارد کنید'}
              label={'شعبه'}
              value={formData.Branch}
              onChange={(e) => handleInputChange('Branch', e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              holder={'محل خدمت / نام کارگاه را وارد کنید'}
              label={'محل خدمت / نام کارگاه'}
              value={formData.Workplace}
              onChange={(e) => handleInputChange('Workplace', e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <MainInput
              necessary={true}
              holder={'شماره دستگاه / کارگاه را وارد کنید'}
              label={'شماره دستگاه / کارگاه'}
              value={formData.WorkplaceNumber}
              onChange={(e) => handleInputChange('WorkplaceNumber', e.target.value)}
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
                  value={currentTimeFrame.endDate}
                  onChange={(val) => setCurrentTimeFrame(prev => ({ ...prev, endDate: val }))}
                  leftIcon={<DateIcon />}
                  holder={'تاریخ پایان را وارد کنید'}
                  label={'تاریخ پایان بیمه پردازی'}
                />
              </div>
              {dateError && (
                <div className="col-span-full text-red-500 text-sm mt-2">
                  {dateError}
                </div>
              )}
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
                    onClickFunction={() => setOpenModal(true)}
                    label={'ثبت '}
                    disabled={formData.TimeFrames.length === 0}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className={`w-full flex flex-wrap items-center ${secondStep ? 'mt-0' : 'mt-[33px]'}`}>
          <p className="text-mainBlue text-[16px] lg:text-[14px] font-IRANYekanExtra ml-[19px] lg:mb-2">
            بازه‌های ثبت شده:
          </p>

          {formData.TimeFrames.map((timeFrame, index) => (
            <div key={index} className="rounded-[50px] bg-backBlue pr-[16px] pl-[9px] py-[6px] flex items-center w-fit ml-[10px] mb-2">
              <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">
                {timeFrame.startDate}
              </p>
              <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-2 lg:text-[12px]">تا</p>
              <p className="text-buttonBlue text-[16px] font-IRANYekanBold ml-4 lg:text-[12px]">
                {timeFrame.endDate}
              </p>
              <div
                className="w-[36px] h-[36px] lg:w-[20px] lg:h-[20px] rounded-full bg-buttonBlue flex justify-center items-center hover:cursor-pointer"
                onClick={() => handleRemoveTimeFrame(index)}
              >
                <p className="font-IRANYekanBold text-[20px] text-white lg:text-[14px]">X</p>
              </div>
            </div>
          ))}
        </div>

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
                <MainButton onClickFunction={ChangeStep} label={'بله'} />
              </div>
              <div className="w-[100px]">
                <MainButton onClickFunction={() => setOpenModal(false)} label={'خیر'} red={true} />
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default AddWorkPlace;