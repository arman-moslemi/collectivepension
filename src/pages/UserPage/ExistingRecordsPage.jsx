import { ExistingRecords, MainTopAll, ExistingRecordsRepeated, ExistingRecordsDetails } from "../../components";
import ExistingRecordsIcon from "../../assets/icon/user/ExistingRecordsIcon";


const ExistingRecordsPage = () => {
    return (
        <div className="pr-[20px] pl-[60px] py-[55px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'کلیه سوابق موجود'} icon={<ExistingRecordsIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full"><ExistingRecords/></div>
            <div className="w-full my-[20px]"><ExistingRecordsRepeated/></div>
            <div className="w-full"><ExistingRecordsDetails/></div>   
        </div>
    );
  };
  
  export default ExistingRecordsPage;