import styled from "styled-components";

const StyledInner = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 24px 0 58px;

  @media (max-width: 1200px) {
    width: 93.5%;
  }

  @media (max-width: 744px) {
    width: 91.7%;
  }
`;

export default StyledInner;
