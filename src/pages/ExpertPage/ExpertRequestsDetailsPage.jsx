import { useState } from "react";
import { ExpertRequestsDetails, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";
import {useLocation} from "react-router-dom";
import Cookies from "universal-cookie";


const ExpertRequestsDetailsPage = () => {

    const [adminRole, setAdminRole] = useState(false);
    const [withWebService, setWithWebService] = useState(false);
    const [desBox, setDesBox] = useState(true);
    const [anotherPerson, setAnotherPerson] = useState(true);
  const { state } = useLocation();
    console.log(99)
    console.log(state)
                                const cookies = new Cookies();
    
    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مشاهده درخواست بازنشستگی'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full">
              <ExpertRequestsDetails admin={cookies.get("Role") == "Admin"?true:false } webService={withWebService} des={desBox} another={anotherPerson} id={state?.id} statusId={state?.statusId}/>
              </div>   
        </div>
    );
  };
  
  export default ExpertRequestsDetailsPage;