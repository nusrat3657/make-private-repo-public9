// import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";


const Register = () => {
    // const { createUser } = useContext(AuthContext)

    // const handleRegister = e => {
    //     e.preventDefault();
    //     console.log(e.currentTarget);
    //     const form = new FormData(e.currentTarget);
    //     const name = form.get('name');
    //     const photo = form.get('photo');
    //     const email = form.get('email');
    //     const password = form.get('password');
    //     console.log(name, photo, email, password);

    //     // create user
    //     createUser(email, password)
    //         .then(result => {
    //             console.log(result.user);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         })
    // }

    return (
        <div className="">
            <Navbar></Navbar>
            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 my-10">
                <h2 className="text-4xl my-2 text-center font-bold  font-league">Register Your Account</h2>
                <hr />
                <form  className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Your photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#23BE0A] text-white font-semibold text-lg">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already have an account? <Link to='/login' className="text-red-500">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;