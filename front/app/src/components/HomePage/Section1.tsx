import {
  Section1Style,
  TitleStyle,
  SubTitleStyle,
  TextStyle,
  ButtonStyle,
} from "../../styles/HomePage/Home.style";

function Title() {
  return <TitleStyle>Welcome</TitleStyle>;
}

function SubTitle() {
  return <SubTitleStyle>I am Ryad Laouedj</SubTitleStyle>;
}

function Text() {
  return (
    <TextStyle>
      Creative developer & student at 42 Paris. Between Design & Code I try to
      create intuitive interfaces for user through a Logic & Organized based
      code.
    </TextStyle>
  );
}

function HomeButton() {
  return <ButtonStyle>Learn more</ButtonStyle>;
}

function Section1() {
  return (
    <Section1Style>
      <Title />
      <SubTitle />
      <Text />
      <HomeButton />
    </Section1Style>
  );
}
export default Section1;
