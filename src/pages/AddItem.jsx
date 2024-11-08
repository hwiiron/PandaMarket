import Header from "../layouts/Header";
import StyledInner from "../layouts/StyledInner.style";
import AddProduct from "../components/addItem/AddProduct";
import Footer from "../layouts/Footer";

const AddItem = () => {
  return (
    <>
      <Header />
      <StyledInner>
        <AddProduct />
      </StyledInner>
      <Footer />
    </>
  );
};

export default AddItem;
