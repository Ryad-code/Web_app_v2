import Section1 from "./Section1";
import Section2 from "./Section2";

import { HomeStyle, Section2Style } from "../../styles/HomePage/Home.style";

function Home() {
  return (
    <HomeStyle>
      <Section1 />
      <Section2 />
    </HomeStyle>
  );
}

export default Home;
