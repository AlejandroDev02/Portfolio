import { content } from '../data/content';

const Hero = () => {
    const { hero } = content;
    return (
        <section id="hero" style={styles.section}>
            <div style={styles.content}>
                <h1 style={styles.title}>{hero.title}</h1>
                <h2 style={styles.subtitle}>{hero.subtitle}</h2>
                <p style={styles.description}>{hero.description}</p>
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
    }
};

export default Hero;
