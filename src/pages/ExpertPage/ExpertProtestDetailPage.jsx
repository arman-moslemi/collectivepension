
import { AmountProtestDetail,GeneralProtestDetail,RecordProtestDetail,MainTopAll } from "../../components";
import { useState,useEffect } from "react";
import PensionRequestIcon from "../../assets/icon/user/PensionRequestIcon";
import { useLocation, useParams,useNavigate } from "react-router-dom";
const ExpertProtestDetailPage = () =>{

  const [adminRole, setAdminRole] = useState(false);
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const type = state?.type;

  useEffect(() => {
    if (!state) {
      // اگر کاربر بدون state اومد، برگردش به لیست اعتراضات
      navigate("/expert/protestList");
    }
  }, [state]);

  const renderDetailComponent = () => {
    switch (type) {
      case "RECORD":
        return <RecordProtestDetail data={state.data} />;
      case "AMOUNT":
        return <AmountProtestDetail data={state.data} />;
      case "GENERAL":
        return <GeneralProtestDetail data={state.data} />;
      default:
        return <div>نوع اعتراض مشخص نیست</div>;
    }
  };

    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'مشاهده جزئیات اعتراض'} icon={<PensionRequestIcon color={'#0a2867'}/>} role={'expert'} adminRole={adminRole}/></div>
            <div className="w-full">
            <div className="w-full rounded-[6px] bg-white px-[17px] pt-[17px] pb-[38px]">
            {renderDetailComponent()}    
            </div>            </div>   
        </div>
    );
}

export default ExpertProtestDetailPage;


