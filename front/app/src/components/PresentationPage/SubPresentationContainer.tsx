import {
  SubPresentationStyle,
  PresentationTitleStyle,
  PresentationSubTitleStyle,
  PresentationTextStyle,
  TextContainerStyle,
  PresentationImgStyle,
} from "../../styles/PresentationStyle/Presentation.style";

function PresentationInfo() {
  return (
    <TextContainerStyle>
      <PresentationTextStyle>
        <p>
          Before I stepped into the world of Web development I had many various
          experiences such as Law, Art or Graphic Design. This journey made me
          sure about something: I'm passionate about crafting experiences that
          are engaging, accessible, and user-centric. That is why I like to
          think as myself as a Creative Developer engaged to resolve problems
          revolving between Development and Design
        </p>
      </PresentationTextStyle>
      <PresentationImgStyle />
    </TextContainerStyle>
  );
}

function SubPresentationContainer() {
  return (
    <SubPresentationStyle>
      <PresentationTitleStyle>
        <h1>About Me</h1>
      </PresentationTitleStyle>
      <PresentationSubTitleStyle>
        <h2>My journey with code</h2>
      </PresentationSubTitleStyle>
      <PresentationInfo />
    </SubPresentationStyle>
  );
}

export default SubPresentationContainer;
