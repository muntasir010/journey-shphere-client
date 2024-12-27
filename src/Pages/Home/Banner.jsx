const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl min-h-[calc(100vh-100px)] mt-6">
            <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/rwxxzC2/slider-1.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Where Journeys Begin and Memories Last</h1>
                            <p className="mb-5">
                                Discover breathtaking destinations, curated itineraries, travel tips, and hidden gems. Embark on adventures and create lifelong memories today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/tsMKmFS/slider-2.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Where the World is Just a Click Away</h1>
                            <p className="mb-5">
                                Explore captivating destinations, cultural immersions, and hidden gems. Plan unforgettable journeys with expert guides, exclusive deals, and travel insights.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/K5xDv9S/slider-3.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                            <h1 className="mb-5 text-5xl font-bold">Unveiling Destinations, One Story at a Time</h1>
                            <p className="mb-5">
                                Discover breathtaking destinations, curated itineraries, travel tips, and hidden gems. Embark on adventures and create lifelong memories today.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;