import React from "react";
import StyleProduct from "./Product.style";
import Likes from "./Likes";
import ProductImg from "./ProductImg";
import ProductInfo from "./ProductInfo";

const Product = ({ product, type }) => {
  return (
    <StyleProduct type={type}>
      <article>
        <ProductImg product={product} type={type} />

        <ProductInfo product={product} />

        <Likes product={product} />
      </article>
    </StyleProduct>
  );
};

export default Product;
