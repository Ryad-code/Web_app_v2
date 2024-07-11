import styled from "styled-components";
import "../fonts/index.css";
import image1 from "../../public/images/figma_icon.png";

export const MainStyle = styled.div`
  width: 100%;
  background-color: #0f1624;
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

export const FooterStyle = styled.div`
  width: 70%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  font-size: max(15px, 1vw);
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const TopFooter = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: max(15px, 1vw);
`;

export const BotFooter = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemStyle = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const IconStyle = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled.img`
  max-width: 11%;
  height: auto;
`;
