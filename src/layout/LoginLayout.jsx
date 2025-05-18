import { Outlet } from "react-router-dom";
import { MainNavbar, LoginNavbar, LoginNavbarResponsive } from "../components";


const LoginLayout = () => {
    return (
        <div className="w-full h-screen  ">
            <MainNavbar/>
            <div className="bg-Pic2-bg bg-no-repeat bg-cover  w-full h-full">
                <div className="c550:hidden"><LoginNavbar/></div>
                <div className="pt-7 c550:pt-10 c550:pb-5"><Outlet /></div>
                <div className="hidden c550:flex"><LoginNavbarResponsive/></div>
            </div>
            
        </div>
    );
  };
  
  export default LoginLayout;