import styled from "styled-components";
import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";

export const SubContainerStyle = styled.div`
  width: 70%;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: purple;
`;

export const ProjectRowStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2%;
  margin-top: 6%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    margin-top: 2%;
  }
  //background-color: orange;
`;

export const ProjectStyle = styled.div`
  width: 50%;
  min-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color: blue;
  &:hover {
    width: 60%;
    height: 120%;
    border: 2mm solid white;
  }
  transition: 500ms;
  margin: 4%;
  border-radius: 4%;
  border: 1mm solid white;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  overflow: hidden;
`;

export const ProjectSubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  font-size: max(30px, 1.6vw);
  margin-top: 10%;
  @media screen and (max-width: 1024px) {
    margin-top: -10%;
    margin-bottom: 2%;
    align-items: center;
    justify-content: center;
  }
`;

export const ProjectTitleStyle = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-image-slice: 1;
  font-size: max(20px, 1.4vw);
  margin: 2%;
`;

export const ProjectInfoStyle = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: max(15px, 1vw);
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

export const ButtonStyle1 = styled.a`
  background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-radius: 30px;
  border: none;
  color: white;
  margin: 2%;
  padding: 4%;
  font-size: max(15px, 1vw);
  &:hover {
    width: 30%;
  }
  cursor: pointer;
`;
