import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProductNavgation = (props) => {
  const { product } = props;
  return (
    <div className="flex items-center mb-5">
      Home
      <KeyboardArrowRightIcon style={{ fontSize: "18px" }} />
      Product
      <KeyboardArrowRightIcon style={{ fontSize: "18px" }} />
      {product.ProductType}
      <KeyboardArrowRightIcon style={{ fontSize: "18px" }} />
      {product.brand}
      <KeyboardArrowRightIcon style={{ fontSize: "18px" }} />
      {product.title}
    </div>
  );
};

export default ProductNavgation;
