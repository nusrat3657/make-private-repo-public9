import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-dots loading-lg lg: ml-[550px] mt-[350px]"></span>
    }

    if (user) {
       return children; 
    }

    // return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;