import {
  ItemStyle,
  NavBarItemStyle1,
  NavBarItemStyle,
  SubNavBarStyle,
  NavBarStyle,
} from "../styles/NavBar.style";

import MediaQuery from "react-responsive";

function Scroll(dest: string) {
  const element = document.getElementById(dest);
  if (element) element.scrollIntoView();
}

function NavBarItem() {
  return (
    <>
      <NavBarItemStyle>
        <ItemStyle>Ryad Laouedj</ItemStyle>
      </NavBarItemStyle>
      <NavBarItemStyle1>
        <MediaQuery minWidth={1024}>
          <ItemStyle onClick={() => Scroll("MainContainer1")}>
            About me
          </ItemStyle>
          <ItemStyle onClick={() => Scroll("MainContainer2")}>
            Projects
          </ItemStyle>
          <ItemStyle onClick={() => Scroll("MainContainer3")}>
            Technologies
          </ItemStyle>
        </MediaQuery>
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
