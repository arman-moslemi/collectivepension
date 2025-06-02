import { MainButton, MainExplanation, ExistingRecordsDetailsMonths } from "../../components";

const list = [
  {
    item1: "فروردین",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "اردیبهشت",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "خرداد",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "تیر",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "مرداد",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "شهریور",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "مهر",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "آبان",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "آذر",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "دی",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "بهمن",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  {
    item1: "اسفند",
    item2: "01/01 - 01/31",
    item3: "31 روز",
  },
  
  ];

const ExistingRecordsDetails = () => {

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
            <div className="w-full flex justify-end items-center mb-[21px]">
                <div className="w-[97px]"><MainButton label={'اعتراض'} red={true}/></div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
                <div><ExistingRecordsDetailsMonths title1={'فروردین'} title2={'اردیبهشت'} title3={'خرداد'}/></div>
                <div><ExistingRecordsDetailsMonths title1={'تیر'} title2={'مرداد'} title3={'شهریور'}/></div>
                <div><ExistingRecordsDetailsMonths title1={'مهر'} title2={'آبان'} title3={'آذر'}/></div>
                <div><ExistingRecordsDetailsMonths title1={'دی'} title2={'بهمن'} title3={'اسفند'}/></div>
            </div>
            
            

        </div>
    );
  };
  
  export default ExistingRecordsDetails;