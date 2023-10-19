import carImage from "../../assets/car-store-gloucester-1200x675px.jpg"
const Banner = () => {
    return (
        <div className="mt-6">
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${carImage})` }}>
            </div>
        </div>
    );
};

export default Banner;