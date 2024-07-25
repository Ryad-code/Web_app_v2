import { NavBarStyle, NavBarItemStyle } from "../../styles/NavBar/NavBar.style";

function NameLogo() {
  return <NavBarItemStyle $size={"20%"}>Ryad Laouedj</NavBarItemStyle>;
}

function NavBarItems() {
  return (
    <NavBarItemStyle $size={"40%"}>
      <div>About me</div>
      <div>Projects</div>
      <div>Technologies</div>
    </NavBarItemStyle>
  );
}

function Icons() {
  return (
    <NavBarItemStyle $size={"20%"}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </NavBarItemStyle>
  );
}

function NavBar() {
  return (
    <NavBarStyle>
      <NameLogo />
      <NavBarItems />
      <Icons />
    </NavBarStyle>
  );
}

export default NavBar;
