import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'AUTH_READY':
            return {...state, user: action.payload, isLoading: false}
        case 'LOGOUT':
            return {...state, user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isLoading: true
    });

    useEffect(() =>{
        const loadUser = async () =>{
            const user = localStorage.getItem("user");
            const parsed = user ? JSON.parse(user) : null;
            dispatch({type: 'AUTH_READY', payload: parsed});
        }

        loadUser();
    }, [])

    return(
        <AuthContext value={{...state, dispatch}}>
            {children}
        </AuthContext>
    )
}