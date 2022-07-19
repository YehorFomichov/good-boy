import styled from "styled-components";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 56%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DogImageContainer = styled.div`
  width: 44%;
  padding-left: 4.51vw;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: end;
  img {
    display: block;
    width: 90%;
    object-fit: contain;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ProgressBarContainer = styled.div`
  flex: 0 0 1%;
  margin-bottom: 28px;
  width: 20%;
  height: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  div {
    background: rgba(159, 159, 159, 0.71);
    border-radius: 10px;
    width: 15%;
  }
  .one {
    background: linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);
    width: 60%;
  }
`;
export const TitleContainer = styled.div`
  font-family: 'Hind', sans-serif;
  width: 100%;
  margin-bottom: 28px;
  div {
    font-size: 2.9rem;
    line-height: 52px;
    font-weight: 700;
    text-align: left;
  }
`;

//Specific for step 1 *******************

export const DonateButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 12.92vw;
  width: 100%;
  margin-bottom: 58px;
`;

export const SelectShelterContainer = styled.div`
  margin-bottom: 42px;
  width: 100%;
  height: 106px;
`;
export const SelectShelterInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1%;
  div {
    font-weight: 700;
  }
`;
export const SelectPriceContainer = styled.div`
  font-weight: 600;
  margin-bottom: 12%;
  p {
    padding: 0;
    margin: 1%;
  }
`;
export const GoNextButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-weight: 600;
  letter-spacing: 0;
  color: white;
  justify-content: space-between;
`;

//Specific for step 2 *******************

export const UserInputForm = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const UserInfoTitle = styled.h1`
  font-size: var(--font-large);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: var(--font-large);
  text-align: left;
  margin: 0;
  padding: 0;
`;
export const InputsContainer = styled.div`
  margin-bottom: 12%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

//Specific for step 3 *******************

export const ResultContainer = styled.div`
  flex: 0 0 55%;
  display: flex;
  flex-direction: column;
  margin-left: 8%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex: 100%;
  }
`;

export const Summary = styled.div`
  margin-bottom: 1%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
`;
export const FormInfo = styled.div`
  font-size: var(--font-medium);
  line-height: 1.6vw;
  font-weight: 700;
  color: #252525;
  margin-bottom: 5%;
  box-sizing: border-box;
  div:last-child {
    font-size: var(--font-medium);
    line-height: 1.6vw;
    font-weight: 400;
    color: #565656;
    margin-top: 0.5%;
  }
`;
