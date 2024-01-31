import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = useCart();
    const tPrice = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = tPrice.toFixed(2);
    const axiosSecure = useAxiosSecure();

    const handelDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-around">
                <h2 className="text-4xl">Items : {cart.length}</h2>
                <h2 className="text-4xl">Total : {totalPrice}</h2>
                {
                    cart.length ? <Link to={'/dashboard/payment'}><button className="btn bg-orange-400 ">Pay</button></Link> : <button className="btn ">Pay</button>
                }
            </div>

            {/* item table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}

                                </td>
                                <td>${item.price}</td>
                                <th>
                                    <button onClick={() => handelDelete(item._id)} className="btn btn-ghost btn-lg text-red-500"><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                        {/* row 2 */}

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;