import { Route, Routes } from "react-router-dom";
import CartFoods from "./FoodsDetails/CartFoods/CartFoods";
import FoodsDetails from "./FoodsDetails/FoodsDetails";
import { useState } from "react";
import { useEffect } from "react";

import "./Foods.scss";
import "./Foods.css";
import Sidebar from "../../Shared/SideBar/Sidebar";

const Foods = () => {
  const [lists, setLists] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://order-foods.herokuapp.com/api/v1/foods/list")
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists.Pageable.content);
      });
  }, []);

  const onAdd = (lists) => {
    const exist = cartItems.find((x) => x.id === lists.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === lists.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, {...lists, qty: 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <div id="foods">
        {/* <div className="container"> */}
        <div className="row">
          
          <FoodsDetails onAdd={onAdd} lists={lists} />
          <CartFoods onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}/>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Foods;
