import { Navigate, Outlet } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const AuthRoutes = () =>{
    const {user} = use(AuthContext);

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