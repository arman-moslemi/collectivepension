import { MainButton,MainInput, MainTable, MainExplanation, WorkExperienceWithWebService, TotalWorkRecords } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";
  


const ExpertAllRecordsWithWebService = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full py-4 px-6">
            <div className="w-full mb-[25px]"><WorkExperienceWithWebService/></div>
            <div className="w-full mb-[25px]"><WorkExperienceWithWebService/></div>
            <div className="w-full mb-[25px]"><TotalWorkRecords/></div>
           

        </div>
    )
}

export default ExpertAllRecordsWithWebService;