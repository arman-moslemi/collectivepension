import WorkTablePic from "../../assets/icon/user/WorkTablePic";
import { MainButton, MainModal } from "../../components";
import { useState } from 'react';
import { axiosReq } from "../../commons/axiosReq";
import { Link, useNavigate } from 'react-router-dom';

const UserStartRequest = () => {

    const [showUserTypeModal, setShowUserTypeModal] = useState(true);
    const navigate = useNavigate();

    const userTypeModalFunction = () => {
        setShowUserTypeModal(false);
      }
 const handleSubmit = async (type) => {


        var updateOrg = await axiosReq("Users/DeceasedAgency", "post", {
            IsAgent:type,
           
        });
        console.log(updateOrg)
        if (updateOrg?.status == 200 || updateOrg?.status == 204) {
        // userTypeModalFunction()
      type?  navigate("/user/updateUserBaseInfoHimself"): navigate("/user/updateUserBaseInfoAnother")
        }
        else {
            alert("اطلاعات را درست وارد نمایید")
        }



    };

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <WorkTablePic/>
            <p className="font-IRANYekanMedium text-[18px] text-center leading-8 text-black w-[620px] mt-[58px] mb-[28px]">برای ثبت درخواست مستمری جمع، ابتدا فرم مربوطه را تکمیل کنید تا فرایند بررسی درخواست شما آغاز شود.</p>
            <div className="w-[240px]">
            <MainButton onClickFunction={()=>navigate("updateUserBaseInfoHimself")} label={'درخواست مستمری جمع'}/>
            </div>


           {showUserTypeModal ? <MainModal title={'انتخاب نقش'} noCross={true} setShowModal={setShowUserTypeModal}
           text={<div className="w-full flex flex-col items-center">
            <p className="font-IRANYekanBold w-[387px] text-[15px] text-center leading-7">لطفاً مشخص کنید که قصد دارید برای انجام کدام نوع از امور وارد سامانه شوید.</p>
            <p className="font-IRANYekanBold w-[387px] mt-1 text-[15px] text-center leading-7">با توجه به انتخاب شما، اطلاعات و بخش‌های مربوط به همان نقش نمایش داده خواهد شد.</p>
            </div>}
           modalButton={<div className="w-full flex">
            <div className="w-[49%] ml-[2%]"><MainButton onClickFunction={()=>handleSubmit(false)} label={'درخواست مستمری برای خودم'}/></div>
            <div className="w-[49%]"><MainButton onClickFunction={()=>handleSubmit(true)} label={'درخواست مستمری برای متوفی'}/></div>
           </div>}
            /> : null}
        </div>
    );
  };
  
  export default UserStartRequest;