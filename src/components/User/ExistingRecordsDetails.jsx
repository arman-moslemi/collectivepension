import { useState } from 'react';
import { MainButton, MainExplanation, ExistingRecordsDetailsMonths, ExistingRecordsDetailsMonthsEdit } from "../../components";

const list = [
  {
    item1: "فروردین",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "اردیبهشت",
    item2: [{ item:"01/01 - 01/31"}, {item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "خرداد",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "تیر",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "مرداد",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "شهریور",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "مهر",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "آبان",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "آذر",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "دی",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "بهمن",
    item2: [{ item:"01/01 - 01/31"}, {item:"01/01 - 01/31"}],
    item3: "31",
  },
  {
    item1: "اسفند",
    item2: [{ item:"01/01 - 01/31"}],
    item3: "31",
  },
  
  ];

const ExistingRecordsDetails = () => {


  const [protestMode, setProtestMode] = useState(false);


    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
            <div className="w-full flex justify-end items-center mb-[21px]">
                <div className="w-[97px]"><MainButton onClickFunction={() => setProtestMode(!protestMode)} label={'اعتراض'} red={true}/></div>
            </div>
            {protestMode?
            <div className="w-full  grid grid-cols-2 gap-4">
                <div><ExistingRecordsDetailsMonthsEdit list1={list[0]} list2={list[1]} list3={list[2]} /></div>
                <div><ExistingRecordsDetailsMonthsEdit list1={list[3]} list2={list[4]} list3={list[5]} /></div>
                <div><ExistingRecordsDetailsMonthsEdit list1={list[6]} list2={list[7]} list3={list[8]} /></div>
                <div><ExistingRecordsDetailsMonthsEdit list1={list[9]} list2={list[10]} list3={list[11]} /></div>
            </div>
            :
            <div className="w-full grid grid-cols-2 gap-4">
                <div><ExistingRecordsDetailsMonths list1={list[0]} list2={list[1]} list3={list[2]} /></div>
                <div><ExistingRecordsDetailsMonths list1={list[3]} list2={list[4]} list3={list[5]} /></div>
                <div><ExistingRecordsDetailsMonths list1={list[6]} list2={list[7]} list3={list[8]} /></div>
                <div><ExistingRecordsDetailsMonths list1={list[9]} list2={list[10]} list3={list[11]} /></div>
            </div>
            }
            
            

        </div>
    );
  };
  
  export default ExistingRecordsDetails;