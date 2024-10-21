import Info from "./ProductInfo.style";

const ProductInfo = ({ product }) => {
  return (
    <Info>
      <dt>{product.name}</dt>
      <dd>{product.price.toLocaleString()}원</dd>
    </Info>
  );
};

export default ProductInfo;
