import { Navigate, Outlet } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const PublicRoutes = () =>{
    const {user} = use(AuthContext);

    if(user){
        if(user.type === 'admin') return <Navigate to={'/admin'} replace/>
    }

    return <Outlet />
}

export default PublicRoutes;