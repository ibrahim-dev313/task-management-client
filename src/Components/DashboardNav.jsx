// DashboardNav.jsx

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const DashboardNav = () => {
    const location = useLocation();
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const isActive = (path) => {
        return location.pathname === path ? "btn btn-block btn-success uppercase text-white font-bold" : "text-gray-700";
    };

    return (
        <>
            <div className=" navbar lg:hidden bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown right-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1]   bg-base-100  w-52 min-h-screen">


                            <Link to="/dashboard/add-task" className="grid">

                                <li className={`mb-2 btn ${isActive("/dashboard/add-task")}`}>
                                    Add Task
                                </li>
                            </Link>
                            <Link to="/dashboard/tasks" className="grid">

                                <li className={`mb-2 btn ${isActive("/dashboard/tasks")}`}>
                                    Tasks
                                </li>
                            </Link>
                            <div className="divider"></div>

                            <Link to="/" className="grid w-full">
                                <li className={`mb-2 btn ${isActive("/")}`}>
                                    Home
                                </li>
                            </Link>
                            <button onClick={() => logout().then(navigate('/'))} className="btn">Logout</button>
                        </ul>
                    </div>
                    <div className="navbar-center">Dashboard</div>

                </div>

            </div>
            <div className="hidden min-h-screen p-4 bg-gray-200 lg:w-1/3 lg:block">
                <div className="grid my-6 text-xl font-bold text-center uppercase">

                    <div className="flex justify-center w-full avatar">
                        <div className="w-24 mask mask-circle">
                            <img src={user.photoURL} />
                        </div>
                    </div>

                    <p className="mt-3">{user.displayName}</p>

                </div>
                <ul className="grid font-bold text-center uppercase">


                    <Link to="/dashboard/add-task" className="grid">

                        <li className={`mb-2 btn ${isActive("/dashboard/add-task")}`}>
                            Add Task
                        </li>
                    </Link>
                    <Link to="/dashboard/tasks" className="grid">

                        <li className={`mb-2 btn ${isActive("/dashboard/tasks")}`}>
                            Tasks
                        </li>
                    </Link>
                    <div className="divider"></div>

                    <Link to="/" className="grid w-full">
                        <li className={`mb-2 btn ${isActive("/")}`}>
                            Home
                        </li>
                    </Link>
                    <button onClick={() => logout().then(navigate('/'))} className="btn">Logout</button>


                </ul>
            </div>
        </>

    );
};

export default DashboardNav;
