import styled from "styled-components";

const StyledSection = styled.section`
  margin-top: 40px;
`;

const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  h2 {
    margin-bottom: 0;
  }

  @media (max-width: 744px) {
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    h2 {
      height: 42px;
      line-height: 42px;
    }
  }
`;

export { StyledSection, StyledHead };
