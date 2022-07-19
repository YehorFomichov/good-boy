import styled from "styled-components";

export const InputFormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #f3e2d9;
  margin: 2% 0;
  padding-right: 5%;

  :focus-within {
    outline: 1px solid #c4794f;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    color: #565656;
    font-size: var(--font-medium);
  }

  input:-webkit-autofill::first-line {
    font-size: var(--font-medium);
    color: #565656;
  }

  .phone {
    margin-left: 2rem;
  }

  #phoneInput {
    width: 100%;
    background-color: rgba(255, 255, 255, 0);
    height: 100%;
    font-size: var(--font-medium);
    border: none;
    box-sizing: border-box;
    font-weight: 700;
    color: #565656;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: rgba(159, 159, 159, 0.68);
      font-size: var(--font-medium);
    }
  }
`;
export const InputLabel = styled.label`
  margin-top: 1%;
  margin-left: 2rem;
  font-weight: 700;
  font-size: var(--font-medium);
`;

export const Input = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  margin: 0 0 0 2rem;
  height: 100%;
  font-size: var(--font-medium);
  border: none;
  box-sizing: border-box;
  font-weight: 700;
  color: #565656;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(159, 159, 159, 0.68);
    font-size: var(--font-medium);
  }
`;
