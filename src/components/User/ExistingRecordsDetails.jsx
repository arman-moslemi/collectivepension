import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import { MainButton, MainExplanation, ExistingRecordsDetailsMonths, ExistingRecordsDetailsMonthsEdit } from "../../components";

const list = [
  {
    item1: "فروردین",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "اردیبهشت",
    item2: [{ item: "01/01 - 01/31" }, { item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "خرداد",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "تیر",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "مرداد",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "شهریور",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "مهر",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "آبان",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "آذر",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "دی",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "بهمن",
    item2: [{ item: "01/01 - 01/31" }, { item: "01/01 - 01/31" }],
    item3: "31",
  },
  {
    item1: "اسفند",
    item2: [{ item: "01/01 - 01/31" }],
    item3: "31",
  },

];

const ExistingRecordsDetails = ({ objMonth, selectedMonthBox }) => {


  const [protestMode, setProtestMode] = useState(false);
  const [data, setData] = useState([]);
  const [protest, setProtest] = useState([]);

  const getInsurancesMonth = async () => {
    try {
      console.log('month')
      console.log(objMonth)
      if (objMonth) {
        const response = await axiosReq("Users/FetchDeclaredDate", "post", {
          InsuranceId: objMonth.InsuranceId,
          InsuranceIdNumber: objMonth.InsuranceIdNumber,
          Branch: objMonth.Branch,
          Workplace: objMonth.Workplace,
          WorkplaceNumber: objMonth.WorkplaceNumber,
          CityId: objMonth.CityId,
          Year: objMonth.Year
        });
        console.log(response)

        if (response?.status === 200 || response?.status === 204) {
          var propss = [];
          response.data.map((item, index) => {
            propss.push({
              item1: item.month,
              item2: item.timeFrames,
              item3: item.duration,
              item4: item.monthId
            })
          })
          setData(propss);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getInsurancesMonth();
  }, [selectedMonthBox]);
  const createProtest = async () => {
    try {
      console.log('month')
      console.log(objMonth)
      if (objMonth) {
        const response = await axiosReq("Users/TimeFrameProtest", "put", {
          InsuranceId: objMonth.InsuranceId,
          InsuranceIdNumber: objMonth.InsuranceIdNumber,
          Branch: objMonth.Branch,
          Workplace: objMonth.Workplace,
          WorkplaceNumber: objMonth.WorkplaceNumber,
          CityId: objMonth.CityId,
          Year: objMonth.Year,
          TimeFrameProtest: protest
        });
        console.log(response)

        if (response?.status === 200 || response?.status === 204) {
          alert("اعتراض با موفقیت ثبت شد")
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[20px] py-[24px]">
      <div className="w-full flex justify-end items-center mb-[21px]">
        {!protestMode?
        <div className="w-[97px] flex">
          <MainButton onClickFunction={() => setProtestMode(!protestMode)} label={'اعتراض'} red={true} />
        </div>:null}
                <div className="w-[150px] flex mr-10">

          {protestMode ? <MainButton onClickFunction={() => createProtest()} label={'ثبت نهایی اعتراض'} green={true} /> : null}
      </div>
      </div>
      {protestMode ?
        <div className="w-full  grid grid-cols-2 gap-4">
          {data?.map((item) => {
            return (
              <div><ExistingRecordsDetailsMonthsEdit list2={item} setData={setData} setProtest={setProtest} /></div>
            )
          })
          }
        </div>
        :

        <div className="w-full grid grid-cols-2 gap-4">
          {
            data?.map((item) => {
              return (

                <div><ExistingRecordsDetailsMonths list1={item} /></div>
              )
            })
          }
        </div>
      }



    </div>
  );
};

export default ExistingRecordsDetails;