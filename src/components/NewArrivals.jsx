import React from "react";
import ItemCart from "./ItemCart";
import { HomeProductData } from "../data/data";

const NewArrivals = () => {
  return (
    <div>
      <h1 className="bg-black text-white px-3 py-2 rounded-sm mb-5 font-bold max-w-max">
        NEW ARRIVALS
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-x-5 gap-y-5 m-auto ">
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

export default NewArrivals;
