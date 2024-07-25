import styled from "styled-components";

export const HomeStyle = styled.div`
  width: 70%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Section1Style = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const TitleStyle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 4em;
`;

export const SubTitleStyle = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 2.5em;
`;

export const TextStyle = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 2em;
  margin-bottom: 3%;
`;

export const ButtonStyle = styled.button`
  width: max(16%, 10em);
  background: linear-gradient(90deg, #13adc7 0%, #6978d1 66%, #945dd6 100%);
  border-radius: 30px;
  border: none;
  color: white;
  padding: 10px;
  font-size: 1.8em;
  cursor: pointer;
`;

export const Section2Style = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin-bottom: 5%;
`;

export const SubSection2Style = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextStyle2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 2em;
  margin-bottom: 3%;
`;

export const PicStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 70%;
  width: auto;
`;

export const SubSection1Style = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
