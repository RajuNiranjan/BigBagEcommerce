import React, { useContext } from "react";
import ItemCart from "../components/ItemCart";
import { ProductContext } from "../context/ProductContext";

const ProductCategory = (props) => {
  const { ProductData } = useContext(ProductContext);
  return (
    <div>
      <p className="capitalize">
        {props.category}'<span className=" lowercase">s</span> Ware
      </p>
      <div></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {ProductData?.map((item, index) => {
          if (props.category === item.category) {
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
          }
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
