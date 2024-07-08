import styled from "styled-components";
import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";

export const SubHomeContainerStyle = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  //font-family: "roboto";
  //font-weight: bold;
`;

export const HomeTitleStyle = styled.div`
  //font-family: "roboto";
  //font-weight: bolder;
  font-size: 2vw;
  margin-top: 6%;
`;

export const HomeSubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  //font-family: "roboto";
  //font-weight: bold;
  font-size: 1.7vw;
`;

export const HomeTextStyle = styled.div`
  width: 60%;
  //font-family: "roboto";
  //font-weight: lighter;
  font-size: 1.4vw;
`;

export const ButtonStyle = styled.button`
  width: 25%;
  background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-radius: 30px;
  border: none;
  color: white;
  margin: 2%;
  padding: 2%;
  font-size: 1vw;
  &:hover {
    width: 30%;
  }
  cursor: pointer;
`;
export const ButtonStyle1 = styled.button`
  background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-radius: 30px;
  border: none;
  color: white;
  margin: 2%;
  padding: 4%;
  font-size: 1vw;
  &:hover {
    width: 30%;
  }
  cursor: pointer;
`;
