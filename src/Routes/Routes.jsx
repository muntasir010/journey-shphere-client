import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";

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