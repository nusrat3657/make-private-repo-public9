import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
// import { useState } from "react";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";


const Details = () => {
    // const { user } = useContext(AuthContext);
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);

    // const [lands, setLands] = useState([]);

    // const handleLands = (est) => {
    //     // saveLands(idInt);
    //     if (!estate) {
    //         setLands([...lands, est]);
    //     }
    //     else {
    //         toast('This card has been already exist');
    //     }
    // }

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 gap-10 my-10 lg:mx-0 mx-5">
                <div className="bg-[#23BE0A]/20 rounded-xl p-10 py-20 animate__animated animate__rotateInDownLeft" >
                    <img className="rounded-xl" src={estate.image} alt="" />
                </div>
                <div className="animate__animated animate__rotateInDownRight">
                    <h2 className="text-[#23BE0A] text-4xl font-bold">{estate.estate_title}</h2>
                    <p className="font-semibold">{estate.segment_name}</p>
                    <p className="my-5 text-lg">{estate.description}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Location:  </span> {estate.location}</p>
                    <hr />
                    <p className="text-lg my-4 font-bold">Area: <span className=" mr-2 bg-[#23BE0A]/20 text-[#23BE0A] px-4 py-2 rounded-full font-semibold">{estate.area}</span></p>
                    <div className=" my-4">
                        <hr />
                        <p className="flex text-lg gap-3 mt-4"><span className="font-bold mt-1">Facilities: </span> </p>
                        {
                            estate.facilities.map(fc => (

                                // eslint-disable-next-line react/jsx-key
                                <li className="mt-2">{fc}</li>

                            ))
                        }
                    </div>
                    <hr />
                    <div className="flex gap-5 my-6">
                        <div className="flex gap-3">
                            <p className=" text-lg font-bold ">Status: <span className=" bg-[#23BE0A]/20 text-[#23BE0A] px-4 py-2 rounded-full font-semibold">{estate.status}</span></p>
                        </div>
                        <div className="flex gap-3">
                            <p className="text-lg font-bold">Price: <span className=" bg-[#23BE0A]/20 text-[#23BE0A] px-4 py-2 rounded-full font-semibold">{estate.price} Tk</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className="space-x-4 mt-2">
                        {/* <Link to="/lands" onClick={() => handleLands(estate)}><button className="btn border-2 bg-[#23BE0A]/20 text-[#23BE0A] mt-2 text-lg">For {estate.status}</button></Link> */}
                        <Link to="/"><button className="btn border-2 bg-[#23BE0A]  text-white mt-2 text-lg">Go Home</button></Link>

                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Details;