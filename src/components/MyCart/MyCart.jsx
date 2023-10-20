import { useLoaderData, useParams } from "react-router-dom";
import MyCartInfo from "./MyCartInfo";
import { useState } from "react";

const MyCart = () => {
    const data =useLoaderData()
    const email =useParams()
    console.log(email)
    const [deleteInfo,setDeleteInfo]=useState(data)
    return (
        <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
            {
                deleteInfo.map(item => <MyCartInfo key={item._id} deleteInfo={deleteInfo} setDeleteInfo={setDeleteInfo} cartData={item}></MyCartInfo>)
            }
        </div>
    );
};

export default MyCart;