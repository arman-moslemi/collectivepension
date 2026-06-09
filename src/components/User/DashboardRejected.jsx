import { useEffect, useState } from 'react';
import { MainPicText, MainButton, MainModal, MainInput, UploadFile } from "../../components";
import DashboardRejectedPic from "../../assets/img/user/DashboardRejectedPic.svg";
import Cookies from 'universal-cookie';
import { apiUrl } from '../../commons/inFormTypes';
import ExportAgentFileIIcon from '../../assets/icon/expert/ExportAgentFileIIcon';
import { axiosReq } from '../../commons/axiosReq';


const DashboardRejected = () => {

    const [showProtestModal, setShowProtestModal] = useState(false);
    const [showSuccessfulProtestModal, setShowSuccessfulProtestModal] = useState(false);
    const [file, setFile] = useState();
    const [files, setFiles] = useState([]);
    const [des, setDes] = useState();
        const [id, setId] = useState();
    
    const ProtestModalFunction = () => {
        setShowProtestModal(false);
        setShowSuccessfulProtestModal(true);
    }
    const SuccessfulProtestModalFunction = () => {
        setShowSuccessfulProtestModal(false);
    }
   const download = async (name) => {
         try {
                 const cookies = new Cookies();
             
             // const token = localStorage.getItem('token'); // or wherever you store your token
             const response = await fetch(`${apiUrl}Users/download/${name}`, {
                 method: 'GET',
                 headers: {
                      'Authorization': `Bearer ${cookies.get('token')}`, // if needed
                     'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                 }
             });
     
             if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
             }
     
             const blob = await response.blob();
             
             // Get filename from Content-Disposition header
             const contentDisposition = response.headers.get('content-disposition');
             let filename = name;
             if (contentDisposition) {
                 const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
                 if (filenameMatch && filenameMatch[1]) {
                     filename = filenameMatch[1].replace(/['"]/g, '');
                 }
             }
     
             // Ensure filename has correct extension
             if (!filename.endsWith('.xlsx') && !filename.endsWith('.xls')) {
                 filename += '.xlsx';
             }
     
             const url = window.URL.createObjectURL(blob);
             const a = document.createElement('a');
             a.href = url;
             a.download = filename;
             document.body.appendChild(a);
             a.click();
             
             // Cleanup
             setTimeout(() => {
                 document.body.removeChild(a);
                 window.URL.revokeObjectURL(url);
             }, 100);
             
         } catch (error) {
             console.error("Error downloading file:", error);
         }
     };

        const protestRegistration = async () => {
             try {
     
                 const response = await axiosReq("Users/ProtestRegistration", "post", {
                     ProtestDescription: des,
                     ProtestFiles: files,
                    //  InsuranceId: id,
     
                 });
                 console.log(response)
     
                 if (response?.status === 200 || response?.status === 204) {
                    //  BankInformationModalFunction()
                    alert("با موفقیت ثبت شد")
                 }
                 else {
                     alert(response?.data)
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
         useEffect(() => {
             handleFileChange()
         }, [file]);
    return (
        <div>
            <MainPicText pic={DashboardRejectedPic}
                text={<div ><p className="text-[15px] font-IRANYekanMedium">براساس بررسی‌های انجام‌شده، شما واجد شرایط دریافت مستمری جمع شناخته نشده‌اید. در صورت تمایل، می‌توانید نسبت به نتیجه اعلام‌شده اعتراض ثبت نمایید تا توسط کارشناسان مربوطه مورد بررسی قرار گیرد.</p></div>}
                pageButton={<div className="w-[186px]"><MainButton onClickFunction={() => { setShowProtestModal(true) }} label={'ثبت اعتراض'} red={true} /></div>} />


            {showProtestModal ?
                <MainModal big={true} title={'ثبت اعتراض'} setShowModal={setShowProtestModal}
                    text={<div className="w-full flex flex-col items-center">
                        <div className='w-full'><MainInput onChange={(e) => setDes(e.target.value)} longText={true} label={'متن اعتراض خود را بنویسید تا برای کارشناس مربوطه ارسال شود.'} /></div>
                        <div className='w-full flex items-center md:flex-wrap mt-4'><p className='font-IRANYekanMedium text-[14px] md:mb-2 text-mainBlue ml-3'>انتخاب فایل</p>
                            <div><UploadFile small={true} setFile={setFile} /></div></div>
                        {
                            files?.map((item) => {
                                return (

                                    <div onClick={() => download(item)} className="h-[36px] w-fit rounded-full bg-backBlue my-2 flex items-center pr-[20px] pl-[17px]">
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

            {/* {showProtestModal ? <MainModal title={'ثبت اعتراض'} setShowModal={setShowProtestModal}
           text={<div className="w-full flex flex-col items-center">
            <div className='w-full'><MainInput longText={true} label={'متن اعتراض خود را بنویسید تا برای کارشناس مربوطه ارسال شود.'}/></div>
            <div className='w-full flex items-center mt-4'><p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p><div><UploadFile small={true}/></div></div>
            </div>}
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={ProtestModalFunction} label={'ارسال'}/></div>
           </div>}
            /> : null} */}


            {/* {showSuccessfulProtestModal ? <MainModal setShowModal={setShowSuccessfulProtestModal}
           text={<div className="w-full flex flex-col items-center">
            <p className='font-IRANYekanBold text-[15px] text-mainBlue'>اعتراض شما با موفقیت ثبت شد.</p>
            <p className='font-IRANYekanBold text-[15px] text-mainBlue mt-2'>نتیجه نهایی پس از بررسی، از طریق پیامک به اطلاع شما خواهد رسید.</p>
            <p className='font-IRANYekanBold text-[15px] text-mainBlue mt-2'>برای مشاهده پاسخ نهایی، لطفاً به پنل کاربری‌تان مراجعه کنید.</p>
            </div>}
           modalButton={<div className="w-full flex justify-center">
            <div className="w-[140px]"><MainButton onClickFunction={SuccessfulProtestModalFunction} label={'بستن'}/></div>
           </div>}
            /> : null} */}
        </div>
    )
}

export default DashboardRejected;