import { VerdictsIssued, MainTopAll } from "../../components";
import VerdictsIssuedIcon from "../../assets/icon/user/VerdictsIssuedIcon";


const VerdictsIssuedPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'احکام بازنشستگی صادر شده'} icon={<VerdictsIssuedIcon/>} role={'user'}/></div>
            <div className="w-full"><VerdictsIssued/></div>   
        </div>
    );
  };
  
  export default VerdictsIssuedPage;