import { useState } from "react";
import { ExpertProtestList, MainTopAll } from "../../components";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";


const ExpertProtestListPage = () => {

    const [adminRole, setAdminRole] = useState(false);

    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'اعتراضات ثبت شده'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full"><ExpertProtestList/></div>   
        </div>
    );
  };
  
  export default ExpertProtestListPage;

//   import EligibilityProtestDetail from "../components/ProtestDetails/EligibilityProtestDetail";
// import PensionAmountProtestDetail from "../components/ProtestDetails/PensionAmountProtestDetail";
// import GeneralProtestDetail from "../components/ProtestDetails/GeneralProtestDetail";

// const ProtestDetailPage = ({ protest }) => {
//   if (!protest) return <div>در حال بارگذاری...</div>;

//   switch (protest.type) {
//     case "ELIGIBILITY":
//       return <EligibilityProtestDetail data={protest} />;
//     case "AMOUNT":
//       return <PensionAmountProtestDetail data={protest} />;
//     case "GENERAL":
//       return <GeneralProtestDetail data={protest} />;
//     default:
//       return <div>نوع اعتراض نامعتبر است</div>;
//   }
// };