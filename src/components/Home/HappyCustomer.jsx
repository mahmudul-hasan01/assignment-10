import { useEffect, useState } from "react";

const HappyCustomer = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/customerData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (

        <div className="mt-10">
            <div className='flex justify-center py-2'>
                <h1 className='py-3 px-4 my-5 text-3xl shadow-2xl border-2 font-semibold rounded-md'>Happy Customer</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto gap-5">
                {
                    data.map(item => <div key={item.id} className="flex justify-center">
                        <img className="w-[400px] h-[250px]" src={item.image} alt="" />
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default HappyCustomer;