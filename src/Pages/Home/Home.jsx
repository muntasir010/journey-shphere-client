import AllTouristSpot from "../AllTouristSpot";
import Banner from "./Banner";
import Destination from "./Destination";
import DestinationForYou from "./DestinationForYou";

const Home = () => {
    return (
        <div className="">
            <Banner />
            <AllTouristSpot/>
            <DestinationForYou/>
            <Destination/>
        </div>
    );
};

export default Home;