import WorkTablePic from "../../assets/icon/user/WorkTablePic";
import { MainButton, MainInput, MainModal } from "../../components";
import { useState } from 'react';
import { axiosReq } from "../../commons/axiosReq";
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const UserStartRequest = () => {

    const [showUserTypeModal, setShowUserTypeModal] = useState(true);
    const [showInputModal, setShowInputModal] = useState(false);
    const [nationalCode, setNationalCode] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();
    const cookies = new Cookies();

    const userTypeModalFunction = () => {
        setShowUserTypeModal(false);
    }
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
            setRole(updateOrg.data.role)
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
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <WorkTablePic />
            <p className="font-IRANYekanMedium text-[18px] text-center leading-8 text-black w-[620px] mt-[58px] mb-[28px]">برای ثبت درخواست مستمری جمع، ابتدا فرم مربوطه را تکمیل کنید تا فرایند بررسی درخواست شما آغاز شود.</p>
            <div className="w-[240px]">
                <MainButton onClickFunction={() => navigate(role == "User" ? "/user/updateUserBaseInfoHimself" : "/user/updateUserBaseInfoAnother")} label={'درخواست مستمری جمع'} />
            </div>


            {showUserTypeModal ? <MainModal title={'انتخاب نقش'} noCross={true} setShowModal={setShowUserTypeModal}
                text={<div className="w-full flex flex-col items-center">
                    <p className="font-IRANYekanBold w-[387px] text-[15px] text-center leading-7">لطفاً مشخص کنید که قصد دارید برای انجام کدام نوع از امور وارد سامانه شوید.</p>
                    <p className="font-IRANYekanBold w-[387px] mt-1 text-[15px] text-center leading-7">با توجه به انتخاب شما، اطلاعات و بخش‌های مربوط به همان نقش نمایش داده خواهد شد.</p>
                </div>}
                modalButton={<div className="w-full flex">
                    <div className="w-[49%] ml-[2%]"><MainButton onClickFunction={() => handleSubmit(false)} label={'درخواست مستمری برای خودم'} /></div>
                    <div className="w-[49%]"><MainButton onClickFunction={() => setShowInputModal(true)} label={'درخواست مستمری برای متوفی'} /></div>
                </div>}
            /> : null}
            {showInputModal ? <MainModal title={'متوفی'} setShowModal={setShowInputModal}
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
        </div>
    );
};

export default UserStartRequest;