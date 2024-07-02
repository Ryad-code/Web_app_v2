import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";
import styled from "styled-components";

export const TechnoStyle = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: purple;
  margin-top: 4%;
`;

export const SubTechnoStyle = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  //background-color: blue;
`;

export const TechnoTitleStyle = styled.h1`
  width: 100%;
  font-family: "roboto";
  font-weight: bolder;
  font-size: 2vw;
  color: white;
  //background-color: red;
  margin-bottom: 2%;
`;

export const SubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  font-size: 2.5vh;
  font-weight: bold;
  margin-top: 4%;
  margin-bottom: 2%;
`;

export const BarStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: transparent;
  border-radius: 30px;
  border: 3px solid white;
  background-color: transparent;
  margin-bottom: 3%;
`;

export const SubBarStyle = styled.div`
  width: 75%;
  height: 100%;
  background: linear-gradient(0.25turn, blue, purple);
  border-radius: 30px;
`;
