import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;
  font-size: var(--font-medium);
  position: relative;
  .select {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .option {
    height: 2vh;
    padding: 0 30px 0 10px;
    min-height: 4rem;
    display: flex;
    align-items: center;
    background: var(--white);
    position: absolute;
    top: 0;
    width: 100%;
    pointer-events: none;
    order: 2;
    z-index: 1;
    transition: background 0.2s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    border-radius: 5px;
  }

  .option:hover {
    background: rgba(196, 121, 79, 0.68);
  }

  .select:focus .option {
    position: relative;
    pointer-events: all;
  }

  input {
    opacity: 0;
    position: absolute;
    left: -99999px;
  }

  input:checked + label {
    order: 1;
    z-index: 2;
    background: #ffffff;
    position: relative;
    border: 1px rgba(128, 128, 128, 0.27) solid;
    border-radius: 5px;
  }

  input:checked + label:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #3d3d3d;
    position: absolute;
    right: 10px;
    top: calc(50% - 2.5px);
    pointer-events: none;
    z-index: 3;
  }

  input:checked + label:before {
    position: absolute;
    right: 0;
    height: 40px;
    width: 40px;
  }
`;
