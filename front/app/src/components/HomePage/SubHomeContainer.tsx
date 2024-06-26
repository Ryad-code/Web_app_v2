import {
  HomeSubTitleStyle,
  HomeTextStyle,
  HomeTitleStyle,
  SubHomeContainerStyle,
} from "../../styles/HomeStyle/Home.style";

import { ButtonStyle } from "../../styles/HomeStyle/Home.style";

function SubHomeContainer() {
  return (
    <SubHomeContainerStyle>
      <HomeTitleStyle>
        <h1>Welcome</h1>
      </HomeTitleStyle>
      <HomeSubTitleStyle>
        <h2>Im Ryad Laouedj</h2>
      </HomeSubTitleStyle>
      <HomeTextStyle>
        <p>
          Creative developer & student at 42 Paris. Between Design & Code I try
          to create intuitive interfaces for user through a Logic & Organisation
          based code.
        </p>
        <ButtonStyle>See more</ButtonStyle>
      </HomeTextStyle>
    </SubHomeContainerStyle>
  );
}

export default SubHomeContainer;
