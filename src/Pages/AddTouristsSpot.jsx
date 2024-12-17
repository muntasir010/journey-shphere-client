const AddTouristsSpot = () => {
    return (
        <div className="max-w-2xl mx-5 md:mx-10 lg:mx-auto rounded-xl p-6 text-black bg-orange-400">
            <form className="mt-8 grid grid-cols-6 gap-6">
                {/* tourists_spot_name */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    Tourists spot name
                    </label>

                    <input type="text" name="name" placeholder="tourists_spot_name" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* country_name */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        Country name
                    </label>

                    <input type="text" name="country" placeholder="country_name" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* location */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700"> Location </label>

                    <input type="text" name="location" placeholder="location" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* short_description */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        Short description
                    </label>

                    <input type="text" name="short_description" placeholder="short_description" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* average_cost */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        Average cost
                    </label>

                    <input type="text" name="cost" placeholder="average_cost" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* seasonality */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        Seasonality
                    </label>

                    <input type="text" name="seasonality" placeholder="seasonality" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* travel_time */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        Travel time
                    </label>

                    <input type="text" name="time" placeholder="travel_time" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* totalVisitorsPerYear */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        Total Visitors Per Year
                    </label>

                    <input type="text" name="totalVisitorsPerYear" placeholder="total_visitors_per_year" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* User Email */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        User Email
                    </label>

                    <input type="text" name="email" placeholder="user_email" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* User Name */}
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700">
                        User Name
                    </label>

                    <input type="text" name="UserName" placeholder="user_name" className="input bg-white input-bordered w-full max-w-xs" />
                </div>
                {/* photo */}
                <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Photo </label>

                    <input type="text" name="photo" placeholder="Enter photo URL" className="input bg-white input-bordered w-full max-w-2xl" />
                </div>
                <input type="submit" value="Add Place" className="btn col-span-6" />
            </form>
        </div>
    );
};

export default AddTouristsSpot;