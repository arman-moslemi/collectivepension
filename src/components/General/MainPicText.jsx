
const MainPicText = ({pic,text,pageButton}) => {

    return (
        <div className="w-full flex flex-col items-center rounded-[6px] bg-white px-[32px] py-[40px]">
            <img src={pic} alt="abc" />
            <p className="font-IRANYekanMedium text-[15px] text-center leading-7 text-black w-[60%] md:w-full mt-[40px] mb-[32px]">{text}</p>
            <div>
            {pageButton}
            </div>

        </div>
    );
  };
  
  export default MainPicText;