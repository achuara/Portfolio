
import "./App.css";

import Header from "./components/Header/Header";
//import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";


function App() {
  
  return (
  <>
   <Header/>
   <main>
      <Hero/>
      <Portfolio/>
      <Contact/>
   </main>
   {/*<Footer/>*/}
  </>
  );
};

export default App;
