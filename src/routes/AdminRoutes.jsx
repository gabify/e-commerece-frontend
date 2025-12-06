import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const AdminRoutes = () =>{
    const {user} = useAuthContext();

    if(!user) return <Navigate to={'/login'} replace/>
    if(user.type !== 'admin') return <Navigate to={'/401'} replace/>

    return <Outlet />
}

export default AdminRoutes;