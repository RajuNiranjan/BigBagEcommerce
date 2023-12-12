import React, { useContext } from "react";
import logo from "../asserts/logo.png";
import { Link } from "react-router-dom";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ProductContext } from "../context/ProductContext";

const Nav = () => {
  const { quantity } = useContext(ProductContext);

  return (
    <nav className="w-full bg-gray-200 p-2 flex items-center justify-between px-20 mb-5 z-30 top-0 sticky">
      <Link to={"/"} onClick={window.scrollTo(0, 0)}>
        <div className="logo flex items-center gap-2 text-xl font-semibold ">
          <img className="w-8" src={logo} alt="" />
          <h1>
            <span className="font-bold text-red-600">B</span>ig
            <span className="font-bold text-yellow-500">B</span>ag
          </h1>
        </div>
      </Link>
      <div className="nav-cener flex gap-5 font-semibold">
        <Link to="/mens">Men</Link>
        <Link to="/womens">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="nav-right flex items-center gap-5">
        <Link to="/cart" className="nav-shop-cart-icon">
          <ShoppingBagOutlinedIcon className="relative" />
          <span className="h-5 w-5 bg-red-500 rounded-full absolute items-center justify-center flex top-1 text-sm font-semibold text-white ml-2 ">
            {quantity}
          </span>
        </Link>
        <Link to="/wishlist" className="nav-wish-list-icon">
          <FavoriteBorderOutlinedIcon />
          <span className="h-5 w-5 bg-red-500 rounded-full absolute items-center justify-center flex top-1 text-sm font-semibold text-white ml-2 ">
            {quantity}
          </span>
        </Link>
        <Link to="/login">
          <button className="bg-yellow-500 h-10  font-semibold px-3 rounded-md text-sm flex items-center justify-center">
            <AccountCircleOutlinedIcon
              // className="text-[20px]"
              style={{ fontSize: "20px" }}
            />
            Account
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
