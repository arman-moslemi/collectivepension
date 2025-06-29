import { MainButton, MainModal, MainExplanation } from "..";
import { useNavigate } from "react-router-dom";
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

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]">
                {/* <MainExplanation color={'red'} text={'شما دارای ۲ درخواست با مهلت در حال اتمام هستید.لطفاً در اسرع وقت نسبت به بررسی و رسیدگی به این درخواست‌ها اقدام نمایید تا از بروز تأخیر جلوگیری شود.'} /> */}
                
                </div>
            <div className="w-full grid grid-cols-3 gap-4">
              
             
                <div className="h-[340px] p-6 col-span-3 border-ddGray border-[1px] border-dashed rounded-[6px] mb-[30px]">
                   <div className="flex justify-between mt-4 mb-5">
                   <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-7">گزارش عملکرد</p>

                   <div className="w-[120px]">
                   <MainButton  label={'گزارش‌گیری'}/>
                   </div>
                   </div>
                    <div className="w-full h-full ">
                    <ResponsiveContainer width="100%" height="80%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis tickMargin={6} dataKey="name" />
                            <YAxis tickMargin={24} />
                            <Bar dataKey="uv" barSize={30} fill="#00c1b2"  />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>

                <div className="mt-[40px] col-span-3 grid grid-cols-3 w-[80%] mx-auto gap-4">
                    <div className="col-span-1">
                        <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                                درخواست‌های بازنشستگی در انتظار
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                               احکام بازنشستگی صادر شده
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                                سوابق در انتظار اعلام
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                                سوابق اعلام شده
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                              مبلغ مستمری در انتظار
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                                مبالغ مستمری اعلام شده
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                              اعتراضات در انتظار بررسی
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1">
                    <div className="w-full shadow-calculbox border-r-buttonBlue border-r-[8px] rounded-[5px] px-[15px] py-[5px]">
                            <span className="font-IRANYekanExtra text-[15px] mb-[10px] text-black">
                               اعتراضات پاسخ داده شده
                            </span>
                            <br/>
                            <span className="font-IRANYekanBold text-darkGray text-[15px]">
                                157 عدد
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainAdminDashboard;