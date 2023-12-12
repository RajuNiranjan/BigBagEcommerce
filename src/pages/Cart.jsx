import React from "react";
import CartTable from "../components/CartTable";
import CartCheckOut from "../components/CartCheckOut";

const Cart = () => {
  return (
    <div className="sm:flex sm:gap-5 sm:flex-col md:flex-col lg:flex-row xl:flex-row ">
      <div className="basis-4/5 mb-5">
        <CartTable />
      </div>
      <div className="basis-1/5">
        <CartCheckOut />
      </div>
    </div>
  );
};

export default Cart;
