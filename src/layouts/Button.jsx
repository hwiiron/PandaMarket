import { Link } from "react-router-dom";
import StyledButton from "./Button.style";

const Button = ({ type, text, to, disabled }) => {
  return (
    <Link to={to}>
      <StyledButton type={type} disabled={disabled}>
        {text}
      </StyledButton>
    </Link>
  );
};

export default Button;
