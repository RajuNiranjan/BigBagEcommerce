import React from "react";
import { HomeProductData } from "../data/data";
import ItemCart from "./ItemCart";

const RalatedProducts = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex justify-center gap-5 items-center">
        <hr className=" w-96" />
        <h1 className="text-2xl">Shop More</h1>
        <hr className="w-96" />
      </div>
      <div className="grid grid-cols-5">
        {HomeProductData?.map((item, index) => {
          return (
            <ItemCart
              key={index}
              id={item.id}
              img={item.img}
              brand={item.brand}
              title={item.title}
              new_price={item.new_price}
              old_price={item.old_price}
              off_price={item.off_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RalatedProducts;
