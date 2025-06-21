import { useState } from "react";
import { MainAdminAdminList, MainTopAll } from "../../components";
import WorkTableIcon from "../../assets/icon/user/WorkTableIcon";


const MainAdminAdminListPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مدیران صندوق‌ها'} icon={<WorkTableIcon color={'#0a2867'}/>} role={'mainAdmin'} adminRole={adminRole}/></div>
            <div className="w-full"><MainAdminAdminList/></div>   
        </div>
    );
  };
  
  export default MainAdminAdminListPage;