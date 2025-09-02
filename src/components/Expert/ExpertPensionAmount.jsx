import { MainButton, MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";


const titleRow = ["ردیف", "نام صندوق", "مبلغ اعلام شده", "تعداد روز"];

const titleRow2 = ["ردیف", "نام نماینده", "نسبت", "شماره حساب", "نام بانک", "شعبه"];

const list = [
    {
        item1: "1",
        item2: "صندوق بازنشستگی کشوری",
        item3: "1000000 تومان",
        item4: "3560 روز",
    },
    {
        item1: "2",
        item2: "صندوق تامین اجتماعی",
        item3: "25000 تومان",
        item4: "120 روز",
    },
    {
        item1: "3",
        item2: "صندوق بازنشستگان فولاد",
        item3: "در حال بررسی",
        item4: "127 روز",
    },
];

const list2 = [
    {
        item1: "1",
        item2: "علی امیری زاده",
        item3: "فرزند",
        item4: "569878959654654654",
        item5: "آینده",
        item6: "28 کوروش",
    },
    {
        item1: "1",
        item2: "علی امیری زاده",
        item3: "فرزند",
        item4: "569878959654654654",
        item5: "آینده",
        item6: "28 کوروش",
    },
    {
        item1: "1",
        item2: "علی امیری زاده",
        item3: "فرزند",
        item4: "569878959654654654",
        item5: "آینده",
        item6: "28 کوروش",
    },
];




const ExpertPensionAmountInput = ({ another, id,admin }) => {

    let navigate = useNavigate();
    const [dataTable, setDataTable] = useState([]);
    const [data, setData] = useState();
    const [dataAgent, setDataAgent] = useState([]);
    const [count, setCount] = useState();
    const [countAgent, setCountAgent] = useState();
    const [page, setPage] = useState(1);
    const [pageAgent, setPageAgent] = useState(1);
    const [row, setRow] = useState(10);
    const [rowAgent, setRowAgent] = useState(10);
    console.log(88)
    console.log(admin)
    const getInsurances = async () => {
        try {

            const response = await axiosReq("Experts/GetUserPensionByRequest?userInsuranceId=" + id, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                response.data?.data?.map((item, index) => {
                    prot.push({
                        item1: index + 1,
                        item2: item.insuranceName,
                        item3: item.pension,
                        item4: item.duration,
                    })
                })
                setCount(response.data.count)
                setData(response.data);
                setDataTable(prot);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const getAgents = async () => {
        try {

            const response = await axiosReq("Experts/GetAgentPensionByRequest?userInsuranceId=" + id, "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                response.data?.data?.map((item, index) => {
                    prot.push({
                        item1: index + 1,
                        item2: item.agentFullName,
                        item3: item.relation,
                        item4: item.agentBankAccount,
                        item5: item.agentBankName,
                        item6: item.agentBankBranch,
                    })
                })
                setCountAgent(response.data.count)
                setDataAgent(prot);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getInsurances();
        getAgents()
    }, []);
    const exportDoc = async () => {
        try {

            const response = await axiosReq("Experts/GenerateToken?userInsuranceId=" + id, "post");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                window.location.href="../../SingleRetriment.html?user="+response.data;
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    return (
        <div className="w-full py-4 px-6 lg:px-0">
            <div className="w-full flex justify-center items-center mb-12 mt-8 lg:flex-col">
                <p className="font-IRANYekanExtra text-[18px] lg:text-[16px] text-mainBlue ml-3">مجموع مستمری محاسبه شده :</p>
                <p className="font-IRANYekanExtra text-[20px] lg:text-[18px] text-mainBlue">{data?.totalPension} تومان</p>
            </div>
            {/* {another? null: */}
            <div className="w-full flex flex-col items-center justify-center  mb-[22px]">
                <p className="text-[18px] lg:text-[14px] text-mainBlue font-IRANYekanExtra mb-5">اطلاعات حساب بانکی</p>
                <div className="flex justify-center flex-wrap items-center">
                    <div className="ml-[120px] lg:ml-1">
                        <p className="text-[16px] lg:text-[14px] font-IRANYekanExtra">نام بانک</p>
                        <p className="text-[15px] lg:text-[13px] font-IRANYekanMedium">{data?.bankName}</p>
                    </div>
                    <div className="ml-[120px] lg:ml-1">
                        <p className="text-[16px] lg:text-[14px] font-IRANYekanExtra">شماره حساب</p>
                        <p className="text-[15px] lg:text-[13px] font-IRANYekanMedium">{data?.bankAccount}</p>
                    </div>
                    <div>
                        <p className="text-[16px] lg:text-[14px] font-IRANYekanExtra">شعبه</p>
                        <p className="text-[15px] lg:text-[13px] font-IRANYekanMedium">{data?.bankBranch}</p>
                    </div>
                </div>
            </div>
            {/* } */}
            <div className="w-full flex justify-center">
                <div className="w-[75%]"><MainTable cen6={true} list={dataTable} titleRow={titleRow} count={count} page={page} setPage={setPage} row={row} setRow={setRow} /></div>
            </div>
            {another ?
                <div className="w-full flex flex-col items-center justify-center mt-10">
                    <p className="text-[18px] text-mainBlue font-IRANYekanExtra mb-7">بازماندگان</p>
                    <div className="w-[90%]"><MainTable cen6={true} list={dataAgent} count={countAgent} titleRow={titleRow2} page={pageAgent} setPage={setPageAgent} row={rowAgent} setRow={setRowAgent} /></div>
                </div>
                : null}
                {
                    !admin?
            <div className="mt-[30px] mb-[107px] w-full flex justify-end">
                <div className="w-[190px]">
                    <MainButton onClickFunction={() => exportDoc()} label={'صدور حکم بازنشستگی'} /></div>
            </div>
                    :
                    null
                }


        </div>
    )
}

export default ExpertPensionAmountInput;