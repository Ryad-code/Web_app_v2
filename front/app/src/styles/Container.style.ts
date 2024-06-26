import styled from "styled-components";
import "../fonts/index.css";
import "../fonts/roboto/Roboto-Regular.ttf";
import "../fonts/roboto/Roboto-BlackItalic.ttf";

import Img from "../../../public/images/bg1.jpg";

export const MainStyle = styled.div`
  width: 100%;
  background-image: url("../../../public/images/bg1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MainContainerStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "roboto";
  font-weight: bold;
`;

export const SubContainerStyle = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
