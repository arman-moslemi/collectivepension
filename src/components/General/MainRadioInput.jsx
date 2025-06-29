<<<<<<< HEAD
const MainRadioInput = ({title,text1,text2,text3,radioName,smallBlack,
    value1,value2,value3,onChange,selectedValue}) => {
=======
const MainRadioInput = ({title,text1,text2,text3,radioName,smallBlack,ml,mr}) => {
>>>>>>> 46505fc1cc0c94bb878723bf6d01254cd673720c
    return (
        <div className="w-full">
            {title? <p className="font-IRANYekanBold text-[18px] text-mainBlue mb-[22px]">{title}</p> : null}
            <div className="flex justify-start items-center">
<<<<<<< HEAD
                <div className="flex justify-start items-center ml-[60px]">
                <input className="w-[18px] h-[18px]" name={radioName} value={value1}
                 checked={value1==selectedValue}  onChange={() => onChange(value1)} type="radio" />
=======
                <div className={`flex justify-start items-center  ${ml==='100'? 'ml-[100px]':'ml-[60px]'} `}>
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
>>>>>>> 46505fc1cc0c94bb878723bf6d01254cd673720c
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'}  mr-2`}>{text1}</label>
                </div>
                <div className="flex justify-start items-center ml-[60px] my-2">
                <input className="w-[18px] h-[18px]"onChange={() => onChange(value2)} name={radioName} value={value2}checked={value2==selectedValue}  type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'} mr-2`}>{text2}</label>
                </div>
                {text3 ? 
                <div className="flex justify-start items-center  my-2">
                <input className="w-[18px] h-[18px]" name={radioName} onChange={() => onChange(value3)} value={value3} checked={value3==selectedValue}type="radio" />
                <label className="font-IRANYekanBold text-[14px] text-mainBlue mr-2">{text3}</label>
                </div>
                : null }

            </div>
            
        </div>
    );
  };
  
  export default MainRadioInput;