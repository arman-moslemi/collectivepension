const MainButton = ({label,onClickFunction}) => {
    return (
        <button onClick={onClickFunction} className="w-full h-[48px] flex justify-center items-center bg-buttonBlue hover:bg-buttonHoverBlue rounded-[6px] shadow-buttonShadow">
            <p className="font-IRANYekanBold text-[16px] text-white">{label}</p>
            
        </button>
    );
  };
  
  export default MainButton;