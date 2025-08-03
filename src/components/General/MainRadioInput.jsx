import { MainButton,MainInput} from "../../components";

const MainRadioInput = ({title,text1,text2,text3,radioName,smallBlack,
    value1,value2,value3,onChange,selectedValue,ml,mr,
    column,input,onChangeInput,jCenter ,disabled,inputValue}) => {

    return (
        
            column?
              <div className="w-full py-[10px]">
            {title? 
            <p className="font-IRANYekanBold text-[18px] text-mainBlue mb-[12px]">{title}</p> : null}
            <div className="flex flex-col justify-start items-start">
                <div className={`flex justify-start items-center  ${ml==='100'? 'ml-[100px]':'ml-[60px]'} `}>
                <input disabled={disabled} className="w-[18px] h-[18px]" checked={value1==selectedValue}   name={radioName} onChange={() => onChange(value1)} type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'}  mr-2`}>{text1}</label>
                </div>
                <div className="flex justify-start items-center ml-[60px] mt-3">
                <input disabled={disabled} className="w-[18px] h-[18px]" checked={value2==selectedValue}   name={radioName}onChange={() => onChange(value2)} type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'} mr-2`}>{text2}</label>
                </div>
                {text3 ? 
                <div className="flex justify-start items-center  mt-3 flex-wrap">
                <input disabled={disabled} className="w-[18px] h-[18px]" checked={value3==selectedValue}  name={radioName} onChange={() => onChange(value3)} type="radio" />
                <label className="font-IRANYekanBold text-[16px] text-mainBlue mr-2">{text3}</label>
                {input?
                 <div className="mr-2 w-[400px]"><MainInput onChange={(e) => onChangeInput(e.target.value)} disable={disabled} value={inputValue}/></div> : null}
                </div>
                : null }

            </div>
            
        </div>
            :
        <div className="w-full">
            {title? <p className="font-IRANYekanBold text-[18px] text-mainBlue mb-[22px]">{title}</p> : null}
            <div className={`flex ${jCenter ? "justify-center lg:justify-between" : "justify-start lg:justify-between"} items-center`}>
                <div className={`flex justify-start items-center  ${ml==='100'? 'ml-[100px]':'ml-[60px]'} `}>
                <input disabled={disabled} className="w-[18px] h-[18px]" name={radioName} value={value1}
                 checked={value1==selectedValue}  onChange={() => onChange(value1)} type="radio" />

                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'}  mr-2`}>{text1}</label>
                </div>
                <div className="flex justify-start items-center ml-[60px] my-2">
                <input disabled={disabled}className="w-[18px] h-[18px]"onChange={() => onChange(value2)} name={radioName} value={value2}checked={value2==selectedValue}  type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'} mr-2`}>{text2}</label>
                </div>
                {text3 ? 
                <div className="flex justify-start items-center  my-2">
                <input disabled={disabled} className="w-[18px] h-[18px]" name={radioName} onChange={() => onChange(value3)} value={value3} checked={value3==selectedValue}type="radio" />
                <label className="font-IRANYekanBold text-[14px] text-mainBlue mr-2">{text3}</label>
                </div>
                : null }

            </div>
            
        </div>
        
    );
  };
  
  export default MainRadioInput;