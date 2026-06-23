import { MainButton, MainExplanation, MainTable, MainRadioInput } from "../../components";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
const titleRow = ["ردیف", "بازه زمانی مشترک", "تعداد روز", "انتخاب صندوق"];

const list = [
  {
    item1: "1",
    item2: "07/01 - 07/30",
    item3: "15 روز",
    item4: <div className=""><MainRadioInput jCenter={true} smallBlack={true} text1={'بازنشستگی کشوری'} text2={'بازنشستگان فولاد'} radioName={'tblI1'} /></div>,
  },
  {
    item1: "1",
    item2: "07/01 - 07/30",
    item3: "15 روز",
    item4: <div className=""><MainRadioInput jCenter={true} smallBlack={true} text1={'بازنشستگی کشوری'} text2={'بازنشستگان فولاد'} radioName={'tblI2'} /></div>,
  }

];


const ExistingRecordsRepeated = ({setRepeate}) => {
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  // const [insuranceId, setInsuranceId] = useState(0);
  // const [reCheck, setRecheck] = useState(false);

  const getOverLaps = async () => {
    try {

      // const response = await axiosReq("Users/GetOverlaps", "get");
      const response = await axiosReq("Users/GetDurationOverlapsAsync", "get");
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var propss = [];
        // response.data.map((item, index) => {
        //   propss.push({
        //     item1: index + 1,
        //     item2: item.overlapStartDate + "-" + item.overlapEndDate,
        //     item3: item.overlapDuration,
        //     insuranceOptions: item.insurances,
        //     item4: index,
        //     item50: null
        //   })
        // })
        // setData(propss);

        response.data.map((item, index) => {
          propss.push({
            item1: index + 1,
            item2: item.year + " " + item.month,
            item22:item.monthId,
            item3: item.totalDuration,
            insuranceOptions: item.insurances,
            item4: index,
            item44:item.extraDays,
            item50: null
          })
        })
        setData(propss);
setRepeate(propss)
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const resolveOverLaps = async () => {
    try {
      var over = [];
      data?.map((item) => {
        if (item.item50 != null) {

          // over.push({
          //   OverlapStartDate: item.item2.split('-')[0],
          //   OverlapEndDate: item.item2.split('-')[1],
          //   ChosenInsuranceId: item.item50
          // })
          over.push({
            Year:item.item2.split(' ')[0],
            MonthId:item.item22,
             ExtraDays:item.item44,

            ChosenInsuranceId: item.item50
          })
        }
      })
            console.log(over)

      const response = await axiosReq("Users/ResolveDurationOverlaps", "post", { Overlaps: over });
      console.log(response)

      if (response?.status === 200 || response?.status === 204) {
        var propss = [];
        alert("با موفقیت اضافه شد.")

      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getOverLaps();
  }, []);
  const handleRadioChange = (index, selectedValue) => {
    setData(prevData => {
      const newData = [...prevData];
      // Update item5 based on selection
      // 1 for "بازنشستگی کشوری", 2 for "بازنشستگان فولاد"
      newData[index] = {
        ...newData[index],
        item50: selectedValue
      };

      return newData;
    });
    console.log(data)

  };

  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
      <div className="w-full flex justify-between items-center mb-[21px]">
        <p className="font-IRANYekanExtra text-[15px] text-mainBlue">سوابق دارای همپوشانی</p>
        <div className="w-[97px]"><MainButton onClickFunction={() => resolveOverLaps()} label={'ثبت'} /></div>
      </div>
      <div className="w-full mb-3">
        <MainExplanation text={' در قسمت «سوابق دارای همپوشانی»، اگر مجموع سوابق ثبت‌شده در دو صندوق طی یک ماه بیش از ۳۰ روز باشد، با انتخاب یکی از صندوق‌ها، تعداد روزهای مازاد از همان صندوق کسر می‌شود و سوابق صندوق دیگر بدون تغییر باقی می‌ماند. توجه داشته باشید که پس از انتخاب یکی از صندوق‌ها در هر ردیف امکان ویرایش صندوق انتخاب شده وجود ندارد، لذا در انتخاب صندوق دقت داشته باشید .'} />
      </div>
      <div className="w-full mb-7">
        <MainTable titleRow={titleRow} list={data.map((item, index) => ({
          ...item,
          item4: (
            <div className="">
              <MainRadioInput
                jCenter={true}
                smallBlack={true}
                text1={item?.insuranceOptions[0]?.name}
                text2={item?.insuranceOptions[1]?.name}
                text3={item?.insuranceOptions[2]?.name}
                value1={item?.insuranceOptions[0]?.insuranceId}
                value2={item?.insuranceOptions[1]?.insuranceId}
                value3={item?.insuranceOptions[2]?.insuranceId}
                selectedValue={item?.item50}
                onChange={(selectedValue) => handleRadioChange(index, selectedValue)}
                radioName={`tblI${index}`}
                key={`radio-${index}`} // Important for re-rendering
              />
            </div>
          )
        }))} record1={true} />
      </div>


    </div>
  );
};

export default ExistingRecordsRepeated;