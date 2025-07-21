import { createBrowserRouter } from "react-router-dom";
import { LoginLayout, LoginPageMain, SignupPage, ForgetpasswordPage, VerifyPage,
    ForgetpasswordVerifyPage, ChangePasswordPage, UserLayout, StartRequestPage,
    UpdateUserBaseInfoHimselfPage, UpdateUserBaseInfoAnotherPage, CreateUserInsuranceDesPage,
    CreateUserInsuranceOriginPage, CreateUserInsuranceResponsePage, DashboardProcessPage,
    DashboardRejectedPage, ExistingRecordsPage, DashboardPage, DashboardRejectedReasonEmploymentPage,
    CalculatedPensionPage, RegisteredProtestsPage, ViewProtestPage, VerdictsIssuedPage,
    ExpertLayout, ExpertDashboardPage, ExpertRequestsPage, ExpertRequestsDetailsPage, 
    ExpertRequestsPensionPage,ExpertProtestListPage,ExpertProtestDetailPage, ExpertInsurancePremiumPage,
    MainAdminDashboardPage,ExpertDefinitionPage,
    MainAdminLayout,MainAdminExpertActivityPage,MainAdminAdminListPage,MainAdminUserListPage,
    MainAdminRequestPage,MainAdminRequestsDetailsPage,MainAdminProtestListPage,MainAdminProtestDetailPage
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
                path:'/',
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
            { path: 'expertDefinition', element: <ExpertDefinitionPage />},
            { path: 'protestList', element: <ExpertProtestListPage />},
            { path: 'protestList/:id', element: <ExpertProtestDetailPage />},
            { path: 'insurancePremium', element: <ExpertInsurancePremiumPage />},

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
            { path: 'userList', element: <MainAdminUserListPage />},
            { path: 'request', element: <MainAdminRequestPage />},
            { path: 'requestDetail', element: <MainAdminRequestsDetailsPage />},
            { path: 'protestList', element: <MainAdminProtestListPage />},
            { path: 'protestList/:id', element: <MainAdminProtestDetailPage />},

      ]
    },

])