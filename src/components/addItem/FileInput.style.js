import styled from "styled-components";
import addFileIcon from "../../assets/AddItem/addFile_icon.svg";
import deleteIcon from "../../assets/AddItem/delete_icon.svg";

const StyledFileInput = styled.div`
  p {
    color: #f74747;
    margin-top: 16px;
  }
`;

const StyledFileArea = styled.div`
  display: flex;
  gap: 24px;

  input {
    display: none;
  }

  label {
    border-radius: 12px;
    background: #f3f4f6 url(${addFileIcon}) no-repeat;
    background-size: 48px;
    background-position: 50% 98px;
    display: block;
    width: 282px;
    height: 282px;
    margin: 0;
    cursor: pointer;
    position: relative;
  }

  label span {
    color: #9ca3af;
    position: absolute;
    bottom: 98px;
    left: 50%;
    transform: translateX(-50%);
  }

  > div {
    border-radius: 12px;
    width: 282px;
    height: 282px;
    overflow: hidden;
    position: relative;
  }

  > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div button {
    width: 22px;
    height: 24px;
    background: url(${deleteIcon}) no-repeat;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  @media (max-width: 1200px) {
    gap: 12px;

    label {
      background-position: 50% 41px;
      width: 168px;
      height: 168px;
    }

    label span {
      bottom: 41px;
    }

    > div {
      width: 168px;
      height: 168px;
    }
  }
`;

export { StyledFileInput, StyledFileArea };
