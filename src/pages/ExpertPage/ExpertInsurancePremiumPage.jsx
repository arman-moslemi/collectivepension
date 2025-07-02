import { useState } from "react";
import { MainTopAll,ExpertInsurancePremium } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";

const ExpertInsurancePremiumPage = () =>{

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'نرخ حق بیمه'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full">
                <ExpertInsurancePremium/>
                </div>   
        </div>
    );
}

export default ExpertInsurancePremiumPage;