import { ProjectRowStyle } from "../../styles/Container.style";
import Project from "./Project";

let img1: string = "trans_img.png";
let img2: string = "IRC_img.png";
let img3: string = "cub3d_img.png";
let img4: string = "fract-ol.png";

let Titles: string[] = ["Transcendance", "IRC Server", "Cub3D", "Fract-ol"];
let Info: string = "Lorem ipsum...............................";

function ProjectRow() {
  return (
    <ProjectRowStyle>
      <Project Title={Titles[0]} Text={Info} Img={img1} />
      <Project Title={Titles[1]} Text={Info} Img={img2} />
    </ProjectRowStyle>
  );
}

export default ProjectRow;
