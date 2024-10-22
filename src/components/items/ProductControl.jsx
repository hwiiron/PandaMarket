import StyledControl from "./ProductControl.style";
import SearchInput from "./SearchInput";
import Button from "../../layouts/Button";
import CustomSelect from "./CustomSelect";

const ProductControl = ({
  SearchInputChange,
  orderBy,
  recentClick,
  favoriteClick,
}) => {
  return (
    <StyledControl>
      <SearchInput SearchInputChange={SearchInputChange} />

      <Button text={"상품 등록하기"} to={"/additem"} />

      <CustomSelect
        orderBy={orderBy}
        recentClick={recentClick}
        favoriteClick={favoriteClick}
      />
    </StyledControl>
  );
};

export default ProductControl;
