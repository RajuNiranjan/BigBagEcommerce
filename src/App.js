import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";

const App = () => {
  return (
    <div className="m-auto container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />}>
            <Route path=":productId" element={<Products />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/mens" element={<ProductCategory category="men" />} />
          <Route
            path="/womens"
            element={<ProductCategory category="women" />}
          />
          <Route path="/kids" element={<ProductCategory category="kids" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
