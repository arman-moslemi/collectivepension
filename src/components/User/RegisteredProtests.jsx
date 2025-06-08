import { useState } from 'react';
import {MainButton, MainModal, MainExplanation, CalculatedPensionBox, MainInput, UploadFile, MainTable, MainRadioInput } from "../../components";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DetailTableIcon from '../../assets/icon/general/DetailTableIcon';
import TableRightIcon from '../../assets/icon/general/TableRightIcon';
import TableLeftIcon from '../../assets/icon/general/TableLeftIcon';

const cityList = [
    {
      id: 1,
      name: 'دماوند',
      },
    {
      id: 2,
      name: 'فیروزکوه',
     },
    {
      id: 3,
      name: 'ورامین',
      },
    {
      id: 4,
      name: 'پاکدشت',
      },
]

const titleRow = ["ردیف","نوع اعتراض","صندوق","سال","تاریخ ثبت","وضعیت","مشاهده علت"];

const list = [
  {
    item1: "1",
    item2: "سوابق",
    item3: "بازنشستگی کشوری",
    item4: "1376",
    item5: "1402/02/08",
    item6: <div className='rounded-[50px] bg-yellowTable mx-auto w-[109px] h-[28px] flex justify-center items-center'><p className='font-IRANYekanMedium text-[15px] text-white'>در حال برررسی</p></div>,
    item7: <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>,
  },
  {
    item1: "1",
    item2: "سوابق",
    item3: "بازنشستگی کشوری",
    item4: "1376",
    item5: "1402/02/08",
    item6: <div className='rounded-[50px] bg-redError mx-auto w-[72px] h-[28px] flex justify-center items-center'><p className='font-IRANYekanMedium text-[15px] text-white'>رد شده</p></div>,
    item7: <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>,
  },
  {
    item1: "1",
    item2: "سوابق",
    item3: "بازنشستگی کشوری",
    item4: "1376",
    item5: "1402/02/08",
    item6: <div className='rounded-[50px] bg-greenTable mx-auto w-[84px] h-[28px] flex justify-center items-center'><p className='font-IRANYekanMedium text-[15px] text-white'>تایید شده</p></div>,
    item7: <div className='w-[38px] h-[38px] mx-auto rounded-full bg-backBlue flex justify-center items-center'><DetailTableIcon/></div>,
  },
  
  ];

const RegisteredProtests = () => {


    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white p-[24px]">
            <div className='w-full flex justify-between items-center mb-[20px]'>
                <div className='w-[440px]'><MainInput search={true} holder={'جستجو بر اساس متن اعتراض'} leftIcon={<SearchIcon/>}/></div>
                <div className='flex justify-start items-center'>
                    <div className='ml-3 w-[150px]'><MainInput listBoxM1={true} listItems={cityList} listBoxHolder={'نام صندوق'}/></div>
                    <div className='ml-3 w-[150px]'><MainInput listBoxM1={true} listItems={cityList} listBoxHolder={'نوع اعتراض'}/></div>
                    <div className='w-[150px]'><MainInput listBoxM1={true} listItems={cityList} listBoxHolder={'وضعیت'}/></div>
                </div>
            </div>
            <div className='w-full mb-[10px]'>
                <MainTable center1={true} list={list} titleRow={titleRow}/>
            </div>
            <div className='w-full mb-[30px] flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    <p className='font-IRANYekanMedium text-[15px] pt-2 ml-[11px]'>تعداد نمایش در صفحه</p>
                    <div className='w-[90px]'><MainInput listBoxM1={true} listItems={cityList} listBoxHolder={'5 تا'}/></div>
                </div>
                <div className='flex justify-start items-center'>
                    <div className='ml-[5px] bg-tableGray w-[38px] h-[38px] rounded-[6px] flex justify-center items-center'><TableRightIcon/></div>
                    <div className='w-[38px] h-[38px] rounded-[6px] border-[1px] border-ddGray flex justify-center items-center'><TableLeftIcon/></div>

                </div>

            </div>
        </div>
    )
}

export default RegisteredProtests;