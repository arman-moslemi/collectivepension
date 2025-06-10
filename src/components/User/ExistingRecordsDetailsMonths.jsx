import { useState } from 'react';

import { MainButton, } from "../../components";
import { div } from 'framer-motion/client';



const ExistingRecordsDetailsMonths = ({list1,list2,list3}) => {

    const [selectedBox, setSelectedBox] = useState(false);

    return (
        <div className="w-full border-[1px] border-borderGray rounded-[5px]">
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list1.item1}</p>
                <p className="font-IRANYekanMedium text-[15px]">{list1.item2[0].item}</p>
                <p className="font-IRANYekanMedium text-[15px]">{list1.item3}</p>
            </div>
            {list2?.item2?.length>1 ?
            <div className="w-full">
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list2.item1}</p>
                <p onClick={() => setSelectedBox(!selectedBox)} className="font-IRANYekanMedium cursor-pointer text-[15px] text-buttonBlue border-b-[1px] border-dashed ">مشاهده بازه‌ها</p>
                <p className="font-IRANYekanMedium text-[15px]">{list2.item3}</p>
            </div>
            {selectedBox?
            <>
            <div className="w-full py-[15px] px-[20px] flex justify-center items-center border-b-[1px] border-dashed border-borderGray">    
                <p className="font-IRANYekanMedium text-[15px] pr-6">{list2.item2[0].item}</p>
            </div>
            <div className="w-full py-[15px] px-[20px] flex justify-center items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium text-[15px] pr-6">{list2.item2[1].item}</p>
            </div>
            </>
            :
            null
            }
            
            </div>
            :
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list2.item1}</p>
                <p className="font-IRANYekanMedium text-[15px]">{list1.item2[0].item}</p>
                <p className="font-IRANYekanMedium text-[15px]">{list2.item3}</p>
            </div>
            }  
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center ">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list3.item1}</p>
                <p className="font-IRANYekanMedium text-[15px]">{list1.item2[0].item}</p>
                <p className="font-IRANYekanMedium text-[15px]">{list3.item3}</p>
            </div>        

        </div>
    );
  };
  
  export default ExistingRecordsDetailsMonths;