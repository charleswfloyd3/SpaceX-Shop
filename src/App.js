// import './App.css'
import React,{useState} from "react";
import Homepage from "./webpages/homepage/homepage";
import { Routes, Route}  from 'react-router-dom';
import Mens from "./webpages/mens/mens";
import Womens from "./webpages/womens/womens";
import Accessories from "./webpages/accessories/accessories";
import Kids from "./webpages/kids/kids";
import Premium from "./webpages/premium/premium";
import Account from "./webpages/account/account";
import Product from "./webpages/product/product";
import Cart from "./webpages/cart/cart";
import { useProduct } from '../src/store/productclicked'
import Featured from "./webpages/featured/featured";
function App() {
  const {cartproduct} = useProduct()
//   window.onbeforeunload = function() {
//     return "you can not refresh the page";
// }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/collections/mens" element={<Mens />} />
        <Route exact path="/collections/womens" element={<Womens />} />
        <Route exact path="/collections/kids" element={<Kids />} />
        <Route exact path="/collections/accessories" element={<Accessories />} />
        <Route exact path="/collections/premium" element={<Premium />} />
        <Route exact path="/collections/featuredproducts" element={<Featured />} />

        <Route exact path="/account/login" element={<Account />} />
        <Route exact path="/productpage" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
