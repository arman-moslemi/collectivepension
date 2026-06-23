import Logo from "../../assets/img/general/logowhite.png"
import moment from "jalali-moment";

const MainNavbar = () => {
    return (
        <div className="w-full flex shadow-topShadow bg-cover bg-Pic1-navbar h-[150px] min-h-[90px] md:h-fit xl:h-fit   bg-no-repeat   px-[20px] md:px-0 py-[0px]">
        
            <div className="w-[90%]  mx-auto grid grid-cols-3 md:w-full md:h-fit">
                <div className="col-span-1 flex items-end md:col-span-2">
                <img src={Logo} alt="" className="w-[340px] md:w-[200px]"/>
                </div>
                <div className="col-span-1 flex justify-center items-end">
                <p className="font-Nastaligh text-[40px]  text-white mb-5 md:mb-0 md:text-[25px] q339:text-[18px] z940:ml-2">سامانه مستمری جمع</p>
                </div>
                <div className="col-span-1 flex justify-end items-end md:col-span-3">
                <div className="w-fit px-3 mb-1 h-[32px] md:h-[26px] flex justify-center items-center md:ml-2 bg-black rounded-full bg-opacity-60">
                    <p className="font-IRANYekanBold  text-[15px]  md:text-[12px] text-white">{ moment().locale('fa').format('YYYY/MM/DD')  }   </p>
                </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default MainNavbar;