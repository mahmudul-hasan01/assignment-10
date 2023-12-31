import Swal from "sweetalert2";

const AddProduct = () => {
    const hendleDetails = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const BrandName = form.BrandName.value
        const Type = form.Type.value
        const Price = form.Price.value
        const Image = form.Image.value
        const Rating = form.Rating.value
        const description = form.description.value
        const carInfo = { name, BrandName, Type, Price, Image, Rating, description }
        console.log(carInfo)
        fetch('https://assignment-10-e-m.vercel.app/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carInfo)
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                console.log(data)
                Swal.fire(
                    'Update!',
                    'Your file has been Update.',
                    'success'
                )
            })
    }
    return (
        <div className="w-[100%] md:w-[720px] h-[490px] bg-sky-200 rounded-lg mx-auto mt-3">
            <form className="p-5" onSubmit={hendleDetails}>
                <div className="flex justify-around gap-5 my-2">
                    <div className="flex flex-col flex-1">
                        <span className="text-2xl">Name</span>
                        <input className="py-3 pl-4 rounded-lg" type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-2xl">Brand Name</span>
                        <select className="py-3 pl-4 rounded-lg" name="BrandName">
                            <option>Ford</option>
                            <option>Tesla</option>
                            <option>Honda</option>
                            <option>BMW</option>
                            <option>Toyota</option>
                            <option> Mercedes-Benz</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-around gap-5">
                    <div className="flex flex-col flex-1">
                        <span className="text-2xl">Type</span>
                        <input className="py-3 pl-4 rounded-lg" type="text" name="Type" placeholder="Type" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-2xl">Price</span>
                        <input className="py-3 pl-4 rounded-lg" type="text" name="Price" placeholder="Price" />
                    </div>
                </div>

                <div className="flex justify-around gap-5 ">
                    <div className="flex flex-col flex-1">
                        <span className="text-2xl">Image</span>
                        <input className="py-3 pl-4 rounded-lg" type="text" name="Image" placeholder="Image" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-2xl">Rating</span>
                        <input className="py-3 pl-4 rounded-lg" type="text" name="Rating" placeholder="Rating" />
                    </div>
                </div>

               <div>
               <div className="flex flex-col  flex-1">
                    <span className="text-2xl">Short description</span>
                    <input className="py-6 pl-4 rounded-lg" type="text" name="description" placeholder="Description" />
                </div>

                <button className="btn btn-neutral w-full mt-3">Add Product</button>
               </div>

            </form>
        </div>
    );
};

export default AddProduct;