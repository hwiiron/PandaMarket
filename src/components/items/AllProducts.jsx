import { useEffect, useState } from "react";
import { getAllProducts } from "../../utils/api";
import { StyledProducts, StyledTitle } from "./BestProducts.style";
import { StyledSection } from "./AllProducts.style";

import Product from "./Product";
import SkeletonProducts from "./SkeletonProducts";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const productDataLoad = async () => {
    try {
      setIsLoading(true);
      const { list } = await getAllProducts();
      setProducts(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    productDataLoad();
  }, []);

  console.log(products);

  return (
    <StyledSection>
      <StyledTitle>전체 상품</StyledTitle>

      {!isLoading ? (
        <StyledProducts>
          {products.map((product) => {
            return <Product key={product.id} product={product} type={"ALL"} />;
          })}
        </StyledProducts>
      ) : (
        <SkeletonProducts type={"ALL"} />
      )}
    </StyledSection>
  );
};

export default AllProducts;
