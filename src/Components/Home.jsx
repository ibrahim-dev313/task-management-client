// Home.js

import React from 'react';
import Banner from './Banner';

const Home = () => {
    const targetAudience = [
        { title: 'Developers', description: 'Organize your coding tasks and projects efficiently.' },
        { title: 'Corporate Professionals', description: 'Stay on top of your work tasks and deadlines.' },
        { title: 'Students', description: 'Manage your assignments and study schedule effectively.' },
        { title: 'Entrepreneurs', description: 'Keep track of business tasks and project milestones.' },
        { title: 'Freelancers', description: 'Coordinate your freelance projects and client deadlines.' },
        { title: 'Parents', description: 'Organize family tasks and activities for better time management.' },
    ];

    return (
        <div>
            <Banner />

            <section className="px-8 py-12 bg-gray-100">
                <div className="container mx-auto">
                    <h2 className="mb-8 text-3xl font-bold">Who Can Benefit from Our Task Management App?</h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {targetAudience.map((audience) => (
                            <div key={audience.title} className="p-6 bg-white rounded-md shadow-md">
                                <h3 className="mb-4 text-xl font-semibold">{audience.title}</h3>
                                <p>{audience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
