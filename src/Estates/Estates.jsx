/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import 'animate.css';


const Estates = ({estates}) => {
    // const {user} = useContext(AuthContext);
    return (
        <div className="rounded-xl lg:w-[350px] border-[3px] border-[#23BE0A]/30 lg:p-8 shadow-xl md:p-5 p-6 lg:hover:scale-105 animate__animated animate__zoomIn">
            <figure><img className=" rounded-xl" src={estates.image} alt="" /></figure>
            <div className="">
                <h2 className="text-xl font-bold mt-4 mb-1">{estates.estate_title}</h2>
                <p className="mb-3">{estates.description}</p>
                {/* <p>Total Area: {estates.area}</p> */}
                <p><span className="font-bold">Location:</span> {estates.location}</p>
                <div className="flex my-4 gap-4">
                    <p className="bg-[#23BE0A]/20 text-[#23BE0A] px-4 py-2 rounded-full font-semibold">For {estates.status}</p>
                    <p className="bg-[#23BE0A]/20 text-[#23BE0A] px-4 py-2 rounded-full font-semibold">{estates.price} TK</p>
                </div>
                <div className="flex justify-end pt-4">
                    <Link to={`/estates/${estates.id}`}><button className="btn text-white bg-[#23BE0A]">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Estates;