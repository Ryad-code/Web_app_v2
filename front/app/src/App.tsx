import ProjectContainer from "./components/ProjectPage/ProjectContainer";
import HomeContainer from "./components/HomePage/HomeContainer";
import { MainContainerStyle, MainStyle } from "./styles/Container.style";
import PresentationContainer from "./components/PresentationPage/PresentationContainer";
import TechnoContainer from "./components/TechnoPage/TechnoContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MainStyle>
      <NavBar />
      <MainContainerStyle id="MainContainer">
        <HomeContainer />
      </MainContainerStyle>
      <MainContainerStyle id="MainContainer1">
        <PresentationContainer />
      </MainContainerStyle>
      <MainContainerStyle id="MainContainer2">
        <ProjectContainer />
      </MainContainerStyle>
      <MainContainerStyle id="MainContainer3">
        <TechnoContainer />
      </MainContainerStyle>
    </MainStyle>
  );
}

export default App;
