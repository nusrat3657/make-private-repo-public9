import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";


const Details = () => {
    // const { user } = useContext(AuthContext);
    const estates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);

    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:grid grid-cols-2 gap-10 my-10 lg:mx-0 mx-5">
                <div className="bg-[#23BE0A]/20 rounded-xl p-10 py-20">
                    <img className="rounded-xl" src={estate.image} alt="" />
                </div>
                <div>
                    <h2 className="text-[#23BE0A] text-4xl font-bold">{estate.estate_title}</h2>
                    <p className="my-5 text-lg">{estate.description}</p>
                    <hr />
                    <p className="my-3 text-lg "><span className="font-bold mr-2">Location:  </span> {estate.location}</p>
                    <hr />
                    <p className="text-lg my-4"><span className="font-bold mr-2">Area: </span>{estate.area}</p>
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
                    <div>
                        <Link to="/"><button className="btn border-2 bg-[#23BE0A] text-white mt-2 text-lg">Go Home</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;