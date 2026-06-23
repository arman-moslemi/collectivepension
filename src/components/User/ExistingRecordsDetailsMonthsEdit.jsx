import { useState } from 'react';

import { MainButton, MainInput } from "../../components";



const ExistingRecordsDetailsMonthsEdit = ({ list2, setData, setProtest, data }) => {

    const [selectedBox, setSelectedBox] = useState(false);
    const [id, setId] = useState();
    const [startDate, setStartDate] = useState(list2?.item2[0]?.startDay);
    const [endDate, setEndDate] = useState(list2?.item2[0]?.endDay);
    const [duration, setDuration] = useState(list2.item3);
    const addNewTimeFrame = (monthId) => {
        console.log(555)
        const newTimeFrame = ''; // Your new time frame
        setData(prevData =>

            prevData.map(item =>
                item.item4 === monthId
                    ? { ...item, item2: [...item.item2, { timeFrameId: item.item2[0].timeFrameId, timeFrame: "" }] }
                    : item
            )
        );

    };
    const removeTimeFrame = (monthId, frameIndex) => {
        if (frameIndex != 0) {
            setData(prevData =>
                prevData.map(item =>
                    item.item4 === monthId
                        ? {
                            ...item,
                            item2: item.item2.filter((_, idx) => idx !== frameIndex)
                        }
                        : item
                )
            );
        }
    };
    // const addProtest = () => {
    //     list2.item2.map((item) => {
    //         setProtest(prevData => [...prevData, {
    //             TimeFrameId: item.timeFrameId, 
    //             ProtestDuration: list2.item3, 
    //             protestDays: [
    //                 {
    //                     ProtestStartDay: item.startDay,
    //                     ProtestEndDay: item.endDay
    //                 }
    //             ]
    //         }])

    //     })
    //     alert("به اعتراضها اضافه شد")
    // }
    // const updateData = (monthId, frameIndex, type, val) => {
    //     console.log(monthId, frameIndex, type, val)
    //     console.log(data)
    //     setData(prevArray =>
    //         type == "start" ?
    //             prevArray.map(item =>
    //                 item.item4 === monthId
    //                     ? {
    //                         ...item,
    //                         item2: item.item2.map((timeFrame, index) =>
    //                             index === frameIndex
    //                                 ? { ...timeFrame, startDay: val }
    //                                 : timeFrame
    //                         )
    //                     }
    //                     : item
    //             )
    //             :
    //             prevArray.map(item =>
    //                 item.item4 === monthId
    //                     ? {
    //                         ...item,
    //                         item2: item.item2.map((timeFrame, index) =>
    //                             index === frameIndex
    //                                 ? { ...timeFrame, endDay: val }
    //                                 : timeFrame
    //                         )
    //                     }
    //                     : item
    //             )
    //     );
    // };



    const addProtest = () => {
        // list2.item2.map((item) => {
        console.log(99)
        console.log(duration)
        setProtest(prevData => [...prevData, {
            MonthId: list2.item4,
            ProtestDuration: duration
            // protestDays: [
            //     {
            //         ProtestStartDay: item.startDay,
            //         ProtestEndDay: item.endDay
            //     }
            // ]
        }])

        // })
        alert("به اعتراضها اضافه شد")
    }
    const updateData = (monthId, frameIndex, type, val) => {
        console.log(monthId, frameIndex, type, val)
        console.log(data)
        setData(prevArray =>
            type == "start" ?
                prevArray.map(item =>
                    item.item4 === monthId
                        ? {
                            ...item,
                            item2: item.item2.map((timeFrame, index) =>
                                index === frameIndex
                                    ? { ...timeFrame, startDay: val }
                                    : timeFrame
                            )
                        }
                        : item
                )
                :
                prevArray.map(item =>
                    item.item4 === monthId
                        ? {
                            ...item,
                            item2: item.item2.map((timeFrame, index) =>
                                index === frameIndex
                                    ? { ...timeFrame, endDay: val }
                                    : timeFrame
                            )
                        }
                        : item
                )
        );
    };
    return (
        <div className="w-full border-[1px] border-borderGray rounded-[5px]">

            {list2?.item2?.length > 1 ?
                <div className="w-full">
                    <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                        <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list2.item1}</p>
                        {/* <p onClick={() => { setSelectedBox(!selectedBox); setId(list2?.item4) }} className="font-IRANYekanMedium cursor-pointer text-[15px] text-buttonBlue border-b-[1px] border-dashed ">مشاهده بازه‌ها</p> */}
                        <div className='flex items-center'>
                            <div className='w-[49px]'>
                                <MainInput holder={list2.item3} value={duration} onChange={(e) => setDuration(e.target.value)} Custom1={true}
                                // onChange={()=>}
                                /></div>
                            <p className="font-IRANYekanMedium text-[15px] mr-2">روز</p>
                            {/* <div className='w-7 h-7 mr-4 bg-buttonBlue rounded-full flex justify-center items-center cursor-pointer '
                                onClick={() => addNewTimeFrame(list2.item4)}>
                                <p className='text-white text-[26px] font-IRANYekanBold mt-[2px]'>+</p>
                            </div> */}
                            <div onClick={() => addProtest()} className=' w-24 h-7 mr-4 bg-buttonBlue  flex justify-center items-center cursor-pointer '>
                                <p className='text-white  text-[12px] font-IRANYekanBold mt-[2px]'>ثبت اعتراض</p>
                            </div>

                        </div>
                    </div>
                    {selectedBox && id == list2.item4 ?

                        list2?.item2.map((item, index) => {
                            return (

                                <div className="w-full py-[15px] px-[20px] flex justify-center items-center border-b-[1px] border-dashed border-borderGray">
                                    <div className='flex items-center ml-3'>
                                        <div className='w-[66px]'><MainInput holder={'01/01'} Custom1={true} defaultVal={list2.item2[index].startDay} onChange={(e) => { setStartDate(e.target.value); updateData(list2.item4, index, "start", e.target.value) }} /></div>
                                        <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                                        <div className='w-[66px]'><MainInput holder={'01/31'} Custom1={true} defaultVal={list2.item2[index].endDay} onChange={(e) => { setEndDate(e.target.value); updateData(list2.item4, index, "end", e.target.value) }} /></div>
                                        <div onClick={() => removeTimeFrame(list2.item4, index)} className='w-7 h-7 mr-2 bg-buttonBlue rounded-full flex justify-center items-center cursor-pointer '>
                                            <p className='text-white text-[40px] font-IRANYekanBold '>-</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })


                        :
                        null
                    }

                </div>
                :
                <div className="w-full py-[15px] px-[20px] flex u390:flex-wrap justify-around items-center border-b-[1px] border-dashed border-borderGray">
                    <p className="font-IRANYekanMedium w-[65px] text-[15px]">{list2.item1}</p>
                    {/* <div className='flex items-center'>
                        <div className='w-[66px]'><MainInput holder={'01/31'} value={startDate} onChange={(e) => { setStartDate(e.target.value); updateData(list2.item4, 0, "start", e.target.value) }} Custom1={true} /></div>
                        <p className="font-IRANYekanMedium text-[15px] mx-2">-</p>
                        <div className='w-[66px]'><MainInput holder={'01/31'} value={endDate} onChange={(e) => { setEndDate(e.target.value); updateData(list2.item4, 0, "end", e.target.value) }} Custom1={true} /></div>
                    </div> */}
                    <div className='flex items-center'>
                        <div className='w-[49px]'><MainInput holder={list2.item3} Custom1={true} value={duration} onChange={(e) => setDuration(e.target.value)} /></div>
                        <p className="font-IRANYekanMedium text-[15px] mr-2">روز</p>
                    </div>
                    {/* <div className='w-7 h-7 mr-4 bg-buttonBlue rounded-full flex justify-center items-center cursor-pointer' onClick={() => addNewTimeFrame(list2.item4)}><p className='text-white text-[26px] font-IRANYekanBold mt-[2px]'>+</p></div> */}
                    <div onClick={() => addProtest()} className=' w-24 h-7 u390:mt-3 mr-4 bg-buttonBlue  flex justify-center items-center cursor-pointer'>
                        <p className='text-white  text-[12px] font-IRANYekanBold mt-[2px]'>ثبت اعتراض</p>
                    </div>
                    {/* </div> */}
                </div>
            }


        </div>
    );
};

export default ExistingRecordsDetailsMonthsEdit;