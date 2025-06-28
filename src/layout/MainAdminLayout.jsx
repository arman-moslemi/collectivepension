import { Outlet } from "react-router-dom";
import {useLocation, Link} from "react-router-dom";
import { MainNavbar} from "../components";
import SidebarMainIcon from "../assets/icon/general/SidebarMainIcon";
import WorkTableIcon from "../assets/icon/user/WorkTableIcon";
import ProtestsIcon from "../assets/icon/user/ProtestsIcon";
import ExitIcon from "../assets/icon/user/ExitIcon";
import Admins from "../assets/icon/main/Admins";

const MainAdminLayout = () => {

    const location = useLocation(); // دریافت مسیر فعلی

    const isActive = (path) => location.pathname === path; // بررسی لینک فعال
    
    return (
        <div className="w-full h-full  ">
            <MainNavbar/>
            <div className="bg-Pic2-bg bg-no-repeat bg-cover flex w-full h-full min-h-[800px]">
                <div className="w-[18%] min-w-[18%] bg-white h-auto relative">
                    <div className="absolute z-10 top-12"><SidebarMainIcon/></div>
                    <div className="absolute z-30 top-32 mr-[14px]">

                        <Link to="/mainAdmin/dashboard" className="flex items-center cursor-pointer mb-10">
                        {isActive("/mainAdmin/dashboard") && (
                            <>
                            <WorkTableIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">میز کار</p>
                            </>
                        )}
                        {isActive("/mainAdmin/dashboard") ? null:
                        <>
                            <WorkTableIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">میز کار</p>
                            </>
                        }
                        </Link>
                        {/* /user/updateUserBaseInfoHimself  or  /user/updateUserBaseInfoAnother */}
                        <Link to="/mainAdmin/adminList" className="flex items-center cursor-pointer mb-10">
                        {isActive("/mainAdmin/adminList") && (
                            <>
                            <Admins color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">مدیران صندوق‌ها</p>
                            </>
                        )}
                        {isActive("/mainAdmin/adminList") ? null:
                        <>
                            <Admins color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">مدیران صندوق‌ها</p>
                            </>
                        }
                        </Link>
                        <Link to="/mainAdmin/expertActivity" className="flex items-center cursor-pointer mb-10">
                        {isActive("/mainAdmin/expertActivity") && (
                            <>
                            <WorkTableIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">گزارش عملکرد صندوق‌ها</p>
                            </>
                        )}
                        {isActive("/mainAdmin/expertActivity") ? null:
                        <>
                            <WorkTableIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">گزارش عملکرد صندوق‌ها</p>
                            </>
                        }
                        </Link>
                        <Link to="/mainAdmin/userList" className="flex items-center cursor-pointer mb-10">
                        {isActive("/mainAdmin/userList") && (
                            <>
                            <Admins color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">کاربران سامانه</p>
                            </>
                        )}
                        {isActive("/mainAdmin/userList") ? null:
                        <>
                            <Admins color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">کاربران سامانه</p>
                            </>
                        }
                        </Link>
                        <Link to="/url" className="flex items-center cursor-pointer mb-10">
                        {isActive("/url") && (
                            <>
                            <ProtestsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست‌ها</p>
                            </>
                        )}
                        {isActive("/url") ? null:
                        <>
                            <ProtestsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست‌ها</p>
                            </>
                        }
                        </Link>
                        <Link to="/url" className="flex items-center cursor-pointer mb-10">
                        {isActive("/url") && (
                            <>
                            <ProtestsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">اعتراضات ثبت شده</p>
                            </>
                        )}
                        {isActive("/url") ? null:
                        <>
                            <ProtestsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">اعتراضات ثبت شده</p>
                            </>
                        }
                        </Link>
                        <Link to="/url" className="flex items-center cursor-pointer mb-10">
                        {isActive("/url") && (
                            <>
                            <ExitIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">خروج</p>
                            </>
                        )}
                        {isActive("/url") ? null:
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
    );
  };
  
  export default MainAdminLayout;