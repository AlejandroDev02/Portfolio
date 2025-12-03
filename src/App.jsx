import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorFollower from './components/CursorFollower';
import ClickEffect from './components/ClickEffect';

import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
    return (
        <LanguageProvider>
            <div className="app">
                <ClickEffect />
                <CursorFollower />
                <ParticleBackground />
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Education />
                <Projects />
                <Contact />
                <Footer />
                <LanguageToggle />
            </div>
        </LanguageProvider>
    );
}

export default App;
