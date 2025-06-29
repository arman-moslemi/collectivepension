import { useState } from "react";
import { MainAdminExpertActivity, MainTopAll } from "../../components";
import WorkTableIcon from "../../assets/icon/user/WorkTableIcon";


const MainAdminExpertActivityPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'گزارش عملکرد صندوق‌ها'} icon={<WorkTableIcon color={'#0a2867'}/>} role={'mainAdmin'} adminRole={adminRole}/></div>
            <div className="w-full"><MainAdminExpertActivity/></div>   
        </div>
    );
  };
  
  export default MainAdminExpertActivityPage;