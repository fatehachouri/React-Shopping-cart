import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartItem from "./components/CartItem";
import { ShoppingContext } from "./components/context/ShoppingContext";

function App() {
  const [products,setProducts]=useState([
    {
      id:1,
      name:'Samsung S10',
      price:350,
      image:'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_1280.jpg'
    },
    {
      id:2,
      name:'Iphone 12',
      price:740,
      image:'https://cdn.pixabay.com/photo/2020/11/18/13/51/iphone-12-5755365_1280.jpg'
    },
    {
      id:3,
      name:'Samsung Tv',
      price:400,
      image:'https://cdn.pixabay.com/photo/2017/02/22/16/47/living-room-2089893_1280.png'
    },
    {
      id:4,
      name:'OnePlus 10 pro',
      price:620,
      image:'https://cdn.pixabay.com/photo/2016/05/07/05/17/one-plus-1377073_1280.jpg'
    },
  ])
   
  const [cartItems,setCartItems]=useState([]);
  


  return (
    <ShoppingContext.Provider 
    value={{cartItems,products}}>
    <div className="container">
    <Header  />
    <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path="/cart"  exact element={< CartItem />}/>
    </Routes>
    </div>
    </ShoppingContext.Provider>
  );
}

export default App;
