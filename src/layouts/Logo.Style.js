import styled from "styled-components";
import Logo from "../assets/logo.svg";
import LogoM from "../assets/logo-m.svg";

const StyledLogo = styled.h1`
  display: block;
  width: 153px;
  height: 51px;
  background: url(${Logo}) no-repeat;
  background-size: 100%;
  text-indent: -9999px;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 743px) {
    width: 81px;
    height: 40px;
    background: url(${LogoM}) no-repeat;
    background-size: 100%;
  }
`;

export default StyledLogo;
