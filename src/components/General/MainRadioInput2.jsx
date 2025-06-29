const MainRadioInput2 = ({title,text1,text2,text3,radioName,smallBlack,ml,mr}) => {
    return (
        <div className="w-full">
            {title? <p className="font-IRANYekanBold text-[18px] text-mainBlue mb-[22px]">{title}</p> : null}
            <div className="flex justify-start items-center">
                <div className={`flex justify-start items-center  ${ml==='100'? 'ml-[100px]':'ml-[60px]'} `}>
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'}  mr-2`}>{text1}</label>
                </div>
                <div className="flex justify-start items-center ml-[60px] my-2">
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'} mr-2`}>{text2}</label>
                </div>
                {text3 ? 
                <div className="flex justify-start items-center  my-2">
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
                <label className="font-IRANYekanBold text-[14px] text-mainBlue mr-2">{text3}</label>
                </div>
                : null }

            </div>
            
        </div>
    );
  };
  
  export default MainRadioInput2;