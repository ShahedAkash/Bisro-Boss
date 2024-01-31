import { FaBook, FaEnvelopeOpenText, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { FaBookBookmark, FaCalendar, FaOpencart } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";


const Dashboard = () => {

    const [isAdmin] = UseAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <ul className="menu">
                    {isAdmin ? <>
                        <li>
                            <NavLink to={'/dashboard/adminHome'}>
                                <GoHome />
                                Admin Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/addItems'}>
                                <FaUtensils />
                                Add Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/manageItems'}>
                                <FaList />
                                Manage Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/bookings'}>
                                <FaBook />
                                Manage Bookings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/dashboard/users'}>
                                <FaUsers />
                                All Users
                            </NavLink>
                        </li>
                    </>
                        :
                        <>
                            <li>
                                <NavLink to={'/dashboard/userHome'}>
                                    <GoHome />
                                    User Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/reservation'}>
                                    <FaCalendar />
                                    reservation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/cart'}>
                                    <FaOpencart />
                                    My cart
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/review'}>
                                    <MdOutlineRateReview />
                                    ADD Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/dashboard/paymentHistory'}>
                                    <FaBookBookmark />
                                    Payment History
                                </NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/dashboard/contact'}>
                            <FaEnvelopeOpenText />
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;