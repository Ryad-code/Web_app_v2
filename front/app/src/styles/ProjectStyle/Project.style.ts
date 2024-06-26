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
  margin-top: 6%;
`;

export const ProjectStyle = styled.div`
  width: 50%;
  height: 120%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background-color: transparent;
  &:hover {
    background-color: #af5a76;
    width: 60%;
    height: 120%;
  }
  margin: 4%;
  border-radius: 4%;
  border: 2mm solid white;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
`;

export const ProjectImageStyle = styled.div`
  width: 100%;
  height: 50%;
  background-image: url("../../../public/images/fract-ol_img.png");
  background-position: center;
  background-size: cover;
  //background-repeat: no-repeat;
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
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9vw;
`;

export const ProjectButtonStyle = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
