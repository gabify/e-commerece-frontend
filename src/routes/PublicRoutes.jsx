import { Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ViewProduct from "../pages/public/ViewProduct";
import Category from "../pages/public/Category";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";

const PublicRoutes = (
    <>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ViewProduct />}/>
        <Route path="/categories/:id" element= {<Category />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
    </>
)

export default PublicRoutes;