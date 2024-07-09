import styled from "styled-components";
import "../../fonts/index.css";

export const SubHomeContainerStyle = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  @media screen and (max-width: 1024px) {
    width: 80%;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeTitleStyle = styled.div`
  font-size: max(30px, 1.6vw);
  margin-top: 10%;
  @media screen and (max-width: 1024px) {
    margin-top: -10%;
    margin-bottom: 2%;
  }
`;

export const HomeSubTitleStyle = styled.div`
  font-size: max(20px, 1.4vw);
`;

export const HomeTextStyle = styled.div`
  width: 60%;
  font-size: max(20px, 1.2vw);
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

export const ButtonStyle = styled.button`
  width: max(16%, 10em);
  background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-radius: 30px;
  border: none;
  color: white;
  padding: 10px;
  font-size: max(20px, 1vw);
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 40%;
    padding: 2%;
  }
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
