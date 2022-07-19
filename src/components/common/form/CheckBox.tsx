import React from "react";
import {
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
} from "./CheckBox.styles";
interface CheckBoxProps {
  label: string;
  value: boolean;
  onChange: (target: { name: string; value: boolean }) => void;
  name: string;
}
const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  label,
  value,
  onChange,
}) => {
  const handleChange = () => {
    onChange({ name, value: !value });
  };
  return (
    <CheckBoxContainer>
      <CheckBoxInput
        name={name}
        type="checkbox"
        checked={value}
        onChange={handleChange}
        id="checkbox"
      />
      <CheckBoxLabel htmlFor="checkbox">{label}</CheckBoxLabel>
    </CheckBoxContainer>
  );
};

export default CheckBox;
