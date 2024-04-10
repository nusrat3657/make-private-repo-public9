/* eslint-disable react/no-unescaped-entities */
// import { useContext } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {signIn, googleLogin, githubLogin} = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    // const navigate = useNavigate();
    console.log('location in the login page', location);

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        const { email, password } = data
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('User Login Successfully');
        })
        .catch(error => {
            console.error(error);
            toast.error(error.message);
        })
    }

    
    // const [user, setUser] = useState(null);

    // const handleLogin = e => {
    //     e.preventDefault();
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(email, password);
    //     signIn(email, password)
    //     .then(result =>{
    //         console.log(result.user);

        // navigate after login
        // navigate(location?.state ? location.state : '/')

    //     })
    //     .catch(error =>{
    //         console.error(error);
    //     })
    // }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 my-10">
                <h2 className="text-4xl my-2 text-center font-bold  font-league">Login Your Account</h2>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
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
                                className="input input-bordered w-full" {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500">This field is required</span>}
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
                    <button onClick={() => googleLogin()} className="btn btn-outline hover:bg-[#23BE0A]">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <button onClick={() => githubLogin()} className="btn btn-outline hover:bg-[#23BE0A]">
                        <FaGithub></FaGithub>
                        Login with Github
                    </button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;