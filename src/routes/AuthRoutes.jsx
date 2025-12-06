import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const AuthRoutes = () =>{
    const {user} = useAuthContext();

    if(user){
       if(user.type === 'admin'){
         return <Navigate to={"/admin"} replace/>
       }

       if(user.type === 'customer'){
         return <Navigate to={"/"} replace/>
       }
    }

    return <Outlet />
}

export default AuthRoutes;