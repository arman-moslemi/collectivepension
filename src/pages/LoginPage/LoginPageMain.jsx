import { LoginMain } from "../../components";
import Banner from "../../assets/img/general/banner-tamin.jpg"

const LoginPageMain = () => {
    return (
        <div>
           <div className=" w-[40%] mx-auto xl:w-[55%] xl:lg:w-[75%] xl:lg:md:w-[97%] ">
            {/* <div className="col-span-1 py-[30px]">
                <img src={Banner} className="h-[590px] rounded-[15px] w-full"/>
            </div> */}
            <div className="w-full">
                <LoginMain/>
            </div>
           </div>
        </div>
    );
  };
  
  export default LoginPageMain;