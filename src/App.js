import logo from "./logo.svg";
import "./App.css";

import Admin from "./Public/Admin/Admin";
import Public from "./Public/Public";
import Home from "./Public/Module/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RiceDetails from "./Public/Module/Home/Foods/RiceDetails/RiceDetails";
import SoftDrinks from "./Public/Module/Home/Drinks/SoftDrinks/SoftDrinks";
import CreateFoods from "./Public/Admin/CreateFoods/CreateFoods";

import { CartProvider } from "./Public/Module/Contexts/Cart";
import { useEffect, useState } from "react";
import ViewCart from "./Public/Module/Home/Drinks/ViewCart/ViewCart";
import { Login } from "./Public/Module/Auth/Login/Login";
import { Register } from "./Public/Module/Auth/Register/Register";
import { PageError } from "./Public/Module/Shared/ErrorPage/PageError";
import OrderDetails from "./Public/Module/Home/OrderDetails/OrderDetails";
import Foods from "./Public/Module/Home/Foods/Foods";
import Sidebar from "./Public/Module/Shared/SideBar/Sidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState([])
  

  

  const handleClick = (item) => {
   if(cart.indexOf(item) !== -1) return;
   setCart([...cart, item]);
  // const arr =[]
  // arr.push(list);
  // console.log(cart);
  // setCart(arr)
  }  

  
  // useEffect(() => {
  //   console.log("cartttttt");
  // },[cart]);
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="rice-details" element={<RiceDetails />} />
            <Route path="foods-details" element={<Foods />} />
            <Route path="view-cart" element={<ViewCart cart={cart} setCart={setCart}  />} />
            <Route path="soft-drinks" element={<SoftDrinks handleClick={handleClick} />} />
            <Route path="order-details" element={<OrderDetails />} />
          </Route>
        </Routes>
      </CartProvider>

      <Routes>
        <Route path="/account-login" element={<Login />} />
        <Route path="/account-register" element={<Register />} />

      </Routes>


      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="admin-create-foods" element={<CreateFoods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
