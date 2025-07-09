import { MainButton, MainModal, MainExplanation } from "../../components";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ExportDashboardIcon1 from "../../assets/icon/expert/ExportDashboardIcon1";
import ExportDashboardIcon2 from "../../assets/icon/expert/ExportDashboardIcon2";
import ExportDashboardIcon3 from "../../assets/icon/expert/ExportDashboardIcon3";



    const data = [
        { name: 'احکام صادرشده', uv: 200 },
        { name: 'اعتراضات پاسخ‌داده', uv: 950 },
        { name: 'اعتراضات باز', uv: 500 },
        { name: 'انتظار تایید ثانویه', uv: 100 },
        { name: 'مبلغ اعلام‌شده', uv: 180 },
        { name: 'در انتظار مبلغ', uv: 650 },
        { name: 'سابقه اعلام‌شده', uv: 730 },
        { name: 'در انتظار سابقه', uv: 240 },
        { name: 'انتظار تایید اولیه', uv: 200 },
      ];


const ExpertDashboard = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px] md:px-[10px]">
            <div className="w-full mb-[15px]"><MainExplanation color={'red'} text={'شما دارای ۲ درخواست با مهلت در حال اتمام هستید.لطفاً در اسرع وقت نسبت به بررسی و رسیدگی به این درخواست‌ها اقدام نمایید تا از بروز تأخیر جلوگیری شود.'} /></div>
            <div className="w-full grid grid-cols-3 gap-4 md:gap-2">
                <div onClick={()=> navigate('/expert/requestsPension')} className="col-span-1 hover:cursor-pointer md:col-span-3 h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-between p-[20px]">
                    <ExportDashboardIcon1/>
                    <div className="flex items-center mt-[15px]" >
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue h800:text-[14px] ">درخواست‌های بازنشستگی</p>
                    <div className="mr-[5px] w-[23px] h-[23px] md:h-[18px] md:w-[18px] rounded-full flex items-center justify-center bg-redError">
                        <p className="text-[15px] text-white font-IRANYekanExtra md:text-[10px]">5</p>
                    </div>
                    </div>
                </div>
                <div onClick={()=> navigate('/expert/requests')} className="col-span-1 md:col-span-3 hover:cursor-pointer h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-between p-[20px]">
                    <ExportDashboardIcon2/>
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-[15px] h800:text-[14px] ">درخواست‌ ها</p>
                </div>
                <div onClick={()=> navigate('/expert/protestList')} className="col-span-1 md:col-span-3 hover:cursor-pointer h-[156px] border-ddGray border-[1px] border-dashed rounded-[6px] flex flex-col items-center justify-between p-[20px]">
                    <ExportDashboardIcon3/>
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mt-[15px] h800:text-[14px] ">اعتراضات رسیده</p>
                </div>
                <div className="h-auto p-6 px-2 col-span-3 border-ddGray border-[1px] border-dashed rounded-[6px] mb-[30px]">
                    <p className="font-IRANYekanExtra text-[15px] text-mainBlue mb-7">گزارش عملکرد</p>
                    <div className="w-full overflow-x-auto">
  <div className="min-w-[600px]">
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={600}
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
        <XAxis tickMargin={5} dataKey="name" tick={{ fontSize: 8 }} />
        <YAxis tickMargin={24} />
        <Bar dataKey="uv" barSize={30} fill="#00c1b2" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>


                </div>
            </div>

        </div>
    )
}

export default ExpertDashboard;