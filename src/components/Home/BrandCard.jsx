import { Link } from "react-router-dom";

const BrandCard = ({brendData}) => {
      const {image,Brand_Name}=brendData
      
    return (
        <div>
            <div className="card w-[90%] bg-base-100 shadow-xl">
                
                <figure className="px-10 pt-10">
                    <img src={image} alt="img" className="rounded-xl w-full h-[400px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <Link to={`/brandDetails/${Brand_Name}`}>
                      <button className="btn btn-neutral">{Brand_Name}</button>
                    </Link>   
                </div>
            </div>
        </div>
    );
};

export default BrandCard;