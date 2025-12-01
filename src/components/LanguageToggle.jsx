import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage} style={styles.button} aria-label="Toggle Language">
            {language === 'en' ? 'ES' : 'EN'}
        </button>
    );
};

const styles = {
    button: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        color: '#333',
        border: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
};

export default LanguageToggle;
