import { MainButton, MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords, WorkExperienceNoWebService, AddWorkPlace } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
import { useState, useEffect } from "react";
import { axiosReq } from "../../commons/axiosReq";
import Cookies from 'universal-cookie';


const ExpertAllRecordsNoWebService = ({ id, admin ,statusId}) => {

    let navigate = useNavigate();
    const [forms, setForms] = useState([3]);
    const [yearsData, setYearsData] = useState([])
    const [data, setData] = useState()
    const [dataRec, setDataRec] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    const handleAddForm = () => {
        setForms(prev => [...prev, prev.length]);
    };

    const CalculateDateRange = async () => {
        try {

            console.log(yearsData);

            const response = await axiosReq("Experts/CalculateDateRangeByUserInsurance?userInsuranceId=" + id, "post", { userInsuranceId: id });
            console.log(response.data)
            setData(response.data)
            //  alert("با موفقیت ا")

        } catch (error) {
            console.error("Error creating insurance:", error);
        }
    };
    const GetData = async () => {
        try {
            setIsLoading(true);

            const response = await axiosReq("Experts/GetProps?userInsuranceId=" + id, "get");
            console.log(response.data)
            console.log(response.data.length)
            if (response.data) {
                var ss = []
                response.data.map((item, index) => {
                    ss.push(index)
                })
                ss.push(response.data.length)
                setForms(ss);
                setDataRec(response.data)
            }
            if (statusId > 4) {
                CalculateDateRange()
            }
            setIsLoading(false)

            //   setProvinces(provincesRes.data.map(p => ({ id: p.provinceId, name: p.provinceName })));

        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        GetData()
    }, [])
    if (isLoading) {
        return <div>Loading...</div>; // Add a proper loading indicator
    }
    return (
        <div className="w-full py-4 px-6 lg:px-0">
            <div className="w-full px-[28px] pt-[24px] pb-7 flex justify-end">
                <div className="w-[151px]">
                    {
                        statusId<5?
                        <MainButton onClickFunction={() => handleAddForm()} label={'افزودن محل کار'} />
                        :
                        null
                    }

                    </div>

            </div>

            {forms.map((_, idx) => {

                return (
                    dataRec?.length > idx ?

                        <div className="w-full mb-[25px]"><AddWorkPlace id={id} setForms={setForms} data={dataRec[idx]} setYearsData={setYearsData} yearsData={yearsData} statusId={statusId}/></div>
                        :
                        idx == dataRec?.length && statusId < 5 ?

                            <div className="w-full mb-[25px]"><AddWorkPlace id={id} setForms={setForms} setYearsData={setYearsData} yearsData={yearsData}statusId={statusId} /></div>

                            : null
                )
            }
            )
            }
            {
                admin || statusId>4?
                    null :
                    <div className="w-full flex justify-end my-10">
                        <div className="w-[151px]">
                            <MainButton onClickFunction={() => CalculateDateRange()} label={'محاسبه سوابق'} />
                        </div>
                    </div>

            }
            {
                data ?
                    <div className="w-full mb-[25px]">
                        <TotalWorkRecords button={statusId > 4?false :true} id={id} data={data}  />
                        </div>
                    :
                    null
            }



        </div>
    )
}

export default ExpertAllRecordsNoWebService;