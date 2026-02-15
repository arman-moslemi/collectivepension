
const ExistingRecordsMainBox = ({title,des,small}) => {
    return (
        <div className="w-full h-[50px] xs:h-[70px] shadow-sandoghShadow rounded-[5px] flex">
            <div className="h-[50px] xs:h-[70px] w-[6px] rounded-r-[5px] bg-buttonBlue"></div>
            <div className={` ${small? 'flex w-full pl-2 flex-col items-center pt-[4px]' : 'pt-[5px]'}  mr-[6px]`}>
                <p className="font-IRANYekanBold text-[15px] text-mainBlue">{title}</p>
                <p className="font-IRANYekanMedium text-[10px] text-darkGray">{des}</p>
            </div>

        </div>
    );
  };
  
  export default ExistingRecordsMainBox;