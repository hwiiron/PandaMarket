import { useEffect, useState } from "react";
import { getAllProducts } from "../../utils/api";
import { StyledProducts, StyledTitle } from "./BestProducts.style";
import { StyledHead, StyledSection } from "./AllProducts.style";

import SkeletonProducts from "./SkeletonProducts";

import Product from "./Product";
import ProductControl from "./ProductControl";
import Paging from "./Paging";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [pageSize, setPageSize] = useState(10);

  // 해상도에 따라 pageSize 변경
  useEffect(() => {
    const updatePageSize = () => {
      if (window.innerWidth >= 1200) {
        setPageSize(10); // 데스크탑
      } else if (window.innerWidth >= 744) {
        setPageSize(6); // 태블릿
      } else {
        setPageSize(4); // 모바일
      }
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);

    return () => window.removeEventListener("resize", updatePageSize);
  }, []); // pageSize가 변경될 때마다 itemsLoad 호출

  const productDataLoad = async (options) => {
    try {
      setIsLoading(true);
      const { list, totalCount } = await getAllProducts(options);
      setProducts(list);
      setTotalCount(totalCount);
      setFilteredData(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    productDataLoad({ page: currentPage, orderBy: orderBy, pageSize });
  }, [currentPage, orderBy, pageSize]);

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filteredData = products.filter((product) =>
      product.name.toUpperCase().includes(search.toUpperCase())
    );

    setFilteredData(filteredData);
  };

  // 페이징
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <StyledSection>
      <StyledHead>
        <StyledTitle>전체 상품</StyledTitle>
        <ProductControl
          value={search}
          SearchInputChange={SearchInputChange}
          onSubmit={handleSearchSubmit}
          orderBy={orderBy}
          recentClick={recentClick}
          favoriteClick={favoriteClick}
          setCurrentPage={setCurrentPage}
        />
      </StyledHead>

      {!isLoading ? (
        <StyledProducts type={"ALL"}>
          {filteredData.map((product) => (
            <Link to={`/items/${product.id}`} key={product.id}>
              <Product product={product} type={"ALL"} />
            </Link>
          ))}
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
