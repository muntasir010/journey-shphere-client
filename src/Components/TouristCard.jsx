import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TouristCard = ({ tour }) => {
    const { _id, name, cost, seasonality, time, totalVisitorsPerYear, photo } = tour;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tourist/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
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
                    <div className="card-actions justify-center">
                        <Link to='/viewDetails' className="btn btn-outline text-2xl text-orange-400"><FaEye /></Link>
                        <Link to='/addTouristsSpot/:id' className="btn btn-outline text-2xl text-orange-400"><MdEdit /></Link>
                        <Link onClick={() => handleDelete(_id)} className="btn btn-outline text-2xl text-orange-400"><MdDelete /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristCard;