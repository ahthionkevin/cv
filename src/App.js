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
        </div>
    );
}

export default App;
