import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const AllCard = ({ data, setDeleteInfo, deleteInfo }) => {
    const { name, BrandName, Type, Price, Image, Rating, description, _id } = data
    const hendleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cars/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        const filters = deleteInfo.filter(info => info._id !== id)
                        setDeleteInfo(filters)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }
    return (
        <div className="flex justify-around">
            <div className="card w-[90%] bg-base-100 shadow-xl">
                <figure><img className="w-full h-full" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="w-[100%] flex justify-between">
                        <p className="">{name}</p>
                        <p>{BrandName}</p>
                    </div>
                    <div className="w-[100%] flex justify-between">
                        <p>{Type}</p>
                        <p>{Price}</p>
                    </div>
                    <p>{Rating}</p>
                    <p className="bg-slate-200 w-full py-3">{description}</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}>
                           <button className="btn btn-outline">DETAILS</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                           <button className="btn btn-outline">UPDATE</button>
                        </Link>
                        <button onClick={() => hendleDelete(_id)} className="btn btn-outline">delete <MdDeleteForever></MdDeleteForever></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;