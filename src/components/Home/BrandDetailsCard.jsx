import { useContext, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ContextData } from "../AuthProvider/AuthProvider";

// import { Link } from "react-router-dom";

const BrandDetailsCard = ({ detailsCard, details, setDetails, id }) => {
    const { name, BrandName, Type, Price, Image, Rating, description, _id } = detailsCard
    useEffect(() => {
        const filter = details.filter(item => item.BrandName.toLowerCase() === id.toLowerCase())
        setDetails(filter)
    }, [])

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className="h-[200px] w-full" src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p className="font-semibold">Brand Name: {BrandName}</p>
                <p>Price: {Price}</p>
                <p>Type: {Type}</p>
                <p>Rating: {Rating}</p>
                <p>Description: {description}</p>
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
    );
};

export default BrandDetailsCard;