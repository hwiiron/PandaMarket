import styled from "styled-components";
import deleteIcon from "../../assets/AddItem/delete_icon.svg";

const StyledTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;

  li {
    border-radius: 26px;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    height: 36px;
    color: #1f2937;
    padding: 0 42px 0 16px;
    position: relative;
  }

  button {
    width: 22px;
    height: 24px;
    background: url(${deleteIcon});
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;

export default StyledTagList;
