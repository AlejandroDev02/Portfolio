import { content } from '../data/content';

const Skills = () => {
    const { skills } = content;
    return (
        <section id="skills" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Skills</h2>
                <div style={styles.grid}>
                    {skills.map((skill, index) => (
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
        backgroundColor: '#242424',
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
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
    },
    skillCard: {
        backgroundColor: '#333',
        padding: '1rem 2rem',
        borderRadius: '8px',
        fontSize: '1.1rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    }
};

export default Skills;
