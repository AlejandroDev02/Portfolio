import { useState, useEffect } from 'react';

const ClickEffect = () => {
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newRipple = {
                x: e.clientX,
                y: e.clientY,
                id: Date.now()
            };

            setRipples((prevRipples) => [...prevRipples, newRipple]);

            // Remove ripple after animation
            setTimeout(() => {
                setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== newRipple.id));
            }, 600); // Match animation duration
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="click-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y
                    }}
                />
            ))}
        </>
    );
};

export default ClickEffect;
