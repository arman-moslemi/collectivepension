const MainExplanation = ({color,text}) => {
    return (
        <div className={`w-full ${color === 'red' ? 'bg-backRed' : color === 'green' ? 'bg-backGreen'  : color==='yellow'? 'bg-backYellow':'bg-backBlue' } rounded-[6px] flex`}>
            <div className={`w-[8px] min-w-[8px] lg:min-w-[4px] ${color === 'red' ? 'bg-mainRed' : color === 'green' ? 'bg-mainGreen' : color==='yellow' ? 'bg-darkYellow' : 'bg-buttonBlue' } h-auto rounded-r-[6px]`}></div>
            <p className={`py-[16px] ${color === 'red' ? 'text-[12px] text-mainRed' : color === 'green' ? 'text-[12px] text-mainGreen' :  color==='yellow' ? 'text-[15px] text-darkYellow' : 'text-[15px] text-buttonBlue' } pr-[8px] pl-[42px] md:pl-[8px] md:text-[10px] md:leading-4 font-IRANYekanBold text-justify  leading-6`}>{text}</p>
            
        </div>
    );
  };
  
  export default MainExplanation;