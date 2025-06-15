import { MainButton, MainModal, MainExplanation } from "../../components";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardPic1 from "../../assets/img/user/DashboardPic1.svg";
import DashboardPic2 from "../../assets/img/user/DashboardPic2.svg";
import DashboardPic3 from "../../assets/img/user/DashboardPic3.svg";
import DashboardPic4 from "../../assets/img/user/DashboardPic4.svg";
import DashboardPic5 from "../../assets/img/user/DashboardPic5.svg";
import ExportDashboardIcon1 from "../../assets/icon/expert/ExportDashboardIcon1";
import ExportDashboardIcon2 from "../../assets/icon/expert/ExportDashboardIcon2";
import ExportDashboardIcon3 from "../../assets/icon/expert/ExportDashboardIcon3";


const data = [
    {
        name: 'درخواست های بازنشستگی در انتظار',
        uv: 270,
    },
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


const ExpertDashboard = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]"><MainExplanation color={'red'} text={'شما دارای ۲ درخواست با مهلت در حال اتمام هستید.لطفاً در اسرع وقت نسبت به بررسی و رسیدگی به این درخواست‌ها اقدام نمایید تا از بروز تأخیر جلوگیری شود.'} /></div>
            <div className="w-full grid grid-cols-3 gap-4">
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <ExportDashboardIcon1/>
                    <div className="flex items-center mt-[15px]">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue ">درخواست‌های بازنشستگی</p>
                    <div className="mr-[5px] w-[23px] h-[23px] rounded-full flex items-center justify-center bg-redError">
                        <p className="text-[15px] text-white font-IRANYekanExtra">5</p>
                    </div>
                    </div>
                </div>
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <ExportDashboardIcon2/>
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-[15px]">درخواست‌ ها</p>
                </div>
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <ExportDashboardIcon3/>
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-[15px]">اعتراضات رسیده</p>
                </div>
                <div className="h-[323px] p-6 col-span-3 border-ddGray border-[1px] border-dashed rounded-[6px] mb-[30px]">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-7">گزارش عملکرد</p>
                    <div className="w-full h-full ">
                    <ResponsiveContainer width="100%" height="90%">
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
            </div>

        </div>
    )
}

export default ExpertDashboard;