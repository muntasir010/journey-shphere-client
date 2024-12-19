import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/allTouristsSpot",
                element: <Register />
            },
            {
                path: "/addTouristsSpot",
                element: <AddTouristsSpot />,
                loader: () => fetch('http://localhost:5000/tourist')
            },
            {
                path: "/myList",
                element: <AddTouristsSpot />
            }
        ]
    }
])