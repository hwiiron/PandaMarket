import StyledHeader from "./Header.style";
import StyledHeaderInner from "./HeaderInner.style";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ProfileImg from "./ProfileImg";
import Button from "./Button";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <Logo />

        <Navigation />

        <Button type={"LOGIN"} text={"로그인"} to={"/login"} />
        {/* <ProfileImg /> */}
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
