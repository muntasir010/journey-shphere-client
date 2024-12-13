import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts/>,
        errorElement: <NotFound/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
])