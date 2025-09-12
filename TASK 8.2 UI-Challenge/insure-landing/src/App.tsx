import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <div className="noOverflow"> */}
        <Hero />
      {/* </div> */}

      <Features />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
