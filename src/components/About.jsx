import { useLanguage } from '../context/LanguageContext';
import FocusCard from './FocusCard';
import ScrollReveal from './ScrollReveal';
import profilePicture from '../resources/profilepicture.png';

const About = () => {
    const { content } = useLanguage();
    const { about } = content;
    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>{about.title}</h2>
                <div style={styles.contentWrapper}>
                    <ScrollReveal className="profile-reveal" threshold={0.2}>
                        <FocusCard style={styles.imageCard}>
                            <div style={styles.imageContainer}>
                                <img
                                    src={profilePicture}
                                    alt="Profile"
                                    style={styles.image}
                                />
                            </div>
                        </FocusCard>
                    </ScrollReveal>
                    <FocusCard style={styles.textCard}>
                        <p style={styles.text}>{about.description}</p>
                    </FocusCard>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '4rem 2rem',
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
        marginBottom: '1.5rem',
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3rem',
        flexWrap: 'wrap', // Allows wrapping on smaller screens
    },
    imageCard: {
        flex: '0 0 auto',
        width: '300px',
        height: '300px',
        padding: '1rem',
        backgroundColor: 'rgba(42, 42, 42, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    textCard: {
        flex: '1 1 400px', // Grow and shrink, base width 400px
        backgroundColor: 'rgba(42, 42, 42, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'left',
    },
    text: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#ddd',
        margin: 0,
    }
};

export default About;
