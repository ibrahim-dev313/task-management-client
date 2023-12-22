import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../Providers/AuthProvider";

const TaskForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const [selectedPriority, setSelectedPriority] = useState("medium");
    console.log(selectedPriority);
    const onSubmit = async (data) => {
        try {
            // Replace the URL with your actual backend endpoint for posting tasks
            const response = await axios.post("https://task-management-server-mi1357.vercel.app/tasks", {
                title: data.title,
                description: data.description,
                deadline: data.deadline,
                priority: selectedPriority,
                userEmail: user.email,
            });

            console.log("Task added successfully:", response.data);
            toast.success("Task Added Successfully")
            // Reset the form after successful submission
            reset();
            // Reset the selected priority
            setSelectedPriority("medium")
        } catch (error) {
            console.error("Error adding task:", error.message);
        }
    };

    return (
        <div className="min-h-screen p-8 bg-base-200">
            <div className="shadow-2xl rounded-xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full p-8">
                    <h1 className="text-2xl font-bold text-center lg:text-4xl">Add a New Task</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Task Title"
                            className={`input input-bordered ${errors.title && 'input-error'}`}
                            {...register('title', { required: true })}
                        />
                        {errors.title && <p className="mt-1 text-error">Task Title is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea
                            placeholder="Task Description"
                            className={`textarea textarea-bordered ${errors.description && 'textarea-error'}`}
                            {...register('description', { required: true })}
                        />
                        {errors.description && <p className="mt-1 text-error">Task Description is required</p>}
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input
                            type="date"
                            className={`input input-bordered ${errors.deadline && 'input-error'}`}
                            {...register('deadline', { required: true })}
                        />
                        {errors.deadline && <p className="mt-1 text-error">Deadline is required</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Priority</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3 ">
                            <button
                                type="button"
                                className={`uppercase priority-button ${selectedPriority === "low" ? "active text-white btn-success btn" : " btn"}`}
                                onClick={() => setSelectedPriority("low")}
                            >
                                Low
                            </button>
                            <button
                                type="button"
                                className={`uppercase priority-button ${selectedPriority === "medium" ? "active btn-success btn text-white" : " btn"}`}
                                onClick={() => setSelectedPriority("medium")}
                            >
                                Medium
                            </button>
                            <button
                                type="button"
                                className={`uppercase priority-button ${selectedPriority === "high" ? "active text-white btn-success btn" : "btn"}`}
                                onClick={() => setSelectedPriority("high")}
                            >
                                High
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 form-control">
                        <button className="font-bold uppercase btn btn-success">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;
