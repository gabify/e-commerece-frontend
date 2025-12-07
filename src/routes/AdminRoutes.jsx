import { Navigate, Outlet } from "react-router-dom";

import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const AdminRoutes = () =>{
    const {user} = use(AuthContext);

    if(!user) return <Navigate to={'/login'} replace/>
    if(user.type !== 'admin') return <Navigate to={'/401'} replace/>

    return <Outlet />
}

export default AdminRoutes;