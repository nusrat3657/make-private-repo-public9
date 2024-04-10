import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <span className="loading loading-dots loading-lg lg: ml-[550px] mt-[300px]"></span>
    }

    if (user) {
       return children; 
    }

    return <Navigate  to='/login'></Navigate>
};

export default PrivateRoute;