import StyledInput from "./SearchInput.style";

const SearchInput = ({ value, SearchInputChange, onSubmit }) => {
  const onChange = (e) => {
    SearchInputChange(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        className="allProduct__searchInput"
        type="text"
        value={value}
        placeholder="검색할 상품을 입력해주세요"
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </form>
  );
};

export default SearchInput;
