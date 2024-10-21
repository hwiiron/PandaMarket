import { Link } from "react-router-dom";
import StyledLogo from "./Logo.Style";

const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/" className="logo"></Link>
    </StyledLogo>
  );
};

export default Logo;
