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
`;

export { StyledTitle, StyledProducts };
