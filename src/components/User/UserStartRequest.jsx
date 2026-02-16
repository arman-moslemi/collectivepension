import WorkTablePic from "../../assets/icon/user/WorkTablePic";
import { MainButton, MainInput, MainModal,MainChekbox } from "../../components";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const UserStartRequest = ({showUserTypeModal, setShowUserTypeModal}) => {

    // const [showUserTypeModal, setShowUserTypeModal] = useState(true);

    const [role, setRole] = useState("");
        const [check, setCheck] = useState(false);
    
    const navigate = useNavigate();
    const cookies = new Cookies();
const [showModal,setShowModal] = useState(false)
let rol= cookies.get('Role')

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <div className="w-[30%] md:w-[80%]">
                <WorkTablePic />
            </div>
            <p className="font-IRANYekanMedium text-[18px] text-center leading-8 text-black w-[60%] md:w-[90%] md:text-[15px] mt-[58px] mb-[28px]">برای ثبت درخواست مستمری جمع، ابتدا فرم مربوطه را تکمیل کنید تا فرایند بررسی درخواست شما آغاز شود.</p>
            <div className="w-[240px]">
                <MainButton onClickFunction={()=>setShowModal(true)} label={'درخواست مستمری جمع'} />
            </div>

          {
            showModal?
            <MainModal big={true} title={'شرایط بهره مندی از مزایای مستمری جمع '} noCross={true} setShowModal={setShowUserTypeModal}
            text={<div className="w-full flex flex-col items-start">

                <p className="font-IRANYekanExtra  text-[15px] text-right leading-7">
                شرایط احراز مستمری جمع برای متقاضیان بشرح بندهای ذیل می‌باشد:
                    </p>
                    <p className="font-IRANYekanMedium  text-[15px] text-right leading-7">
                    1- در زمان ارائه درخواست، در هیچ یک از صندوق‌های بازنشستگی از مزایای مستمری بازنشستگی، ازکارافتادگی کلی و بازماندگان استفاده ننماید.
<br/>2- در زمان ارایه درخواست، مشترک فعال صندوق بازنشستگی مقصد (آخرین صندوقی که در آن بیمه‌پردازی می‌کند) باشد.
<br/>3- قبل از لازم‌الاجراشدن این قانون و به موجب قوانین مربوط سوابق بیمه‌ای خود را از یک صندوق بازنشستگی به صندوق بازنشستگی دیگری منتقل نکرده‌ باشد و حق بیمه‌ (کسور بازنشستگی) را مطابق قوانین و مقررات مربوط از صندوق بازنشستگی ذیربط دریافت و تسویه کامل نکرده باشد.
<br/>4- جزء مشترکان سازمان تأمین اجتماعی نیروهای مسلح و صندوق بازنشستگی وزارت اطلاعات نباشد.

                    </p> 
                   <div className="mt-4">
                   <MainChekbox
                                    label={"اینجانب ضمن مطالعه و پذیرش شرایط مذکور، متقاضی ثبت نام می‌باشم."}
                                    checked={check}
                                    onChange={e => {
                                        const checked = e.target.checked;
                                        setCheck(checked);

                                    }}
                                />
                    </div>
            </div>}
            modalButton={<div className="w-full flex gap-2 justify-center">
                <div className="w-[150px]"><MainButton onClickFunction={() => navigate(rol == "User" ? "/user/updateUserBaseInfoHimself" : "/user/updateUserBaseInfoAnother")} label={'تایید شرایط'} /></div>
                <div className="w-[150px]"><MainButton red={true} onClickFunction={() => setShowModal(false)} label={'بستن'} /></div>

            </div>}
        />:
        null
          }
          
        </div>
    );
};

export default UserStartRequest;