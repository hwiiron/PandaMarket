import styled from "styled-components";

const StyledHeaderInner = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;

  button,
  a {
    margin-left: auto;
  }

  @media (max-width: 1200px) {
    width: 93.5%;
  }
`;

export default StyledHeaderInner;
