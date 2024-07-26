import { MainStyle } from "./styles/Main.style";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/Home";
import Project from "./components/ProjectPage/Project";
import Language from "./components/LanguagePage/Language";
import Footer from "./components/Footer/Footer";
import Intro from "./components/IntroPage/Intro";

function App() {
  return (
    <MainStyle>
      <NavBar />
      <Home />
      <Intro />
      <Project />
      <Language />
      <Footer />
    </MainStyle>
  );
}

export default App;
