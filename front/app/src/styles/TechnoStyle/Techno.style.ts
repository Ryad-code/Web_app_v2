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
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: max(30px, 1.6vw);
  margin-top: 20%;
  margin-bottom: 2%;
  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const SubTitleStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  font-size: max(15px, 1vw);
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
