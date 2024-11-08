import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border: 0;
  border-radius: 12px;
  background: #f3f4f6;
  width: 100%;
  height: 282px;
  padding: 16px 24px;
  resize: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline-color: var(--blue);
  }
`;

export default StyledTextarea;
