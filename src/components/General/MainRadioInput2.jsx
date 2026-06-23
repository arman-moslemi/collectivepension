import { MainButton,MainInput} from "../../components";

const MainRadioInput2 = ({title,text1,text2,text3,radioName,smallBlack,ml,input}) => {
    return (
        <div className="w-full py-[10px]">
            {title? <p className="font-IRANYekanBold text-[18px] text-mainBlue mb-[12px]">{title}</p> : null}
            <div className="flex flex-col justify-start items-start">
                <div className={`flex justify-start items-center  ${ml==='100'? 'ml-[100px]':'ml-[60px]'} `}>
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'}  mr-2`}>{text1}</label>
                </div>
                <div className="flex justify-start items-center ml-[60px] mt-3">
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
                <label className={`${smallBlack? 'font-IRANYekanMedium text-[15px]' : 'font-IRANYekanBold text-[16px] text-mainBlue'} mr-2`}>{text2}</label>
                </div>
                {text3 ? 
                <div className="flex justify-start flex-wrap items-center  mt-3 lg:w-full">
                <input className="w-[18px] h-[18px]" name={radioName} type="radio" />
                <label className="font-IRANYekanBold text-[16px] text-mainBlue mr-2">{text3}</label>
                {input? <div className="mr-2 w-[400px] lg:w-full"><MainInput/></div> : null}
                </div>
                : null }

            </div>
            
        </div>
    );
  };
  
  export default MainRadioInput2;