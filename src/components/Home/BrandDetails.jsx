import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SwiperSlides from "./SwiperSlides";

const BrandDetails = () => {
    const data = useLoaderData()
    const [details, setDetails] = useState(data)
    const { id } = useParams()

    return (
        <div>
            <SwiperSlides></SwiperSlides>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-6">

                {
                    details.length ? details.map(item => <BrandDetailsCard key={item._id} id={id} details={details} setDetails={setDetails} detailsCard={item}></BrandDetailsCard>) :
                        <p>not found</p>
                }
            </div>
        </div>
    );
};

export default BrandDetails;