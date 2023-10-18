import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
// import Banner from "./Banner";

const Home = () => {
    const brendData = useLoaderData()
    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto gap-5">
                {
                    brendData.map(item => <BrandCard key={item.id} brendData={item}></BrandCard>)
                }
            </div>
            
        </div>
    );
};

export default Home;