import styled from "styled-components";
import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";

import "../../../public/images/profil_pic.png";

export const SubPresentationStyle = styled.div`
  width: 70%;
  height: contain;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  //background-color: red;
`;

export const PresentationTitleStyle = styled.div`
  font-weight: bolder;
  font-size: max(30px, 1.6vw);
  //background-color: orange;
`;

export const PresentationSubTitleStyle = styled.div`
  width: 100%;
  font-size: max(20px, 1.4vw);
  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
  //background-color: pink;
`;

export const TextContainerStyle = styled.div`
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70%;
  }
  //background-color: green;
`;

export const PresentationTextStyle = styled.div`
  width: 100%;
  font-weight: lighter;
  font-size: max(20px, 1.4vw);
  @media screen and (max-width: 1024px) {
    height: 50%;
  }
  //background-color: grey;
`;

export const PresentationImgStyle = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: right;
  background-image: url("../../../public/images/profil_pic.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 1024px) {
    height: 30%;
  }
  //background-color: blue;
`;
export const Section1Style = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //background-color: purple;
`;
