import { MainButton, MainExplanation, ExistingRecordsDetailsMonths, ExistingRecordsYearBox } from "../../components";
import React, { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";


const ExistingRecordsMainDetails = ({selectedYearBox,setSelectedMonthBox, objYear,setObjMonth }) => {
  const [data, setData] = useState([]);

  const getInsurancesYears = async () => {
    try {
      console.log('year')
      console.log(objYear)
      if (objYear) {
        const response = await axiosReq("Users/GetUserInsuranceYears", "post", {
          InsuranceId: objYear.InsuranceId,
          InsuranceIdNumber: objYear.InsuranceIdNumber,
          Branch: objYear.Branch,
          Workplace: objYear.Workplace,
          WorkplaceNumber: objYear.WorkplaceNumber,
          CityId: objYear.CityId
        });
        console.log(response)

        if (response?.status === 200 || response?.status === 204) {
          var propss = [];
          response.data.map((item, index) => {
            propss.push({
              year: item.year,
              days: item.yearDuration,
              insuranceRate: item.premium,
              wage: item.salary,
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
    getInsurancesYears();
  }, [selectedYearBox]);
  return (
    <div className="w-full flex flex-col items-center rounded-[6px] bg-white pt-[30px] pb-[40px] px-[55px]">
      <div className="w-full grid grid-cols-6 gap-4">
        {data?.map((item, index) => (
          <div onClick={() => {setSelectedMonthBox(true);setObjMonth({
             InsuranceId: objYear.InsuranceId,
          InsuranceIdNumber: objYear.InsuranceIdNumber,
          Branch: objYear.Branch,
          Workplace: objYear.Workplace,
          WorkplaceNumber: objYear.WorkplaceNumber,
          CityId: objYear.CityId,
          Year:item.year
          })}} className="cursor-pointer"><ExistingRecordsYearBox data={item} /></div>
        ))}
      </div>
    </div>
  );
};

export default ExistingRecordsMainDetails;