import { MainButton, MainExplanation, MainModal, ExistingRecordsMainBox, UserDataInsuranceOrigin, MainTable } from "../../components";
import DayIcon from "../../assets/icon/user/DayIcon";
import MonthIcon from "../../assets/icon/user/MonthIcon";
import YearIcon from "../../assets/icon/user/YearIcon";
import DetailTableIcon from '../../assets/icon/general/DetailTableIcon';
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";

const titleRow = ["ردیف", "استان", "شهر", "شعبه", "محل خدمت/نام کارگاه", "شماره دستگاه/کارگاه", "شماره شناسایی بیمه", "سابقه (تعداد روز)", "مشاهده"];


const ExistingRecords = ({ setObjYear,setSelectedYearBox,selectedYearBox ,objYear}) => {

    const [showAddOriginBoxModal, setShowAddOriginBoxModal] = useState(false);
    const [selectedBox, setSelectedBox] = useState(false);
    const [props, setProps] = useState([]);

    const AddOriginBoxModalFunction = () => {
        setShowAddOriginBoxModal(false);
    }
    const [initialValues, setInitialValues] = useState({
        fullname: '',
        fatherName: '',
        birthDate: '',
        nationalCode: '',
        isMan: '',
        idcardNumber: '',
        phoneNumber: '',
        mobileNumber: '',
        totalDuration: '',
        personnelCode: '',
        year: '',
        month: '',
        day: "",
        requestDate: "",
        insuNameDuration: []
    });


    useEffect(() => {
        getInsurances();
    }, []);
    const getInsurances = async () => {
        try {
            const response = await axiosReq("Users/GetUserInsurances", "get");
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
    const getInsurancesProps = async (id) => {
        try {
            const response = await axiosReq("Users/GetUserInsuranceProps?insuranceId=" + id, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var propss = [];

                response.data.map((item, index) => {
                    propss.push({
                        item1: index + 1,
                        item2: item.provinceName,
                        item3: item.cityName,
                        item4: item.branch,
                        item5: item.workplace,
                        item6: item.workplaceNumber,
                        item7: item.insuranceIdNumber,
                        item8: item.duration,
                        item9: <div onClick={() =>{console.log(selectedYearBox);setObjYear({
                            InsuranceId:id,
                            InsuranceIdNumber: item.insuranceIdNumber,
                            Branch: item.branch,
                            Workplace: item.workplace,
                            WorkplaceNumber: item.workplaceNumber,
                            CityId: item.cityId
                        });setSelectedYearBox(!selectedYearBox)}} className='w-[38px] h-[38px] cursor-pointer rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon /></div>,

                    })
                })
                setProps(propss);
                setSelectedBox(true)
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
            <div className="w-full flex justify-end">
                <div className="w-[186px] ml-4"><MainButton onClickFunction={() => { setShowAddOriginBoxModal(true) }} label={'+ افزودن صندوق مبدا'} /></div>
                <div className="w-[97px]"><MainButton gray={true} label={'تایید سوابق'} /></div>
            </div>
            <div className="w-full my-3">
                <MainExplanation text={<div>
                    <p>در این بخش، فهرستی از صندوق‌هایی که شما در آن‌ها سابقه بیمه‌پردازی داشته‌اید نمایش داده می‌شود. با انتخاب هر صندوق، سال‌هایی که در آن‌ها دارای سابقه هستید قابل مشاهده خواهد بود. سپس با انتخاب هر سال، می‌توانید ماه‌هایی که در آن‌ها بیمه‌پردازی انجام شده را مشاهده کنید.</p>
                    <p>در صورتی که در یک ماه، بیش از یک بازه بیمه‌پردازی داشته باشید، با استفاده از دکمه «مشاهده بازه‌ها» می‌توانید جزئیات تمامی بازه‌های آن ماه را بررسی نمایید. همچنین در قسمت «سوابق دارای همپوشانی»، لازم است یکی از صندوق‌ها را انتخاب کنید تا بازه‌های مربوط به آن صندوق به عنوان سابقه معتبر در نظر گرفته شوند. در صورتی که به سوابق اعلام‌شده در هر سال اعتراضی دارید، می‌توانید از طریق دکمه «اعتراض» بالای جدول سوابق همان سال، اعتراض خود را ثبت نمایید.</p>
                    <p>در صورتی که هنگام تکمیل فرم خوداظهاری، فراموش کرده‌اید صندوقی را اعلام کنید، می‌توانید با استفاده از دکمه «افزودن صندوق جدید» در بالای صفحه، آن صندوق را به سوابق خوداظهاری خود اضافه نمایید.</p>
                </div>} />
            </div>
            <div className='w-full flex justify-between items-center mt-3 mb-11'>
                <div>
                    <div className='flex mb-[14px]'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>نام و نام خانوادگی :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>{initialValues.fullname}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>جنسیت :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>{initialValues.isMan ? "مرد" : "زن"}</p>
                    </div>
                </div>
                <div>
                    <div className='flex mb-[14px]'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>کد ملی :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>{initialValues.nationalCode}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>کد پرسنلی :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>{initialValues.personnelCode}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='flex mb-[14px]'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>تاریخ تولد :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>{initialValues.birthDate}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-[15px] text-mainBlue font-IRANYekanExtra ml-[6px]'>تاریخ ثبت درخواست :</p>
                        <p className='text-[15px] text-mainBlue font-IRANYekanMedium'>{initialValues.requestDate}</p>
                    </div>
                </div>

            </div>
            <div className="w-[490px]">
                <div className="w-full flex justify-between mb-2">
                    <div className="w-[150px] h-[118px] pt-[20px] rounded-[6px] border-[2px] border-dashed border-ddGray flex flex-col items-center">
                        <DayIcon />
                        <p className="font-IRANYekanMedium text-[18px] text-darkGray mt-2">{initialValues.year ? initialValues.year + "سال" : "درحال بررسی"}</p>
                    </div>
                    <div className="w-[150px] h-[118px] pt-[20px] rounded-[6px] border-[2px] border-dashed border-ddGray flex flex-col items-center">
                        <MonthIcon />
                        <p className="font-IRANYekanMedium text-[18px] text-darkGray mt-2">{initialValues.month ? initialValues.month + "ماه" : "درحال بررسی"}</p>
                    </div>
                    <div className="w-[150px] h-[118px] pt-[20px] rounded-[6px] border-[2px] border-dashed border-ddGray flex flex-col items-center">
                        <YearIcon />
                        <p className="font-IRANYekanMedium text-[18px] text-darkGray mt-2">{initialValues.day ? initialValues.day + "روز" : "درحال بررسی"}</p>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue">مجموع سوابق</p>
                    <p className="font-IRANYekanExtra text-[15px] text-darkGray">{initialValues.totalDuration ? initialValues.totalDuration + "روز" : "درحال بررسی"}</p>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-between mt-14 mb-14">
                {
                    initialValues?.insuNameDuration?.map((item) => {
                        return (

                            <div className="w-[32%] mt-5 cursor-pointer" onClick={() => getInsurancesProps(item?.insuranceId)}>
                                <ExistingRecordsMainBox title={item.insuranceName} des={item.duration != -1 ? item.duration + 'روز' : "درحال بررسی"} />
                            </div>
                        )
                    })
                }
            </div>
            {selectedBox ?

                <div className="w-full mb-[32px]">

                    <MainTable center3={true} list={props} titleRow={titleRow} record1={true} />
                </div>
                :
                null}

            {showAddOriginBoxModal ? <MainModal big={true} title={'ثبت اطلاعات صندوق مبدا فراموش شده'} setShowModal={setShowAddOriginBoxModal}
                text={<div className="w-full flex flex-col items-center">
                    <UserDataInsuranceOrigin inModal={true} />
                </div>}
                modalButton={<div className="w-full flex justify-center">
                    <div className="w-[140px]"><MainButton onClickFunction={AddOriginBoxModalFunction} label={'ثبت'} /></div>
                </div>}
            /> : null}


        </div>
    );
};

export default ExistingRecords;