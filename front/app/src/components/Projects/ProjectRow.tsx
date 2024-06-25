import { ProjectRowStyle } from "../../styles/Container.style";
import Project from "./Project";

let Title1: string = "Transcendance";
let Title2: string = "IRC Server";
let Title3: string = "Cub3D";
let Title4: string = "Fract-ol";

let Info: string = "Lorem ipsum...";

let Titles: string[] = ["Transcendance", "IRC Server", "Cub3D", "Fract-ol"];

function ProjectRow() {
  return (
    <ProjectRowStyle>
      <Project Title={Titles[0]} Text={Info} />
      <Project Title={Titles[1]} Text={Info} />
    </ProjectRowStyle>
  );
}

export default ProjectRow;
