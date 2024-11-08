import StyledTextarea from "./Textarea.style";

const Textarea = ({ name, id, value, placeholder, onChange }) => {
  return (
    <StyledTextarea
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Textarea;
