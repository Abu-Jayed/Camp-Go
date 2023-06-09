import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../Layout/Layout";
import ErrorPage from "../Shared/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: '/',
                element: <App></App>
            }
        ]
    },
]);

export default router;
