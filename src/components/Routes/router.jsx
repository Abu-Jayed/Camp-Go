import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <App></App>
            }
        ]
    },
]);

export default router;
