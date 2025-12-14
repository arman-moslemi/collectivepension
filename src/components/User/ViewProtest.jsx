import React, { useState, useEffect } from "react";
import { ViewProtestTable } from "../../components";
import ViewFileIcon from '../../assets/icon/general/ViewFileIcon';
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { axiosReq } from "../../commons/axiosReq";
import { apiAsset } from "../../commons/inFormTypes";


const titleRow = ["نوع", "سال", "ماه", "بازه بیمه پردازی", "تعداد روز", "وضعیت"];

const list1 = [
    {
        item1: "خود اظهاری کاربر",
        item2: "1376",
        item3: "فروردین",
        item4: "02/01-02/31",
        item5: "31 روز",
    },

];

const list2 = [
    {
        item1: "استعلام سیستم",
        item2: "1376",
        item3: "فروردین",
        item4: "02/01-02/28",
        item5: "28 روز",

    },


];

const ViewProtest = () => {
    const { state } = useLocation();
    const [data, setData] = useState([]);
    const [maindata, setMainData] = useState();

    const getProtests = async () => {
        try {

            const response = await axiosReq("Users/GetProtestById?protestId=" + state.id, "get");
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
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white">
            <div className='w-full p-[24px] border-b-[1px] flex-wrap border-borderGray flex justify-between items-center'>
                <div>
                    <div className='mb-[14px] flex'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>نوع اعتراض :</p>
                        <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-[6px]'>{maindata?.protestLevel}</p>
                    </div>
                    <div className='flex'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>تاریخ ثبت  اعتراض :</p>
                        <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-[6px]'>  {maindata?.protestDate}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='mb-[14px] flex items-center'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>وضعیت :</p>
                        <div className={`w-[87px] h-[28px] ${maindata?.protestStatus == "رد اعتراض" ? "bg-redError" : "bg-greenTable"} rounded-[50px] flex justify-center items-center mr-2`}>
                            <p className='text-[15px] text-white font-IRANYekanMedium'>{maindata?.protestStatus}</p></div>
                    </div>
                    <div className='flex'>
                        <p className='font-IRANYekanExtra text-[15px] text-mainBlue'>تاریخ به‌روزرسانی اعتراض :</p>
                        <p className='font-IRANYekanMedium text-[15px] text-mainBlue mr-[6px]'>  {maindata?.lastUpdateDate}</p>
                    </div>
                </div>
            </div>
            <div className='w-full p-[24px] border-b-[1px] border-borderGray'>
                <p className='font-IRANYekanExtra text-[15px] text-mainBlue mb-[20px]'>اعتراض ثبت شده</p>
                <p className='font-IRANYekanBold text-[15px] text-mainBlue mb-[18px]'>{maindata?.description}</p>
                <div className="flex flex-wrap">

                    {maindata?.fileName.map((item) => {
                        return (
                            <div onClick={() => download(item)} className='w-fit mx-3 h-[28px] bg-tableGray rounded-[50px] flex items-center pl-1 pr-[11px]'>
                                <p className='font-IRANYekanMedium text-[15px] text-white'>{item}</p>
                                <div className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon /></div>
                            </div>

                        )
                    })}
                </div>

            </div>
            <div className='w-full p-[24px] border-b-[1px] border-borderGray'>
                <p className='font-IRANYekanExtra text-[15px] text-mainBlue mb-[20px]'>جواب اعتراض</p>
                <p className='font-IRANYekanBold text-[15px] text-mainBlue mb-[18px]'>{maindata?.responseDescription}</p>
                 <div className="flex flex-wrap">

                    {maindata?.responseFiles.map((item) => {
                        return (
                            <div onClick={() => download(item)} className='w-fit mx-3 h-[28px] bg-tableGray 
                            rounded-[50px] flex items-center pl-1 pr-[11px] cursor-pointer'>
                                <p className='font-IRANYekanMedium text-[15px] text-white'>{item}</p>
                                <div className='w-[20px] h-[20px] rounded-full bg-mainBlue flex justify-center items-center mr-[22px]'><ViewFileIcon /></div>
                            </div>

                        )
                    })}
                </div>

            </div>
            <div className='w-full p-[24px]'>
                <p className='font-IRANYekanExtra text-[15px] text-mainBlue mb-[24px]'>جزئیات اعتراض ثبت شده</p>
                <div className='w-full mb-7'>
                    <ViewProtestTable list1={list1} list2={list2} titleRow={titleRow} data={data} />
                    </div>

            </div>
        </div>
    )
}

export default ViewProtest;