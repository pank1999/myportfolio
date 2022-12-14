import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Conatct/Contact";
import Education from "./components/Education/Education";
import Experiance from "./components/Experiance/Experiance";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Introduction/Intro";
import Placements from "./components/Placements/Placements";
import ProductList from "./components/ProductList/ProductList";
import Slider from "./components/Slider/Slider";
import Toggle from "./components/Toggle/Toggle";
import { TheameContext } from "./context";


function App() {
  const theame=useContext(TheameContext);
  const darkMode=theame.state.darkMode;

  return (
    <div className="App" style={{backgroundColor:darkMode?"#222":"white",color:darkMode?"white":"black"}}>
     
         <Toggle />
         <Intro />
         <About />
         <Placements/>
         <Education />
         <Experiance />
         <Slider />
         <ProductList />
         <Contact />
         <Footer />
    
      
    </div>
  );
}

export default App;
