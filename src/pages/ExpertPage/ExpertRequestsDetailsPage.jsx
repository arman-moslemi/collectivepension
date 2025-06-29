import { useState } from "react";
import { ExpertRequestsDetails, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";


const ExpertRequestsDetailsPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مشاهده درخواست بازنشستگی'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertRequestsDetails/></div>   
        </div>
    );
  };
  
  export default ExpertRequestsDetailsPage;