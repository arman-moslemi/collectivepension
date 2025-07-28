import { MainButton, MainModal, MainExplanation } from "..";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ExportDashboardIcon1 from "../../assets/icon/expert/ExportDashboardIcon1";
import ExportDashboardIcon2 from "../../assets/icon/expert/ExportDashboardIcon2";
import ExportDashboardIcon3 from "../../assets/icon/expert/ExportDashboardIcon3";


const data = [
    
    {
        name: 'احکام بازنشستگی صادر شده',
        uv: 240,
    },
    {
        name: 'سوابق در انتظار تایید',
        uv: 730,
    },
    {
        name: 'سوابق اعلام شده',
        uv: 650,
    },
    {
        name: 'مبلغ مستمری در انتظار تایید',
        uv: 180,
    },
    {
        name: 'مبلغ مستمری اعلام شده',
        uv: 100,
    },
    {
        name: 'اعتراضات در انتظار بررسی',
        uv: 500,
    },
    {
        name: 'اعتراضات پاسخ داده شده',
        uv: 950,
    },
];


const MainAdminDashboard = () => {

    let navigate = useNavigate();

    const [data, setData] = useState([]);
      const [count, setCount] = useState();

    const getAll = async () => {
        try {
    
          const response = await axiosReq("SuperAdmins/GetRequestsTypesCount", "get" );
          console.log("123")
          console.log(response)
    
          if (response?.status === 200 || response?.status === 204) {
            var prot = []
            response.data?.map((item, index) => {
              prot.push({
              name:item.requestType,
              uv:item.count
              })
            })
            setData(prot);
          }
        //   const response2 = await axiosReq("Experts/GetExpiredUserInsurances", "get" );
    //   if (response2?.status === 200 || response2?.status === 204) {
           
    //         setCount(response2?.data);
    //       }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      useEffect(() => {
        getAll();
      }, []);

      const getExcel = async () => {
        try {

            const response = await axiosReq("SuperAdmins/GetRequestsTypesCountExcel", "get" ); 
            console.log(response)

            if (response?.status === 200 || response?.status === 204) {
           alert("موفقیت آمیز")
            }

        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]">
                {/* <MainExplanation color={'red'} text={'شما دارای ۲ درخواست با مهلت در حال اتمام هستید.لطفاً در اسرع وقت نسبت به بررسی و رسیدگی به این درخواست‌ها اقدام نمایید تا از بروز تأخیر جلوگیری شود.'} /> */}
                
                </div>
            <div className="w-full grid grid-cols-3 gap-4">
              
             
                <div className=" p-6 col-span-3 border-ddGray border-[1px] border-dashed h-[460px] rounded-[6px] mb-[30px]">
                   <div className="flex justify-between items-center mt-4 mb-10">
                   <p className="font-IRANYekanExtra text-[15px]  text-mainBlue ">گزارش عملکرد</p>

                   <div className="w-[120px]">
                   <MainButton onClickFunction={()=>getExcel()} label={'گزارش‌گیری'}/>
                   </div>
                   </div>
                   <div className="w-full  overflow-x-auto flex justify-center md:block">
  <div className="min-w-[600px] h-[350px]">
    <ResponsiveContainer width={1000} height={300}>
      <BarChart
        width={600} 
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickMargin={6} dataKey="name" interval={0} angle={-15} textAnchor="end"  tick={{dx: -50 ,  dy: 35 }}/>
        <YAxis tickMargin={24} />
        <Bar dataKey="uv" barSize={30} fill="#00c1b2" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


                </div>

                <div className="my-[40px] col-span-3 grid grid-cols-3 w-[80%] mx-auto gap-4">
                    
                    {data.map((item, index) => (
  <div key={index} className="col-span-1 lg:col-span-3">
    <div className="w-full flex flex-col  shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
      <span className="font-IRANYekanExtra lg:text-center text-[15px] mb-[10px] text-black">
        {item.name}
      </span>
      
      <span className="font-IRANYekanBold lg:text-center text-darkGray text-[15px]">
        {item.uv} عدد
      </span>
    </div>
  </div>
))}
                    
                </div>
            </div>

        </div>
    )
}

export default MainAdminDashboard;