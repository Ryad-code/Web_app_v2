import {
  SubTechnoStyle,
  TechnoTitleStyle,
} from "../../styles/TechnoStyle/Techno.style";
import { TechnoStyle } from "../../styles/TechnoStyle/Techno.style";
import Bar from "./Bar";

let Subjects: string[] = [
  "C & C++",
  "HTML & CSS",
  "Docker & Git",
  "React",
  "JavaScript & TypeScript",
  "Ui Design",
];

export function SubTechnoContainer() {
  return (
    <SubTechnoStyle>
      <Bar Sub={Subjects[0]} res={95} />
      <Bar Sub={Subjects[1]} res={80} />
      <Bar Sub={Subjects[2]} res={80} />
      <Bar Sub={Subjects[3]} res={75} />
      <Bar Sub={Subjects[4]} res={75} />
      <Bar Sub={Subjects[5]} res={60} />
    </SubTechnoStyle>
  );
}

function TechnoContainer() {
  return (
    <TechnoStyle>
      <TechnoTitleStyle>
        <h1>Technologies</h1>
      </TechnoTitleStyle>
      <SubTechnoContainer />
    </TechnoStyle>
  );
}

export default TechnoContainer;
