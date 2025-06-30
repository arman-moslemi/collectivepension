// all components and pages and layouts !!!


// ------------------layouts------------------------------------------------------------------------

export {default as LoginLayout} from "../layout/LoginLayout";
export {default as UserLayout} from "../layout/UserLayout";
export {default as ExpertLayout} from "../layout/ExpertLayout";
export {default as MainAdminLayout} from "../layout/MainAdminLayout";

// ------------------pages--------------------------------------------------------------------------

// ----------[login]--------- 

export {default as LoginPageMain} from "../pages/LoginPage/LoginPageMain";
export {default as SignupPage} from "../pages/LoginPage/SignupPage";
export {default as VerifyPage} from "../pages/LoginPage/VerifyPage";
export {default as ForgetpasswordPage} from "../pages/LoginPage/ForgetpasswordPage";
export {default as ForgetpasswordVerifyPage} from "../pages/LoginPage/ForgetpasswordVerifyPage";
export {default as ChangePasswordPage} from "../pages/LoginPage/ChangePasswordPage";

// ----------[user]----------

export {default as StartRequestPage} from "../pages/UserPage/StartRequestPage";
export {default as UpdateUserBaseInfoHimselfPage} from "../pages/UserPage/UpdateUserBaseInfoHimselfPage";
export {default as UpdateUserBaseInfoAnotherPage} from "../pages/UserPage/UpdateUserBaseInfoAnotherPage";
export {default as CreateUserInsuranceDesPage} from "../pages/UserPage/CreateUserInsuranceDesPage";
export {default as CreateUserInsuranceOriginPage} from "../pages/UserPage/CreateUserInsuranceOriginPage";
export {default as CreateUserInsuranceResponsePage} from "../pages/UserPage/CreateUserInsuranceResponsePage";
export {default as DashboardPage} from "../pages/UserPage/DashboardPage";
export {default as DashboardProcessPage} from "../pages/UserPage/DashboardProcessPage";
export {default as DashboardRejectedPage} from "../pages/UserPage/DashboardRejectedPage";
export {default as DashboardRejectedReasonEmploymentPage} from "../pages/UserPage/DashboardRejectedReasonEmploymentPage";
export {default as ExistingRecordsPage} from "../pages/UserPage/ExistingRecordsPage";
export {default as CalculatedPensionPage} from "../pages/UserPage/CalculatedPensionPage";
export {default as RegisteredProtestsPage} from "../pages/UserPage/RegisteredProtestsPage";
export {default as ViewProtestPage} from "../pages/UserPage/ViewProtestPage";
export {default as VerdictsIssuedPage} from "../pages/UserPage/VerdictsIssuedPage";

// ----------[expert]--------

export {default as ExpertDashboardPage} from "../pages/ExpertPage/ExpertDashboardPage";
export {default as ExpertRequestsPage} from "../pages/ExpertPage/ExpertRequestsPage";
export {default as ExpertRequestsDetailsPage} from "../pages/ExpertPage/ExpertRequestsDetailsPage";
export {default as ExpertRequestsPensionPage} from "../pages/ExpertPage/ExpertRequestsPensionPage";
export {default as ExpertProtestListPage} from "../pages/ExpertPage/ExpertProtestListPage";


// ----------[MainAdmin]-------

export {default as MainAdminDashboardPage} from "../pages/MainAdminPage/MainAdminDashboardPage";
export {default as MainAdminAdminListPage} from "../pages/MainAdminPage/MainAdminAdminListPage";
export {default as MainAdminExpertActivityPage} from '../pages/MainAdminPage/MainAdminExpertActivityPage';
export {default as MainAdminUserListPage} from "../pages/MainAdminPage/MainAdminUserListPage";
export {default as MainAdminRequestPage} from "../pages/MainAdminPage/MainAdminRequestPage";
export {default as MainAdminRequestsDetailsPage} from "../pages/MainAdminPage/MainAdminRequestsDetailsPage";


// ------------------components----------------------------------------------------------------------

// ----------[general]-------

