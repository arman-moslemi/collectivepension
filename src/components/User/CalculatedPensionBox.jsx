import { MainButton, MainModal, } from "../../components";

const CalculatedPensionBox = ({ title, days, price, func }) => {
  const formatNumber = (num, separator = ',') => {
  return num?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
};
    return (
        <div className="w-full h-[224px] shadow-calculbox flex  rounded-[8px] bg-white mb-4">
            <div className="h-full w-[8px] bg-buttonBlue rounded-r-[8px]"></div>
            <div className="w-full flex flex-col items-center">
                <div className="w-[350px] xs:w-[200px] h-[47px] xs:h-fit xs:p-2 rounded-[5px] bg-mainBlue flex justify-center items-center mt-[-14px]">
                    <p className="text-white text-[14px] font-IRANYekanBold">{title}</p>
                </div>
                <div className="w-full flex justify-between items-center pr-2 pl-[15px] mt-[20px] mb-[10px]">
                    <p className="font-IRANYekanExtra text-[18px] text-mainBlue">تعداد روز سابقه</p>
                    <div className="flex items-center">
                        <p className="font-IRANYekanBold text-[18px] text-darkGray">{days}</p>
                        <p className="font-IRANYekanMedium text-[15px] text-darkGray mr-2">روز</p>
                    </div>

                </div>
                <div className="w-full flex justify-between items-center pr-2 pl-[15px] mb-[35px]">
                    <p className="font-IRANYekanExtra text-[18px] text-mainBlue">مبلغ مستمری </p>
                    <div className="flex items-center">
                        <p className="font-IRANYekanBold text-[18px] text-darkGray">{formatNumber(price,",")}</p>
                        <p className="font-IRANYekanMedium text-[15px] text-darkGray mr-2"> تومان</p>
                    </div>

                </div>
                <div className="w-[100px]">
                    <MainButton onClickFunction={func} label={'اعتراض'} red={true} />
                </div>
            </div>

        </div>
    )
}

export default CalculatedPensionBox;