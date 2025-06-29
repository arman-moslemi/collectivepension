import { useState } from "react";
import { ExpertDashboard, MainTopAll } from "../../components";
import WorkTableIcon from "../../assets/icon/user/WorkTableIcon";


const ExpertDashboardPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'میز کار'} icon={<WorkTableIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertDashboard/></div>   
        </div>
    );
  };
  
  export default ExpertDashboardPage;