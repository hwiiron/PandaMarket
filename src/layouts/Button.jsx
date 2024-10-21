import { Link } from "react-router-dom";
import StyledButton from "./Button.style";

const Button = ({ text, disabled }) => {
  return (
    <Link to={"/login"}>
      <StyledButton disabled={disabled}>{text}</StyledButton>
    </Link>
  );
};

export default Button;
