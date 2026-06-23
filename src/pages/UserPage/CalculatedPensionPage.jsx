import { CalculatedPension, MainTopAll } from "../../components";
import CalledPension from "../../assets/icon/user/CalledPension";


const CalculatedPensionPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مستمری محاسبه شده'} icon={<CalledPension color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><CalculatedPension/></div>   
        </div>
    );
  };
  
  export default CalculatedPensionPage;