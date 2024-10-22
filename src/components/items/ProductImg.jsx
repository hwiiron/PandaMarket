import StyledImg from "./ProductImg.style";
import defaultImg from "../../assets/codeit.svg";

const ProductImg = ({ product, type }) => {
  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };

  return (
    <StyledImg type={type}>
      <img src={product.images} alt={product.name} onError={handleImgError} />
    </StyledImg>
  );
};

export default ProductImg;
