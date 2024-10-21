import React from "react";
import StyleProduct from "./Product.style";
import Likes from "./Likes";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";

const Product = ({ product }) => {
  return (
    <StyleProduct>
      <article>
        <ProductImg product={product} />

        <ProductInfo product={product} />

        <Likes product={product} />
      </article>
    </StyleProduct>
  );
};

export default Product;
