import Logo from "../../assets/icon/general/NavbarLogo";

const MainNavbar = () => {
    return (
        <div className="w-full flex shadow-topShadow bg-Pic1-navbar h-[194px] ss1440:bg-fixed ss1440:bg-contain bg-no-repeat lg:bg-left-bottom-[-200px]  px-[20px] py-[8px]">
            <div className="w-[30%] md:w-[50%] flex justify-center items-end">
                <Logo/>
            </div>
            <div className="w-[70%] md:w-[50%] flex lg:flex-col lg:justify-between lg:items-start">
            <div className="w-[70%] lg:w-full flex justify-center lg:justify-start items-center lg:mt-11">
                <p className="font-IRANYekanExtra text-[30px] md:text-[22px] text-white">سامانه مستمری جمع</p>
            </div>
            <div className="w-[30%] lg:w-full flex justify-end items-end pl-8 lg:pl-0">
                <div className="w-fit px-3 h-[32px] md:h-[26px] flex justify-center items-center bg-black rounded-full bg-opacity-60">
                    <p className="font-IRANYekanBold text-[15px] md:text-[12px] text-white">شنبه 16 فروردین 1404</p>
                </div>
            </div>
            </div>
        </div>
    );
  };
  
  export default MainNavbar;