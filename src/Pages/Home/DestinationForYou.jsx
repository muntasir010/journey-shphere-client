import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const DestinationForYou = () => {
    const destination = useLoaderData();
    const [selectedCountry, setSelectedCountry] = useState("Bangladesh");


    let filteredData = [];

    const handleFilterCountry = () => {
        if (selectedCountry === "Bangladesh") {
            filteredData = destination.filter((item) => item.country === "Bangladesh");
        } else if (selectedCountry === "Vietnam") {
            filteredData = destination.filter((item) => item.country === "Vietnam");
        } else if (selectedCountry === "Indonesia") {
            filteredData = destination.filter((item) => item.country === "Indonesia");
        } else if (selectedCountry === "Cambodia") {
            filteredData = destination.filter((item) => item.country === "Cambodia");
        } else if (selectedCountry === "Malaysia") {
            filteredData = destination.filter((item) => item.country === "Malaysia");
        }
        else if (selectedCountry === "Thailand") {
            filteredData = destination.filter((item) => item.country === "Thailand");
        }
        console.log(selectedCountry)
    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-orange-400 text-center my-8">Destinations for you</h2>
            <div className="bg-orange-400 rounded-xl max-w-2xl mx-auto relative grid grid-cols-3 md:grid-cols-6 items-center justify-between p-4 gap-4 mb-8">
                <button onClick={() => handleFilterCountry("Bangladesh")} className="btn">Bangladesh</button>
                <button onClick={() => handleFilterCountry('Vietnam')} className="btn">Vietnam</button>
                <button onClick={() => handleFilterCountry('Indonesia')} className="btn">Indonesia</button>
                <button onClick={() => handleFilterCountry('Cambodia')} className="btn">Cambodia</button>
                <button onClick={() => handleFilterCountry('Malaysia')} className="btn">Malaysia</button>
                <button onClick={() => handleFilterCountry('Thailand')} className="btn">Thailand</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    destination.map(des => <li className="list-none" key={des._id}>
                        <div className="card card-side bg-base-100 shadow-xl h-40">
                            <figure>
                                <img className="h-full p-3 rounded-3xl"
                                    src={des.photo}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{des.name}</h2>
                                <p>{des.country}</p>
                            </div>
                        </div>
                    </li>)
                }
            </div>
        </div>
    );
};

export default DestinationForYou;