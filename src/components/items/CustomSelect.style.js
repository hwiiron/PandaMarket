import styled from "styled-components";

import selectIcon from "../../assets/select_icon.svg";
import selectIconM from "../../assets/select_icon-m.svg";

const StyledSelect = styled.div`
  width: 130px;
  height: 42px;
  z-index: 10;

  > button {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 0 20px;
    position: relative;
  }

  > button::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(${selectIcon}) no-repeat;
    background-size: 100%;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  > ul {
    display: none;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: #fff;
    margin-top: 8px;
  }

  > ul.active {
    display: block;
  }

  > ul li {
    height: 42px;
  }

  > ul li + li {
    border-top: 1px solid #e5e7eb;
  }

  > ul li a {
    display: block;
  }

  > ul li button {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 744px) {
    width: 42px;
    flex-shrink: 0;
    position: relative;

    > button {
      text-indent: -9999px;
      padding: 0;
    }

    > button::after {
      background: url(${selectIconM}) no-repeat;
      background-size: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    > ul {
      width: 130px;
      margin-top: 0;
      position: absolute;
      top: 46px;
      right: 0;
    }
  }
`;

export default StyledSelect;
