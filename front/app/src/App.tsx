import ProjectContainer from "./components/ProjectPage/ProjectContainer";
import HomeContainer from "./components/HomePage/HomeContainer";
import { LastContainerStyle } from "./styles/Container.style";
import { MainContainerStyle, MainStyle } from "./styles/Container.style";
import PresentationContainer from "./components/PresentationPage/PresentationContainer";
import TechnoContainer from "./components/TechnoPage/TechnoContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LanguageContainer from "./components/LanguagePage/LanguageContainer";

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
      <LastContainerStyle id="MainContainer2">
        <ProjectContainer />
      </LastContainerStyle>
      <LastContainerStyle id="MainContainer3">
        <TechnoContainer />
      </LastContainerStyle>
      <LastContainerStyle id="MainContainer4">
        <LanguageContainer />
      </LastContainerStyle>
      <LastContainerStyle>
        <Footer />
      </LastContainerStyle>
    </MainStyle>
  );
}

export default App;
