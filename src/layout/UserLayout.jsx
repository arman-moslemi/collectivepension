import { Outlet } from "react-router-dom";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { MainNavbar } from "../components";
import SidebarMainIcon from "../assets/icon/general/SidebarMainIcon";
import WorkTableIcon from "../assets/icon/user/WorkTableIcon";
import PensionRequestIcon from "../assets/icon/user/PensionRequestIcon";
import ExistingRecordsIcon from "../assets/icon/user/ExistingRecordsIcon";
import CalledPension from "../assets/icon/user/CalledPension";
import ProtestsIcon from "../assets/icon/user/ProtestsIcon";
import ExitIcon from "../assets/icon/user/ExitIcon";
import { ScrollToTop } from "../components";
import Cookies from 'universal-cookie';
import { useState, useEffect } from "react";
import { axiosReq } from "../commons/axiosReq";
const UserLayout = () => {

    const location = useLocation(); // دریافت مسیر فعلی
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isActive = (path) => location.pathname === path; // بررسی لینک فعال
    let navigate = useNavigate();
    const cookies = new Cookies();

    let status = cookies.get("Status");
    let role = cookies.get("Role");
    console.log(status)
    const navTo = () => {

        if (status == 1) {

            navigate("/user/startRequest");
        }
        else if (status == 2) {

            navigate("/user/dashboardProcess");
        }
        else if (status == 4) {

            navigate("/user/dashboardRejected");
        }
        else if (status == 7) {

            navigate("/user/dashboardRejectedReasonEmployment");
        }
        //   else if (status == 12) {

        //     navigate("/user/dashboardRejectedReasonEmployment");
        // }
        else {
            navigate("/user/dashboard");
        }
    }


    useEffect(() => {

        auth();
    }, []);
    const auth = async () => {
        const cookies = new Cookies();
        var token = cookies.get('token');
        console.log(token)
        if (!token) {
            navigate("/");
            // GetData()

        } else {
            if (cookies.get('Role') != "User" && cookies.get('Role') != "Agent") {

                navigate("/");

            }
        }
    }
    const signout = async () => {
        const cookies = new Cookies();
        await axiosReq("Auth/SignOut", "post");
        cookies.remove("ID", { path: '/' })
        cookies.remove("Role", { path: '/' })
        cookies.remove("token", { path: '/' })
        cookies.remove("Name", { path: '/' })
        cookies.remove("Status", { path: '/' })

        navigate("/");
    }
    const [noticeOpen, setNoticeOpen] = useState(true);
    return (
        <>
            <ScrollToTop />
            <div className="w-full h-full  ">
                <MainNavbar />
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
                {/* {noticeOpen && (
  <div className="w-full min-h-[60px] flex items-center justify-center bg-[#2A78DD38] text-center relative px-10 py-2">
    <button
      type="button"
      onClick={() => setNoticeOpen(false)}
      aria-label="بستن اطلاعیه"
      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded hover:bg-black/5"
    >
      ✕
    </button>

    <span className="font-IRANYekanBold text-mainBlue leading-6">
      کاربر گرامی؛ به دلیل عدم اتصال سامانه به سازمان تأمین اجتماعی، موقتاً امکان ارائه خدمات برای
      بیمه‌پردازان تأمین اجتماعی وجود ندارد. با تشکر از همراهی شما!
    </span>
  </div>
)} */}

                <div className="bg-Pic2-bg bg-no-repeat bg-cover flex w-full h-full min-h-[800px]">

                    <div className="w-[18%] min-w-[270px] bg-white h-auto relative block b1115:hidden b1115:w-[0%]">
                        <div className="absolute z-10 top-12"><SidebarMainIcon /></div>
                        <div className="absolute z-30 top-32 mr-[14px]">

                            <button onClick={() => navTo()} className="flex items-center cursor-pointer mb-10">
                                {isActive("/user/startRequest") && (
                                    <>
                                        <WorkTableIcon color={'#00c1b2'} />
                                        <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">میز کار</p>
                                    </>
                                )}
                                {isActive("/user/startRequest") ? null :
                                    <>
                                        <WorkTableIcon color={'#ffffff'} />
                                        <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">میز کار</p>
                                    </>
                                }
                            </button>
                            {/* /user/updateUserBaseInfoHimself  or  /user/updateUserBaseInfoAnother */}
                            <Link to={role == "User" ? "/user/updateUserBaseInfoHimself" : "/user/updateUserBaseInfoAnother"} className="flex items-center cursor-pointer mb-10">
                                {isActive("/user/updateUserBaseInfoHimself") && (
                                    <>
                                        <PensionRequestIcon color={'#00c1b2'} />
                                        <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست مستمری جمع</p>
                                    </>
                                )}
                                {isActive("/user/updateUserBaseInfoHimself") ? null :
                                    <>
                                        <PensionRequestIcon color={'#ffffff'} />
                                        <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست مستمری جمع</p>
                                    </>
                                }
                            </Link>
                            <Link to="/user/existingRecords" className="flex items-center cursor-pointer mb-10">
                                {isActive("/user/existingRecords") && (
                                    <>
                                        <ExistingRecordsIcon color={'#00c1b2'} />
                                        <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">کلیه سوابق موجود</p>
                                    </>
                                )}
                                {isActive("/user/existingRecords") ? null :
                                    <>
                                        <ExistingRecordsIcon color={'#ffffff'} />
                                        <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">کلیه سوابق موجود</p>
                                    </>
                                }
                            </Link>
                            <Link to="/user/calculatedPension" className="flex items-center cursor-pointer mb-10">
                                {isActive("/user/calculatedPension") && (
                                    <>
                                        <CalledPension color={'#00c1b2'} />
                                        <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">مستمری محاسبه شده</p>
                                    </>
                                )}
                                {isActive("/user/calculatedPension") ? null :
                                    <>
                                        <CalledPension color={'#ffffff'} />
                                        <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">مستمری محاسبه شده</p>
                                    </>
                                }
                            </Link>
                            <Link to="/user/registeredProtests" className="flex items-center cursor-pointer mb-10">
                                {isActive("/user/registeredProtests") && (
                                    <>
                                        <ProtestsIcon color={'#00c1b2'} />
                                        <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">اعتراضات</p>
                                    </>
                                )}
                                {isActive("/user/registeredProtests") ? null :
                                    <>
                                        <ProtestsIcon color={'#ffffff'} />
                                        <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">اعتراضات</p>
                                    </>
                                }
                            </Link>
                            <Link to="/changePassPanel" className="flex items-center cursor-pointer mb-10">
                                <>
                                    <ProtestsIcon color={'#ffffff'} />
                                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">تغییر رمزعبور</p>
                                </>
                            </Link>
                            <Link onClick={() => signout()} className="flex items-center cursor-pointer mb-10">
                                {isActive("/login") && (
                                    <>
                                        <ExitIcon color={'#00c1b2'} />
                                        <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">خروج</p>
                                    </>
                                )}
                                {isActive("/login") ? null :
                                    <>
                                        <ExitIcon color={'#ffffff'} />
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
                                    { to: "/user/startRequest", icon: WorkTableIcon, label: "میز کار" },
                                    { to: "/user/updateUserBaseInfoHimself", icon: PensionRequestIcon, label: "درخواست مستمری جمع" },
                                    { to: "/user/existingRecords", icon: PensionRequestIcon, label: "کلیه سوابق موجود" },
                                    { to: "/user/calculatedPension", icon: ExistingRecordsIcon, label: "مستمری محاسبه شده" },
                                    { to: "/user/registeredProtests", icon: ProtestsIcon, label: "اعتراضات" },
                                    // { to: "/expert/insurancePremium", icon: ExistingRecordsIcon, label: "نرخ حق بیمه" },
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

                    <div className="w-[77%] min-w-[77%] b1115:w-full b1115:min-w-full">
                        <Outlet />
                    </div>
                </div>

            </div>
        </>
    );
};

export default UserLayout;