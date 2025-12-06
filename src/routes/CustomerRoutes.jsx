import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const CustomerRoutes = () =>{
    const {user} = useAuthContext();

    if(!user) return <Navigate to={'/login'} replace/>
    if(user.type !== 'customer') return <Navigate to={'/401'} replace/>

    return <Outlet />
}

export default CustomerRoutes;