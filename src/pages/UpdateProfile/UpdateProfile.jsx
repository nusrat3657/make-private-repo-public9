import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.photoURL.value);
        const formData = {
            displayName: e.target.name.value,
            photoURL: e.target.photoURL.value
        }

        // updateUserProfile(formData.name, formData.photoURL)
        updateProfile(user, formData)
            .then(
                window.location.reload()
            )
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <Helmet>
                <title>Eco Domain | Update Profile</title>
            </Helmet>
            <Navbar></Navbar>

            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 my-10 animate__animated animate__zoomInDown">
                <h2 className="text-4xl my-2 text-center font-bold  font-league">Update Your Profile</h2>
                <hr />
                <form onSubmit={handleUpdate} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" defaultValue={user?.displayName}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" readOnly disabled className="input input-bordered" value={user?.email} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Enter Your photo url" className="input input-bordered" defaultValue={user?.photoURL}/>
                    </div>
                    <div className="text-center mt-6">
                        <button  className="btn bg-[#23BE0A] text-white font-semibold ">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;