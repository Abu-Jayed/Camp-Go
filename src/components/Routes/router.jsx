import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../Layout/Layout";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <App></App>
            },
            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;
