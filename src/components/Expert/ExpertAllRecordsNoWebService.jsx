import { MainButton,MainInput, MainTable, MainExplanation,WorkExperienceWithWebService,TotalWorkRecords,  WorkExperienceNoWebService, AddWorkPlace } from "..";
import { useNavigate, Link } from "react-router-dom";
import SearchIcon from "../../assets/icon/general/SearchIcon";
import DateIcon from "../../assets/icon/general/DateIcon";
import TableLeftIcon from "../../assets/icon/general/TableLeftIcon";
import TableRightIcon from "../../assets/icon/general/TableRightIcon";
import DetailTableIcon from "../../assets/icon/general/DetailTableIcon";


const ExpertAllRecordsNoWebService = () => {

    let navigate = useNavigate();

    return (
        <div className="w-full py-4 px-6 lg:px-0">
                <div className="w-full px-[28px] pt-[24px] pb-7 flex justify-end">
                <div className="w-[151px]"><MainButton label={'افزودن محل کار'}/></div>

            </div>
            <div className="w-full mb-[25px]"><AddWorkPlace/></div>

            <div className="w-full mb-[25px]"><TotalWorkRecords button={true}/></div>
            
           

        </div>
    )
}

export default ExpertAllRecordsNoWebService;