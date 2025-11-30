import { content } from '../data/content';

const About = () => {
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
        backgroundColor: '#2a2a2a',
        color: '#fff',
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
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
