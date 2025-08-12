import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { MainModal, MainButton,MainInput } from "../../components";
import Cookies from 'universal-cookie';
import { axiosReq } from "../../commons/axiosReq";

const MainTopAll = ({ icon, title, text, adminRole,role }) => {
    let navigate = useNavigate();
                const cookies = new Cookies();

     const [showUserTypeModal, setShowUserTypeModal] = useState(false);
    // const [role, setRole] = useState("");

      const userTypeModalFunction = () => {
            setShowUserTypeModal(!showUserTypeModal);
        }
            const [showInputModal, setShowInputModal] = useState(false);
    const [nationalCode, setNationalCode] = useState("");
    const [birthDate, setBirthDate] = useState("");
        const handleSubmit = async (type) => {
    
            console.log(type)
            var updateOrg = await axiosReq("Users/DeceasedAgency", "post", {
                IsAgent: type,
                DeceasedBirthDate: birthDate,
                DeceasedNationalCode: nationalCode
            });
    
            if (updateOrg?.status == 200 || updateOrg?.status == 204) {
                const cookies = new Cookies();
                console.log(999)
                console.log(updateOrg.data)
                cookies.set('token', updateOrg.data.message, { path: '/' })
                // cookies.set('token', updateOrg.data.message, { path: '/user' })
                cookies.set('Role', updateOrg.data.role, { path: '/' })
                // cookies.set('Role', updateOrg.data.role, { path: '/user' })
                // setRole(updateOrg.data.role)
                setShowUserTypeModal(false)
                // userTypeModalFunction()
                // type ? navigate("/user/updateUserBaseInfoHimself") : navigate("/user/updateUserBaseInfoAnother")
            }
            else {
                console.log(updateOrg)
                alert("اطلاعات را درست وارد نمایید")
            }
    
    
    
        };
    
    return (
        <div className="flex w-full justify-between items-center md:block">
            <div className="flex justify-start items-center">
                <div>{icon}</div>
                <p className="font-IRANYekanExtra text-mainBlue text-[15px] mr-2">{title}</p>
            </div>
            <div className='flex items-center md:justify-end md:flex-wrap'>
                <Link className="font-IRANYekanMedium text-[12px] text-mainBlue border-b-[1px] border-dashed border-mainBlue pb-[2px] md:mb-2">راهنمای استفاده از سامانه</Link>
                <div className="w-fit h-[40px] bg-white py-[7px] px-[12px] rounded-[6px] mr-[11px] md:mr-0 flex md:w-full">
                    {role === 'user' ?
                        <div className='flex w-[320px] justify-between items-center md:w-full'>
                            <div className='flex justify-start items-center'>
                                <p className='font-IRANYekanExtra text-[15px] text-mainBlue md:text-[10px]'>{cookies.get("Name")}</p>
                                {/* <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-1 md:text-[10px]'>(کاربر اصلی)</p> */}
                            </div>
                            <button onClick={userTypeModalFunction} className='font-IRANYekanMedium text-[12px] text-mainBlue border-b-[1px] border-dashed border-mainBlue pb-[2px]'>تغییر نقش</button>
                        </div>
                        : role === 'expert' ?
                            <div className='flex w-full justify-center items-center'>
                                {adminRole ?
                                    <p className='font-IRANYekanExtra text-[15px] text-mainBlue md:text-[10px]'>ادمین صندوق  خوش آمدید !</p>
                                    :
                                    <p className='font-IRANYekanExtra text-[15px] text-mainBlue md:text-[10px]'>کارشناس صندوق  خوش آمدید !</p>
                                }
                            </div>
                            : role === 'mainAdmin' ?
                                <div className='flex w-full justify-center items-center'>

                                    <p className='font-IRANYekanExtra text-[15px] text-mainBlue md:text-[10px]'>ادمین کل سامانه خوش آمدید !</p>

                                </div>
                                : null
                    }
                </div>

            </div>

              {showUserTypeModal ? <MainModal title={'انتخاب نقش'} noCross={true} setShowModal={setShowUserTypeModal}
                text={<div className="w-full flex flex-col items-center">
                    <p className="font-IRANYekanBold w-[80%] text-[15px] text-center leading-7">لطفاً مشخص کنید که قصد دارید برای انجام کدام نوع از امور وارد سامانه شوید.</p>
                    <p className="font-IRANYekanBold w-[80%] mt-1 text-[15px] text-center leading-7">با توجه به انتخاب شما، اطلاعات و بخش‌های مربوط به همان نقش نمایش داده خواهد شد.</p>
                </div>}
                modalButton={<div className="w-full flex flex-wrap">
                    <div className="w-[49%] ml-[2%]"><MainButton onClickFunction={() => handleSubmit(false)} label={'درخواست مستمری برای خودم'} /></div>
                    <div className="w-[49%]"><MainButton onClickFunction={() => setShowInputModal(true)} label={'درخواست مستمری برای متوفی'} /></div>
                </div>}
            /> : null}
            {showInputModal ? <MainModal noCross={true} title={'متوفی'} setShowModal={setShowInputModal}
                text={<div className="w-full flex flex-col items-center">
                    <div className="w-full mb-4"><MainInput label="کدملی"
                        necessary={true}
                        onChange={(e) => setNationalCode(e.target.value)} /></div>
                    <div className="w-full"><MainInput label="تاریخ تولد"
                        necessary={true}
                        date={true}
                        onChange={(e) => setBirthDate(e)} /></div>
                </div>}
                modalButton={<div className="w-full flex justify-center">

                    <div className="w-[49%]"><MainButton onClickFunction={() => handleSubmit(true)} label={'درخواست مستمری برای متوفی'} /></div>
                </div>}
            /> : null}
            {/* {showUserTypeModal && (
                <MainModal title={'انتخاب نقش'} noCross={true} setShowModal={setShowUserTypeModal}
                    text={<div className="w-full flex flex-col items-center">
                        <p className="font-IRANYekanBold w-[387px] text-[15px] text-center leading-7">لطفاً مشخص کنید که قصد دارید برای انجام کدام نوع از امور وارد سامانه شوید.</p>
                        <p className="font-IRANYekanBold w-[387px] mt-1 text-[15px] text-center leading-7">با توجه به انتخاب شما، اطلاعات و بخش‌های مربوط به همان نقش نمایش داده خواهد شد.</p>
                    </div>}
                    modalButton={<div className="w-full flex">
                        <div className="w-[49%] ml-[2%]"><MainButton onClickFunction={userTypeModalFunction} label={'درخواست مستمری برای خودم'} /></div>
                        <div className="w-[49%]"><MainButton onClickFunction={userTypeModalFunction} label={'درخواست مستمری برای متوفی'} /></div>
                    </div>}
                />
            )} */}
        </div>
    );
};

export default MainTopAll;