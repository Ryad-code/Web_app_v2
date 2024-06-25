import { SubContainerStyle } from "../styles/Container.style";
import ProjectRow from "./Projects/ProjectRow";

function SubContainer() {
  return (
    <SubContainerStyle>
      <ProjectRow />
      <ProjectRow />
    </SubContainerStyle>
  );
}

export default SubContainer;
