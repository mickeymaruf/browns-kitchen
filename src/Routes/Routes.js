import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import AddService from "../components/Services/AddService";
import ServiceDetails from "../components/Services/ServiceDetails";
import Services from "../components/Services/Services";
import Root from "../layouts/Root";
import RequireAuth from "./RequireAuth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/dishes?size=3')
            },
            {
                path: "services",
                element: <Services />,
                loader: () => fetch('http://localhost:5000/dishes')
            },
            {
                path: "services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/dishes/${params.id}`)
            },
            {
                path: "add-service",
                element: <RequireAuth><AddService /></RequireAuth>,
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
]);

export default router;