import {
  TitleStyle,
  SubTitleStyle,
  TextStyle,
} from "../../styles/HomePage/Home.style";

import { PicStyle, TextStyle1 } from "../../styles/IntroPage/Intro.style";

import img from "../../../public/images/profil_pic.png";
import {
  IntroStyle,
  PicSectionStyle,
  Section1Style,
} from "../../styles/IntroPage/Intro.style";

function Title() {
  return <TitleStyle>About me</TitleStyle>;
}

function SubTitle() {
  return <SubTitleStyle>My journey with code</SubTitleStyle>;
}

function Text() {
  return (
    <TextStyle1>
      Before I stepped into the world of Web development I had many various
      experiences such as Law, Art or Graphic Design. This journey made me sure
      about something: I'm passionate about crafting experiences that are
      engaging, accessible, and user-centric. That is why I like to think as
      myself as a Creative Developer engaged to resolve problems revolving
      between Development and Design.
    </TextStyle1>
  );
}

function Picture() {
  return (
    <PicSectionStyle>
      <PicStyle src={img} alt="profil_picture" />
    </PicSectionStyle>
  );
}

function Section1() {
  return (
    <IntroStyle>
      <Section1Style>
        <Title />
        <SubTitle />
        <Text />
      </Section1Style>
      <Picture />
    </IntroStyle>
  );
}
export default Section1;
