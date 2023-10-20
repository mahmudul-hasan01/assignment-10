import { useEffect } from "react";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const BrandDetailsCard = ({ detailsCard, details, setDetails, id }) => {
    const { name, BrandName, Type, Price, Image, Rating, description, _id } = detailsCard
    console.log(id)
    useEffect(() => {
        const filter = details.filter(item => item.BrandName.toLowerCase() === id.toLowerCase())
        setDetails(filter)
    }, [])

    return (
        <div>
            
            <div className="flex justify-around">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-full" src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="w-[100%] flex justify-between">
                        <Link to={`/cars/${_id}`}>
                            <button className="btn btn-neutral">Details</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-outline">UPDATE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BrandDetailsCard;