import {
  BarStyle,
  SubBarStyle,
  SubTitleStyle,
} from "../../styles/TechnoStyle/Techno.style";

function SubBar({ res }: { res: number }) {
  return <SubBarStyle $value={res}>.</SubBarStyle>;
}

function SubTitle({ Sub }: { Sub: string }) {
  return (
    <SubTitleStyle>
      <div>{Sub}</div>
      <div>Medium</div>
    </SubTitleStyle>
  );
}

function Bar({ Sub, res }: { Sub: string; res: number }) {
  return (
    <>
      <SubTitle Sub={Sub} />
      <BarStyle>
        <SubBar res={res} />
      </BarStyle>
    </>
  );
}

export default Bar;
