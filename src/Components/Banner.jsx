import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold md:text-5xl md:">Manage Your Tasks Efficiently</h1>
                    <p className="py-6">Organize, prioritize, and accomplish tasks effortlessly. Streamline your workflow and boost productivity.</p>
                    <Link to={'/dashboard'}><button className="btn btn-primary">Lets Explore</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;