import {
  ProjectButtonStyle,
  ProjectImageStyle,
  ProjectInfoStyle,
  ProjectStyle,
  ProjectTitleStyle,
} from "../../styles/ProjectStyle/Project.style";
import { ButtonStyle1 } from "../../styles/ProjectStyle/Project.style";

/*const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}; */

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
        <ButtonStyle1 as="a" href="https://github.com/Ryad-code/Cub3d">
          See more
        </ButtonStyle1>
      </ProjectButtonStyle>
    </ProjectStyle>
  );
}

export default Project;
