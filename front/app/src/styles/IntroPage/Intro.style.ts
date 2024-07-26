import styled from "styled-components";

export const IntroStyle = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //background-color: pink;
`;

export const Section1Style = styled.div`
  width: 60%;
  height: contain;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
  margin-bottom: 5%;
  margin-top: 5%;
  //background-color: blue;
`;

export const TextStyle1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 2em;
  margin-bottom: 3%;
  //background-color: red;
`;

export const PicSectionStyle = styled.div`
  width: 35%;
  height: 50%;
  //background-color: orange;
`;

export const PicStyle = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 100%;
  width: auto;
`;
