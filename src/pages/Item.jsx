import { useParams } from "react-router-dom";
import Header from "../layouts/Header";
import StyledInner from "../layouts/StyledInner.style";
import Product from "../components/Item/Product";
import ContactUs from "../components/Item/ContactUs";
import Comments from "../components/Item/Comments";

const Item = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <StyledInner>
        <Product id={id} />
        <ContactUs />
        <Comments id={id} />
      </StyledInner>
    </>
  );
};

export default Item;
