import styled from "styled-components";

const StyledControl = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 744px) {
    width: 100%;
    gap: 14px;
    margin-top: 8px;

    a {
      position: absolute;
      top: 0;
      right: 0;
    }

    form {
      width: 100%;
    }
  }
`;

export default StyledControl;
