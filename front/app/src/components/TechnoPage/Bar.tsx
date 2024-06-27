import { BarStyle, SubBarStyle } from "../../styles/TechnoStyle/Techno.style";

function SubBar() {
  return <SubBarStyle>.</SubBarStyle>;
}

function Bar({ Sub }: { Sub: string }) {
  return (
    <>
      <>{Sub}</>
      <BarStyle>
        <SubBar />
      </BarStyle>
    </>
  );
}

export default Bar;
