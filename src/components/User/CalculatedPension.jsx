import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { MainButton, MainModal, MainExplanation, CalculatedPensionBox, MainInput, UploadFile } from "../../components";
import CalculatedPensionIcon from "../../assets/icon/user/CalculatedPensionIcon";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { apiAsset } from "../../commons/inFormTypes";

const CalculatedPension = () => {

    const [showProtestModal, setShowProtestModal] = useState(false);
    const [showSuccessfulProtestModal, setShowSuccessfulProtestModal] = useState(false);
    const [bankInformationModal, setBankInformationModal] = useState(false);
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const [des, setDes] = useState();
    const [bankName, setBankName] = useState();
    const [branch, setBranch] = useState();
    const [account, setAcount] = useState();
    const ProtestModalFunction = () => {
        setShowProtestModal(false);
        setShowSuccessfulProtestModal(true);
    }
    const SuccessfulProtestModalFunction = () => {
        setShowSuccessfulProtestModal(false);
    }
    const BankInformationModalFunction = () => {
        setBankInformationModal(false);
    }
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const getPensions = async () => {
        try {

            const response = await axiosReq("Users/GetPensionPage", "get");
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {

                setData(response.data);
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        getPensions();
    }, []);
    const protestRegistration = async () => {
        try {

            const response = await axiosReq("Users/ProtestRegistration", "post", {
                ProtestDescription: des,
                ProtestFiles: files,
                InsuranceId: id,

            });
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
                BankInformationModalFunction()
            }
            else{
                alert(response?.data)
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    useEffect(() => {
        handleFileChange()
    }, [file]);

    const bankAccount = async () => {
        try {
            if (bankName != "" && branch != "" && account != "") {


                const response = await axiosReq("Users/BankAccount", "put", {
                    BankName: bankName,
                    BankBranch: branch,
                    BankAccount: account,
                });
                console.log(response)

                if (response?.status === 200 || response?.status === 204) {
                    ProtestModalFunction()
                }
                else {
                    alert(response)
                }
            }

            else{
                alert("همه موارد را وارد نمایید")
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };
    const handleFileChange = () => {

        if (file?.length > 0) {
            console.log("change")
            console.log(111)
            setFiles([...files, file])
        }
    }
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white p-[20px]">
            <div className="w-full flex justify-end mb-[16px]">
                <div className="w-[155px]">
                    <MainButton onClickFunction={() => setBankInformationModal(true)} label={'تایید مبلغ مستمری'} /></div>
            </div>
            <div className="w-full mb-[22px]">
                <MainExplanation text={'در این بخش میزان مستمری محاسبه شده توسط هر صندوق به شما نشان داده می شود.در صورت نیاز می توانید نسبت به هرکدام اعتراض خود را ثبت کنید.'} />
            </div>
            <div className="w-[360px] h-[99px] md:w-[90%] rounded-[6px] border-ddGray border-[1px] border-dashed flex items-center justify-center mb-11">
                <CalculatedPensionIcon />
                <div className="mr-[17px]">
                    <p className="font-IRANYekanExtra text-[18px] text-mainBlue mb-1 md:text-[14px]">مجموع مستمری محاسبه شده :</p>
                    <div className="flex">
                        <p className="font-IRANYekanBold text-[16px] text-mainBlue ml-1 md:text-[12px]">{data?.totalPension}</p>
                        <p className="font-IRANYekanBold text-[16px] text-mainBlue md:text-[12px]">تومان</p>
                    </div>
                </div>

            </div>
            <div className="w-full grid grid-cols-3 gap-4 mb-16">
                {
                    data?.insurancePensions?.map((item) => {
                        return (

                            <CalculatedPensionBox func={() => { setShowProtestModal(true); setId(item.insuranceId) }}
                                title={item.insuranceName} days={item.totalRecord} price={item.insurancePension} />
                        )
                    })
                }
            </div>

            {showProtestModal ?
                <MainModal title={'ثبت اعتراض'} setShowModal={setShowProtestModal}
                    text={<div className="w-full flex flex-col items-center">
                        <div className='w-full'><MainInput onChange={(e) => setDes(e.target.value)} longText={true} label={'متن اعتراض خود را بنویسید تا برای کارشناس مربوطه ارسال شود.'} /></div>
                        <div className='w-full flex items-center mt-4'><p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                            <div><UploadFile small={true} setFile={setFile} /></div></div>
                        {
                            files?.map((item) => {
                                return (

                                    <div onClick={() => window.open(apiAsset + item, '_blank')} className="h-[36px] w-fit rounded-full bg-backBlue my-2 flex items-center pr-[20px] pl-[17px]">
                                        <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px] cursor-pointer">{item}</p>
                                        <ExportAgentFileIIcon />
                                    </div>
                                )
                            })
                        }
                    </div>}
                    modalButton={<div className="w-full flex justify-center">
                        <div className="w-[140px]"><MainButton onClickFunction={protestRegistration} label={'ارسال'} /></div>
                    </div>}
                /> : null}


            {showSuccessfulProtestModal ? <MainModal setShowModal={setShowSuccessfulProtestModal}
                text={<div className="w-full flex flex-col items-center">
                    <p className='font-IRANYekanBold text-[15px] text-mainBlue'>اعتراض شما با موفقیت ثبت شد.</p>
                    <p className='font-IRANYekanBold text-[15px] text-mainBlue mt-2'>نتیجه نهایی پس از بررسی، از طریق پیامک به اطلاع شما خواهد رسید.</p>
                    <p className='font-IRANYekanBold text-[15px] text-mainBlue mt-2'>برای مشاهده پاسخ نهایی، لطفاً به پنل کاربری‌تان مراجعه کنید.</p>
                </div>}
                modalButton={<div className="w-full flex justify-center">
                    <div className="w-[140px]"><MainButton onClickFunction={SuccessfulProtestModalFunction} label={'بستن'} /></div>
                </div>}
            /> : null}


            {bankInformationModal ? <MainModal title={'ثبت اطلاعات بانکی'} setShowModal={setBankInformationModal}
                text={<div className="w-full grid grid-cols-2 gap-4">
                    <div><MainInput onChange={(e) => setBankName(e.target.value)} label={'نام بانک'} /></div>
                    <div><MainInput onChange={(e) => setBranch(e.target.value)} label={'نام شعبه'} /></div>
                    <div className='col-span-2'><MainInput onChange={(e) => setAcount(e.target.value)} label={'شماره حساب بانکی خود را اینجا بنویسید'} /></div>

                </div>}
                modalButton={<div className="w-full flex justify-center">
                    <div className="w-[140px]"><MainButton onClickFunction={bankAccount} label={'ثبت'} /></div>
                </div>}
            /> : null}
        </div>
    )
}

export default CalculatedPension;