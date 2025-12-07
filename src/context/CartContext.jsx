import { createContext, use, useEffect, useReducer } from "react";
import {AuthContext} from "../context/AuthContext";

export const CartContext = createContext();

export const cartReducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_CART':
            return {cart: action.payload}
        case 'ADD_TO_CART':
            return {cart: [...state, action.payload]}
        case 'REMOVE_TO_CART':
            return {cart: state.filter((item) => item.id !== action.payload)}
        default:
            return state
    }
}


export const CartContextProvider = ({children}) =>{
    const { user } = use(AuthContext);

    const [state, dispatch] = useReducer(cartReducer, {
        cart: null
    });

    useEffect(() =>{
        const api = import.meta.env.VITE_API;

        const fetchCart = async(id, token) =>{
            const response = await fetch(`${api}cart/all/${id}`, {
                method: "GET",
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type'  : 'application/json',
                }
            });
            const data = await response.json();

            if(!response.ok){
                throw new Error('An error occured. Please try agin later');
            }

            if(!data.success){
                throw new Error(`An error on your end. We'll try to fix immediately`)
            }

            dispatch({type: 'FETCH_CART', payload: data.message})
        }

        if(!user) return;

        if(user.type === 'customer'){
            fetchCart(user.id, user.token);
        }

    }, [user]);

    return(
        <CartContext value={{...state, dispatch}}>
            {children}
        </CartContext>
    )
}