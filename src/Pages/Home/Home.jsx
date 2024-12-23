import AllTouristSpot from "../AllTouristSpot";
import Banner from "./Banner";
import Destination from "./Destination";
import DestinationForYou from "./DestinationForYou";

const Home = () => {
    return (
        <div className="max-w-7xl mx-5 md:mx-10 lg:mx-auto">
            <Banner />
            <AllTouristSpot/>
            <DestinationForYou/>
            <Destination/>
        </div>
    );
};

export default Home;