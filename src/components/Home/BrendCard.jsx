
const BrendCard = ({brendData}) => {
      const {image,Brand_Name}=brendData
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{Brand_Name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default BrendCard;