import StyledInner from "../layouts/StyledInner.style";

import Header from "../layouts/Header";
import AllProducts from "../components/items/AllProducts";
import BestProducts from "../components/items/BestProducts";
import Footer from "../layouts/Footer";

const Items = () => {
  return (
    <>
      <Header />
      <StyledInner>
        <BestProducts />
        <AllProducts />
      </StyledInner>
      <Footer />
    </>
  );
};

export default Items;
