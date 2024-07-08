import styled from "styled-components";
import "../fonts/index.css";
import "../fonts/roboto/Roboto-Regular.ttf";
import "../fonts/roboto/Roboto-BlackItalic.ttf";

export const MainStyle = styled.div`
  width: 100%;
  //background-image: url("../../../public/images/bg3.jpg");
  background-color: #0f1624;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //  font-family: "Roboto";
`;

export const MainContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LastContainerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const SubContainerStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
