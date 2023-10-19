import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import { useState } from "react";

import { useParams } from "react-router-dom";

const BrandDetails = () => {
    const data =useLoaderData()
    const [details,setDetails]=useState(data)
    const {id} =useParams()
  
    return (
        <div  className="grid grid-cols-2 max-w-screen-xl mx-auto gap-6">
            
            {
               details.length ?  details.map(item => <BrandDetailsCard key={item._id} id={id} details={details} setDetails={setDetails} detailsCard={item}></BrandDetailsCard>) :
               <p>not found</p>
            }
        </div>
    );
};

export default BrandDetails;