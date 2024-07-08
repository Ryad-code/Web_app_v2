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
  //font-family: "roboto";
  //font-weight: bold;
  &:hover {
    background-color: skyblue;
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
  width: 50%;
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
`;
