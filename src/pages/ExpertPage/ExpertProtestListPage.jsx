import { useState } from "react";
import { ExpertProtestList, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";


const ExpertProtestListPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'اعتراضات ثبت شده'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertProtestList/></div>   
        </div>
    );
  };
  
  export default ExpertProtestListPage;

