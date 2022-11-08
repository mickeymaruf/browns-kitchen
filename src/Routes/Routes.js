import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import ServiceDetails from "../components/Services/ServiceDetails";
import Services from "../components/Services/Services";
import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/dishes')
            },
            {
                path: "/services",
                element: <Services />,
                loader: () => fetch('http://localhost:5000/dishes')
            },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: () => fetch('http://localhost:5000/dishes')
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);

export default router;