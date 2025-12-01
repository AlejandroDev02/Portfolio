import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
    return (
        <LanguageProvider>
            <div className="app">
                <ParticleBackground />
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
                <LanguageToggle />
            </div>
        </LanguageProvider>
    );
}

export default App;
