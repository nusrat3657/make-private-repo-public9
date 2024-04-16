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


        {
            user ?
                <>
                    {/* <li><NavLink to="/lands" className={({ isActive }) =>
                        isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
                    }>Your Choices</NavLink></li> */}
                    <li><NavLink to="/user" className={({ isActive }) =>
                        isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
                    }>User Profile</NavLink></li>
                    <li><NavLink to="/update" className={({ isActive }) =>
                        isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
                    }>Update Profile</NavLink></li>
                </>
                :
                <></>
        }
        <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
        }>Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 lg:-ml-2 mt-5">
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
                            {/* <div>
                                <NavLink to="/update" className={({ isActive }) =>
                                    isActive ? "font-bold text-[#23BE0A] border-2  rounded-lg border-[#23BE0A]" : ""
                                }>Update Profile</NavLink>
                            </div> */}
                            <button onClick={handleSignOut} className="btn rounded-none bg-[#23BE0A] text-white text-lg px-8">Log Out</button>


                            <Link to="/user"><div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar"><div className="  rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL
                                        || "https://i.ibb.co/Y0RBQqQ/download.png"} />
                                </div></div>
                                <ul tabIndex={0} className="-ml-10 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
                                    <li><a>{user?.displayName || "User Name not found"}</a></li>
                                </ul>
                            </div></Link>


                            {/* <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || "User Name not found"}>
                                <div className=" w-12 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL || "https://i.ibb.co/PW9Wxt7/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"} />
                                </div>
                            </div> */}
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