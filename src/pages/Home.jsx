import React from "react";
import NewArrivals from "../components/NewArrivals";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <img
        className="mb-5"
        src="https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-07122023-TRUSTMARKER.jpg"
        alt=""
      />
      <NewArrivals />
      
    </>
  );
};

export default Home;
