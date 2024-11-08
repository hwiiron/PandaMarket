import StyledAddProductHead from "./AddProductHead.style";

const AddProductHead = ({ disabled }) => {
  return (
    <StyledAddProductHead>
      <h2>상품 등록하기</h2>

      <button disabled={disabled}>등록</button>
    </StyledAddProductHead>
  );
};

export default AddProductHead;
