import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogout = () =>{
    const {dispatch} = use(AuthContext);

    const logout = () =>{
        localStorage.removeItem("user");
        dispatch({type: 'LOGOUT'})
    }

    return {logout};
}
