import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const tourist = useLoaderData();
    const { _id, name, country, location, description, cost, seasonality, time, totalVisitorsPerYear, userName, email, photo } = tourist;
    return (
        <div className="p-5 mx-auto sm:p-10 md:p-16">
            <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
                <img src={photo} alt="" className="w-full h-60 sm:h-96 rounded-xl" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold text-orange-400 sm:text-3xl">{name}</a>
                        
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-orange-400">Country: <span className="text-black">{country}</span></h4>
                        <h4 className="text-lg font-semibold text-orange-400">Location: <span className="text-black">{location}</span></h4>
                        <h4 className="text-lg font-semibold text-orange-400">Cost: <span className="text-black">{cost}</span></h4>
                        <h4 className="text-lg font-semibold text-orange-400">Seasonality: <span className="text-black">{seasonality}</span></h4>
                        <h4 className="text-lg font-semibold text-orange-400">Total Visitor Per Year: <span className="text-black">{totalVisitorsPerYear}</span></h4>
                        <h4 className="text-lg font-semibold text-orange-400">Travel Time: <span className="text-black">{time}</span></h4>
                    </div>
                    <div className="dark:text-gray-800 text-lg">
                        <h2 className="font-semibold text-orange-400">All you need to know about {name}:
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;