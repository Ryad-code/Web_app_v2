import styled from "styled-components";

export const NavBarStyle = styled.div`
  width: 70%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0f1624;
  color: white;
  font-size: 1vw;
  font-weight: bold;
`;

export const NavBarItemStyle = styled.div.attrs<{ $size?: string }>(
  (props) => ({
    $size: props.$size,
  })
)`
  width: ${(props) => props.$size};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
