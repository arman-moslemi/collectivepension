import { LoginMain } from "../../components";
//import Banner from "../../assets/img/general/banner-tamin.jpg"
import Banner2 from "../../assets/img/general/banner2.jpg"
const LoginPageMain = () => {
    return (
        <div>
           <div className=" w-[60%] gap-2 grid grid-cols-2 mx-auto xl:w-[80%] lg:w-[55%] lg:grid-cols-1  xl:lg:md:w-[97%] ">
             <div className="col-span-1 py-[30px]">
                <img src={Banner2} className="h-[590px] rounded-[15px] w-full"/>
            </div> 
            <div className="col-span-1">
            <div className="w-full">
                <LoginMain/>
            </div>
            </div>
           </div>
        </div>
    );
  };
  
  export default LoginPageMain;