export {default as MainNavbar} from "./General/MainNavbar";
export {default as MainInput} from "./General/MainInput";
export {default as MainChekbox} from "./General/MainChekbox";
export {default as MainButton} from "./General/MainButton";
export {default as MainTopAll} from "./General/MainTopAll";
export {default as MainModal} from "./General/MainModal";
export {default as MainExplanation} from "./General/MainExplanation";
export {default as MainRadioInput} from "./General/MainRadioInput";
export {default as UploadFile} from "./General/UploadFile";
export {default as MainPicText} from "./General/MainPicText";
export {default as MainTable} from "./General/MainTable";
export {default as ScrollToTop} from "./General/ScrollToTop";

// ----------[login]---------

export {default as LoginNavbar} from "./Login/LoginNavbar";
export {default as LoginNavbarResponsive} from "./Login/LoginNavbarResponsive";
export {default as LoginMain} from "./Login/LoginMain";
export {default as SignupMain} from "./Login/SignupMain";
export {default as ForgetpasswordMain} from "./Login/ForgetpasswordMain";
export {default as ChangePasswordMain} from "./Login/ChangePasswordMain";
export {default as VerifyMain} from "./Login/VerifyMain";

// ----------[user]----------

export {default as UserStartRequest} from "./User/UserStartRequest";
export {default as CreateUserInsuranceDes} from "./User/CreateUserInsuranceDes";
export {default as CreateUserInsuranceOrigin} from "./User/CreateUserInsuranceOrigin";
export {default as UpdateUserBaseInfoHimself} from "./User/UpdateUserBaseInfoHimself";
export {default as UpdateUserBaseInfoAnother} from "./User/UpdateUserBaseInfoAnother";
export {default as UserDataInsuranceOrigin} from "./User/UserDataInsuranceOrigin";
export {default as CreateUserInsuranceResponse} from "./User/CreateUserInsuranceResponse";
export {default as Dashboard} from "./User/Dashboard";
export {default as DashboardProcess} from "./User/DashboardProcess";
export {default as DashboardRejected} from "./User/DashboardRejected";
export {default as DashboardRejectedReasonEmployment} from "./User/DashboardRejectedReasonEmployment";
export {default as ExistingRecords} from "./User/ExistingRecords";
export {default as ExistingRecordsMainBox} from "./User/ExistingRecordsMainBox";
export {default as ExistingRecordsRepeated} from "./User/ExistingRecordsRepeated";
export {default as ExistingRecordsDetails} from "./User/ExistingRecordsDetails";
export {default as ExistingRecordsMainDetails} from "./User/ExistingRecordsMainDetails";
export {default as ExistingRecordsDetailsMonths} from "./User/ExistingRecordsDetailsMonths";
export {default as ExistingRecordsDetailsMonthsEdit} from "./User/ExistingRecordsDetailsMonthsEdit";
export {default as ExistingRecordsYearBox} from "./User/ExistingRecordsYearBox";
export {default as CalculatedPension} from "./User/CalculatedPension";
export {default as CalculatedPensionBox} from "./User/CalculatedPensionBox";
export {default as RegisteredProtests} from "./User/RegisteredProtests";
export {default as ViewProtest} from "./User/ViewProtest";
export {default as ViewProtestTable} from "./User/ViewProtestTable";
export {default as VerdictsIssued} from "./User/VerdictsIssued";

// ----------[expert]--------

export {default as ExpertDashboard} from "./Expert/ExpertDashboard";
export {default as ExpertRequests} from "./Expert/ExpertRequests";
export {default as ExpertRequestsDetails} from "./Expert/ExpertRequestsDetails";
export {default as ExpertProtestList} from "./Expert/ExpertProtestList";
export {default as RecordProtestDetail} from "./Expert/RecordProtestDetail";
export {default as AmountProtestDetail} from "./Expert/AmountProtestDetail";
export {default as GeneralProtestDetail} from "./Expert/GeneralProtestDetail";

// ----------[Mainadmin]-------

export {default as MainAdminDashboard} from "./MainAdmin/MainAdminDashboard";
export {default as MainAdminAdminList} from "./MainAdmin/MainAdminAdminList";
export {default as MainAdminExpertActivity} from "./MainAdmin/MainAdminExpertActivity";
export {default as MainAdminUserList} from "./MainAdmin/MainAdminUserList";
export {default as MainAdminRequest} from "./MainAdmin/MainAdminRequest";
export {default as MainAdminRequestsDetails} from "./MainAdmin/MainAdminRequestsDetails";