import "./App.css";

import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import SNetworks from "./components/SNetworks/SNetworks";
import Aboutme from "./components/Aboutme/Aboutme";
import Projects from "./components/Projects/Projects";
import IndividualIntervalsExample from "./components/Certificates/Certificates";
import Footer from "./components/Footer/Footer";

import { LangProvider } from "./Context/Langcontext";

const App = () => {
  return (
    <>
      <LangProvider>
        <SNetworks />
        <div id="home" className="content">
          <Header />
          <Presentation />
          <Aboutme />
          <Projects />
          <IndividualIntervalsExample />
          <Footer />
        </div>
      </LangProvider>
    </>
  );
};

export default App;
