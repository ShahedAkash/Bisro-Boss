import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    console.log(name, category, recipe, price);
    const { register, handleSubmit } = useForm();

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
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item has been Updated",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log(res.data);
    }

    return (
        <div>
            <SectionTitle heading='Update your Item information' SubHeading='Update Item'></SectionTitle>

            <div className="bg-slate-300 p-6 m-4 rounded-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Recipe Name</span>

                        </div>
                        <input type="text" defaultValue={name} placeholder="Recipe Name" {...register('name', { required: true })} className="input input-bordered w-full " />

                    </label>


                    <div className="flex sm:flex-col md:flex-row gap-4 my-6">
                        {/* Category */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Category</span>

                            </div>
                            <select defaultValue={category} {...register('category', { required: true })} className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </label>

                        {/* Price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price</span>

                            </div>
                            <input defaultValue={price} type="number" placeholder="price" {...register('price', { required: true })} className="input input-bordered w-full " />

                        </label>
                    </div>

                    {/* Recipe Details */}
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Recipe Details</span>

                            </div>
                            <textarea defaultValue={recipe} {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                        </label>
                    </div>

                    <div className="my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">Update Item</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;