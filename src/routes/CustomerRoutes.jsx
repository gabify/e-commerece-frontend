import { Navigate, Outlet } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const CustomerRoutes = () =>{
    const {user} = use(AuthContext);

    if(!user) return <Navigate to={'/login'} replace/>
    if(user.type !== 'customer') return <Navigate to={'/401'} replace/>

    return <Outlet />
}

export default CustomerRoutes;