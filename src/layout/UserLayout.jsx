import { Outlet } from "react-router-dom";
import {useLocation, Link} from "react-router-dom";
import { MainNavbar, LoginNavbar, LoginNavbarResponsive } from "../components";
import SidebarMainIcon from "../assets/icon/general/SidebarMainIcon";
import WorkTableIcon from "../assets/icon/user/WorkTableIcon";
import PensionRequestIcon from "../assets/icon/user/PensionRequestIcon";
import ExistingRecordsIcon from "../assets/icon/user/ExistingRecordsIcon";
import CalledPension from "../assets/icon/user/CalledPension";
import ProtestsIcon from "../assets/icon/user/ProtestsIcon";
import ExitIcon from "../assets/icon/user/ExitIcon";


const UserLayout = () => {

    const location = useLocation(); // دریافت مسیر فعلی

    const isActive = (path) => location.pathname === path; // بررسی لینک فعال
    
    return (
        <div className="w-full h-full  ">
            <MainNavbar/>
            <div className="bg-Pic2-bg bg-no-repeat bg-cover flex w-full h-full min-h-[800px]">
                <div className="w-[297px] bg-white h-auto relative">
                    <div className="absolute z-10 top-12"><SidebarMainIcon/></div>
                    <div className="absolute z-30 top-32 mr-[14px]">

                        <Link to="/user/startRequest" className="flex items-center cursor-pointer mb-10">
                        {isActive("/user/startRequest") && (
                            <>
                            <WorkTableIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">میز کار</p>
                            </>
                        )}
                        {isActive("/user/startRequest") ? null:
                        <>
                            <WorkTableIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">میز کار</p>
                            </>
                        }
                        </Link>
                        {/* /user/updateUserBaseInfoHimself  or  /user/updateUserBaseInfoAnother */}
                        <Link to="/user/updateUserBaseInfoHimself" className="flex items-center cursor-pointer mb-10">
                        {isActive("/user/updateUserBaseInfoHimself") && (
                            <>
                            <PensionRequestIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست مستمری جمع</p>
                            </>
                        )}
                        {isActive("/user/updateUserBaseInfoHimself") ? null:
                        <>
                            <PensionRequestIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست مستمری جمع</p>
                            </>
                        }
                        </Link>
                        <Link to="/user/existingRecords" className="flex items-center cursor-pointer mb-10">
                        {isActive("/user/existingRecords") && (
                            <>
                            <ExistingRecordsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">کلیه سوابق موجود</p>
                            </>
                        )}
                        {isActive("/user/existingRecords") ? null:
                        <>
                            <ExistingRecordsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">کلیه سوابق موجود</p>
                            </>
                        }
                        </Link>
                        <Link to="/user/updateUserBaseInfoHimself" className="flex items-center cursor-pointer mb-10">
                        {isActive("/user/updateUserBaseInfoHimself") && (
                            <>
                            <CalledPension color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">مستمری محاسبه شده</p>
                            </>
                        )}
                        {isActive("/user/updateUserBaseInfoHimself") ? null:
                        <>
                            <CalledPension color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">مستمری محاسبه شده</p>
                            </>
                        }
                        </Link>
                        <Link to="/user/updateUserBaseInfoHimself" className="flex items-center cursor-pointer mb-10">
                        {isActive("/user/updateUserBaseInfoHimself") && (
                            <>
                            <ProtestsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">اعتراضات</p>
                            </>
                        )}
                        {isActive("/user/updateUserBaseInfoHimself") ? null:
                        <>
                            <ProtestsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">اعتراضات</p>
                            </>
                        }
                        </Link>
                        <Link to="/user/updateUserBaseInfoHimself" className="flex items-center cursor-pointer mb-10">
                        {isActive("/user/updateUserBaseInfoHimself") && (
                            <>
                            <ExitIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">خروج</p>
                            </>
                        )}
                        {isActive("/user/updateUserBaseInfoHimself") ? null:
                        <>
                            <ExitIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">خروج</p>
                            </>
                        }
                        </Link>
                    </div>

                </div>
                <div className="w-full"><Outlet/></div>
            </div>
            
        </div>
    );
  };
  
  export default UserLayout;