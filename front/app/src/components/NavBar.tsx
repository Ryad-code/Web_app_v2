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
        <ItemStyle>m1</ItemStyle>
        <ItemStyle>m2</ItemStyle>
        <ItemStyle>m3</ItemStyle>
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
