import { useState } from "react";
import { Outlet } from "react-router-dom";
import {useLocation, Link} from "react-router-dom";
import { MainNavbar} from "../components";
import SidebarMainIcon from "../assets/icon/general/SidebarMainIcon";
import WorkTableIcon from "../assets/icon/user/WorkTableIcon";
import PensionRequestIcon from "../assets/icon/user/PensionRequestIcon";
import ExistingRecordsIcon from "../assets/icon/user/ExistingRecordsIcon";
import ProtestsIcon from "../assets/icon/user/ProtestsIcon";
import ExitIcon from "../assets/icon/user/ExitIcon";
import BoxExpertIcon from "../assets/icon/expert/BoxExpertIcon";
import {ScrollToTop} from "../components";

const ExpertLayout = () => {

    const [adminRole, setAdminRole] = useState(false);

    const location = useLocation(); // دریافت مسیر فعلی

    const isActive = (path) => location.pathname === path; // بررسی لینک فعال
    
    return (
      <>
      <ScrollToTop/>
        <div className="w-full h-full  ">
            <MainNavbar/>
            <div className="bg-Pic2-bg bg-no-repeat bg-cover flex w-full h-full min-h-[800px]">
                <div className="w-[18%] min-w-[18%] bg-white h-auto relative">
                    <div className="absolute z-10 top-12"><SidebarMainIcon/></div>
                    <div className="absolute z-30 top-32 mr-[14px]">

                        <Link to="/expert/dashboard" className="flex items-center cursor-pointer mb-10">
                        {isActive("/expert/dashboard") && (
                            <>
                            <WorkTableIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">میز کار</p>
                            </>
                        )}
                        {isActive("/expert/dashboard") ? null:
                        <>
                            <WorkTableIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">میز کار</p>
                            </>
                        }
                        </Link>
                        {adminRole?
                        <Link to="/expert/dashboard" className="flex items-center cursor-pointer mb-10">
                        {isActive("/expert/dashboard") && (
                            <>
                            <BoxExpertIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">کارشناس صندوق</p>
                            </>
                        )}
                        {isActive("/expert/dashboard") ? null:
                        <>
                            <BoxExpertIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">کارشناس صندوق</p>
                            </>
                        }
                        </Link>
                        :null}
                        <Link to="/expert/requestsPension" className="flex items-center cursor-pointer mb-10">
                        {isActive("/expert/requestsPension") && (
                            <>
                            <PensionRequestIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست‌های بازنشستگی</p>
                            </>
                        )}
                        {isActive("/expert/requestsPension") ? null:
                        <>
                            <PensionRequestIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست‌های بازنشستگی</p>
                            </>
                        }
                        </Link>
                        <Link to="/expert/requests" className="flex items-center cursor-pointer mb-10">
                        {isActive("/expert/requests") && (
                            <>
                            <ExistingRecordsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست‌ ها</p>
                            </>
                        )}
                        {isActive("/expert/requests") ? null:
                        <>
                            <ExistingRecordsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست‌ ها</p>
                            </>
                        }
                        </Link>
                        <Link to="/expert/protestList" className="flex items-center cursor-pointer mb-10">
                        {isActive("/expert/protestList") && (
                            <>
                            <ProtestsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">اعتراضات ثبت شده</p>
                            </>
                        )}
                        {isActive("/expert/protestList") ? null:
                        <>
                            <ProtestsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">اعتراضات ثبت شده</p>
                            </>
                        }
                        </Link>
                        <Link to="/login" className="flex items-center cursor-pointer mb-10">
                        {isActive("/login") && (
                            <>
                            <ExitIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">خروج</p>
                            </>
                        )}
                        {isActive("/login") ? null:
                        <>
                            <ExitIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">خروج</p>
                            </>
                        }
                        </Link>
                    </div>

                </div>
                <div className="w-[82%] min-w-[82%]"><Outlet/></div>
            </div>
            
        </div>
      </>
    );
  };
  
  export default ExpertLayout;