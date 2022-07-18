import styled from "styled-components";
export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 0 3rem 0 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #9f9f9f;
`;
export const HeaderTitle = styled.div`
  padding-left: 10%;
  font-weight: 300;
  color: #9f9f9f;
  font-size: 1.6vh;
`;
export const HeaderIconsContainer = styled.div`
  padding-right: 10%;
  font-size: 2.2vh;
  i {
    padding-left: 0.5vw;
    color: #7a7a7a;
  }
`;
export const StyledHR = styled.hr`
  margin: 0;
  padding: 0;
  border: none;
  border-bottom: 1px solid #e5e5e5;
`;
