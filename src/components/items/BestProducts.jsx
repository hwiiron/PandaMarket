import React, { useEffect, useState } from "react";
import { getBestProducts } from "../../utils/api";
import { StyledProducts, StyledTitle } from "./BestProducts.style";

import SkeletonProducts from "./SkeletonProducts";

import Product from "./Product";
import { Link } from "react-router-dom";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [pageSize, setPageSize] = useState(4);

  // 해상도에 따라 pageSize 변경
  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth >= 1200) {
        setPageSize(4); // 데스크탑
      } else if (window.innerWidth >= 744) {
        setPageSize(2); // 태블릿
      } else {
        setPageSize(1); // 모바일
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const productDataLoad = async () => {
    try {
      setIsLoading(true);
      const { list } = await getBestProducts(pageSize);
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
  }, [pageSize]);

  // if (!products) return;

  return (
    <section>
      <StyledTitle>베스트 상품</StyledTitle>

      {!isLoading ? (
        <StyledProducts type={"BEST"}>
          {products.map((product) => (
            <Link to={`/items/${product.id}`} key={product.id}>
              <Product product={product} type={"BEST"} />
            </Link>
          ))}
        </StyledProducts>
      ) : (
        <SkeletonProducts type={"BEST"} />
      )}
    </section>
  );
};

export default BestProducts;
