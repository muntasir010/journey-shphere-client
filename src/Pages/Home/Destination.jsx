const Destination = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto text-center my-10">
                <h3 className="text-4xl font-bold text-orange-400 mb-3">Top Destinations In ASIA
                </h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-10">
                <div
                    className="hero min-h-screen w-full lg:w-1/3 rounded-xl"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/YLKXMvV/Rectangle-4.png)",
                    }}>
                    <div className="bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Up to
                            </h1>
                            <h1 className="mb-5 text-7xl font-bold">50
                                %
                                Off
                            </h1>
                            <h1 className="mb-5 text-5xl font-bold">Winter Collection
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 space-y-5">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="w-full lg:w-[500px] h-60  rounded-xl hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/4WQ949h/Rectangle-5.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400]">Maldives</div>
                        </div>
                        <div className="w-full lg:w-[500px] h-60  rounded-xl hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/93FPZBL/Rectangle-8.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400]">Indonesia</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-6">
                        <div className="w-full  h-60  rounded-xl hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/MRdr47B/Rectangle-7.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400]">Sri Lanka</div>
                        </div>
                        <div className="w-full h-60  rounded-xl hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/CwfG5jv/Rectangle-6.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400]">North America</div>
                        </div>
                        <div className="rounded-2xl w-full h-60 hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/XzzkQy8/Rectangle-9.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400]">Kashmir</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="w-full lg:w-[500px] h-60 rounded-xl hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/Wfz8XyS/Rectangle-11.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400] ">Bangladesh</div>
                        </div>
                        <div className="w-full lg:w-[500px] h-60 rounded-xl hover:scale-110" style={{ backgroundImage: "url(https://i.ibb.co/cvb4YWS/Group-40089.png)" }}>
                            <div className="relative top-[calc(50%-24px)] text-2xl font-bold text-center text-[#FF5400]">Bandarban</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Destination;