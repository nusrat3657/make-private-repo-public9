import { useLoaderData } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Banner from "./Banner";
// import { FaRegStar } from "react-icons/fa";
// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import Estates from "../../Estates/Estates";
import { Helmet } from "react-helmet-async";
import 'animate.css';
// import Footer from "../../Footer/Footer";


const Home = () => {
    // const { user } = useContext(AuthContext);
    const estates = useLoaderData();
    console.log(estates);

    return (
        <div>
            <Helmet>
                <title>Eco Domain | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <h3 className="text-3xl font-bold text-center mt-10 ">Our Lands</h3>
                <p className=" mx-auto lg:w-[700px] md:w-[500px] text-center mt-5">Land is considered real estate or property defined by specific borders. It can serve a commercial purpose and be seen as a factor of production. We have many solid lands for sale and rent. Our lands here...</p>
                <div className="md:grid grid-cols-2 lg:gap-10 my-10 gap-2">
                {
                    estates.map(estate => <Estates
                        key={estate.id}
                        estates={estate}
                    ></Estates>)
                }
                </div>
            </div>
            {/* <Footer className='w-[100%]'></Footer> */}
        </div>
    );
};

export default Home;