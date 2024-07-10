import styled from "styled-components";

export const NavBarStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  @media screen and (min-width: 1024px) {
    &:hover {
      background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
    }
  }
`;

export const SubNavBarStyle = styled.div`
  width: 70%;
  height: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NavBarItemStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
`;

export const NavBarItemStyle1 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

export const ItemStyle = styled.button`
  margin: 3%;
  font-weight: bolder;
  font-size: 1.8vh;
  border: none;
  background-color: transparent;
  color: white;
  @media screen and (max-width: 1024px) {
    margin: 0px;
  }
`;
