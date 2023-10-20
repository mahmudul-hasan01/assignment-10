import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ContextData } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const DetailsButton = () => {
    const {users}=useContext(ContextData)
    const email =users.email
    const data = useLoaderData()
    const { name, BrandName, Type, Price, Image, Rating, description, _id } = data
    const datainfo = { name, BrandName, Type, Price, Image, Rating, description, _id, email }
    const hendleinfo = () => {
        fetch('https://assignment-10-e-m.vercel.app/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datainfo)
        })
            .then(res => res.json())
            .then(data => {
                    Swal.fire(
                      'Add to Cart Success Fully!',
                      'Your file has been added.',
                      'success'
                    )
            })
    }
    return (
        <div className="flex justify-center items-center">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between gap-4">
                        <p className="text-xl border-2 py-2 rounded-lg text-center">{name}</p>
                        <p className="text-xl border-2 py-2 rounded-lg text-center">{BrandName}</p>
                    </div>
                    <div className="flex justify-between gap-4">
                        <p className="text-xl border-2 py-2 rounded-lg text-center">{Price}</p>
                        <p className="text-xl border-2 py-2 rounded-lg text-center">{Type}</p>
                    </div>
                    <div className="space-y-2">
                        <p className="text-xl border-2 py-2 rounded-lg text-center">{Rating}</p>
                        <p className="text-xl border-2 py-2 rounded-lg text-center">{description}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={hendleinfo} className="btn btn-primary w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsButton;