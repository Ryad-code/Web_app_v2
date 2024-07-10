import {
  ProjectButtonStyle,
  ProjectImageStyle,
  ProjectInfoStyle,
  ProjectStyle,
  ProjectTitleStyle,
} from "../../styles/ProjectStyle/Project.style";
import { ButtonStyle1 } from "../../styles/ProjectStyle/Project.style";

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
      <ProjectImageStyle $url={Img} />
      <ProjectTitleStyle>{Title}</ProjectTitleStyle>
      <ProjectInfoStyle>{Text}</ProjectInfoStyle>
      <ProjectButtonStyle>
        <ButtonStyle1>See more</ButtonStyle1>
      </ProjectButtonStyle>
    </ProjectStyle>
  );
}

export default Project;
