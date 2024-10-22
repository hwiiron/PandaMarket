import React, { useEffect, useState } from "react";
import { getBestProducts } from "../../utils/api";
import { StyledProducts, StyledTitle } from "./BestProducts.style";

import SkeletonProducts from "./SkeletonProducts";

import Product from "./Product";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const productDataLoad = async () => {
    try {
      setIsLoading(true);
      const { list } = await getBestProducts();
      setProducts(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // productDataLoad 함수를 실행하면 product 상태가 바뀌므로 리렌더링
  // useEffect 사용하여 첫 렌더링에만 productDataLoad 함수가 실행되게 하여 무한 렌더링 방지
  useEffect(() => {
    productDataLoad();
  }, []);

  // if (!products) return;

  return (
    <section>
      <StyledTitle>베스트 상품</StyledTitle>

      {!isLoading ? (
        <StyledProducts>
          {products.map((product) => {
            return <Product key={product.id} product={product} type={"BEST"} />;
          })}
        </StyledProducts>
      ) : (
        <SkeletonProducts type={"BEST"} />
      )}
    </section>
  );
};

export default BestProducts;
