import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center px-28">
            <h1 className="text-[250px] font-bold">404</h1>
            <h2 className="text-5xl playfair font-bold mb-2">Opps!!! This page are not found.</h2>
            <p className="text-2xl mt-5 font-semibold">Go Home...</p>
            <button className="btn px-10  my-5 rounded-lg bg-[#23BE0A] text-white text-2xl"><Link to="/">Back Home</Link></button>
        </div>
    );
};

export default ErrorPage;