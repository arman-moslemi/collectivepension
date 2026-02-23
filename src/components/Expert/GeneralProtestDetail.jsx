import { useLocation } from "react-router-dom";
import ViewFileIcon from "../../assets/icon/general/ViewFileIcon";
import { MainButton, MainInput, UploadFile, roles } from "..";
import { useState,useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import DateIcon from "../../assets/icon/general/DateIcon";
import { apiAsset } from "../../commons/inFormTypes";
import ExportAgentFileIIcon from "../../assets/icon/expert/ExportAgentFileIIcon";
import { useNavigate } from "react-router-dom";

const GeneralProtestDetail = ({ role,id,insuName}) => {
    const location = useLocation();
    const isAdmin = role === roles.mainAdmin;
    const isExpert = role === roles.expert;
  const navigate = useNavigate();

    const [showDeclined, setShowDeclined] = useState(false);
      const [data, setData] = useState([]);
        const [maindata, setMainData] = useState();
      const [reason, setReason] = useState(null);
        const [file, setFile] = useState();
        const [files, setFiles] = useState([]);
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
         useEffect(() => {
                handleFileChange()
            }, [file]);
            const handleFileChange = () => {
        
                if (file?.length > 0) {
                    console.log("change")
                    console.log(111)
                    setFiles([...files, file])
                }
            }
            const disApprove = async (item) => {
                try {
                    const response = await axiosReq("Experts/DenyProtest?protestId=" + id, "put", {
                        Reason: reason,
                        UserInsuranceFiles: files
                    });
                    if (response.data) {
                        alert("با موفقیت انجام شد");
                           navigate("/protestList")
                    }
                } catch (err) {
                    console.error("Error fetching form data:", err);
                } finally {
                }
            };
             const approve = async (item) => {
                try {
                    const response = await axiosReq("Experts/AcceptProtest?protestId=" + id, "put");
                    if (response.data) {
                        alert("با موفقیت انجام شد");
                        navigate("/protestList")
                    }
                } catch (err) {
                    console.error("Error fetching form data:", err);
                } finally {
                }
            };
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
    return (<>
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
                                {insuName}
                            </span>
                        </span>
                    </div>
            }
        </div> < div className="my-4" > <span className="font-IRANYekanExtra text-[15px] text-mainBlue ">

            جزئیات اعتراض ثبت شده
        </span>
            <br />
            <div className="my-4">

            </div>
            <p className="mt-5 text-right font-IRANYekanBold text-mainBlue text-[14px]" > {maindata?.description} </p>


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
                            } </div > </div>
        {
            role === "expert" ?
                <div className={`flex mt-5 w-full justify-end ${showDeclined ? 'hidden' : 'block'}`}>
                    <div className="w-[140px] ml-2">
                        <MainButton onClickFunction={approve} label={'تایید'} />
                    </div>
                    <div className="w-[140px]">
                        <MainButton  label={'عدم تایید'} red={true} onClickFunction={() => setShowDeclined(true)} />
                    </div>
                </div>
                :
                null}
        {showDeclined ?
            <>
                <div className="mt-6 border-t border-t-borderGray p-4">
                                    <div className="w-full">
                                        <MainInput
                                            longText={true}
                                            onChange={(e)=>setReason(e.target.value)}
                                            label={'علت رد درخواست خود را بنویسید و در صورت لزوم فایل خود را بارگزاری کنید.'}
                                            holder={'توضیح خود را اینجا بنویسید تا برای کاربر ارسال شود.'} />
                                        <div className='w-full flex items-center my-4'>
                                            <p className='font-IRANYekanMedium text-[14px] text-mainBlue ml-3'>انتخاب فایل</p>
                                            <div><UploadFile small={false} setFile={setFile} /></div>
                                        </div>
                                        {
                                            files.map((item) => {
                                                return (

                                                    <div onClick={() => download(item)}  className="h-[36px] w-fit rounded-full bg-backBlue flex items-center pr-[20px] pl-[17px]">
                                                        <p className="text-[16px] font-IRANYekanBold text-buttonBlue ml-[28px] cursor-pointer">{item}</p>
                                                        <ExportAgentFileIIcon />
                                                    </div>
                                                )
                                            })
                                        }
                                        <div>
                                            <p className="text-right">با توجه به مدارک بارگزاری شده در پیوست، بازه زمانی بیمه پردازی بنده اشتباه ثبت شده است لطفا مجدد بررسی بفرمایید.</p>

                                        </div>

                                    </div>
                                </div>
                <div className="w-[140px] mr-auto mt-5">
                    <MainButton onClickFunction={disApprove} label={'ثبت و ارسال'} />
                </div>
            </>
            :
            null
        }

    </>
    )
}

export default GeneralProtestDetail;