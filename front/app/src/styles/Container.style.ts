import styled from "styled-components";
import "../fonts/index.css";
import "../fonts/roboto/Roboto-Regular.ttf";
import "../fonts/roboto/Roboto-BlackItalic.ttf";

export const MainContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  color: white;
  font-family: "roboto";
  font-weight: bold;
`;

export const SubContainerStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: red;
`;

export const ProjectRowStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  //background-color: grey;
  margin: 2%;
`;

export const ProjectStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: orange;
  &:hover {
    background-color: black;
  }
  margin: 4%;
`;

export const ProjectImageStyle = styled.div`
  width: 100%;
  height: 40%;
  border: solid red;
`;

export const ProjectTitleStyle = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  border-bottom: solid blue;
  margin: 2%;
`;

export const ProjectInfoStyle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80%;
  border: solid black;
`;

export const ProjectButtonStyle = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid pink;
`;
