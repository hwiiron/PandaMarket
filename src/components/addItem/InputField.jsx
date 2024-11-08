import StyledInputField from "./InputField.style";

const InputField = ({
  name,
  id,
  type,
  value,
  placeholder,
  onKeyDown,
  onChange,
  onInput,
}) => {
  return (
    <StyledInputField
      name={name}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onInput={onInput}
    />
  );
};

export default InputField;
