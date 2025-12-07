import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from './MagneticButton';
import logoImage from '../resources/logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const { content } = useLanguage();
    const { navbar } = content;
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'skills', 'education', 'projects', 'contact'];

            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3) {
                        current = section;
                    }
                }
            }

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                current = 'contact';
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${targetId}`);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="navbar">
            <div className="logo-container" onClick={scrollToTop}>
                <img src={logoImage} alt="Logo" className="logo-image" />
                <span className="logo-text">Alejandro's Workshop</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <MagneticButton>
                        <a
                            href="#hero"
                            onClick={(e) => handleNavClick(e, 'hero')}
                            className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
                        >
                            {navbar.home}
                        </a>
                    </MagneticButton>
                </li>
                <li>
                    <MagneticButton>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, 'about')}
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        >
                            {navbar.about}
                        </a>
                    </MagneticButton>
                </li>
                <li>
                    <MagneticButton>
                        <a
                            href="#skills"
                            onClick={(e) => handleNavClick(e, 'skills')}
                            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                        >
                            {navbar.skills}
                        </a>
                    </MagneticButton>
                </li>
                <li>
                    <MagneticButton>
                        <a
                            href="#education"
                            onClick={(e) => handleNavClick(e, 'education')}
                            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                        >
                            {navbar.education}
                        </a>
                    </MagneticButton>
                </li>
                <li>
                    <MagneticButton>
                        <a
                            href="#projects"
                            onClick={(e) => handleNavClick(e, 'projects')}
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                        >
                            {navbar.projects}
                        </a>
                    </MagneticButton>
                </li>
                <li>
                    <MagneticButton>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                        >
                            {navbar.contact}
                        </a>
                    </MagneticButton>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
