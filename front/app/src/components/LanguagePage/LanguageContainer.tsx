import {
  TechnoStyle,
  SubTechnoStyle,
  TechnoTitleStyle,
} from "../../styles/TechnoStyle/Techno.style";
import Bar from "../TechnoPage/Bar";

let Subjects: string[] = ["French", "English", "Spanish"];

export function SubLanguageContainer() {
  return (
    <SubTechnoStyle>
      <Bar Sub={Subjects[0]} res={95} />
      <Bar Sub={Subjects[1]} res={85} />
      <Bar Sub={Subjects[2]} res={75} />
    </SubTechnoStyle>
  );
}

function LanguageContainer() {
  return (
    <TechnoStyle>
      <TechnoTitleStyle>
        <h1>Languages</h1>
      </TechnoTitleStyle>
      <SubLanguageContainer />
    </TechnoStyle>
  );
}

export default LanguageContainer;
