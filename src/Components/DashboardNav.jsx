// DashboardNav.jsx

import { Link, useLocation } from "react-router-dom";

const DashboardNav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "btn btn-block btn-success uppercase text-white font-bold" : "text-gray-700";
    };

    return (
        <div className="w-1/3 min-h-screen p-4 bg-gray-200">
            <ul className="grid font-bold text-center uppercase">
                <Link to="/dashboard" className="grid w-full">
                    <li className={`mb-2 btn ${isActive("/dashboard")}`}>
                        Home
                    </li>
                </Link>

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


            </ul>
        </div>
    );
};

export default DashboardNav;
