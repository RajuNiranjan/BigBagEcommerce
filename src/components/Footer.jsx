import React from "react";
import logo from "../asserts/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 h-[30vh] w-full mt-5 px-20 py-10 flex flex-col gap-5 items-center justify-center">
      <Link
        to="/"
        onClick={window.scrollTo(0, 0)}
        className="logo flex items-center justify-center gap-5">
        <img src={logo} alt="" className="" />
        <h1 className="text-5xl font-bold">
          <span className="text-red-500">B</span>ig
          <span className="text-yellow-500">B</span>ag
        </h1>
      </Link>
      <div className="flex flex-col gap-2 justify-center ">
        <p className="text-center text-sm">Follow Us On</p>
        <div className="flex gap-5">
          <YouTubeIcon className="h-10 w-10 shadow-lg rounded-full p-1 cursor-pointer" />
          <TwitterIcon className="h-10 w-10 shadow-lg rounded-full p-1 cursor-pointer" />
          <FacebookIcon className="h-10 w-10 shadow-lg rounded-full p-1 cursor-pointer" />
          <InstagramIcon className="h-10 w-10 shadow-lg rounded-full p-1 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
