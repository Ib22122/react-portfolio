import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "swiper/swiper-bundle.css"
import "./App.css"

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import 'swiper/swiper-bundle.css';
import Connect from "./Components/Connect/Connect";
import LastComponent from "./Components/Lastcomponent/LastComponent";



function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Connect />
      <LastComponent />
    </div>
    
  );
}

export default App;
