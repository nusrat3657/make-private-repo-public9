import { Helmet } from "react-helmet-async";
import Navbar from "../../Navbar/Navbar";
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "../../providers/AuthProvider";


const UpdateProfile = () => {

    const {user} = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    const handleUpdate = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('name'));
    }

    // const { id } = useParams();
    // const [values, setValues] = useState({
    //     id: user,
    //     name: '',
    //     image: ''
    // })


    // useEffect(() =>{
    //     axios.get({user})
    //     .then(res => {
    //         console.log(res);
    //         setValues({...values, name: res.data.name, image: res.data.image})
    //     })
    //     .catch(err => console.log(err))
    // }, [])



    return (
        <div>
            <Helmet>
                <title>Eco Domain | Update Profile</title>
            </Helmet>
            <Navbar></Navbar>
            <form onSubmit={handleUpdate} className="bg-[#23BE0A]/20 rounded-lg md:w-3/4 lg:w-1/2 mx-auto p-10 px-24 my-10 animate__animated animate__zoomInDown space-y-4">
                <h1 className="text-3xl font-bold text-[#23BE0A] mb-12 text-center">Update Profile</h1>
                <div className=" text-center">
                    <p className="text-start text-lg font-semibold">Your Name:</p>
                    {isEditing ? (
                    <input className="w-full p-2 rounded-md mb-4" type="text" name="name" defaultValue={user?.displayName} onChange={e => setName(e.target.value)} id="" />
                    ) : (
                        <input className="w-full p-2 rounded-md mb-4" type="text" name="" defaultValue={user?.displayName} id="" />
                    )
                }
                    <p className="text-start text-lg font-semibold">Photo URL:</p>
                    <input className="w-full p-2 rounded-md mb-4" type="text"  name="" defaultValue={user?.photoURL} onChange={e => setImage(e.target.value)} />
                </div>
                <div className="text-center mt-6">
                    <button onClick={handleUpdate} className="btn bg-[#23BE0A] text-white font-semibold ">Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;