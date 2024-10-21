import styled from "styled-components";

const StyledNavigation = styled.ul`
  display: flex;
  height: 100%;
  margin-left: 32px;

  > li a {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 18px;
    font-weight: 700;
    color: #4b5563;
    padding: 0 15px;

    &:hover {
      color: var(--blue);
    }
  }

  @media (max-width: 1200px) {
    margin-left: 20px;
  }

  @media (max-width: 743px) {
    gap: 8px;
    margin-left: 8px;

    > li a {
      font-size: 16px;
      padding: 0;
    }
  }
`;

export default StyledNavigation;
