import {SignupMain} from "../../components"
import Banner from "../../assets/img/general/banner-tamin2.jpg"

const SignupPage = () => {
    return(
      
        <div>
           <div className=" w-[60%] mx-auto xl:w-[70%] xl:lg:w-[90%] xl:lg:md:w-[97%] ">
         {/* <div className="col-span-1 py-[30px]">
             <img src={Banner} className="h-[530px] rounded-[15px] w-full "/>
         </div> */}
         <div className="col-span-2">
         <SignupMain/>
         </div>
        </div>
     </div>
    );
    
  };
  
  export default SignupPage;