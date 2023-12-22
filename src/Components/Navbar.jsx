import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const nav = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>

        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>

    </>
    return (
        <nav className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <NavLink to={'/'}><button className="text-xl btn btn-ghost">ProTasker</button></NavLink>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="px-1 menu menu-horizontal">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={() => logout().then(navigate('/'))} className="btn">Logout</button> :
                        <NavLink to={'login'}><button className="btn">Login</button></NavLink>

                }
            </div>
        </nav>
    );
};

export default Navbar;