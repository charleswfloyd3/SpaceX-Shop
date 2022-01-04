// import './App.css'
import React from "react";
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
import Featured from "./webpages/featured/featured";
import Checkout from "./webpages/checkout/checkout";
import Mensshirts from "./webpages/mens-shirts/mensshirts";
import Mensouterwear from "./webpages/mens-outerwear/mensouterwear";
import Womensouterwear from "./webpages/womens-outerwear/womensouterwear";
import Womensshirts from "./webpages/womens-shirts/womensshirts";
import Kidsouterwear from "./webpages/kids-outerwear/kidsouterwear";
import Kidsshirts from "./webpages/kids-shirts/kidsshirts";
import Ourproducts from "./webpages/ourproducts/ourproducts";
import Ourproducts2 from "./webpages/ourproducts/ourproducts2";
function App() {
//   window.onbeforeunload = function() {
//     return "you can not refresh the page";
// }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/collections/mens" element={<Mens />} />
        <Route exact path="/collections/mens-shirts" element={<Mensshirts />} />
        <Route exact path="/collections/mens-outerwear" element={<Mensouterwear />} />

        <Route exact path="/collections/womens" element={<Womens />} />
        <Route exact path="/collections/womens-shirts" element={<Womensshirts />} />
        <Route exact path="/collections/womens-outerwear" element={<Womensouterwear />} />

        <Route exact path="/collections/kids" element={<Kids />} />
        <Route exact path="/collections/kids-shirts" element={<Kidsshirts />} />
        <Route exact path="/collections/kids-outerwear" element={<Kidsouterwear />} />

        <Route exact path="/collections/accessories" element={<Accessories />} />
        <Route exact path="/collections/premium" element={<Premium />} />
        <Route exact path="/collections/featuredproducts" element={<Featured />} />
        <Route exact path="/collections/all" element={<Ourproducts />} />
        <Route exact path="/collections/all-page2" element={<Ourproducts2 />} />

        <Route exact path="/account/login" element={<Account />} />
        <Route exact path="/productpage" element={<Product />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />

      </Routes>
    </div>
  );
}

export default App;
