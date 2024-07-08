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
    width: 60%;
    height: 120%;
    border: 2mm solid white;
  }
  margin: 4%;
  border-radius: 4%;
  border: 1mm solid white;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
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

export const ProjectImageStyle = styled.div.attrs<{ $url?: string }>(
  (props) => ({
    $url: props.$url || "",
  })
)`
  width: 100%;
  height: 50%;
  background-image: url(${(props) => props.$url});
  background-position: center;
  background-size: cover;
`;
