import {
  BarStyle,
  SubBarStyle,
  SubTitleStyle,
} from "../../styles/TechnoStyle/Techno.style";

function SubBar({ res }: { res: number }) {
  return <SubBarStyle $value={res}>.</SubBarStyle>;
}

function Barlvl(res: number) {
  if (res > 79) return "Advanced";
  else return "Medium";
}

function SubTitle({ Sub, res }: { Sub: string; res: number }) {
  return (
    <SubTitleStyle>
      <div>{Sub}</div>
      <div>{Barlvl(res)}</div>
    </SubTitleStyle>
  );
}

function Bar({ Sub, res }: { Sub: string; res: number }) {
  return (
    <>
      <SubTitle res={res} Sub={Sub} />
      <BarStyle>
        <SubBar res={res} />
      </BarStyle>
    </>
  );
}

export default Bar;
