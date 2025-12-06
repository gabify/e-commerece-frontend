import { BrowserRouter,  Route, Routes} from "react-router-dom";
import {useAuthContext} from '../src/hooks/useAuthContext.jsx';
import { Navigate } from "react-router-dom";

import Home from "../src/pages/public/Home";
import PublicProducts from "../src/pages/public/Products";
import ViewProduct from "../src/pages/public/ViewProduct";
import Category from "../src/pages/public/Category";

import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";

import Cart from "../src/pages/user/Cart";
import Checkout from "../src/pages/user/Checkout";
import UserOrders from "../src/pages/user/Orders";
import ViewOrder from "../src/pages/user/ViewOrder";
import Profile from "../src/pages/user/Profile";

import Dashboard from "../src/pages/admin/Dashboard";
import AdminProducts from "../src/pages/admin/Products";
import AdminOrders from "../src/pages/admin/Orders";
import Categories from "../src/pages/admin/Categories";

import Loading from "../src/pages/others/Loading";
import NotFound from "../src/pages/others/NotFound";
import NotAuthorized from "../src/pages/others/NotAuthorized";
import Error from "../src/pages/others/Error";

import AuthRoutes from "../src/routes/AuthRoutes.jsx";
import CustomerRoutes from "../src/routes/CustomerRoutes.jsx";
import AdminRoutes from "../src/routes/AdminRoutes.jsx";


function App() {
  const {user, isLoading} = useAuthContext();

  if(isLoading){
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        {/*User Routes */}
         <Route element={<CustomerRoutes />}>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/orders" element={<UserOrders/>}/>
            <Route path="/order/:id" element={<ViewOrder/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Route>

        {/*Admin Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<Dashboard />}/>
          <Route path="/admin/products" element={<AdminProducts />}/>
          <Route path="/admin/orders" element={<AdminOrders />}/>
          <Route path="/admin/categories" element={<Categories />}/>
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Route>

        {/*Public Routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<PublicProducts />}/>
        <Route path="/products/:id" element={<ViewProduct />}/>
        <Route path="/categories/:id" element= {<Category />}/>
        
        {/*Error and Misc Pages */}
        <Route path="/loading" element={<Loading />}/>
        <Route path="/404" element={<NotFound />}/>
        <Route path="/500" element={<Error />}/>
        <Route path="/401" element={<NotAuthorized />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
