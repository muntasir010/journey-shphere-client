import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import AllTouristSpot from "../Pages/AllTouristSpot";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot";
import ViewDetails from "../Pages/ViewDetails";
import DestinationForYou from "../Pages/Home/DestinationForYou";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/tourist')
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
                element: <AllTouristSpot />,
                loader: () => fetch('http://localhost:5000/tourist')
            },
            {
                path: "/addTouristsSpot",
                element: <AddTouristsSpot />
            },
            {
                path: "/updatedTouristsSpot/:id",
                element: <UpdateTouristSpot />,
                loader: ({ params }) => fetch(`http://localhost:5000/tourist/${params.id}`)
            },
            {
                path: "/viewDetails/:id",
                element: <ViewDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/tourist/${params.id}`)
            },
            {
                path: "/destinations",
                element: <DestinationForYou/>,
                loader: () => fetch('http://localhost:5000/tourist/')
            },
            {
                path: "/myList",
                element: <AddTouristsSpot />
            }
        ]
    }
])