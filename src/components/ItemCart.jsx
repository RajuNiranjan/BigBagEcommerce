import React from "react";
import { Link } from "react-router-dom";

const ItemCart = (props) => {
  return (
    <div>
      <div className="flex flex-col shadow-xl w-[250px] h-[450px] justify-evenly gap-1 rounded">
        <Link
          to={`/product/${props.id}`}
          className="img-container flex mb-2 "
          onClick={window.scrollTo(0, 0)}>
          <img className="w-60" src={props.img} alt="" />
        </Link>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="brand text-amber-600 text-2xl">{props.brand}</p>
          <p className="title text-[12px] text-center">{props.title}</p>
          <div className="flex gap-3 justify-center items-center">
            <p className="new_price text-2xl">₹{props.new_price}</p>
            <p className="old_price text-sm line-through">₹{props.old_price}</p>
            <p className="dis text-amber-600 text-[16px]">{`(${props.off_price}%)`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
