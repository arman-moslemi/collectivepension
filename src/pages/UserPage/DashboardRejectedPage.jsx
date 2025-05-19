import { UserStartRequest, MainTopAll } from "../../components";
import WorkTableIcon from "../../assets/icon/user/WorkTableIcon";


const DashboardRejectedPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'میز کار'} icon={<WorkTableIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><UserStartRequest/></div>   
        </div>
    );
  };
  
  export default DashboardRejectedPage;