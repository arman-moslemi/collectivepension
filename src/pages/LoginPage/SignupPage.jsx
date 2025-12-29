import {SignupMain} from "../../components"
import Banner from "../../assets/img/general/banner-tamin2.jpg"

const SignupPage = () => {
    return(
      
        <div>
        <div className="grid grid-cols-3 gap-4 w-[70%] mx-auto lg:grid-cols-1 items-center lg:w-[90%]">
         <div className="col-span-1 py-[30px]">
             <img src={Banner} className="h-[530px] rounded-[15px] w-full "/>
         </div>
         <div className="col-span-2">
         <SignupMain/>
         </div>
        </div>
     </div>
    );
    
  };
  
  export default SignupPage;