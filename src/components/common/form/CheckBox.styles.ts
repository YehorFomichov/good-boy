import styled from "styled-components";
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
`;
export const CheckBoxLabel = styled.label`
  font-weight: 400;
  font-size: var(--font-medium);
`;
export const CheckBoxInput = styled.input`
  position: absolute; // take it out of document flow
  opacity: 0; // hide it

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  // Box.
  & + label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 2.7vh;
    height: 2.7vh;
    background: white;
    border: 1px solid #c4794f;
    border-radius: 25%;
  }

  // Box hover
  &:hover + label:before {
    border: 1px solid #c4794f;
  }

  // Box focus
  //&:focus + label:before {
  //  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  //}

  // Box checked
  &:checked + label:before {
    border: 1px solid #c4794f;
  }

  // Disabled state label.
  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  // Disabled box.
  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }

  // Checkmark. Could be replaced with an image
  &:checked + label:after {
    background-image: url(http://localhost:3000/images/checkbox.png);
    background-size: 110%;
    height: 2vh;
    width: 2vh;
    background-position: center;
    background-repeat: no-repeat;
    //background-size: 800%;
    content: "";
    position: absolute;
    left: 0.5vh;
    top: 0.5vh;
    //background: #c4794f;
    //width: 2px;
    //height: 2px;
    //box-shadow: 0.2vh 0 0 #c4794f, 0.4vh 0 0 #c4794f, 0.4vh -0.2vh 0 #c4794f,
    //  0.4vh -0.4vh 0 #c4794f, 0.4vh -0.6vh 0 #c4794f, 0.4vh -0.8vh 0 #c4794f;
    //transform: rotate(45deg);
  }
`;
