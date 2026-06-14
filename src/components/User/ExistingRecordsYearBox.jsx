const ExistingRecordsYearBox = ({ data }) => {
      const formatNumber = (num, separator = ',') => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    };
    return (
        <div className="w-full min-w-[100px] shadow-sandoghShadow rounded-[5px] flex">
            <div className=" w-[6px] rounded-r-[5px] bg-buttonBlue"></div>
            <div className="w-full pr-[6px] pl-[12px] py-[6px] ">
                <div className="w-full flex justify-between items-start mb-1">
                    <p className="text-mainBlue text-[15px] font-IRANYekanBold">{data.year}</p>
                    <div className="flex">
                        <p className="text-darkGray text-[10px] font-IRANYekanMedium ml-1">{data.days}</p>
                        <p className="text-darkGray text-[10px] font-IRANYekanMedium">روز</p>
                    </div>
                </div>
                {/* <p className="font-IRANYekanMedium text-[10px] text-mainBlue mb-1">نرخ حق بیمه </p>
                <p className="font-IRANYekanMedium text-[10px] text-darkGray mb-1">{data.insuranceRate}</p> */}
                {/* <p className="font-IRANYekanMedium text-[10px] text-mainBlue mb-1">دستمزد مشمول کسر حق بیمه</p> */}
                <div className="flex">
                    <p className="font-IRANYekanMedium text-[10px] text-darkGray ml-1">{formatNumber(data.wage,",")}</p>
                    <p className="font-IRANYekanMedium text-[10px] text-darkGray">تومان</p>
                </div>
            </div>


        </div>
    );
};

export default ExistingRecordsYearBox;