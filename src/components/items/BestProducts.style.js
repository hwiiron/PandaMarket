import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray900);
  margin-bottom: 16px;
`;

const StyledProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 23px;

  @media (max-width: 1200px) {
    gap: ${(props) => {
      switch (props.type) {
        case "BEST":
          return "10px";
        case "ALL":
          return "40px 2.16%";
      }
    }};
  }
`;

export { StyledTitle, StyledProducts };
