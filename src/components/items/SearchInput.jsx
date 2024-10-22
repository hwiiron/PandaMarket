import StyledInput from "./SearchInput.style";

const SearchInput = ({ SearchInputChange }) => {
  const onChange = (e) => {
    SearchInputChange(e.target.value);
  };

  return (
    <StyledInput
      className="allProduct__searchInput"
      type="text"
      placeholder="검색할 상품을 입력해주세요"
      onChange={onChange}
    />
  );
};

export default SearchInput;
