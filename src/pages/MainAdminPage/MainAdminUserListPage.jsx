import { useState } from "react";
import { MainAdminUserList, MainTopAll } from "../../components";
import Admins from "../../assets/icon/main/Admins";


const MainAdminUserListPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="b1115:pl-[20px] md:py-[25px] pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'کاربران سامانه'} icon={<Admins color={'#0a2867'}/>} role={'mainAdmin'} adminRole={adminRole}/></div>
            <div className="w-full"><MainAdminUserList/></div>   
        </div>
    );
  };
  
  export default MainAdminUserListPage;