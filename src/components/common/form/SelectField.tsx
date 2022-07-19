import React from "react";
import { SheltersAPI } from "../../../types/sheltersAPI";
import { SelectContainer } from "./SelectField.styles";
interface SelectFieldProps {
  onChange: (shelter: SheltersAPI) => void;
  options: SheltersAPI[];
  name: string;
}
const SelectField: React.FC<SelectFieldProps> = ({
  onChange,
  options,
  name,
}) => {
  const handleChange = (option: SheltersAPI) => {
    onChange(option);
  };
  return (
    <SelectContainer>
      <div className="select" tabIndex={1}>
        {options &&
          options.map((option) => (
            <div key={option.name + option.id}>
              <input
                className="selectopt"
                name={name}
                type="radio"
                value={option.id}
                id={`opt${option.id}`}
                onClick={() => handleChange(option)}
                defaultChecked
              />
              <label htmlFor={`opt${option.id}`} className="option">
                {option.name}
              </label>
            </div>
          ))}
      </div>
    </SelectContainer>
  );
};

export default SelectField;
