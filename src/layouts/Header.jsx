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

        <Button text={"로그인"} disabled={false} />
        {/* <ProfileImg /> */}
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
