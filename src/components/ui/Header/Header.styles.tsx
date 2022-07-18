import styled from "styled-components";
export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #9F9F9F;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-left: 12.7%;
`;
export const HeaderIconsContainer = styled.div`
  margin-right: 10.42%;
  i {
    padding-left: 0.5vw;
  }
`;
