import { MainInput, MainButton, MainModal, MainExplanation, UploadFile } from "../../components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardPic1 from "../../assets/img/user/DashboardPic1.svg";
import DashboardPic2 from "../../assets/img/user/DashboardPic2.svg";
import DashboardPic3 from "../../assets/img/user/DashboardPic3.svg";
import DashboardPic4 from "../../assets/img/user/DashboardPic4.svg";
import DashboardPic5 from "../../assets/img/user/DashboardPic5.svg";


const data = [
    {
        name: 'صندوق یک',
        uv: 18,
    },
    {
        name: 'صندوق دو',
        uv: 8,
    },
    {
        name: 'صندوق سه',
        uv: 4,
    },
    {
        name: 'صندق چهار',
        uv: 16,
    },
    {
        name: 'صندوق پنج',
        uv: 24,
    },
];


const Dashboard = () => {

    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [bankInformationModal, setBankInformationModal] = useState(false);
    const [leaveWorkModal, setLeaveWorkModal] = useState(false);
    const [bankName, setBankName] = useState();
    const [branch, setBranch] = useState();
    const [account, setAcount] = useState();
    const [user, setUser] = useState();
            const [file, setFile] = useState();

    const BankInformationModalFunction = () => {
        setBankInformationModal(false);
    }
    const bankAccount = async () => {
        try {
            if (bankName != "" && branch != "" && account != "") {

                // const response = await axiosReq("Users/BankAccount", "put", {
                const response = await axiosReq("Users/BankAccount", "post", {
                    BankName: bankName,
                    BankBranch: branch,
                    BankAccount: account,
                });
                console.log(response)

                if (response?.status === 200 || response?.status === 204) {
                    alert("با موفقیت انجام شد")
                }
                else {
                    alert(response)
                }

            }
            else {
                alert("همه موارد را وارد نمایید")

            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
     const InsertQuittingDoc = async () => {
        try {
            if (file) {

                const response = await axiosReq("Users/InsertQuittingDoc", "post", {
                    fileName: file
                });
                console.log(response)

                if (response?.status === 200 || response?.status === 204) {
                    alert("با موفقیت انجام شد")
                }
                else {
                    alert(response)
                }

            }
            else {
                alert("همه موارد را وارد نمایید")

            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    const getInsurances = async () => {
        try {
            const responseStatus = await axiosReq("Users/GetUserStatus", "get");

            console.log(responseStatus)
            setUser(responseStatus?.data)
            const response = await axiosReq("Users/GetInsuranceDurations", "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                var prot = []
                response.data?.map((item, index) => {
                    prot.push({
                        name: item.insuranceName,
                        uv: item.days
                    })
                })
                setData(prot);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getInsurances();
    }, []);

    const getBank = async () => {
        try {

            const response = await axiosReq("Users/GetBankAccount", "get");
            console.log(response)

            if (response?.status === 200) {


                setBranch(response.data.bankBranch);
                setAcount(response.data.bankAccount);
                setBankName(response.data.bankName);
                setBankInformationModal(true)
            }
            else {
                setBankInformationModal(true)
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]"><MainExplanation color={'yellow'} text={"وضعیت درخواست: " + user} /></div>
            <div className="w-full grid grid-cols-4 gap-4">
                <div onClick={() => navigate("/user/existingRecords")} className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-between cursor-pointer z940:col-span-4">
                    <img className="pt-3" src={DashboardPic1} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-6">کلیه سوابق موجود</p>
                </div>
                <div onClick={() => navigate("/user/calculatedPension")} className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-between cursor-pointer z940:col-span-4">
                    <img src={DashboardPic2} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-6">مستمری محاسبه شده</p>
                </div>
                <div onClick={() => navigate("/user/registeredProtests")} className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-between cursor-pointer  z940:col-span-4">
                    <img className="pt-3" src={DashboardPic3} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-6">اعتراضات</p>
                </div>
                {/* <div onClick={() => getBank()} className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center cursor-pointer  justify-center">
                    <img src={DashboardPic4} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-3">اعلام حساب بانکی</p>
                </div> */}
                <div className="h-[343px] p-6 col-span-3 border-ddGray border-[1px] border-dashed rounded-[6px] cursor-pointer  z940:col-span-4">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-7">آخرین سوابق</p>
                    <div className="w-full overflow-x-auto h-[90%]">
                        <div className="min-w-[600px] w-full h-full ">
                            <ResponsiveContainer width="100%" height="90%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 50,
                                        left: 20,
                                        bottom: 50,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis tickMargin={6} dataKey="name" interval={0} angle={-10} textAnchor="end" tick={{ dx: -70, dy: 30 }} />
                                    <YAxis tickMargin={24} />
                                    <Bar dataKey="uv" barSize={30} fill="#00c1b2" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className="h-[343px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center z940:col-span-4">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-[15px]">حکم بازنشستگی</p>
                    <img src={DashboardPic5} alt="pic" />
                    <div className="w-[162px] mt-10">
                        <MainButton onClickFunction={() => navigate('../verdictsIssued')} label={'مشاهده احکام'} /></div>
                </div>
            </div>
            {/* {bankInformationModal ? <MainModal title={'ثبت اطلاعات بانکی'} setShowModal={setBankInformationModal}
                text={<div className="w-full grid grid-cols-2 gap-4">
                    <div><MainInput onChange={(e) => setBankName(e.target.value)} max={20} value={bankName} label={'نام بانک'} /></div>
                    <div><MainInput onChange={(e) => setBranch(e.target.value)} max={20} value={branch} label={'نام شعبه'} /></div>
                    <div className='col-span-2'><MainInput onChange={(e) => setAcount(e.target.value)} max={64} value={account} label={'شماره حساب بانکی خود را اینجا بنویسید'} /></div>

                </div>}
                modalButton={<div className="w-full flex justify-center">
                    <div className="w-[140px]"><MainButton onClickFunction={bankAccount} label={'ثبت'} /></div>
                </div>}
            /> : null} */}

                 {leaveWorkModal ? <MainModal title={'آپلود ترک کار'} setShowModal={setLeaveWorkModal} big={false}
                text={<div className="w-full ">
                     <div className='w-full flex items-center my-4'>
                                            <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                                            <div className=""><UploadFile small={true} setFile={setFile} /></div>
                                        </div>
                </div>}
                modalButton={<div className="w-full flex justify-center">
                    <div className="w-[140px]"><MainButton onClickFunction={InsertQuittingDoc} label={'ثبت'} /></div>
                </div>}
            /> : null}
        </div>
    )
}

export default Dashboard;