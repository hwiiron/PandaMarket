import styled from "styled-components";

const AddProductHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: #1f2937;
  }

  button {
    border-radius: 8px;
    background: var(--blue);
    width: 74px;
    height: 42px;
    color: #fff;
    transition: 0.3s;

    &:disabled {
      background: #9ca3af;
      cursor: auto;
    }
  }
`;

export default AddProductHead;
