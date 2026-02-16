import {SignupMain} from "../../components"
import Banner2 from "../../assets/img/general/banner2.jpg"

const SignupPage = () => {
    return(
      
        <div>
           <div className=" w-[80%] gap-2 grid grid-cols-3 mx-auto xl:w-[80%] lg:w-[55%] lg:grid-cols-1  xl:lg:md:w-[97%] ">
         <div className="col-span-1 py-[30px]">
             <img src={Banner2} className="h-[530px] rounded-[15px] w-full "/>
         </div>
         <div className="col-span-2">
         <SignupMain/>
         </div>
        </div>
     </div>
    );
    
  };
  
  export default SignupPage;