import { useState } from 'react';
import {MainTable, MainInput } from "../../components";
import DownloadIcon from '../../assets/icon/general/DownloadIcon';
import { Link } from 'react-router-dom';




const cityList = [
   
    {
      id: 1,
      name: 'عشایر',
     },
    {
      id: 2,
      name: 'تامین اجتماعی',
      },
    {
      id: 3,
      name: 'بازنشستگی کشوری',
      },
]

const titleRow = ["ردیف","نام صندوق","دانلود حکم"];

const list = [
  {
    item1: "1",
    item2: "بازنشستگی کشوری",
    item3: <div onClick={()=>window.location.href="../../SingleRetriment.html"}  className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon/></div>,
    
  },
  {
    item1: "2",
    item2: "صندوق بیمه اجتماعی کشاورزان، روستاییان و عشایر",
    item3: <div className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon/></div>,
    
  },
  {
    item1: "3",
    item2: "صندوق تامین اجتماعی",
    item3: <div className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon/></div>,
    
  },
  {
    item1: "4",
    item2: "حکم مستمری جمع",
    item3: <div className='w-[38px] h-[38px] rounded-full bg-backBlue mx-auto flex justify-center items-center'><DownloadIcon/></div>,
    
  },
  
  ];


const VerdictsIssued = () => {
    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white pt-[24px] pb-[100px] px-[230px] lg:px-1">
            <div className='w-full flex justify-end mb-5'>
                <div className='w-[150px]'><MainInput listBoxM1={true} listItems={cityList} listBoxHolder={'نام صندوق'}/></div>
            </div>
            <div className='w-full'>
                <MainTable center2={true} list={list} titleRow={titleRow}/>

            </div>
            
        </div>
    )
}

export default VerdictsIssued;