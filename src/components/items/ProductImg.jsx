import StyledImg from "./ProductImg.style";

const ProductImg = ({ product }) => {
  return (
    <StyledImg>
      <img src={product.images} alt={product.name} />
    </StyledImg>
  );
};

export default ProductImg;
