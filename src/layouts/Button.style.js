import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  background: var(--blue);
  height: 48px;
  color: var(--white);
  padding: 0 43px;

  &:disabled {
    background: var(--gray400);
    cursor: auto;
  }
`;

export default StyledButton;
