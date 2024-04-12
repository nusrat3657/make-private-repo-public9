import Navbar from "../../Navbar/Navbar";


const UpdateProfile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 px-24 my-10 animate__animated animate__zoomInDown space-y-4">
                <h1 className="text-3xl font-bold text-[#23BE0A] mb-12 text-center">Update Profile</h1>
                <div className=" text-center">
                    <p className="text-start text-lg font-semibold">Your Name:</p>
                    <input className="w-full p-2 rounded-md mb-4" type="text" name="" id="" />
                    <p className="text-start text-lg font-semibold">Photo URL:</p>
                    <input className="w-full p-2 rounded-md mb-4" type="text" />
                </div>
                <div className="text-center mt-6">
                    <button className="btn bg-[#23BE0A] text-white font-semibold ">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;