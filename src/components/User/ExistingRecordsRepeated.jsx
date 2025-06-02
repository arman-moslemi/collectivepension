import { MainButton, MainExplanation, MainTable, MainRadioInput } from "../../components";

const titleRow = ["ردیف","بازه زمانی مشترک","تعداد روز","انتخاب صندوق"];

const list = [
  {
    item1: "1",
    item2: "07/01 - 07/30",
    item3: "15 روز",
    item4: <div className=""><MainRadioInput smallBlack={true} text1={'بازنشستگی کشوری'} text2={'بازنشستگان فولاد'} radioName={'tblI1'}/></div>,
  },
  {
    item1: "1",
    item2: "07/01 - 07/30",
    item3: "15 روز",
    item4: <div className=""><MainRadioInput smallBlack={true} text1={'بازنشستگی کشوری'} text2={'بازنشستگان فولاد'} radioName={'tblI2'}/></div>,
  }
  
  ];


const ExistingRecordsRepeated = () => {

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
            <div className="w-full flex justify-between items-center mb-[21px]">
                <p className="font-IRANYekanExtra text-[15px] text-mainBlue">سوابق دارای همپوشانی</p>
                <div className="w-[97px]"><MainButton label={'ثبت'}/></div>
            </div>
            <div className="w-full mb-3">
                <MainExplanation text={'توجه داشته باشید که پس از انتخاب یکی از صندوق‌ها در هر ردیف امکان ویرایش صندوق انتخاب شده وجود ندارد، لذا در انتخاب صندوق دقت داشته باشید.'}/>
            </div>
            <div className="w-full mb-7">
                <MainTable titleRow={titleRow} list={list}/>
            </div>
            

        </div>
    );
  };
  
  export default ExistingRecordsRepeated;