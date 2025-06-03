import { MainPicText, MainButton, MainModal, MainExplanation } from "../../components";
import React, { PureComponent } from 'react';
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

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            <div className="w-full mb-[15px]"><MainExplanation color={'yellow'} text={'در هر لحظه وضعیتی که کاربر در آن قرار دارد اینجا قرار میگیرد.مثلا سوابق اعلام شده در انتظار تایید شما یا مبلغ مستمری محاسبه شده در انتظار تایید'} /></div>
            <div className="w-full grid grid-cols-4 gap-4">
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <img src={DashboardPic1} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-3">کلیه سوابق موجود</p>
                </div>
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <img src={DashboardPic2} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-3">مستمری محاسبه شده</p>
                </div>
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <img src={DashboardPic3} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-3">اعتراضات</p>
                </div>
                <div className="h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <img src={DashboardPic4} alt="pic" />
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-3">اعلام حساب بانکی</p>
                </div>
                <div className="h-[323px] p-6 col-span-3 border-ddGray border-[1px] border-dashed rounded-[6px] ">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-7">آخرین سوابق</p>
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
                            <YAxis tickMargin={16} />
                            <Bar dataKey="uv" barSize={30} fill="#00c1b2"  />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
                <div className="h-[323px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-center">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-[15px]">حکم بازنشستگی</p>
                    <img src={DashboardPic5} alt="pic" />
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue my-[17px]">دریافت و دانلود حکم</p>
                    <div className="w-[162px]"><MainButton label={'ذخیره و دریافت'} /></div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;