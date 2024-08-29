// app.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import ProductListing from "./ProductListing.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import Checkout from "./Checkout.jsx";

const App = () => (
  <Router basename="/Shop-Wave/">
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>
);

export default App;
