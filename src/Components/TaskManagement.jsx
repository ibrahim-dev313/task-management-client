import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskManagement = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h2> {user.displayName}</h2>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default TaskManagement;
