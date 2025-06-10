import { MainButton, MainExplanation, ExistingRecordsDetailsMonths, ExistingRecordsYearBox } from "../../components";

const list = [
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  {
    year: "1375",
    days: "356",
    insuranceRate: "7%",
    wage: "125000",
  },
  
  ];

const ExistingRecordsMainDetails = ({setSelectedMonthBox}) => {

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white pt-[30px] pb-[40px] px-[55px]">
            <div className="w-full grid grid-cols-6 gap-4">
              {list.map((item, index) => (
              <div onClick={() => setSelectedMonthBox(true)} className="cursor-pointer"><ExistingRecordsYearBox data={item}/></div>
              ))}
            </div>
        </div>
    );
  };
  
  export default ExistingRecordsMainDetails;