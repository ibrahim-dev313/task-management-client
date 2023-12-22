import React from 'react';

const DashboardHome = () => {
    return (
        <div className="container p-8 mx-auto my-8">
            <h2 className="mb-4 text-3xl font-bold">Welcome to Your Task Management Dashboard!</h2>
            <p className="text-gray-600">
                Here, you can efficiently manage your tasks, organize them based on their status, and keep track of your progress.
            </p>
            <div className="mt-6">
                <h3 className="mb-2 text-xl font-semibold">Key Features:</h3>
                <ul className="pl-6 list-disc">
                    <li>Organize tasks into categories like "To-Do," "Ongoing," and "Completed."</li>
                    <li>Drag and drop tasks to update their status easily.</li>
                    <li>Add new tasks with details such as title, description, deadline, and priority.</li>
                    <li>Efficiently manage your workflow and boost productivity.</li>
                </ul>
            </div>
            <div className="mt-8">
                <p className="text-gray-600">
                    Get started by navigating to the "Add Task" section on the left sidebar. You can also explore other features like adding a new task or checking your task analytics.
                </p>
            </div>
        </div>
    );
};

export default DashboardHome;
