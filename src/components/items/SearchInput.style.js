import styled from "styled-components";
import searchIcon from "../../assets/searchInput_icon.svg";

const StyledInput = styled.input`
  border: 0;
  border-radius: 12px;
  background: #f3f4f6 url(${searchIcon}) no-repeat;
  background-size: 24px;
  background-position: 16px 50%;
  width: 325px;
  height: 42px;
  padding: 0 16px 0 44px;
`;

export default StyledInput;
