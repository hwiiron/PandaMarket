import StyledLabel from "./Label.style";

const Label = ({ children, htmlFor }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
