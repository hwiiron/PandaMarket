import styled from "styled-components";

const StyledImg = styled.figure`
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  width: ${(props) => {
    switch (props.type) {
      case "BEST":
        return "282px";
      case "ALL":
        return "221px";
    }
  }};
  height: ${(props) => {
    switch (props.type) {
      case "BEST":
        return "282px";
      case "ALL":
        return "221px";
    }
  }};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default StyledImg;
