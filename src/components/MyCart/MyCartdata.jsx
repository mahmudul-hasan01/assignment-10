import { useLoaderData } from "react-router-dom";
import MyCartInfo from "./MyCartInfo";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../AuthProvider/AuthProvider";

const MyCartdata = () => {
    const {users}=useContext(ContextData)
    const data = useLoaderData()

    const [deleteInfo, setDeleteInfo] = useState(data)

    const [carInfo, setCarInfo] = useState([])
    useEffect(() => {
        const filter = deleteInfo.filter(item => item.email === users.email)
        setCarInfo(filter)
    }, [])


    return (
        <div>
            <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    carInfo.map(item => <MyCartInfo key={item._id} cartInfo={item} deleteInfo={deleteInfo} setDeleteInfo={setDeleteInfo} ></MyCartInfo>)
                }
            </div>
        </div>
    );
};

export default MyCartdata;