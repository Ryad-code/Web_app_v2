import { SubContainerStyle } from "../../styles/Container.style";
import { HomeSubTitleStyle } from "../../styles/HomeStyle/Home.style";
import ProjectRow from "./ProjectRow";

function SubProjectContainer() {
  return (
    <SubContainerStyle>
      <HomeSubTitleStyle>
        <h2>Projects</h2>
      </HomeSubTitleStyle>
      <ProjectRow />
      <ProjectRow />
    </SubContainerStyle>
  );
}

export default SubProjectContainer;
