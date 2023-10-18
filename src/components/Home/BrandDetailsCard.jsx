import { useEffect } from "react";
// import { Link } from "react-router-dom";

const BrandDetailsCard = ({ detailsCard,details,setDetails,id}) => {
    const {name,BrandName,Type,Price,Image,Rating,description} =detailsCard
    console.log(id)
    useEffect(()=>{
        const filter =details.filter(item => item.BrandName.toLowerCase() === id.toLowerCase())
        setDetails(filter)
    },[])
    return (
        <div className="flex justify-around">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="w-full h-full" src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="w-[100%] flex justify-between">
                    <button className="btn btn-neutral">Details</button>
                    <button  className="btn btn-neutral">Add to Cart</button>
                </div>      
            </div>
        </div>
    </div>
    );
};

export default BrandDetailsCard;