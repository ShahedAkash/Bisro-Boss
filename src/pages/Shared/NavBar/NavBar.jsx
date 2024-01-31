import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
//  import cafeLogo from '../../../assets/home/cafe-chyujhal.png'
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import UseAdmin from "../../../hooks/UseAdmin";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = UseAdmin();
    const [cart] = useCart();

    const handelLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const NavOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        {
            isAdmin ? <li><Link to='/dashboard/adminHome'>Admin Home</Link></li> : <li><Link to='/gallery'>Gallery</Link></li>
        }
        <li><Link to={'/dashboard/cart'}><button className="btn bg-transparent border-0 -mt-3 ">
            <FaCartShopping className="text-white
            "/>
            <div className="badge badge-secondary">+{cart.length}</div>
        </button></Link></li>
        

        {
            user ?
                <>
                    <span className="p-2 -mt-2">{user?.displayName}</span>
                    <button onClick={handelLogOut} className="btn-ghost -mt-3">LogOut</button>
                </>
                :
                <><li><Link to='/login'>Login</Link></li></>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavOptions}
                        </ul>
                    </div>
                    <a className="text-xl hover:bg-none">
                        <div>
                            {/* <img className="w-[150px] h-[100px] -mt-4" src={cafeLogo} alt="" /> */}
                            <p className="text-3xl">Bistro Boss</p>
                            <p className="text-lg pl-6">Resturent</p>
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn border-4 border-orange-500">Make a Reservation</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;