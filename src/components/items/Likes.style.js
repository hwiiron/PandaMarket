import styled from "styled-components";
import Like from "../../assets/like_icon.svg";

const StyledLikes = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
  padding-left: 20px;
  margin-top: 6px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(${Like}) no-repeat;
    background-size: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export default StyledLikes;
