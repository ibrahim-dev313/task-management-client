import axios from 'axios';
import { useContext, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import toast from 'react-hot-toast';
import useTasks from '../Hooks/UseTasks';
import { AuthContext } from '../Providers/AuthProvider';

const TaskList = () => {
    const { user } = useContext(AuthContext);
    const { tasks, isLoading, refetch } = useTasks(user.email);
    const [editingTaskId, setEditingTaskId] = useState(null);

    if (tasks.length === 0) {
        return (
            <p className='p-8 font-bold text-center text-error'>No Tasks Added Yet. Please Add a task to manage</p>
        );
    }

    const onDragEnd = async (result) => {
        if (!result.destination) return;

        const movedTask = tasks.find((task) => task._id === result.draggableId);

        try {
            await axios.put(`https://task-management-server-mi1357.vercel.app/tasks/${movedTask._id}`, { status: result.destination.droppableId });
            refetch();
        } catch (error) {
            console.error('Error updating task status:', error.message);
        }
    };

    const handleEditClick = (taskId) => {
        setEditingTaskId(taskId);
    };

    const handleSaveEdit = async (editedTask) => {
        try {
            const updatedTask = {
                _id: editedTask._id,
                title: editedTask.title,
                description: editedTask.description,
                deadline: editedTask.deadline,
                priority: editedTask.priority,
                status: editedTask.status,
            };

            const res = await axios.put(`https://task-management-server-mi1357.vercel.app/tasks/${editedTask._id}`, updatedTask);
            console.log(res);
            refetch();
            setEditingTaskId(null);
            toast.success('Task updated successfully');
        } catch (error) {
            console.error('Error updating task:', error.message);
            toast.error('Failed to update task');
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`https://task-management-server-mi1357.vercel.app/tasks/${taskId}`);
            refetch();
            toast.success('Task deleted successfully');
        } catch (error) {
            console.error('Error deleting task:', error.message);
            toast.error('Failed to delete task');
        }
    };

    return (
        <>
            <h2 className="container px-8 pt-8 text-2xl font-bold">Your Tasks</h2>

            <div className="container grid grid-cols-1 gap-3 p-8 mx-auto text-xs md:grid-cols-3">
                {isLoading ? (
                    <p className="text-gray-600">Loading tasks...</p>
                ) : (
                    <DragDropContext onDragEnd={onDragEnd}>
                        {['todo', 'ongoing', 'completed'].map((status) => (
                            <Droppable key={status} droppableId={status}>
                                {(provided) => (
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className="p-4 mb-4 bg-gray-100 rounded-md shadow-md"
                                    >
                                        <h3 className="mb-2 font-semibold text-md">{capitalizeFirstLetter(status)}</h3>
                                        {tasks
                                            .filter((task) => task.status === status)
                                            .map((task, index) => (
                                                <Draggable key={task._id} draggableId={task._id} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className="relative p-2 mb-2 bg-white border rounded-md"
                                                        >
                                                            {editingTaskId === task._id ? (
                                                                <div className="p-4 bg-gray-100 border rounded-md">
                                                                    <p className="mb-2 text-lg font-semibold">Edit Task</p>
                                                                    <div className="mb-2">
                                                                        <label className="block text-sm font-medium text-gray-700">Title</label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue={task.title}
                                                                            className="w-full p-2 mt-1 border rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <label className="block text-sm font-medium text-gray-700">Description</label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue={task.description}
                                                                            className="w-full p-2 mt-1 border rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <label className="block text-sm font-medium text-gray-700">Deadline</label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue={task.deadline}
                                                                            className="w-full p-2 mt-1 border rounded-md"
                                                                        />
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <label className="block text-sm font-medium text-gray-700">Priority</label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue={task.priority}
                                                                            className="w-full p-2 mt-1 border rounded-md"
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        className="text-white bg-blue-500 rounded-xl btn"
                                                                        onClick={() => handleSaveEdit(task)}
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <>
                                                                    <p className="text-sm font-semibold">Title: {task.title}</p>
                                                                    <p>Description: {task.description}</p>
                                                                    <p>Deadline: {task.deadline}</p>
                                                                    <p>Priority: {task.priority}</p>
                                                                </>
                                                            )}

                                                            <button
                                                                className="mr-2 text-white bg-blue-500 rounded-xl btn"
                                                                onClick={() => handleEditClick(task._id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="text-white bg-red-500 rounded-xl btn"
                                                                onClick={() => handleDelete(task._id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        ))}
                    </DragDropContext>
                )}
            </div>
        </>
    );
};

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default TaskList;
