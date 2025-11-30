import { content } from '../data/content';

const Projects = () => {
    const { projects } = content;

    return (
        <section id="projects" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Projects</h2>

                {projects.length === 0 ? (
                    <div style={styles.emptyState}>
                        <p>Currently working on some exciting projects. Check back soon!</p>
                    </div>
                ) : (
                    <div style={styles.grid}>
                        {projects.map((project, index) => (
                            <div key={index} style={styles.card}>
                                <h3 style={styles.projectTitle}>{project.title}</h3>
                                <p style={styles.projectDesc}>{project.description}</p>
                                <div style={styles.links}>
                                    {project.link && <a href={project.link} style={styles.link}>View Project</a>}
                                    {project.github && <a href={project.github} style={styles.link}>GitHub</a>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
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
    emptyState: {
        padding: '3rem',
        backgroundColor: '#333',
        borderRadius: '12px',
        fontSize: '1.2rem',
        color: '#aaa',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#333',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'left',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    projectTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
    projectDesc: {
        color: '#ccc',
        marginBottom: '1.5rem',
        lineHeight: '1.6',
    },
    links: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        color: '#646cff',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Projects;
