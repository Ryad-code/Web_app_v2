import styled from "styled-components";
import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";

import "../../../public/images/profil_pic.png";

export const SubPresentationStyle = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  font-family: "roboto";
  font-weight: bold;
`;

export const PresentationTitleStyle = styled.div`
  font-family: "roboto";
  font-weight: bolder;
  font-size: 2vw;
`;

export const PresentationSubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: "roboto";
  font-weight: bold;
  font-size: 1.7vw;
`;

export const TextContainerStyle = styled.div`
  width: 100%;
  min-height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PresentationTextStyle = styled.div`
  width: 60%;
  font-family: "roboto";
  font-weight: lighter;
  font-size: 1.4vw;
`;

export const PresentationImgStyle = styled.div`
  width: 40%;
  height: 100%;
  background-image: url("../../../public/images/profil_pic.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
