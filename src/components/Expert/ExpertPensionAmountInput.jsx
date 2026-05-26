import { MainButton, MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { axiosReq } from "../../commons/axiosReq";
import { useState, useEffect } from "react";



const ExpertPensionAmountInput = ({ setShift, id }) => {

    let navigate = useNavigate();
    const [cost, setCost] = useState()

    const insertPension = async () => {
        try {


            // const response = await axiosReq("Experts/InsertPension", "put", { UserInsuranceId: id,Amount:cost });
            const response = await axiosReq("Experts/InsertPension", "post", { UserInsuranceId: id,Amount:cost });
            console.log(response.data)
            if(response.status==200){
                setShift(true)
                alert("موفقیت آمیز")

            }
        } catch (error) {
            console.error("Error creating insurance:", error);
        }
    };
    return (
        <div className="w-full py-4 px-6 lg:px-0">
            <p className="w-full text-[15px] text-mainBlue font-IRANYekanBold leading-7 mb-[24px] text-justify">با توجه به شرایط کاربر و سوابق ثبت شده در صندوق شما، مبلغ مستمری که به ایشان تعلق میگیرد را ثبت کنید و منتظر اعلام سوابق سایر صندوق ها و تایید کاربر باشیدسپس اقدام به صدور حکم بازنشستگی کنید.</p>
            <div className="w-full flex justify-center">
                <div className="w-fit flex flex-wrap justify-center items-end lg:px-2">
                    <div className="w-[330px] lg:w-[100%] ml-2"><MainInput label={'مبلغ را ثبت کنید'} onChange={(e) =>setCost(e.target.value)} holder={'مبلغ را وارد کنید'} /></div>
                    <div className="w-[97px] lg:mt-4"><MainButton onClickFunction={() => insertPension()} label={'ثبت مبلغ'} /></div>
                </div>

            </div>


        </div>
    )
}

export default ExpertPensionAmountInput;