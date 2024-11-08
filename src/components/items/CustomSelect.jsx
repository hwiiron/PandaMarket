import { useState } from "react";
import StyledSelect from "./CustomSelect.style";

const CustomSelect = ({
  orderBy,
  recentClick,
  favoriteClick,
  setCurrentPage,
}) => {
  const [isActive, setIsActive] = useState(false);

  const optionToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledSelect>
      <button onClick={optionToggle}>
        {orderBy === "recent" ? "최신순" : "좋아요순"}
      </button>

      <ul className={isActive ? "active" : ""}>
        <li>
          <button
            onClick={() => {
              recentClick();
              setIsActive(false);
              setCurrentPage(1);
            }}
          >
            최신순
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              favoriteClick();
              setIsActive(false);
              setCurrentPage(1);
            }}
          >
            좋아요순
          </button>
        </li>
      </ul>
    </StyledSelect>
  );
};

export default CustomSelect;
