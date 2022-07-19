import styled from "styled-components";

export const NextButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #f3e2d9;
  border-radius: 100px;
  color: #252525;
  :hover {
    cursor: pointer;
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    box-shadow: 0 100px 80px rgba(0, 0, 0, 0.07),
      0 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    color: white;
  }
`;
interface DonateCategoriesButtonProps {
  active: boolean;
}

export const DonateCategoriesLeftButton = styled.div<DonateCategoriesButtonProps>`
  width: 50%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.active
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "#faf9f9"};
  ${({ active }) =>
    active &&
    `
   box-shadow: 0 100px 80px rgba(0, 0, 0, 0.07),
    0 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    color: white;
    font-weight: 200;
  `}
  border: 1px solid #cd8b65;
  border-radius: 24px 0 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DonateCategoriesRightButton = styled.div<DonateCategoriesButtonProps>`
  width: 50%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.active
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "#faf9f9"};
  ${({ active }) =>
    active &&
    `
   box-shadow: 0 100px 80px rgba(0, 0, 0, 0.07),
    0 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    color: white;
    font-weight: 200;
  `}
  border-radius: 0 24px 24px 0;
`;

export const DonateCategoriesImageContainer = styled.div`
  margin: 5% 7%;
  display: flex;
  div {
    position: static;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }
  .image2 {
    position: absolute;
  }
  .image3 {
    position: absolute;
  }
`;

export const DonateCategoriesTitle = styled.div`
  max-width: 80%;
  position: relative;
  left: 10%;
  line-height: var(--font-medium);
  font-weight: bolder;
  text-align: left;
  margin-bottom: 2%;
`;
