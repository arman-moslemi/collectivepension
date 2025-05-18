const MainExplanation = ({color,text}) => {
    return (
        <div className={`w-full ${color === 'red' ? 'bg-backRed' : color === 'green' ? 'bg-backGreen' : 'bg-backBlue' } rounded-[6px] flex`}>
            <div className={`w-[8px] ${color === 'red' ? 'bg-mainRed' : color === 'green' ? 'bg-mainGreen' : 'bg-buttonBlue' } h-auto rounded-r-[6px]`}></div>
            <p className={`py-[16px] ${color === 'red' ? 'text-[12px] text-mainRed' : color === 'green' ? 'text-[12px] text-mainGreen' : 'text-[15px] text-buttonBlue' } pr-[8px] pl-[42px] font-IRANYekanBold  leading-6`}>{text}</p>
            
        </div>
    );
  };
  
  export default MainExplanation;