import { Route } from "react-router-dom";
import Cart from "../pages/user/Cart";
import Checkout from "../pages/user/Checkout";
import Orders from "../pages/user/Orders";
import ViewOrder from "../pages/user/ViewOrder";
import Profile from "../pages/user/Profile";

const UserRoutes = () =>{
    return(
        <>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/orders" element={<Orders />}/>
            <Route path="/order/:id" element={<ViewOrder />}/>
            <Route path="/profile" element={<Profile />}/>
        </>
    )
}

export default UserRoutes;