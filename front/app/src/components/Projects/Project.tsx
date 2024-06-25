import {
  ProjectButtonStyle,
  ProjectImageStyle,
  ProjectInfoStyle,
  ProjectStyle,
  ProjectTitleStyle,
} from "../../styles/Container.style";



function Project({
  Title,
  Text,
  Img,
}: {
  Title: string;
  Text: string;
  Img: string;
}) {
  return (
    <ProjectStyle>
      <ProjectImageStyle />
      <ProjectTitleStyle>{Title}</ProjectTitleStyle>
      <ProjectInfoStyle>{Text}</ProjectInfoStyle>
      <ProjectButtonStyle>
        <button>See more</button>
      </ProjectButtonStyle>
    </ProjectStyle>
  );
}

export default Project;
