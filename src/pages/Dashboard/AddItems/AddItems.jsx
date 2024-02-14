import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload using imgbb 
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu data to database
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                // show success
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log(res.data);
    }
    return (
        <div>
            <SectionTitle heading="Add an Item" SubHeading="What's new?"></SectionTitle>

            <div className="bg-slate-300 p-6 m-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>

                        </div>
                        <input type="text" placeholder="Recipe Name" {...register('name', { required: true })} className="input input-bordered w-full " />

                    </label>


                    <div className="flex sm:flex-col md:flex-row gap-4 my-6">
                        {/* Category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category</span>

                            </div>
                            <select defaultValue="default" {...register('category', { required: true })} className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="bangla">Bangla Food</option>
                                <option value="chinese">Chinese & Thai Food</option>
                                <option value="setmenu">Set Menu Food</option>
                                <option value="continental">Continental Food</option>
                                <option value="fastfood">Fast Food</option>
                                <option value="salad">Salad & Beverages</option>
                                <option value="popular">Signature Food</option>
                                <option value="dessert">Dessert & Cofe</option>
                            </select>

                        </label>

                        {/* Price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>

                            </div>
                            <input type="number" placeholder="price" {...register('price', { required: true })} className="input input-bordered w-full " />

                        </label>
                    </div>

                    {/* Recipe Details */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>

                            </div>
                            <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                        </label>
                    </div>

                    <div className="my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">Add Item<FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;