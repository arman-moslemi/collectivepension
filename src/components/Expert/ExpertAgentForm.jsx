import Cookies from "universal-cookie";
import { MainInput } from "..";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { axiosReq } from "../../commons/axiosReq";
import { apiAsset, apiUrl } from "../../commons/inFormTypes";



const ExpertAgentForm = ({ formData }) => {
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
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'نام'} value={formData?.name} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'نام خانوادگی '} value={formData?.family} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'نام پدر'} value={formData?.fatherName} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'تاریخ تولد'} value={formData?.birthDate} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'کدملی'} value={formData?.nationalCode} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'شماره شناسنامه '} value={formData?.idcardNumber} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'جنسیت'} value={formData?.isMan ? "مرد" : "زن"} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'شماره تلفن ثابت '} value={formData?.phoneNumber} />
            </div>
            <div className="col-span-1 md:col-span-3">
                <MainInput label={'شماره تلفن همراه'} value={formData?.mobileNumber} />
            </div>
            <div className="col-span-3">
                <MainInput label={'آدرس'} value={formData?.address} />
            </div>
            <div >
                <p className="font-IRANYekanBold text-[16px]  text-mainBlue mb-2">مدارک </p>
                <div className="flex">
                {
                    formData?.inheritanceDoc?.map((item) => {
                        return (

                            <div onClick={() => download(item)}  className="h-[48px] w-fit lg:w-max rounded-full bg-backBlue
                            flex items-center pr-[20px] pl-[17px] mx-3 cursor-pointer">
                                <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px]">{item}</p>
                                <ExportAgentFileIIcon />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default ExpertAgentForm;