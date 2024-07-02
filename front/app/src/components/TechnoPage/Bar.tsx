import {
  BarStyle,
  SubBarStyle,
  SubTitleStyle,
} from "../../styles/TechnoStyle/Techno.style";

function SubBar() {
  return <SubBarStyle>.</SubBarStyle>;
}

function SubTitle({ Sub }: { Sub: string }) {
  return (
    <SubTitleStyle>
      <div>{Sub}</div>
      <div>Medium</div>
    </SubTitleStyle>
  );
}

function Bar({ Sub }: { Sub: string }) {
  return (
    <>
      <SubTitle Sub={Sub} />
      <BarStyle>
        <SubBar />
      </BarStyle>
    </>
  );
}

export default Bar;
