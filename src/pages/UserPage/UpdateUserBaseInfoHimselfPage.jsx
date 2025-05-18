import { UpdateUserBaseInfoHimself, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";


const UpdateUserBaseInfoHimselfPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'درخواست مستمری جمع'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><UpdateUserBaseInfoHimself/></div>   
        </div>
    );
  };
  
  export default UpdateUserBaseInfoHimselfPage;