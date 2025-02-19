
import Navbar from "../../Navbar/Navbar";
import { Link,  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    // const location = useLocation();
    const from =  '/'

    const navigate = useNavigate();
    console.log('location in the login page', location);

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;

        if (password.length < 6) {
            toast.warn('Password  must be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warn('Password must have an Uppercase letter');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.warn('Password must have a Lowercase letter');
            return;
        }

        // create user
        createUser(email, password, )
            .then(() => {
                // console.log(result.user);
                updateUserProfile(fullName, image)
                .then(() =>{
                    navigate(from);
                })
                toast.success('User created successfully');
                
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })


    }


    return (
        <div className="">
            <Helmet>
                <title>Eco Domain | Register</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 my-10">
                <h2 className="text-4xl my-2 text-center font-bold  font-league">Register Your Account</h2>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered"  {...register("fullName", { required: true })} />
                        {errors.fullName && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Enter Your photo url" className="input input-bordered" {...register("image")} />
                    </div>
                    <div className="form-control ">
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
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#23BE0A] text-white font-semibold text-lg">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already have an account? Please <Link to='/login' className="text-red-500">Login</Link></p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;