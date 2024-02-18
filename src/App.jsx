import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OthersProjects } from "./components/OthersProjects";
import { Projects } from "./components/Projects/index";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Header/>
      <GlobalStyle/>
      <Projects/>
      <OthersProjects/>
      <Footer/>
    </>
  )
}


