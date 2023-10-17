
const AddProduct = () => {
    const hendleDetails =(e)=>{
        e.preventDefault()
        const form =e.target
        const name =form.name.value
        const BrandName =form.BrandName.value
        const Type =form.Type.value
        const Price =form.Price.value
        const Image =form.Image.value
        const Rating =form.Rating.value
        const description =form.description.value
        const info = {name,BrandName,Type,Price,Image,Rating,description}
        console.log(info)
    }
    return (
        <div className="w-[700px] h-[400px] bg-red-200 mx-auto">
            <form onSubmit={hendleDetails}>
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <span>Name</span>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="flex flex-col">
                        <span>Brand Name</span>
                        <input type="text" name="BrandName" placeholder="Brand Name" />
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <span>Type</span>
                        <input type="text" name="Type" placeholder="Type"/>
                    </div>
                    <div className="flex flex-col">
                        <span>Price</span>
                        <input type="text" name="Price" placeholder="Price"/>
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <span>Image</span>
                        <input type="text" name="Image" placeholder="Image"/>
                    </div>
                    <div className="flex flex-col">
                        <span>Rating</span>
                        <input type="text" name="Rating" placeholder="Rating"/>
                    </div>
                </div>

                <div className="flex flex-col w-[75%] mx-auto">
                    <span>Short description</span>
                    <input className="w-full" type="text" name="description" placeholder="Short description"/>
                </div>
                <div className="w-[75%] mx-auto mt-5">
                    <button className="btn btn-neutral w-full">Add button</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;