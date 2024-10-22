import styled from "styled-components";
import prevIcon from "../../assets/items/paging_prev_icon.svg";
import nextIcon from "../../assets/items/paging_next_icon.svg";

const StyledPaging = styled.ol`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 43px;

  li button {
    border: 1px solid #e5e7eb;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #6b7280;
  }

  li.active button {
    border: 1px solid var(--blue);
    background: var(--blue);
    color: #fff;
  }

  li.prev button {
    background: url(${prevIcon}) no-repeat;
    background-size: 16px;
    background-position: 50%;
  }

  li.next button {
    background: url(${nextIcon}) no-repeat;
    background-size: 16px;
    background-position: 50%;
  }
`;

export default StyledPaging;
