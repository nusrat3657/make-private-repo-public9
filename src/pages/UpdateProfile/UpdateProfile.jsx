import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UpdateProfile = () => {

    const { updateUserProfile, user } = useContext(AuthContext);

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            photoURL: e.target.photoURL.value
        }

        updateUserProfile(formData.photoURL, formData.name)
            .then(
                window.location.reload(),
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
            {/* <form onSubmit={handleUpdate} className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 px-24 my-10 animate__animated animate__zoomInDown space-y-4">
                <h1 className="text-3xl font-bold text-[#23BE0A] mb-12 text-center">Update Profile</h1>
                <div className=" text-center">
                    <p className="text-start text-lg font-semibold">Your Name:</p>
                    {isEditing ? (
                    <input className="w-full p-2 rounded-md mb-4" type="text" name="name" defaultValue={user?.displayName} onChange={e => setName(e.target.value)} id="" />
                    ) : (
                        <input className="w-full p-2 rounded-md mb-4" type="text" name="name" defaultValue={user?.displayName} id="" />
                    )
                }
                    <p className="text-start text-lg font-semibold">Photo URL:</p>
                    <input className="w-full p-2 rounded-md mb-4" type="text"  name="image" defaultValue={user?.photoURL} onChange={e => setImage(e.target.value)} />
                </div>
                <div className="text-center mt-6">
                    <button onClick={handleUpdate} className="btn bg-[#23BE0A] text-white font-semibold ">Update Profile</button>
                </div>
            </form> */}

                {/* <div>
                    <h2>name:{user?.displayName}</h2>
                    <p>url: {user?.photoURL}</p>
                    <img className="rounded-full w-10" src={user?.photoURL} alt="" />
                </div> */}

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
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" value={user?.email} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Enter Your photo url" className="input input-bordered" defaultValue={user?.photoURL}/>
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