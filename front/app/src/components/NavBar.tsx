import {
  ItemStyle,
  NavBarItemStyle1,
  NavBarItemStyle,
  SubNavBarStyle,
  NavBarStyle,
} from "../styles/NavBar.style";

function NavBarItem() {
  return (
    <>
      <NavBarItemStyle>
        <ItemStyle>Ryad Laouedj</ItemStyle>
      </NavBarItemStyle>
      <NavBarItemStyle1>
        <ItemStyle>About</ItemStyle>
        <ItemStyle>Project</ItemStyle>
        <ItemStyle>Technologies</ItemStyle>
      </NavBarItemStyle1>
    </>
  );
}

function SubNavBar() {
  return (
    <SubNavBarStyle>
      <NavBarItem />
    </SubNavBarStyle>
  );
}

function NavBar() {
  return (
    <NavBarStyle>
      <SubNavBar />
    </NavBarStyle>
  );
}
export default NavBar;
