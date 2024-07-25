import {
  Section2Style,
  TitleStyle,
  SubTitleStyle,
  TextStyle2,
  SubSection1Style,
  PicStyle,
} from "../../styles/HomePage/Home.style";

import img from "../../../public/images/profil_pic.png";

function Title() {
  return <TitleStyle>About me</TitleStyle>;
}

function SubTitle() {
  return <SubTitleStyle>My journey with code</SubTitleStyle>;
}

function Text() {
  return (
    <TextStyle2>
      Before I stepped into the world of Web development I had many various
      experiences such as Law, Art or Graphic Design. This journey made me sure
      about something: I'm passionate about crafting experiences that are
      engaging, accessible, and user-centric. That is why I like to think as
      myself as a Creative Developer engaged to resolve problems revolving
      between Development and Design
    </TextStyle2>
  );
}

function Picture() {
  return <PicStyle src={img} alt="profil_picture" />;
}

function Section2() {
  return (
    <Section2Style>
      <Title />
      <SubTitle />
      <SubSection1Style>
        <Text />
        <Picture />
      </SubSection1Style>
    </Section2Style>
  );
}
export default Section2;
