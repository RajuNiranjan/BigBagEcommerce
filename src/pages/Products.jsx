import React, { useContext } from "react";
import ProductDisplay from "../components/ProductDisplay";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductNavgation from "../components/ProductNavgation";
import RalatedProducts from "../components/RalatedProducts";

const Products = () => {
  const { ProductData } = useContext(ProductContext);
  const { productId } = useParams();
  const product = ProductData.find((e) => e.id === Number(productId));
  console.log("Product ALL Data", product);

  return (
    <>
      <ProductNavgation product={product} />
      <ProductDisplay product={product} />
      <RalatedProducts />
    </>
  );
};

export default Products;
