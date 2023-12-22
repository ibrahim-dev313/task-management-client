import { createBrowserRouter } from "react-router-dom";
import BlogPage from "../Components/BlogPage";
import DashboardHome from "../Components/DashboardHome";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import TaskList from "../Components/TaskList";
import TaskManagement from "../Components/TaskManagement";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome></DashboardHome>
            },
            {
                path: '/dashboard/add-task',
                element: <TaskManagement></TaskManagement>
            },
            {
                path: '/dashboard/tasks',
                element: <TaskList></TaskList>
            },
        ]
    }

])
export default router;