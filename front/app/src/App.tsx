import ProjectContainer from "./components/ProjectPage/ProjectContainer";
import HomeContainer from "./components/HomePage/HomeContainer";
import { MainContainerStyle } from "./styles/Container.style";

function App() {
  return (
    <>
      <MainContainerStyle>
        <HomeContainer />
      </MainContainerStyle>
      <MainContainerStyle>
        <ProjectContainer />
      </MainContainerStyle>
    </>
  );
}

export default App;
