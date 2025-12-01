import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { content } = useLanguage();
    const { skills } = content;
    return (
        <section id="skills" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>{skills.title}</h2>
                <div style={styles.grid}>
                    {skills.items.map((skill, index) => (
                        <div key={index} style={styles.skillCard}>
                            {skill}
                        </div>
                    ))}
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
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
    },
    skillCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighter glass for cards
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '1.1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)',
    }
};

export default Skills;
