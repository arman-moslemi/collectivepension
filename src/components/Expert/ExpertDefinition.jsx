import React, { useState } from "react";
import { MainButton, MainModal, MainExplanation, MainPicText, MainInput, MainTable } from "../../components";
import { useNavigate } from "react-router-dom";
import RequestResponsePic from "../../assets/img/user/RequestResponsePic.png";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { div } from "framer-motion/client";
import DefExpertPenIcon from "../../assets/icon/expert/DefExpertPenIcon";



const titleRow = ["ردیف","تاریخ","زمان ورود","زمان خروج","مدت حضور","سابقه اعلام شده","مبلغ اعلام شده","اعتراض بررسی شده","احکام صادر شده"];

const list = [
  {
    item1: "1",
    item2: "1404/02/08",
    item3: "11:25",
    item4: "12:25",
    item5: "1:00",
    item6: "12",
    item7: "12",
    item8: "5",
    item9: "2",
  },
  {
    item1: "1",
    item2: "1404/02/08",
    item3: "11:25",
    item4: "12:25",
    item5: "1:00",
    item6: "12",
    item7: "12",
    item8: "5",
    item9: "2",
  },
  {
    item1: "1",
    item2: "1404/02/08",
    item3: "11:25",
    item4: "12:25",
    item5: "1:00",
    item6: "12",
    item7: "12",
    item8: "5",
    item9: "2",
  }
  
  ];



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


const ExpertDefinition = () => {

    const [thereIsExpert, setThereIsExpert] = useState(false);
    const [expertDefinitionModal, setExpertDefinitionModal] = useState(false);
    let navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[25px] py-[17px]">
            {thereIsExpert?
            <div className="w-full">
                <div className="w-full flex justify-end items-center mt-3">
                    <div className="w-[187px]"><MainButton label={<div className="flex"><p className="text-[16px] font-IRANYekanBold text-white ml-[15px]">ویرایش کارشناس</p><DefExpertPenIcon/></div>}/></div>
                </div>
                <div className="w-full flex justify-between items-center mt-8">
                    <div className="flex">
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue ml-2">نام کارشناس :</p>
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue">احمد عبادی کنجانی</p>
                    </div>
                    <div className="flex">
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue ml-2">نام کاربری :</p>
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue">AHMAD1256</p>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                    <div className="flex">
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue ml-2">کدملی :</p>
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue">0020156985</p>
                    </div>
                    <div className="flex">
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue ml-2">شماره تماس :</p>
                    <p className="font-IRANYekanBold text-[18px] text-mainBlue">0212253636</p>
                    </div>
                </div>
                <div className="w-full border-t-[1px] border-borderGray py-8 mt-8"></div>
                <div className="w-full h-80">
                                    <ResponsiveContainer width="100%" height="90%" >
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
                                            <XAxis tickMargin={5} dataKey="name" tick={{ fontSize: 8 }} />
                                            <YAxis tickMargin={24} />
                                            <Bar dataKey="uv" barSize={30} fill="#00c1b2"  />
                                        </BarChart>
                                    </ResponsiveContainer>
                </div>
                <div className="w-full border-t-[1px] border-borderGray pt-6 flex justify-between items-center mb-5">
                    <p className="font-IRANYekanBold text-[20px] text-mainBlue">گزارش عملکرد کارشناس</p>
                    <div className="w-[129px]"><MainButton label={'گزارش گیری'}/></div>

                </div>
                <div className="w-full mb-16">
                    <MainTable cen5={true} list={list} titleRow={titleRow}/>

                </div>
            </div>
            :
            <div className="w-full pt-12 pb-16">
                <MainPicText pic={RequestResponsePic} 
                text={<div ><p className="text-mainBlue text-[20px] font-IRANYekanBold">شما تاکنون کارشناسی تعریف نکرده‌اید !</p></div>}
                pageButton={<div className="flex"><div className="ml-3 w-[186px]"><MainButton onClickFunction={()=>setExpertDefinitionModal(true)} label={'تعریف کارشناس'}/></div>
                </div>} />
            </div>
            }
            
            {expertDefinitionModal ?
                <MainModal title={'تعریف کارشناس'} setShowModal={setExpertDefinitionModal}
                text={
                    <div className="w-full grid grid-cols-2 gap-4">
                        <div>
                            <MainInput label={'نام'} holder={'نام را بنویسید'}/>
                        </div>
                        <div>
                            <MainInput label={'نام خانوادگی'} holder={'نام خانوادگی را بنویسید'}/>
                        </div>
                        <div>
                            <MainInput label={'کدملی'} holder={'کدملی را بنویسید'}/>
                        </div>
                        <div>
                            <MainInput label={'شماره تماس'} holder={'شماره تماس را بنوسید'}/>
                        </div>
                        <div>
                            <MainInput label={'نام کاربری'} holder={'نام کاربری را بنویسید'}/>
                        </div>
                        <div>
                            <MainInput label={'رمزعبور'} holder={'رمز عبور را بنویسید'}/>
                        </div>
                    </div>
                }
                modalButton={<div className="w-full flex justify-center"><div className="w-[134px]"><MainButton onClickFunction={()=>{setThereIsExpert(true); setExpertDefinitionModal(false)}} label={'ثبت کارشناس'}/></div></div>}
                />
            :null}
                
        </div>
    )
}

export default ExpertDefinition;