import { useLoaderData } from "react-router-dom";
import TouristCard from "../Components/TouristCard";

const AllTouristSpot = () => {
    const tourist = useLoaderData();

    return (
        <div className="">
            <div className="text-center max-w-xl mx-auto space-y-3 my-10">
                <h1 className="text-4xl font-bold text-orange-400">Unleash Your Wanderlust with Journey Sphere</h1>
                <p className="text-lg">Journey Sphere connects you to stunning destinations, hidden gems, and unforgettable experiences. Plan your perfect adventure with ease today!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 mb-10">

                {
                    tourist?.map(tour => <TouristCard
                        key={tour._id}
                        tour={tour}
                    ></TouristCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;