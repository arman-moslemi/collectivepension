import { useState, useEffect } from "react";
import { Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import { MainNavbar, ScrollToTop } from "../components";
import SidebarMainIcon from "../assets/icon/general/SidebarMainIcon";
import WorkTableIcon from "../assets/icon/user/WorkTableIcon";
import PensionRequestIcon from "../assets/icon/user/PensionRequestIcon";
import ExistingRecordsIcon from "../assets/icon/user/ExistingRecordsIcon";
import ProtestsIcon from "../assets/icon/user/ProtestsIcon";
import ExitIcon from "../assets/icon/user/ExitIcon";
import BoxExpertIcon from "../assets/icon/expert/BoxExpertIcon";
import Cookies from 'universal-cookie';
import { axiosReq } from "../commons/axiosReq";
const ExpertLayout = () => {
  const [adminRole] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const cookies = new Cookies();
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);
  let navigate = useNavigate();

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
      if (cookies.get('Role') != "Expert" && cookies.get('Role') != "Admin") {

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
  return (
    <>
      <ScrollToTop />
      <div className="w-full h-full">
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

        <div className="bg-Pic2-bg bg-no-repeat bg-cover flex w-full h-full min-h-[800px]">

          <div className="w-[18%] min-w-[270px] bg-white h-auto relative block b1115:hidden b1115:w-[0%]">

            <div className="absolute z-10 top-12"><SidebarMainIcon /></div>
            <div className="absolute z-30 top-32 mr-[14px]">
              <Link to="/expert/dashboard" className="flex items-center cursor-pointer mb-10">
                {isActive("/expert/dashboard") ? (
                  <>
                    <WorkTableIcon color={'#00c1b2'} />
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">میز کار</p>
                  </>
                ) : (
                  <>
                    <WorkTableIcon color={'#ffffff'} />
                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">میز کار</p>
                  </>
                )}
              </Link>

              {cookies.get("Role") == "Admin" && (
                <Link to="/expert/expertDefinition" className="flex items-center cursor-pointer mb-10">
                  {isActive("/expert/expertDefinition") ? (
                    <>
                      <BoxExpertIcon color={'#00c1b2'} />
                      <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">کارشناس صندوق</p>
                    </>
                  ) : (
                    <>
                      <BoxExpertIcon color={'#ffffff'} />
                      <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">کارشناس صندوق</p>
                    </>
                  )}
                </Link>
              )}

              <Link to="/expert/requestsPension" className="flex items-center cursor-pointer mb-10">
                {isActive("/expert/requestsPension") ? (
                  <>
                    <PensionRequestIcon color={'#00c1b2'} />
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست‌های بازنشستگی (مقصد)</p>
                  </>
                ) : (
                  <>
                    <PensionRequestIcon color={'#ffffff'} />
                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست‌های بازنشستگی (مقصد)</p>
                  </>
                )}
              </Link>

              <Link to="/expert/requests" className="flex items-center cursor-pointer mb-10">
                {isActive("/expert/requests") ? (
                  <>
                    <ExistingRecordsIcon color={'#00c1b2'} />
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">درخواست‌ ها (مبدا)</p>
                  </>
                ) : (
                  <>
                    <ExistingRecordsIcon color={'#ffffff'} />
                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">درخواست‌ ها (مبدا)</p>
                  </>
                )}
              </Link>

              <Link to="/expert/protestList" className="flex items-center cursor-pointer mb-10">
                {isActive("/expert/protestList") ? (
                  <>
                    <ProtestsIcon color={'#00c1b2'} />
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">اعتراضات ثبت شده</p>
                  </>
                ) : (
                  <>
                    <ProtestsIcon color={'#ffffff'} />
                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">اعتراضات ثبت شده</p>
                  </>
                )}
              </Link>
              <Link to="/changePassPanel" className="flex items-center cursor-pointer mb-10">
                <>
                  <ProtestsIcon color={'#ffffff'} />
                  <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">تغییر رمزعبور</p>
                </>
              </Link>
              {/* <Link to="/expert/insurancePremium" className="flex items-center cursor-pointer mb-10">
                {isActive("/expert/insurancePremium") ? (
                  <>
                    <ExistingRecordsIcon color={'#00c1b2'} />
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">نرخ حق بیمه</p>
                  </>
                ) : (
                  <>
                    <ExistingRecordsIcon color={'#ffffff'} />
                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">نرخ حق بیمه</p>
                  </>
                )}
              </Link> */}

              <Link onClick={() => signout()} className="flex items-center cursor-pointer mb-10">
                {isActive("/login") ? (
                  <>
                    <ExitIcon color={'#00c1b2'} />
                    <p className="font-IRANYekanExtra text-[15px] text-buttonBlue mr-8">خروج</p>
                  </>
                ) : (
                  <>
                    <ExitIcon color={'#ffffff'} />
                    <p className="font-IRANYekanMedium text-[15px] text-mainBlue mr-8">خروج</p>
                  </>
                )}
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
                  { to: "/expert/dashboard", icon: WorkTableIcon, label: "میز کار" },
                  { to: "/expert/expertDefinition", icon: BoxExpertIcon, label: "کارشناس صندوق", admin: true },
                  { to: "/expert/requestsPension", icon: PensionRequestIcon, label: "درخواست‌های بازنشستگی" },
                  { to: "/expert/requests", icon: ExistingRecordsIcon, label: "درخواست‌ ها" },
                  { to: "/expert/protestList", icon: ProtestsIcon, label: "اعتراضات ثبت شده" },
                  // { to: "/expert/insurancePremium", icon: ExistingRecordsIcon, label: "نرخ حق بیمه" },
                  { to: "/login", icon: ExitIcon, label: "خروج" },
                ].map((item, index) =>
                  (!item.admin || adminRole) && (
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

export default ExpertLayout;
