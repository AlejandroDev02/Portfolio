import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Typewriter from './Typewriter';
import './Hero.css';

const Hero = () => {
    const { content } = useLanguage();
    const { hero } = content;
    const [showContent, setShowContent] = useState(false);

    // Reset showContent when language changes to replay animation
    useEffect(() => {
        setShowContent(false);
    }, [content]);

    return (
        <section id="hero" style={styles.section}>
            <div style={styles.content}>
                <h1 style={styles.title} className={showContent ? 'levitating' : ''}>
                    <Typewriter
                        text={hero.title}
                        speed={100}
                        delay={500}
                        onComplete={() => setShowContent(true)}
                    />
                </h1>
                <div style={{
                    ...styles.fadeContent,
                    opacity: showContent ? 1 : 0,
                    transform: showContent ? 'translateY(0)' : 'translateY(20px)',
                }}>
                    <h2 style={styles.subtitle}>{hero.subtitle}</h2>
                    <p style={styles.description}>{hero.description}</p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // Glassmorphism styles
        backgroundColor: 'rgba(36, 36, 36, 0.2)', // Transparent for particle visibility
        backdropFilter: 'blur(5px)',
        color: '#fff',
        borderBottom: 'none',
    },
    content: {
        maxWidth: '1200px',
        width: '100%',
        padding: '2rem',
    },
    title: {
        fontSize: '3.5rem',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.5rem',
        color: '#aaa',
        marginBottom: '1.5rem',
    },
    description: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
    },
    fadeContent: {
        transition: 'opacity 1s ease, transform 1s ease',
        willChange: 'opacity, transform',
    }
};

export default Hero;
