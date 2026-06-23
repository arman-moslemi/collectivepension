import { CreateUserInsuranceResponse, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";


const CreateUserInsuranceResponsePage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'درخواست مستمری جمع'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><CreateUserInsuranceResponse/></div>   
        </div>
    );
  };
  
  export default CreateUserInsuranceResponsePage;