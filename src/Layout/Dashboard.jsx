import { Outlet } from "react-router-dom";
import DashboardNav from "../Components/DashboardNav";

const Dashboard = () => {
    return (
        <div className="flex w-full">
            <DashboardNav></DashboardNav>
            <div className="w-2/3 ">
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Dashboard;