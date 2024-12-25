import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layouts = () => {
    return (
        <div>
            <div className="max-w-7xl mx-2 md:mx-5 lg:mx-auto">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layouts;