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
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

export const PresentationTitleStyle = styled.div`
  font-weight: bolder;
  font-size: max(30px, 1.6vw);
`;

export const PresentationSubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: max(20px, 1.4vw);
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
`;

export const TextContainerStyle = styled.div`
  width: 100%;
  min-height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
  }
`;

export const PresentationTextStyle = styled.div`
  width: 60%;
  font-weight: lighter;
  font-size: max(20px, 1.4vw);
  @media screen and (max-width: 1024px) {
    height: 50%;
  }
`;

export const PresentationImgStyle = styled.div`
  width: 40%;
  height: 100%;
  background-image: url("../../../public/images/profil_pic.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 1024px) {
    height: 50%;
  }
`;
