import "../../fonts/index.css";
import "../../fonts/roboto/Roboto-Regular.ttf";
import "../../fonts/roboto/Roboto-BlackItalic.ttf";
import styled from "styled-components";

export const TechnoStyle = styled.div`
  width: 70%;
  //height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
`;

export const SubTechnoStyle = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
`;

export const TechnoTitleStyle = styled.h1`
  width: 100%;
  font-family: "roboto";
  font-weight: bolder;
  font-size: 2vw;
  color: white;
  margin-bottom: 2%;
`;

export const SubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  font-size: max(10px, 1.2vw);
  font-weight: bold;
  margin-top: 4%;
  margin-bottom: 2%;
`;

export const BarStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #162950;
  border-radius: 30px;
  margin-bottom: 3%;
`;

export const SubBarStyle = styled.div.attrs<{ $value?: number }>((props) => ({
  $value: props.$value || 0,
}))`
  width: ${(props) => props.$value}%;
  height: 100%;
  background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-radius: 30px;
`;
