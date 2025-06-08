import { RegisteredProtests, MainTopAll } from "../../components";
import ProtestsIcon from "../../assets/icon/user/ProtestsIcon";


const RegisteredProtestsPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'اعتراضات ثبت شده'} icon={<ProtestsIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><RegisteredProtests/></div>   
        </div>
    );
  };
  
  export default RegisteredProtestsPage;