import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import TaskForm from "./TaskForm";

const TaskManagement = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <TaskForm />
        </div>
    );
};

export default TaskManagement;
