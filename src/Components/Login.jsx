import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate()

    const { login, googleLogin } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        login(data.email, data.password)
            .then(res => {
                console.log(res.user)
                navigate('/dashboard')
                toast.success('Login Successfull')
            })
            .catch(error => console.log(error))
    }
    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            navigate('/dashboard');
        } catch (error) {
            console.error('Google login error:', error);
        }
    };
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="w-full max-w-xl shadow-2xl card bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            className={`input input-bordered ${errors.email && 'input-error'}`}
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <p className="mt-1 text-error">Email is required and must be a valid email address</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className={`input input-bordered ${errors.password && 'input-error'}`}
                            {...register('password', { required: true, min: 6 })}
                        />
                        {errors.password && (
                            <p className="mt-1 text-error">Password is required and must be at least 6 characters long</p>
                        )}

                        <div className="mt-4">
                            <p className="">
                                Dont have an account? <Link to={'/signup'} className="text-error link link-hover"> Signup Here</Link>
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 form-control">
                        <button className="font-bold uppercase btn btn-primary">Login</button>
                    </div>


                    <div className="flex items-center justify-center mt-4">
                        <div
                            type="button"
                            onClick={handleGoogleLogin}
                            className="flex items-center justify-center btn btn-outline btn-primary btn-block"
                        >
                            <FaGoogle />

                            Sign up with Google
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
