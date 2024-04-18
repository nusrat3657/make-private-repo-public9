import { useContext } from "react";
import Navbar from "../../Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import 'animate.css';
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <Helmet>
                <title>Eco Domain | User Profile</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 my-10 animate__animated animate__zoomInDown text-center space-y-4 ">
                <h1 className="text-3xl font-bold text-[#23BE0A] mb-12">User Profile</h1>
                <img className="mx-auto rounded-full w-24 " src={user.photoURL} alt="" />
                <br />
                <h3 className="text-xl font-bold">{user.displayName}</h3>
                <p><span className="font-bold">Email: </span>{user.email}</p>
                <p><span className="font-bold">User ID: </span>{user.uid}</p>
            </div>
        </div>
    );
};

export default UserProfile;