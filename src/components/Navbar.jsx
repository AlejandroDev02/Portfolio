const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>Portfolio</div>
            <ul style={styles.links}>
                <li><a href="#hero" style={styles.link}>Home</a></li>
                <li><a href="#about" style={styles.link}>About</a></li>
                <li><a href="#skills" style={styles.link}>Skills</a></li>
                <li><a href="#projects" style={styles.link}>Projects</a></li>
                <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(51, 51, 51, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    links: {
        display: 'flex',
        listStyle: 'none',
        gap: '1.5rem',
        margin: 0,
        padding: 0,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1rem',
    }
};

export default Navbar;
