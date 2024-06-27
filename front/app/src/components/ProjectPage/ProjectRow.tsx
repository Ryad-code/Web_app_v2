import { ProjectRowStyle } from "../../styles/ProjectStyle/Project.style";
import Project from "./Project";

let Images: string[] = [
  "trans_img.png",
  "IRC_img.png",
  "cub3d_img.png",
  "fract-ol.png",
];
let Titles: string[] = ["Transcendance", "IRC Server", "Cub3D", "Fract-ol"];
let Infos: string[] = [
  "Transcendance is a  Single Page Application project  revolving between Back & Frontend",
  "IRC consist in creating an IRC server handling new connections and messages between users",
  "Cub3D is a replica of Wolfenstein 3D one of the firsts FPS game, it uses Ray-casting technologie",
  "Fracto-ol is a graphical interpretation of Complex numbers properties",
];

function ProjectRow({ id }: { id: number }) {
  return (
    <ProjectRowStyle>
      <Project Title={Titles[id]} Text={Infos[id]} Img={Images[id]} />
      <Project
        Title={Titles[id + 1]}
        Text={Infos[id + 1]}
        Img={Images[id + 1]}
      />
    </ProjectRowStyle>
  );
}

export default ProjectRow;
