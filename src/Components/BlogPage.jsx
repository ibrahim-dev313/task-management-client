

const BlogPage = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="mb-4 text-4xl font-bold">Time Management Tips</h1>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white rounded-md shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">1. Set Clear Goals</h2>
                    <p>Start your day by setting clear goals. Knowing what you want to achieve helps you stay focused and organized.</p>
                </div>

                <div className="p-6 bg-white rounded-md shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">2. Prioritize Tasks</h2>
                    <p>Prioritize your tasks based on importance and deadlines. Tackling high-priority tasks first ensures critical work gets done.</p>
                </div>

                <div className="p-6 bg-white rounded-md shadow-md">
                    <h2 className="mb-4 text-xl font-semibold">3. Break Tasks into Smaller Steps</h2>
                    <p>Breaking tasks into smaller, manageable steps makes them less overwhelming and more achievable.</p>
                </div>

                {/* Add more tips as needed */}

            </div>

            <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">Conclusion</h2>
                <p>Effective time management is crucial for productivity and success. Incorporate these tips into your daily routine to make the most out of your time.</p>
            </div>
        </div>
    );
};

export default BlogPage;
