import StyledControl from "./ProductControl.style";
import SearchInput from "./SearchInput";
import Button from "../../layouts/Button";
import CustomSelect from "./CustomSelect";

const ProductControl = ({
  value,
  SearchInputChange,
  onSubmit,
  orderBy,
  recentClick,
  favoriteClick,
  setCurrentPage,
}) => {
  return (
    <StyledControl>
      <SearchInput
        value={value}
        SearchInputChange={SearchInputChange}
        onSubmit={onSubmit}
      />

      <Button text={"상품 등록하기"} to={"/additem"} />

      <CustomSelect
        orderBy={orderBy}
        recentClick={recentClick}
        favoriteClick={favoriteClick}
        setCurrentPage={setCurrentPage}
      />
    </StyledControl>
  );
};

export default ProductControl;
