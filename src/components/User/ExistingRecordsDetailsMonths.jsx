import { MainButton, } from "../../components";



const ExistingRecordsDetailsMonths = ({title1,title2,title3}) => {

    return (
        <div className="w-full border-[1px] border-borderGray rounded-[5px]">
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium text-[15px]">{title1}</p>
                <p className="font-IRANYekanMedium text-[15px]">01/01 - 01/31</p>
                <p className="font-IRANYekanMedium text-[15px]">31 روز</p>
            </div>
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center border-b-[1px] border-dashed border-borderGray">
                <p className="font-IRANYekanMedium text-[15px]">{title2}</p>
                <p className="font-IRANYekanMedium text-[15px]">01/01 - 01/31</p>
                <p className="font-IRANYekanMedium text-[15px]">31 روز</p>
            </div>  
            <div className="w-full py-[15px] px-[20px] flex justify-between items-center ">
                <p className="font-IRANYekanMedium text-[15px]">{title3}</p>
                <p className="font-IRANYekanMedium text-[15px]">01/01 - 01/31</p>
                <p className="font-IRANYekanMedium text-[15px]">31 روز</p>
            </div>        

        </div>
    );
  };
  
  export default ExistingRecordsDetailsMonths;