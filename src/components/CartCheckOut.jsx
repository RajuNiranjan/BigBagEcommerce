const CartCheckOut = () => {
  return (
    <div className="flex flex-col gap-3 bg-blue-50 rounded p-5">
      <div>
        <h1 className="font-bold text-lg">Order Details</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>Bag Total</p>
          <p>₹10,237</p>
        </div>
        <div className="flex justify-between">
          <p className="opacity-80">Delivery Fee</p>
          <p>
            Free <span className="line-through">₹99</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p>Order Total</p>
          <p>₹10,237</p>
        </div>
      </div>
      <div className="text-center bg-yellow-600 text-white p-1 font-semibold rounded">
        <button>Procede To Shipping</button>
      </div>
    </div>
  );
};

export default CartCheckOut;
