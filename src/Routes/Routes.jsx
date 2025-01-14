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
import MyList from "../Pages/MyList";
import PrivateRoute from "../Pages/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://journey-shphere-server-production.up.railway.app/tourist')
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
                loader: () => fetch('https://journey-shphere-server-production.up.railway.app/tourist')
            },
            {
                path: "/addTouristsSpot",
                element: <PrivateRoute>
                    <AddTouristsSpot />
                </PrivateRoute>
            },
            {
                path: "/updatedTouristsSpot/:id",
                element: <PrivateRoute>
                    <UpdateTouristSpot />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://journey-shphere-server-production.up.railway.app/tourist/${params.id}`)
            },
            {
                path: "/viewDetails/:id",
                element: <PrivateRoute>
                    <ViewDetails />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://journey-shphere-server-production.up.railway.app/tourist/${params.id}`)
            },
            {
                path: "/destinations",
                element: <DestinationForYou />,
                loader: () => fetch('https://journey-shphere-server-production.up.railway.app/tourist/')
            },
            {
                path: "/myList",
                element: <PrivateRoute>
                    <MyList />
                </PrivateRoute>,
                loader: () => fetch('https://journey-shphere-server-production.up.railway.app/tourist/')
            }
        ]
    }
])