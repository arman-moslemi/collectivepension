import {useLocation} from "react-router-dom";
import ViewFileIcon from "../../assets/icon/general/ViewFileIcon";
import {MainButton,MainInput,UploadFile,roles} from "..";
import { useState,useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import DateIcon from "../../assets/icon/general/DateIcon";
import { apiAsset } from "../../commons/inFormTypes";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { useNavigate } from "react-router-dom";

const AmountProtestDetail = ({role,id}) => {
      const isAdmin = role === roles.mainAdmin;
      const isExpert = role === "expert"; // یا roles.expert اگه داری
        const navigate = useNavigate();
      
  console.log("ROLE IS:", role);
    const location = useLocation();

    const [showAccepted, setShowAccepted] = useState(false);
    const [showDeclined,setShowDeclined] = useState(false);
      const [data, setData] = useState([]);
        const [maindata, setMainData] = useState();
    
        const getProtests = async () => {
            try {
    
                const response = await axiosReq("Experts/GetProtestByIdEXP?protestId=" + id, "get");
                console.log(response)
    
                if (response?.status === 200 || response?.status === 204) {
                    var prot = []
                    setMainData(response.data)
    
                    setData(response.data?.records);
                }
    
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        useEffect(() => {
            getProtests();
        }, []);
         const download = async (name) => {
                      try {
                          const response = await axiosReq(`Users/download/${name}`, "get", {
                              responseType: "blob", // important!
                          });
              
                          if (response.status === 200) {
                              // Create a blob from the response
                              const blob = new Blob([response.data], { type: response.headers['content-type'] });
                              const url = window.URL.createObjectURL(blob);
              
                              // Create a temporary link element
                              const a = document.createElement('a');
                              a.href = url;
                              a.download = name; // you can also extract filename from headers if needed
                              document.body.appendChild(a);
                              a.click();
              
                              // Cleanup
                              a.remove();
                              window.URL.revokeObjectURL(url);
                          }
                      } catch (error) {
                          console.error("Error downloading file:", error);
                      }
                  };
    return ( <>
    <div className="grid grid-cols-2 gap-4 border-b-[1px] border-borderGray pb-4">
            <div className="col-span-1 md:col-span-2">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    نام و نام خانوادگی :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.fullName}
                    </span>
                </span>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end md:justify-start">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    تاریخ ثبت اعتراض :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.protestDate}
                    </span>
                </span>
            </div>
            <div className="col-span-1 md:col-span-2">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    کدملی :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.nationalCode}
                    </span>
                </span>
            </div>
            <div className="col-span-1 md:col-span-2 flex justify-end md:justify-start">
                <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                    نوع اعتراض :
                    <span className="font-IRANYekanBold mr-1">
                        {maindata
                            ?.protestLevel}
                    </span>
                </span>
            </div>
            {
                isExpert ?

                    null
                    :
                    <div className="col-span-1 md:col-span-2 flex justify-start md:justify-start">
                        <span className="font-IRANYekanExtra text-[15px] text-mainBlue">
                            نام صندوق :
                            <span className="font-IRANYekanBold mr-1">
                                {maindata
                                    ?.name}
                            </span>
                        </span>
                    </div>
            }
        </div> < div className = "my-4" > <span className="font-IRANYekanExtra text-[15px] text-mainBlue ">

        جزئیات اعتراض ثبت شده
    </span> 
    <br/>
   <div className="my-4">
   <span className="text-mainBlue font-IRANYekanBold text-[14px]">
        مبلغ اعلام شده توسط سامانه : 2300000 تومان
    </span>
    <br/>
    <span className="text-redError font-IRANYekanBold text-[14px]">
        مبلغ اعلام شده توسط کاربر : 2500000 تومان
    </span>
   </div>
    <p className = "mt-5 text-right font-IRANYekanBold text-mainBlue text-[14px]" >{maindata?.description} </p>
   
    
     < div className="flex flex-wrap mt-4" >
                    {
                                maindata?.fileName?.map((item) => {
                                    return (

                                        <div onClick={() => download(item)} 
                                            className='w-fit h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px] hover:cursor-pointer'>
                                            <p className='font-IRANYekanMedium text-[15px] text-white'>{item}</p>
                                            <div
                                                className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon /></div>
                                        </div>
                                    )
                                })
                            } </div >
        </div>
        
        {
            role === "expert" ? 

            <div className={`flex mt-5 w-full justify-end ${showAccepted || showDeclined ? 'hidden' : 'block' }`}>
            <div className="w-[140px] ml-2">
                <MainButton label={'تایید'} onClickFunction={()=>setShowAccepted(true)}/>
            </div>
            <div className="w-[140px]">
                <MainButton label={'عدم تایید'} red={true} onClickFunction={() =>setShowDeclined(true)}/>
            </div>
        </div>
        :
        null
        }
        {showAccepted ? 
    <>
    <div className="w-full border-t border-t-borderGray p-4">
    <p className = "mt-5 text-right font-IRANYekanBold text-mainBlue text-[14px]" > مبلغ مستمری مجددا محاسبه شده را اینجا ثبت کنید. </p>
            <div className="w-[250px] mt-2">
            <MainInput holder={'12000 تومان'}/>
            </div>
            <div className="w-[140px] mr-auto mt-5">
                <MainButton label={'ثبت و ارسال'}/>
            </div>
    </div>
    </>
    :
    null    
    }            
    {showDeclined ? 
<>
<div className="mt-6 border-t border-t-borderGray p-4">
                    <div className="w-full">
                        <MainInput
                            longText={true}
                            necessary={true}
                            label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'}
                            holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'}/>
                        <div className='w-full flex items-center lg:flex-wrap mt-4'>
                            <p className='font-IRANYekanMedium text-[14px] lg:my-2 text-mainBlue ml-3'>انتخاب فایل</p>
                            <div><UploadFile small={false}/></div>
                        </div>
                    </div>
                </div>
                <div className="w-[140px] mr-auto mt-5">
                <MainButton label={'ثبت و ارسال'}/>
            </div>
</>
:
null    
}    

         </>
    )
}

export default AmountProtestDetail;