const MainButton = ({label,onClickFunction,red,gray}) => {
    return (
        <button onClick={onClickFunction} className={`w-full h-[48px] flex justify-center items-center ${red? 'bg-redError hover:bg-redErrorHover shadow-redbuttonShadow' : gray? 'bg-darkGray' : 'bg-buttonBlue hover:bg-buttonHoverBlue shadow-buttonShadow'}  rounded-[6px] `}>
            <p className="font-IRANYekanBold text-[14px] text-white">{label}</p>   
        </button>
    );
  };
  
  export default MainButton;