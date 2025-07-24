import { useState } from "react";
import { MainAdminRequest, MainTopAll } from "../../components";
import ExistingRecordsIcon from "../../assets/icon/user/ExistingRecordsIcon";


const MainAdminRequestPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className=" b1115:pl-[20px] md:py-[25px] pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'درخواست ها'} icon={<ExistingRecordsIcon color={'#0a2867'}/>} role={'mainAdmin'} adminRole={adminRole}/></div>
            <div className="w-full"><MainAdminRequest/></div>   
        </div>
    );
  };
  
  export default MainAdminRequestPage;