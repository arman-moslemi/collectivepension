import { useState } from "react";
import { ExpertRequests, MainTopAll } from "../../components";
import ExistingRecordsIcon from "../../assets/icon/user/ExistingRecordsIcon";


const ExpertRequestsPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'درخواست ها'} icon={<ExistingRecordsIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertRequests IsEnding={false}/></div>   
        </div>
    );
  };
  
  export default ExpertRequestsPage;