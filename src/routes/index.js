import { createBrowserRouter } from "react-router-dom";
import { LoginLayout, LoginPageMain, SignupPage, ForgetpasswordPage, VerifyPage,
    ForgetpasswordVerifyPage, ChangePasswordPage, UserLayout, StartRequestPage,
    UpdateUserBaseInfoHimselfPage, UpdateUserBaseInfoAnotherPage, CreateUserInsuranceDesPage,
    CreateUserInsuranceOriginPage, CreateUserInsuranceResponsePage, DashboardProcessPage,
    DashboardRejectedPage, ExistingRecordsPage, DashboardPage, DashboardRejectedReasonEmploymentPage,
    CalculatedPensionPage, RegisteredProtestsPage, ViewProtestPage, VerdictsIssuedPage,
    ExpertLayout, ExpertDashboardPage, ExpertRequestsPage, ExpertRequestsDetailsPage, 
    ExpertRequestsPensionPage, 
    MainAdminDashboardPage,
    MainAdminLayout,MainAdminExpertActivityPage,MainAdminAdminListPage
} from "../components";



export const router =createBrowserRouter([

    {
        element:<LoginLayout/>,
        errorElement: (
            <h3 className="text-center">Nothing !</h3>
        ),
        children: [
            {
                path:'/login',
                element:<LoginPageMain/>,
             
            },
            {
                path:'/signup',
                element:<SignupPage/>,
             
            },
            {
                path:'/forgetpassword',
                element:<ForgetpasswordPage/>,
             
            },
            {
                path:'/verify',
                element:<VerifyPage/>,
             
            },
            {
                path:'/forgetpasswordVerify',
                element:<ForgetpasswordVerifyPage/>,
             
            },
            {
                path:'/changePassword',
                element:<ChangePasswordPage/>,
             
            },
        ],
    },
    {
        element: <UserLayout />,
        path: '/user',
        errorElement: <h3 className="text-center">Nothing !</h3>,
        children: [
            
            { path: 'startRequest', element: <StartRequestPage /> },
            { path: 'updateUserBaseInfoHimself', element: <UpdateUserBaseInfoHimselfPage /> },
            { path: 'updateUserBaseInfoAnother', element: <UpdateUserBaseInfoAnotherPage /> },
            { path: 'createUserInsuranceDes', element: <CreateUserInsuranceDesPage /> },
            { path: 'createUserInsuranceOrigin', element: <CreateUserInsuranceOriginPage /> },
            { path: 'createUserInsuranceResponse', element: <CreateUserInsuranceResponsePage />},
            { path: 'dashboard', element: <DashboardPage />},
            { path: 'dashboardProcess', element: <DashboardProcessPage />},
            { path: 'dashboardRejected', element: <DashboardRejectedPage />},
            { path: 'dashboardRejectedReasonEmployment', element: <DashboardRejectedReasonEmploymentPage />},
            { path: 'existingRecords', element: <ExistingRecordsPage />},
            { path: 'calculatedPension', element: <CalculatedPensionPage />},
            { path: 'registeredProtests', element: <RegisteredProtestsPage />},
            { path: 'viewProtest', element: <ViewProtestPage />},
            { path: 'verdictsIssued', element: <VerdictsIssuedPage />},
            
        ]
    },
    {
        element: <ExpertLayout />,
        path: '/expert',
        errorElement: <h3 className="text-center">Nothing !</h3>,
        children: [
            
            { path: 'dashboard', element: <ExpertDashboardPage />},
            { path: 'requests', element: <ExpertRequestsPage />},
            { path: 'requestsPension', element: <ExpertRequestsPensionPage />},
            { path: 'requestsDetails', element: <ExpertRequestsDetailsPage />},
            // { path: 'expertRequestsAllRecordsWithWebService', element: <ExpertDashboardPage />},
            // { path: 'expertrequestsAllRecordsNoWebService', element: <ExpertDashboardPage />},
            // { path: 'expertrequestsMainDetail', element: <ExpertDashboardPage />},
            // { path: 'expertrequestsMainDetail', element: <ExpertDashboardPage />},

        ]
    },
    {
        element: <MainAdminLayout />,
        path: '/mainAdmin',
        errorElement: <h3 className="text-center">Nothing !</h3>,
        children: [
            
            { path: 'dashboard', element: <MainAdminDashboardPage />},
            { path: 'adminList', element: <MainAdminAdminListPage />},
            { path: 'expertActivity', element: <MainAdminExpertActivityPage />},

      ]
    },

])