import { MainButton, MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords, WorkExperienceNoWebService, AddWorkPlace } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";


const ExpertAllRecordsNoWebService = ({ id }) => {

    let navigate = useNavigate();
    const [forms, setForms] = useState([0]);
  const [yearsData, setYearsData] = useState([])
  const [data, setData] = useState()

    const handleAddForm = () => {
        setForms(prev => [...prev, prev.length]);
    };

    const CalculateDateRange = async () => {
        try {
    
    console.log(yearsData);
    
          const response = await axiosReq("Experts/CalculateDateRangeByUserInsurance?userInsuranceId="+id, "post", { userInsuranceId: id });
          console.log(response.data)
    setData(response.data)
       //  alert("با موفقیت ا")
    
        } catch (error) {
          console.error("Error creating insurance:", error);
        }
      };
    return (
        <div className="w-full py-4 px-6 lg:px-0">
            <div className="w-full px-[28px] pt-[24px] pb-7 flex justify-end">
                <div className="w-[151px]"><MainButton onClickFunction={() => handleAddForm()} label={'افزودن محل کار'} /></div>

            </div>

            {
                forms.map((_, idx) => {
                    return (

                        <div className="w-full mb-[25px]"><AddWorkPlace id={id} setForms={setForms}setYearsData={setYearsData} yearsData={yearsData} /></div>
                    )
                }
                )
            }
            <div className="w-full flex justify-end my-10">
                <div className="w-[151px]">
                    <MainButton onClickFunction={()=>CalculateDateRange()} label={'محاسبه سوابق'} />
                </div>
            </div>
            {
                data?
                <div className="w-full mb-[25px]"><TotalWorkRecords button={true} data={data} /></div>
                :
                null
            }



        </div>
    )
}

export default ExpertAllRecordsNoWebService;