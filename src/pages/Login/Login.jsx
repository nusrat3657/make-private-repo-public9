/* eslint-disable react/no-unescaped-entities */
// import { useContext } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // console.log('location in the login page', location);

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
            console.log(result.user);

        // navigate after login
        // navigate(location?.state ? location.state : '/')

        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 my-10">
                <h2 className="text-4xl my-2 text-center font-bold  font-league">Login Your Account</h2>
                <hr />
                <form onSubmit={handleLogin} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full" required />
                            <span className="absolute top-4 -ml-8" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-md font-semibold mt-2">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#23BE0A] text-white font-semibold text-lg">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Don't have an account? Please <Link to='/register' className="text-red-500">Register</Link></p>
                <div className='p-2  mt-6 flex justify-evenly'>
                    <button className="btn btn-outline hover:bg-[#23BE0A]">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <button className="btn btn-outline hover:bg-[#23BE0A]">
                        <FaGithub></FaGithub>
                        Login with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;