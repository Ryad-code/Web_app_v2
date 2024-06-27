import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";
import styled from "styled-components";

export const TechnoStyle = styled.div`
  width: 70%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;

export const TechnoTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-family: "roboto";
  font-weight: bolder;
  font-size: 1.5vw;
`;

export const BarStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: transparent;
  border-radius: 30px;
  border: 3px solid white;
`;

export const SubBarStyle = styled.div`
  width: 75%;
  height: 100%;
  background-color: blue;
  border-radius: 30px;
`;
