import ProjectContainer from "./components/ProjectPage/ProjectContainer";
import HomeContainer from "./components/HomePage/HomeContainer";
import { MainContainerStyle, MainStyle } from "./styles/Container.style";
import PresentationContainer from "./components/PresentationPage/PresentationContainer";
import TechnoContainer from "./components/TechnoPage/TechoContainer";

function App() {
  return (
    <MainStyle>
      <MainContainerStyle>
        <HomeContainer />
      </MainContainerStyle>
      <MainContainerStyle>
        <PresentationContainer />
      </MainContainerStyle>
      <MainContainerStyle>
        <ProjectContainer />
      </MainContainerStyle>
      <MainContainerStyle>
        <TechnoContainer />
      </MainContainerStyle>
    </MainStyle>
  );
}

export default App;
