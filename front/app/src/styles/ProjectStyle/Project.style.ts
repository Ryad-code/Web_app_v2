import styled from "styled-components";
import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";

export const ProjectRowStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2%;
`;

export const ProjectStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: palevioletred;
  &:hover {
    background-color: #af5a76;
  }
  margin: 4%;
`;

export const ProjectImageStyle = styled.div`
  width: 100%;
  height: 40%;
  background-image: url("../../../public/images/fract-ol_img.png");
  background-position: center;
  background-size: cover;
`;

export const ProjectTitleStyle = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid white;
  font-size: 1.5vw;
  margin: 2%;
`;

export const ProjectInfoStyle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
`;

export const ProjectButtonStyle = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
