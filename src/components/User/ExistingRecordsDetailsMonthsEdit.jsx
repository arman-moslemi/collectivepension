import { useState } from 'react';

import { MainButton, MainInput } from "../../components";



const ExistingRecordsDetailsMonthsEdit = ({list1,list2,list3}) => {

    const [selectedBox, setSelectedBox] = useState(false);

    return (
        <div className="w-full border-[1px] border-borderGray rounded-[5px]">
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list1.item1}</p>
                <div className='flex items-center'>
                    <div className='w-[66px]'><MainInput holder={'01/01'} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                    <div className='w-[66px]'><MainInput holder={'01/31'} Custom1={true}/></div>
                </div>
                <div className='flex items-center'>
                    <div className='w-[49px]'><MainInput holder={list1.item3} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mr-2">روز</p>
                </div>
            </div>
            {list2?.item2?.length>1 ?
            <div className="w-full">
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list2.item1}</p>
                <p onClick={() => setSelectedBox(!selectedBox)} className="font-IRANYekanMedium cursor-pointer text-[15px] text-buttonBlue border-b-[1px] border-dashed ">مشاهده بازه‌ها</p>
                <div className='flex items-center'>
                    <div className='w-[49px]'><MainInput holder={list2.item3} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mr-2">روز</p>
                </div>
            </div>
            {selectedBox?
            <>
            <div className="w-full py-[15px] px-[20px] flex justify-center items-center border-b-[1px] border-dashed border-borderGray">    
                <div className='flex items-center ml-3'>
                    <div className='w-[66px]'><MainInput holder={'01/01'} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                    <div className='w-[66px]'><MainInput holder={'01/31'} Custom1={true}/></div>
                </div>
            </div>
            <div className="w-full py-[15px] px-[20px] flex justify-center items-center border-b-[1px] border-dashed border-borderGray">
                <div className='flex items-center ml-3'>
                    <div className='w-[66px]'><MainInput holder={'01/01'} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                    <div className='w-[66px]'><MainInput holder={'01/31'} Custom1={true}/></div>
                </div>
            </div>
            </>
            :
            null
            }
            
            </div>
            :
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list2.item1}</p>
                <div className='flex items-center'>
                    <div className='w-[66px]'><MainInput holder={'01/01'} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                    <div className='w-[66px]'><MainInput holder={'01/31'} Custom1={true}/></div>
                </div>
                <div className='flex items-center'>
                    <div className='w-[49px]'><MainInput holder={list2.item3} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mr-2">روز</p>
                </div>
            </div>
            }  
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center ">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list3.item1}</p>
                <div className='flex items-center'>
                    <div className='w-[66px]'><MainInput holder={'01/01'} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                    <div className='w-[66px]'><MainInput holder={'01/31'} Custom1={true}/></div>
                </div>
                <div className='flex items-center'>
                    <div className='w-[49px]'><MainInput holder={list3.item3} Custom1={true}/></div>
                    <p className="font-IRANYekanMedium text-[15px] mr-2">روز</p>
                </div>
            </div>        

        </div>
    );
  };
  
  export default ExistingRecordsDetailsMonthsEdit;