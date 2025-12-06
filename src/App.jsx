import { BrowserRouter,  Route, Routes} from "react-router-dom";
import {useAuthContext} from '../src/hooks/useAuthContext.jsx';
import { Navigate } from "react-router-dom";

import Home from "../src/pages/public/Home";
import PublicProducts from "../src/pages/public/Products";
import ViewProduct from "../src/pages/public/ViewProduct";
import Category from "../src/pages/public/Category";
import Login from "../src/pages/public/Login";
import Register from "../src/pages/public/Register";

import Cart from "../src/pages/user/Cart";
import Checkout from "../src/pages/user/Checkout";
import UserOrders from "../src/pages/user/Orders";
import ViewOrder from "../src/pages/user/ViewOrder";
import Profile from "../src/pages/user/Profile";

import Dashboard from "../src/pages/admin/Dashboard";
import AdminProducts from "../src/pages/admin/Products";
import AdminOrders from "../src/pages/admin/Orders";
import Categories from "../src/pages/admin/Categories";

import NotFound from "../src/pages/others/NotFound";
import NotAuthorized from "../src/pages/others/NotAuthorized";
import Error from "../src/pages/others/Error";


function App() {
  const {user} = useAuthContext();

  console.log(user)

  return (
    <BrowserRouter>
      <Routes>
        {/*Public Routes */}
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<PublicProducts />}/>
        <Route path="/products/:id" element={<ViewProduct />}/>
        <Route path="/categories/:id" element= {<Category />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
        <Route path="/register" element={<Register />}/>

        {/*User Routes */}
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login"/>}/>
        <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="/login"/>}/>
        <Route path="/orders" element={user ? <UserOrders /> : <Navigate to="/login"/>}/>
        <Route path="/order/:id" element={user ? <ViewOrder /> : <Navigate to="/login"/>}/>
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login"/>}/>

        {/*Admin Routes */}
        <Route path="/admin" element={user ? <Dashboard /> : <Navigate to="/login"/>}/>
        <Route path="/admin/products" element={user ? <AdminProducts /> : <Navigate to="/login"/>}/>
        <Route path="/admin/orders" element={user ? <AdminOrders /> : <Navigate to="/login"/>}/>
        <Route path="/admin/categories" element={<Categories />}/>

        {/*Error and Misc Pages */}
        <Route path="/404" element={<NotFound />}/>
        <Route path="/500" element={<Error />}/>
        <Route path="/401" element={<NotAuthorized />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
