import { Reveal, Slide, Zoom } from "react-reveal";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Formation from "./pages/Formation";
import Home from "./pages/Home";
import Portofolio from "./pages/Portofolio";
import Skills from "./pages/Skills";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Formation />
            <Portofolio />
            <Contact />
            <Footer />
            {/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/formations" element={<Formation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portofolio" element={<Portofolio />} />
            </Routes> */}
        </div>
    );
}

export default App;
