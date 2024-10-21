import StyledButton from "./Button.style";

const Button = ({ text, disabled }) => {
  return <StyledButton disabled={disabled}>{text}</StyledButton>;
};

export default Button;
