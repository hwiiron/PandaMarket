import styled from "styled-components";

const StyledAddProduct = styled.div`
  input {
    border: 0;
    border-radius: 12px;
    background: #f3f4f6;
    width: 100%;
    height: 56px;
    padding: 0 24px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox  */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline-color: var(--blue);
  }
`;

export default StyledAddProduct;
