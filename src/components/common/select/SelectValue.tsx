import React, { useRef } from "react";
import { CheckboxSize, PriceInput } from "./SelectValue.styles";
interface SelectValueProps {
  onChange: (target: { name: string; value: string | number }) => void;
}
const SelectValue: React.FC<SelectValueProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "tool-7") {
      if (inputRef.current?.value) {
        onChange({
          name: e.target.name,
          value: Number(inputRef.current.value),
        });
      }
    } else onChange({ name: e.target.name, value: Number(e.target.value) });
  };
  return (
    <CheckboxSize>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-1"
        value={5}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-1">
        5 €
      </label>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-2"
        value={10}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-2">
        10 €
      </label>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-3"
        value={20}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-3">
        20 €
      </label>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-4"
        value={30}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-4">
        30 €
      </label>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-5"
        value={50}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-5">
        50 €
      </label>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-6"
        value={100}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-6">
        100 €
      </label>
      <input
        className="checkbox-size product-page"
        type="radio"
        name="amount"
        id="tool-7"
        value={inputRef.current ? Number(inputRef.current.value) : 0}
        onChange={(e) => handleChange(e)}
      />
      <label className="for-checkbox-size" htmlFor="tool-7">
        <PriceInput
          className="checkbox-size product-page"
          type="input"
          name="amount"
          ref={inputRef}
          autoComplete={"off"}
        />
        €
      </label>
    </CheckboxSize>
  );
};

export default SelectValue;
