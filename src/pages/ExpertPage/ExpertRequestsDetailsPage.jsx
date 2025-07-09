import { useState } from "react";
import { ExpertRequestsDetails, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";


const ExpertRequestsDetailsPage = () => {

    const [adminRole, setAdminRole] = useState(false);
    const [withWebService, setWithWebService] = useState(true);
    const [desBox, setDesBox] = useState(true);
    const [anotherPerson, setAnotherPerson] = useState(true);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مشاهده درخواست بازنشستگی'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertRequestsDetails admin={adminRole} webService={withWebService} des={desBox} another={anotherPerson}/></div>   
        </div>
    );
  };
  
  export default ExpertRequestsDetailsPage;