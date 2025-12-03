import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { content } = useLanguage();
    const { contact } = content;
    return (
        <section id="contact" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>{contact.title}</h2>
                <div style={styles.links}>
                    <a href={`mailto:${contact.email}`} style={styles.button}>{contact.emailButton}</a>
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" style={styles.button}>GitHub</a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" style={styles.button}>LinkedIn</a>
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" style={styles.button}>WhatsApp</a>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '4rem 2rem',
        // Glassmorphism styles
        backgroundColor: 'rgba(36, 36, 36, 0.7)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        margin: '2rem auto',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '1200px',
    },
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
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
