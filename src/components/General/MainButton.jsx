const MainButton = ({label,onClickFunction,red}) => {
    return (
        <button onClick={onClickFunction} className={`w-full h-[48px] flex justify-center items-center ${red? 'bg-redError hover:bg-redErrorHover shadow-redbuttonShadow' : 'bg-buttonBlue hover:bg-buttonHoverBlue shadow-buttonShadow'}  rounded-[6px] `}>
            <p className="font-IRANYekanBold text-[16px] text-white">{label}</p>   
        </button>
    );
  };
  
  export default MainButton;