import { useState } from "react";
import { MainTopAll,MainAdminProtestList } from "../../components";
import ProtestsIcon from "../../assets/icon/user/ProtestsIcon";
const MainAdminProtestListPage = () =>{
  const [adminRole, setAdminRole] = useState(false);
    
      

        return (
            <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
                <div className="mb-[10px] w-full "><MainTopAll title={'اعتراضات ثبت شده'} icon={<ProtestsIcon color={'#0a2867'}/>} role={'mainAdmin'} adminRole={adminRole}/></div>
                <div className="w-full"><MainAdminProtestList/></div>   
            </div>
        );
    
}

export default MainAdminProtestListPage;