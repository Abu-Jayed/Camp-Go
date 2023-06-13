import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Home from "../Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivetRoute from "./PrivetRoute";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/StudentDashboard/EnrolledClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddAClass from "../Pages/Dashboard/TeacherDashboard/AddAClass";
import MyClasses from "../Pages/Dashboard/TeacherDashboard/MyClasses";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses";
import SendFeedBack from "../Pages/Dashboard/AdminDashboard/SendFeedBack";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: 'selectedClass',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolledClass',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'addaclass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'myclasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'sendFeedback/:id',
                element: <SendFeedBack></SendFeedBack>
            }
        ]
    }
]);

export default router;
