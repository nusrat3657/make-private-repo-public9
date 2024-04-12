import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Home</NavLink></li>
        {/* <li><NavLink to="/register" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Register</NavLink></li> */}
        <li><NavLink to="/user" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>User Profile</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 -ml-2 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 ">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-2xl font-bold font-marker"><span className="text-[#23BE0A]">Eco</span> Domain</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="mt-2 menu menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ?
                        <>
                            <button onClick={handleSignOut} className="btn rounded-none bg-[#23BE0A] text-white text-lg px-8">Log Out</button>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div className=" w-12 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                            </div>
                        </>
                        :
                        <Link to='/login'>
                            <button className="btn rounded-none bg-[#23BE0A] text-white text-lg px-8">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;