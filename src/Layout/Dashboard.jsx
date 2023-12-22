import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/DashboardNav";

const Dashboard = () => {
    return (
        <div className="relative w-full lg:flex">
            <DashboardNav></DashboardNav>
            <div className="w-full lg:w-2/3">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;