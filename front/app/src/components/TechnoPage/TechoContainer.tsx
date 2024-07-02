import {
  SubTechnoStyle,
  TechnoTitleStyle,
} from "../../styles/TechnoStyle/Techno.style";
import { TechnoStyle } from "../../styles/TechnoStyle/Techno.style";
import Bar from "./Bar";

let Subjects: string[] = [
  "C & C++",
  "Docker & Git",
  "JavaScript & TypeScript",
  "React",
  "Ui Design",
];

function SubTechnoContainer() {
  return (
    <SubTechnoStyle>
      <Bar Sub={Subjects[0]} />
      <Bar Sub={Subjects[1]} />
      <Bar Sub={Subjects[2]} />
      <Bar Sub={Subjects[3]} />
    </SubTechnoStyle>
  );
}

function TechnoContainer() {
  return (
    <TechnoStyle>
      <TechnoTitleStyle>
        <h2>Technologies</h2>
      </TechnoTitleStyle>
      <SubTechnoContainer />
    </TechnoStyle>
  );
}

export default TechnoContainer;
