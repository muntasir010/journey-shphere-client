import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
// import { useLoaderData } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDestination } from "../utility/localStorage";

const MyList = () => {
    const lists = useLoaderData();
    const [myList, setMyList] = useState([]);
    // const {_id} = lists;
    // useEffect(() =>{
    //     const storedCountryIds = getStoredDestination();
    //     if(lists.length > 0){
    //         const addPlace = lists.filter(lis => storedCountryIds.includes(lis._id))
    //         setMyList(addPlace)
    //     }
    // },[])
    useEffect(() => {
        const storedAllCards = JSON.parse(localStorage.getItem("allCards")) || [];
        const storedMyList = JSON.parse(localStorage.getItem("myList")) || [];
        setAllCards(storedAllCards);
        setMyList(storedMyList);
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
            {
                lists.map(list => <div key={list._id}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img className="p-4 rounded-3xl h-64 w-full"
                                src={list.photo}
                                alt="photo" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-orange-400">
                                {list.name}
                            </h2>
                            <div className="flex justify-between font-semibold mb-2">
                                <p>Cost: {list.cost}</p>
                                <p className="text-end">Total Visitor Per Year: {list.totalVisitorsPerYear}</p>
                            </div>
                            <div className="flex justify-between font-semibold mb-2">
                                <p>Travel Time: {list.time}</p>
                                <p className="text-end">Seasonality: {list.seasonality}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <Link to={`/viewDetails/${list._id}`} className="btn btn-outline text-2xl text-orange-400"><FaEye /></Link>
                                <Link to={`/updatedTouristsSpot/${list._id}`} className="btn btn-outline text-2xl text-orange-400"><MdEdit /></Link>
                                <Link onClick={() => handleDelete(list._id)} className="btn btn-outline text-2xl text-orange-400"><MdDelete /></Link>
                            </div>
                        </div>
                    </div>
                    {/* <img src={list.photo} alt="" /> */}
                </div>)
            }
        </div>
    );
};

export default MyList;