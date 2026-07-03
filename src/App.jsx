import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import Services from "./components/Services/Services";
import Industries from "./components/Industries/Industries";
import  Stats from "./components/Stats/Stats";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Services />
      <Industries />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;