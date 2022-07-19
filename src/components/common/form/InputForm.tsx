import React from "react";
import { Input, InputFormContainer, InputLabel } from "./InputForm.styles";
import PhoneInput from "react-phone-number-input";
interface InputFormProps {
  label: string;
  labelText?: string;
  name: string;
  value: string;
  onChange: (target: { name: string; value: string }) => void;
  phone?: boolean;
}
const InputForm: React.FC<InputFormProps> = ({
  labelText,
  label,
  name,
  value,
  onChange,
  phone,
}) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: target.name, value: target.value });
  };
  const setPhoneNumber = (value: any) => {
    onChange({ name, value });
  };
  return (
    <InputFormContainer>
      {phone ? (
        <>
          <InputLabel htmlFor={name} className="focus">
            {label}
          </InputLabel>
          <div className="phone">
            <PhoneInput
              international
              id="phoneInput"
              countryCallingCodeEditable={false}
              countryselectprops={{ unicodeFlags: true }}
              placeholder={labelText}
              value={value}
              onChange={(event) => setPhoneNumber(event)}
              defaultCountry="SK"
            />
          </div>
        </>
      ) : (
        <>
          <InputLabel htmlFor={name} className="focus">
            {label}
          </InputLabel>
          <div>
            <Input
              type="text"
              id={name}
              name={name}
              value={value}
              placeholder={labelText}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </InputFormContainer>
  );
};

export default InputForm;
