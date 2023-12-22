import axios from 'axios';
import { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import useTasks from '../Hooks/UseTasks';
import { AuthContext } from '../Providers/AuthProvider';

const TaskList = () => {
    const { user } = useContext(AuthContext);
    const { tasks, isLoading, refetch } = useTasks(user.email);

    const onDragEnd = async (result) => {
        if (!result.destination) return; // Drop outside the list

        const movedTask = tasks.find((task) => task._id === result.draggableId);

        // Update the task status on the backend
        try {
            // Replace the URL with your actual backend endpoint for updating tasks
            await axios.put(`http://localhost:5000/tasks/${movedTask._id}`, { status: result.destination.droppableId });
            refetch(); // Refetch tasks after updating
        } catch (error) {
            console.error('Error updating task status:', error.message);
        }
    };

    return (
        <>
            <h2 className="container px-8 pt-8 text-2xl font-bold ">Your Tasks</h2>

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
                                                            className="p-2 mb-2 bg-white border rounded-md"
                                                        >
                                                            {/* Display task details here */}
                                                            <p className="text-sm font-semibold">Title: {task.title}</p>
                                                            <p>Description: {task.description}</p>
                                                            <p>Deadline: {task.deadline}</p>
                                                            <p>Priority: {task.priority}</p>
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
