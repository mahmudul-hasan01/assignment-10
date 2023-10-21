import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
import Banner from "./Banner";
import CarCollection from "./CarCollection";
import HappyCustomer from "./HappyCustomer";
import Footer from "../Footer/Footer";

const Home = () => {
    const brendData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className='flex justify-center py-2'>
            <h1 className='py-3 px-4 my-5 text-3xl border-2 shadow-2xl font-semibold rounded-md'>Car Brand</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5 mt-10">
                {
                    brendData.map(item => <BrandCard key={item.id} brendData={item}></BrandCard>)
                }
            </div>
            <CarCollection></CarCollection>
            <HappyCustomer></HappyCustomer>
        </div>
    );
};

export default Home;