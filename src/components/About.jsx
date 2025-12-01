import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { content } = useLanguage();
    const { about } = content;
    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>{about.title}</h2>
                <p style={styles.text}>{about.description}</p>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '4rem 2rem',
        // Glassmorphism styles
        backgroundColor: 'rgba(42, 42, 42, 0.7)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        margin: '2rem auto',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '1200px', // Ensure the section itself doesn't stretch too wide if we want margins
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
    text: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#ddd',
    }
};

export default About;
