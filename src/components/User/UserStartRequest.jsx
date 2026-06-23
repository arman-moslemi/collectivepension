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
                <MainButton onClickFunction={()=>navigate(rol == "User" ? "/user/updateUserBaseInfoHimself" : "/user/updateUserBaseInfoAnother")} label={'درخواست مستمری جمع'} />
            </div>

        
          
        </div>
    );
};

export default UserStartRequest;