import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Root from "../layout/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
]);

export default router;