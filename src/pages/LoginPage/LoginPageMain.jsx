import { LoginMain } from "../../components";
import Banner from "../../assets/img/general/banner-tamin.jpg"

const LoginPageMain = () => {
    return (
        <div>
           <div className="grid grid-cols-2 gap-4 w-[70%] mx-auto lg:grid-cols-1">
            <div className="col-span-1 py-[30px]">
                <img src={Banner} className="h-[590px] rounded-[15px] w-full"/>
            </div>
            <div className="col-span-1">
                <LoginMain/>
            </div>
           </div>
        </div>
    );
  };
  
  export default LoginPageMain;