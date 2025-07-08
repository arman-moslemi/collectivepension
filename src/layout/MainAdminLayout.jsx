import { Outlet } from "react-router-dom";
import {useLocation, Link} from "react-router-dom";
import { MainNavbar} from "../components";
import SidebarMainIcon from "../assets/icon/general/SidebarMainIcon";
import WorkTableIcon from "../assets/icon/user/WorkTableIcon";
import ProtestsIcon from "../assets/icon/user/ProtestsIcon";
import ExitIcon from "../assets/icon/user/ExitIcon";
import Admins from "../assets/icon/main/Admins";
import {ScrollToTop} from "../components";
import { useState } from "react";
const MainAdminLayout = () => {

    const location = useLocation(); // دریافت مسیر فعلی

    const isActive = (path) => location.pathname === path; // بررسی لینک فعال
     const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
       <>
       <ScrollToTop/>
       <div className="w-full h-full  ">
            <MainNavbar/>
            <div className="hidden b1115:flex  w-full h-[50px] bg-mainBlue  items-center px-4">
          <button onClick={() => setSidebarOpen(true)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
            <div className="bg-Pic2-bg bg-no-repeat bg-cover flex w-full h-full min-h-[800px]">
                <div className="w-[18%] min-w-[270px]  bg-white h-auto relative block b1115:hidden b1115:w-[0%]">
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
                        <Link to="/mainAdmin/request" className="flex items-center cursor-pointer mb-10">
                        {isActive("/mainAdmin/request") && (
                            <>
                            <ProtestsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست‌ها</p>
                            </>
                        )}
                        {isActive("/mainAdmin/request") ? null:
                        <>
                            <ProtestsIcon color={'#ffffff'}/>
                            <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست‌ها</p>
                            </>
                        }
                        </Link>
                        <Link to="/mainAdmin/protestList" className="flex items-center cursor-pointer mb-10">
                        {isActive("/mainAdmin/protestList") && (
                            <>
                            <ProtestsIcon color={'#00c1b2'}/>
                            <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">اعتراضات ثبت شده</p>
                            </>
                        )}
                        {isActive("/mainAdmin/protestList") ? null:
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
                {sidebarOpen && (
  <div className="absolute inset-0 z-50 hidden  b1115:flex">
    <div className="w-[250px] bg-white b1115:bg-mainBlue p-4 h-full overflow-y-auto shadow-lg">
      <div className="flex justify-end items-center mb-6">
        
        <button onClick={() => setSidebarOpen(false)}>
          <svg className="w-6 h-6 text-mainBlue b1115:text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {[ 
        { to: "/mainAdmin/dashboard", icon: WorkTableIcon, label: "میز کار" },
        { to: "/mainAdmin/adminList", icon: Admins, label: "مدیران صندوق‌ها", admin: true },
        { to: "/mainAdmin/expertActivity", icon: WorkTableIcon, label: "گزارش عملکرد صندوق‌ها" },
        { to: "/mainAdmin/userList", icon: Admins, label: "کاربران سامانه" },
        { to: "/mainAdmin/request", icon: ProtestsIcon, label: "درخواست ها" },
        { to: "/mainAdmin/protestList", icon: ProtestsIcon, label: "اعتراضات ثبت شده" },
        { to: "/login", icon: ExitIcon, label: "خروج" },
      ].map((item, index) =>
        (
          <Link
            key={index}
            to={item.to}
            className="flex items-center cursor-pointer mb-6 "
            onClick={() => setSidebarOpen(false)}
          >
            {isActive(item.to) ? (
              <>
                <item.icon color="#00c1b2" />
                <p className="font-IRANYekanExtra text-[12px] text-buttonBlue mr-4">{item.label}</p>
              </>
            ) : (
              <>
                <item.icon color="#ffffff" />
                <p className="font-IRANYekanMedium text-[12px] text-white mr-4">{item.label}</p>
              </>
            )}
          </Link>
        )
      )}
    </div>

  
    <div
      className="flex-1 bg-black bg-opacity-40"
      onClick={() => setSidebarOpen(false)}
    />
  </div>
)}

<div className="w-[82%] min-w-[82%] b1115:w-full b1115:min-w-full">
            <Outlet />
          </div>
            </div>
            
        </div>
       </>
    );
  };
  
  export default MainAdminLayout;