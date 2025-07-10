import { useState } from 'react';

import { MainButton, } from "../../components";




const ExistingRecordsDetailsMonths = ({ list1, list2, list3 }) => {

    const [selectedBox, setSelectedBox] = useState(false);
    const [id, setId] = useState();

    return (
        <div className="w-full border-[1px] border-borderGray rounded-[5px]">
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list1.item1}</p>
                {list1?.item2?.length > 1 ?

                    <p onClick={() => {setSelectedBox(!selectedBox);setId(list1?.item4)}} className="font-IRANYekanMedium cursor-pointer text-[15px] text-buttonBlue border-b-[1px] border-dashed ">مشاهده بازه‌ها</p>

                    :


                    <p className="font-IRANYekanMedium text-[15px]">{list1.item2[0].startDay+" تا"+list1.item2[0].endDay}</p>
                }





                <div className='flex'>
                    <p className="font-IRANYekanMedium text-[15px]">{list1.item3}</p>
                    <p className="font-IRANYekanMedium text-[15px] mr-1">روز</p>
                </div>
            </div>
            {selectedBox && id==list1.item4 ?

                list1.item2.map((item) => {
                    return (

                        <div className="w-full py-[15px] px-[20px] flex justify-center items-center border-b-[1px] border-dashed border-borderGray">
                            <p className="font-IRANYekanMedium text-[15px] pr-6">{item.startDay+" تا"+item.endDay}</p>
                        </div>
                    )
                })


                :
                null
            }

        </div>
    );
};

export default ExistingRecordsDetailsMonths;
