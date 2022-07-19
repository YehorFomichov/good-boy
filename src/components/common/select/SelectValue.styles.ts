import styled from "styled-components";

export const CheckboxSize = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  //overflow: hidden;
  .product-page[type="radio"]:checked,
  .product-page[type="radio"]:not(:checked) {
    //position: absolute;
    display: none;
    //left: -9999px;
    //width: 0;
    //height: 0;
    //visibility: hidden;
  }
  .checkbox-size:checked + label,
  .checkbox-size:not(:checked) + label {
    display: flex;
    justify-content: center;
    position: relative;
    width: 14%;
    line-height: 50px;
    align-items: center;
    text-align: center;
    height: 8%;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--dark-grey);
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }
  .checkbox-size:not(:checked) + label {
    background-color: var(--white);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  .checkbox-size:checked + label {
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    color: white;
  }
  .checkbox-size:not(:checked) + label:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .checkbox-size:checked + label::before,
  .checkbox-size:not(:checked) + label::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-image: linear-gradient(298deg, var(--red), var(--yellow));
    z-index: -1;
  }
  .checkbox-size:checked + label .uil,
  .checkbox-size:not(:checked) + label .uil {
    font-size: var(--font-small);
    line-height: 24px;
    display: block;
    padding-bottom: 10px;
  }
`;
export const PriceInput = styled.input`
  border: none;
  width: 2.3vw;
  font-size: var(--font-medium);
  font-weight: 600;
  line-height: 1.6vw;
  letter-spacing: 0;
  text-align: center;
  color: inherit;
  background: transparent;
  border-bottom: 1px solid rgba(23, 23, 23, 0.48);
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 0 0 100px rgba(255, 255, 255, 1);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 0 0 100px rgba(255, 255, 255, 1);
  }
`;
