import { DashboardProcess, MainTopAll } from "../../components";
import WorkTableIcon from "../../assets/icon/user/WorkTableIcon";


const DashboardProcessPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'میز کار'} icon={<WorkTableIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><DashboardProcess/></div>   
        </div>
    );
  };
  
  export default DashboardProcessPage;