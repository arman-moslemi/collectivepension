import { useState } from "react";
import { MainAdminDashboard, MainTopAll } from "../../components";
import WorkTableIcon from "../../assets/icon/user/WorkTableIcon";


const MainAdminDashboardPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="b1115:pl-[20px] md:py-[25px] pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'میز کار'} icon={<WorkTableIcon color={'#0a2867'}/>} role={'mainAdmin'} adminRole={adminRole}/></div>
            <div className="w-full"><MainAdminDashboard/></div>   
        </div>
    );
  };
  
  export default MainAdminDashboardPage;