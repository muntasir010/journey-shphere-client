const TouristCard = ({ tour }) => {
    const { name, cost, seasonality, time, totalVisitorsPerYear, photo } = tour;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img className="p-4 rounded-3xl h-64 w-full"
                        src={photo}
                        alt="photo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-orange-400">
                        {name}
                    </h2>
                    <div className="flex justify-between font-semibold mb-2">
                        <p>Cost: {cost}</p>
                        <p className="text-end">Total Visitor Per Year: {totalVisitorsPerYear}</p>
                    </div>
                    <div className="flex justify-between font-semibold mb-2">
                        <p>Travel Time: {time}</p>
                        <p className="text-end">Seasonality: {seasonality}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-orange-400">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristCard;