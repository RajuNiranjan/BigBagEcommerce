import React, { useContext } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const ProductDisplay = (props) => {
  const { product } = props;

  const { addToCart } = useContext(ProductContext);

  return (
    <>
      <div className="bg-blue-50 p-5 max-h-max flex mb-5">
        <div className="product-left flex gap-5 basis-6/12 ">
          <div className=" flex flex-col justify-center items-center gap-5 basis-1/4">
            <img
              className="w-24"
              src="https://assets.ajio.com/medias/sys_master/root/20231124/t8Sk/6560a64bafa4cf41f59d0361/-473Wx593H-466822694-black-MODEL.jpg"
              alt=""
            />
            <img
              className="w-24"
              src="https://assets.ajio.com/medias/sys_master/root/20231124/t8Sk/6560a64bafa4cf41f59d0361/-473Wx593H-466822694-black-MODEL.jpg"
              alt=""
            />
            <img
              className="w-24"
              src="https://assets.ajio.com/medias/sys_master/root/20231124/t8Sk/6560a64bafa4cf41f59d0361/-473Wx593H-466822694-black-MODEL.jpg"
              alt=""
            />
          </div>

          <div className="flex justify-center items-center basis-3/4">
            <img className="w-96" src={product.img} alt="" />
            {/* <ProductSwiper product={product} /> */}
          </div>
        </div>
        <div className="product-right basis-6/12 flex flex-col justify-center items-center ">
          <div className="text-center mb-5">
            <h1 className="text-amber-600 text-2xl">{product.brand}</h1>
            <p className="text-[14px]">{product.title}</p>
            <p className="text-2xl">₹{product.new_price}</p>
            <p className="text-amber-600">
              MRP <span className="line-through">₹{product.old_price}</span>
              <span>{`(${product.off_price}%)OFF`}</span>
            </p>
            <p>Price inclusive of all taxes</p>
          </div>
          <div className="mb-5">
            <h1 className="text-center mb-3">Select Size</h1>
            <div className="flex gap-3">
              <p className="flex justify-center items-center border-black border-2 rounded-full h-5 w-5 p-4 hover:bg-black hover:text-white cursor-pointer">
                S
              </p>
              <p className="flex justify-center items-center border-black border-2 rounded-full h-5 w-5 p-4 hover:bg-black hover:text-white cursor-pointer">
                M
              </p>
              <p className="flex justify-center items-center border-black border-2 rounded-full h-5 w-5 p-4 hover:bg-black hover:text-white cursor-pointer">
                L
              </p>
              <p className="flex justify-center items-center border-black border-2 rounded-full h-5 w-5 p-4 hover:bg-black hover:text-white cursor-pointer">
                XL
              </p>
              <p className="flex justify-center items-center border-black border-2 rounded-full h-5 w-5 p-4 hover:bg-black hover:text-white cursor-pointer ">
                XXL
              </p>
            </div>
          </div>
          <Link
            to="https://www.google.com/maps/@17.4330279,78.3728344,15z?entry=ttu"
            target="_blank"
            className="flex h-10 bg-amber-100 justify-center items-center px-3 py-3 mb-5">
            <LocationOnOutlinedIcon />
            <p>Select your size to know your estimated delivery date.</p>
          </Link>
          <div className="flex flex-col gap-5 mb-5">
            <button
              onClick={() => {
                addToCart(product.id);
                alert("Item Added To Cart 😊");
              }}
              className=" bg-yellow-700 rounded w-[400px] py-3 text-xl text-white font-semibold flex justify-center items-center gap-2">
              <ShoppingBagOutlinedIcon />
              ADD TO BAG
            </button>
            <button
              onClick={() => {
                addToCart(product.id);
                alert("Item Added To WishList 😊");
              }}
              className=" border  border-yellow-700 text-yellow-700 rounded w-[400px] py-3 text-xl  font-semibold flex justify-center items-center gap-2">
              <FavoriteBorderOutlinedIcon />
              SAVE TO WISHLIST
            </button>
          </div>
          <div className="text-left">
            <h1>Product Details</h1>
            <ul>
              {product.ProductDeatails.map((list) => {
                return <li key={list}>&bull; {list}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
