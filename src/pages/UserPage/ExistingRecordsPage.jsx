import { useState } from 'react';
import { ExistingRecords, MainTopAll, ExistingRecordsRepeated, ExistingRecordsDetails, ExistingRecordsMainDetails } from "../../components";
import ExistingRecordsIcon from "../../assets/icon/user/ExistingRecordsIcon";


const ExistingRecordsPage = () => {

    const [selectedYearBox, setSelectedYearBox] = useState(false);
    const [selectedMonthBox, setSelectedMonthBox] = useState(false);
    const [objYear, setObjYear] = useState({InsuranceId:0,
                            InsuranceIdNumber: "",
                            Branch: "",
                            Workplace: "",
                            WorkplaceNumber: "",
                            CityId: ""});
    const [objMonth, setObjMonth] = useState({InsuranceId:0,
                            InsuranceIdNumber: "",
                            Branch: "",
                            Workplace: "",
                            WorkplaceNumber: "",
                            CityId: "",
                        Year:""
                        });


    return (
        <div className="pr-[20px] pl-[60px] py-[55px] b1115:pl-[20px] md:py-[25px]">
            <div className="mb-[10px] w-full "><MainTopAll title={'کلیه سوابق موجود'} icon={<ExistingRecordsIcon color={'#0a2867'}/>} role={'user'}/></div>
            <div className="w-full mb-[20px]"><ExistingRecords  setObjYear={setObjYear} setSelectedYearBox={setSelectedYearBox} selectedYearBox={selectedYearBox} objYear={objYear}/></div>
            {selectedYearBox?<div className="w-full mb-[20px]"><ExistingRecordsMainDetails selectedYearBox={selectedYearBox} setSelectedMonthBox={setSelectedMonthBox}
             objYear={objYear}  setObjMonth={ setObjMonth} /></div>:null} 
            {selectedMonthBox?<div className="w-full mb-[20px]"><ExistingRecordsDetails objMonth={objMonth} selectedMonthBox={selectedMonthBox} setObjMonth={ setObjMonth}  /></div>:null}  
            <div className="w-full "><ExistingRecordsRepeated/></div>
              
        </div>
    );
  };
  
  export default ExistingRecordsPage;