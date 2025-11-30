import { content } from '../data/content';

const Footer = () => {
    const { footer } = content;
    return (
        <footer style={styles.footer}>
            <p>{footer.copyright}</p>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: '#1a1a1a',
        color: '#888',
        fontSize: '0.9rem',
    }
};

export default Footer;
