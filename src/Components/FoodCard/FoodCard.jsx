import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {

    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()

    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();

    const [, refetch] = useCart();

    const handelAddToCart = food =>{
        console.log(food)
        if(user && user.email){
            const cartItem ={
                menuId: _id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }

            })
            // to update the cart count 
            refetch();
        }else{
            Swal.fire({
                title: "You are not Logged in",
                text: "Please login to your acount",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    // sending the user to login page
                  navigate('/login', {state:{from:location}})
                }
              });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 bg-black text-white p-1 px-3">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title font-semibold">{name}</h2>
                <p className="text-sm text-slate-500">{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> handelAddToCart(item)} className="btn btn-outline border-0 border-b-4 border-orange-400 ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;