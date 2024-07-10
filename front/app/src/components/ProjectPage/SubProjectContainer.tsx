import { SubContainerStyle } from "../../styles/ProjectStyle/Project.style";
import { ProjectSubTitleStyle } from "../../styles/ProjectStyle/Project.style";
import ProjectRow from "./ProjectRow";

function SubProjectContainer() {
  return (
    <SubContainerStyle>
      <ProjectSubTitleStyle>
        <h1>Projects</h1>
      </ProjectSubTitleStyle>
      <ProjectRow id={0} />
      <ProjectRow id={2} />
    </SubContainerStyle>
  );
}

export default SubProjectContainer;
