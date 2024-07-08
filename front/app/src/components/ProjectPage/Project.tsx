import {
  ProjectButtonStyle,
  ProjectImageStyle,
  ProjectInfoStyle,
  ProjectStyle,
  ProjectTitleStyle,
} from "../../styles/ProjectStyle/Project.style";
import { ButtonStyle } from "../../styles/HomeStyle/Home.style";

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
        <ButtonStyle>See more</ButtonStyle>
      </ProjectButtonStyle>
    </ProjectStyle>
  );
}

export default Project;
