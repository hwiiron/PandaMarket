import { useEffect, useState } from "react";
import { getAllProducts } from "../../utils/api";
import { StyledProducts, StyledTitle } from "./BestProducts.style";
import { StyledHead, StyledSection } from "./AllProducts.style";

import SkeletonProducts from "./SkeletonProducts";

import Product from "./Product";
import ProductControl from "./ProductControl";
import Paging from "./Paging";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const productDataLoad = async (options) => {
    try {
      setIsLoading(true);
      const { list, totalCount } = await getAllProducts(options);
      setProducts(list);
      setTotalCount(totalCount);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    productDataLoad({ page: currentPage, orderBy: orderBy });
  }, [currentPage, orderBy]);

  // 최신순, 좋아요순
  const recentClick = () => {
    setOrderBy("recent");
  };

  const favoriteClick = () => {
    setOrderBy("favorite");
  };

  // 검색
  const SearchInputChange = (value) => {
    setSearch(value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return products;
    }

    return products.filter((product) =>
      product.name.toUpperCase().includes(search.toUpperCase())
    );
  };

  const filteredData = getFilteredData();

  // 페이징
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <StyledSection>
      <StyledHead>
        <StyledTitle>전체 상품</StyledTitle>
        <ProductControl
          SearchInputChange={SearchInputChange}
          orderBy={orderBy}
          recentClick={recentClick}
          favoriteClick={favoriteClick}
        />
      </StyledHead>

      {!isLoading ? (
        <StyledProducts>
          {filteredData.map((product) => {
            return <Product key={product.id} product={product} type={"ALL"} />;
          })}
        </StyledProducts>
      ) : (
        <SkeletonProducts type={"ALL"} />
      )}

      <Paging
        handlePageChange={handlePageChange}
        totalCount={totalCount}
        currentPage={currentPage}
      />
    </StyledSection>
  );
};

export default AllProducts;
