import { useState } from "react";
import { ExpertDefinition, MainTopAll } from "../../components";
import BoxExpertIcon from "../../assets/icon/expert/BoxExpertIcon";


const ExpertDefinitionPage = () => {

    const [adminRole, setAdminRole] = useState(true);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'کارشناس صندوق'} icon={<BoxExpertIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertDefinition/></div>   
        </div>
    );
  };
  
  export default ExpertDefinitionPage;