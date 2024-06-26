import { SubContainerStyle } from "../../styles/Container.style";
import { HomeSubTitleStyle } from "../../styles/HomeStyle/Home.style";
import ProjectRow from "./ProjectRow";

function SubProjectContainer() {
  return (
    <SubContainerStyle>
      <HomeSubTitleStyle>
        <h1>Projects</h1>
      </HomeSubTitleStyle>
      <ProjectRow />
      <ProjectRow />
    </SubContainerStyle>
  );
}

export default SubProjectContainer;
