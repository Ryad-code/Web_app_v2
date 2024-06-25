import {
  ProjectButtonStyle,
  ProjectImageStyle,
  ProjectInfoStyle,
  ProjectStyle,
  ProjectTitleStyle,
} from "../../styles/Container.style";

function Project({ Title, Text }: { Title: string; Text: string }) {
  return (
    <ProjectStyle>
      <ProjectImageStyle>Photo</ProjectImageStyle>
      <ProjectTitleStyle>{Title}</ProjectTitleStyle>
      <ProjectInfoStyle>{Text}</ProjectInfoStyle>
      <ProjectButtonStyle>
        <button>See more</button>
      </ProjectButtonStyle>
    </ProjectStyle>
  );
}

export default Project;
