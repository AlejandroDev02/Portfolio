import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import FocusCard from './FocusCard';
import MagneticButton from './MagneticButton';

const Contact = () => {
    const { content } = useLanguage();
    const { contact } = content;
    return (
        <section id="contact" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>{contact.title}</h2>
                <FocusCard style={styles.card}>
                    <div style={styles.links}>
                        <MagneticButton>
                            <a href={`mailto:${contact.email}`} style={styles.button}>{contact.emailButton}</a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href={contact.github} target="_blank" rel="noopener noreferrer" style={styles.button}>GitHub</a>
                        </MagneticButton>

                        <MagneticButton>
                            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" style={styles.button}>WhatsApp</a>
                        </MagneticButton>
                    </div>
                </FocusCard>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '2rem 2rem',
        color: '#fff',
        margin: '0 auto',
        maxWidth: '1200px',
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    card: {
        // Glassmorphism styles moved here
        backgroundColor: 'rgba(36, 36, 36, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        animation: 'border-blink 3s infinite ease-in-out',
    },
    links: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap',
    },
    button: {
        display: 'inline-block',
        padding: '1rem 2rem',
        backgroundColor: '#646cff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    }
};

export default Contact;
