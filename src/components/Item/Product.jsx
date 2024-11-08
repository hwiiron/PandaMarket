import { Inner, ProductContainer } from "./Product.style";

import { useState, useEffect } from "react";
import { getProduct } from "../../utils/api";
import ProductImg from "./ProductImg";
import ProductDetails from "./ProductDetails";

const Product = ({ id }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    const productDataLoad = async () => {
      const data = await getProduct(id);
      setItem(data);
    };
    productDataLoad();
  }, [id]);

  if (!item) return;

  return (
    <Inner>
      <ProductContainer>
        <ProductImg item={item} />

        <ProductDetails item={item} />
      </ProductContainer>
    </Inner>
  );
};

export default Product;
