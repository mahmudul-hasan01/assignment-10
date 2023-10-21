// import { useEffect } from "react";

const MyCartInfo = ({cartInfo,deleteInfo, setDeleteInfo}) => {

    const { name, BrandName, Type, Price, Image, Rating, description, _id, email } = cartInfo

    const hendleDelete =(id)=>{
        console.log(id)
       fetch(`https://assignment-10-e-m.vercel.app/cart/${id}`,{
        method: "DELETE"
       })
       .then(res => res.json())
       .then(datas=>{
        console.log(datas)
        // const filters = deleteInfo.filter(info => info._id !== id)
        // setDeleteInfo(filters)
       })
    }
    
    return (
        <div>
             <div className="card w-[300px] mx-auto bg-base-100 shadow-xl p-4">
                <figure className="">
                    <img src={Image} alt="img" className="rounded-xl w-full h-[150px]" />
                </figure>
                <div className="flex justify-between my-3">
                    <h1>{name}</h1>
                    <h1>{BrandName}</h1>
                </div>
                <div className="w-[100%]">
                    <button onClick={()=>hendleDelete(_id)} className="w-full btn btn-info">DELETE</button>
                </div>
            </div>
        </div>
    );
};

export default MyCartInfo;