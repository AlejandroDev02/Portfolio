import { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
    const cursorDotRef = useRef(null);
    const cursorRingRef = useRef(null);

    // Use refs for positions to avoid re-renders on every frame
    const cursorPos = useRef({ x: -100, y: -100 });
    const followerPos = useRef({ x: -100, y: -100 });
    const followerSize = useRef({ width: 32, height: 32 });
    const followerRadius = useRef(50); // %

    // Target state for the follower
    const targetState = useRef({
        x: -100,
        y: -100,
        width: 32,
        height: 32,
        radius: 50 // %
    });

    useEffect(() => {
        // Only enable on devices that support hover
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        const onMouseMove = (e) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };

            // Move dot instantly
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }

            // If not hovering an element, target is mouse position
            if (!targetState.current.hovering) {
                targetState.current.x = e.clientX;
                targetState.current.y = e.clientY;
            }
        };

        const onMouseOver = (e) => {
            const target = e.target;
            // Check if target is clickable
            const clickable = target.closest('a') ||
                target.closest('button') ||
                target.closest('.clickable') ||
                (window.getComputedStyle(target).cursor === 'pointer');

            if (clickable) {
                const rect = clickable.getBoundingClientRect();
                const style = window.getComputedStyle(clickable);
                const borderRadius = parseFloat(style.borderRadius);

                targetState.current.hovering = true;
                targetState.current.x = rect.left + rect.width / 2;
                targetState.current.y = rect.top + rect.height / 2;
                targetState.current.width = rect.width + 20; // Add padding
                targetState.current.height = rect.height + 10;
                // Convert px radius to % if possible, or just use px. 
                // For simplicity, if it has radius, we try to match it, otherwise default to some rounded corners or 0.
                // Actually, let's just use a fixed small radius for buttons/links usually, or try to read it.
                // If the element is fully rounded (pill), radius is high.
                targetState.current.radius = borderRadius > 0 ? borderRadius + 5 : 8; // px

                if (cursorRingRef.current) {
                    cursorRingRef.current.classList.add('active');
                }
            }
        };

        const onMouseOut = (e) => {
            const target = e.target;
            const clickable = target.closest('a') ||
                target.closest('button') ||
                target.closest('.clickable');

            if (clickable) {
                targetState.current.hovering = false;
                targetState.current.width = 32;
                targetState.current.height = 32;
                targetState.current.radius = 50; // Back to circle (%)

                // We need to reset target position to current mouse position immediately 
                // so it doesn't drift from the last element position
                targetState.current.x = cursorPos.current.x;
                targetState.current.y = cursorPos.current.y;

                if (cursorRingRef.current) {
                    cursorRingRef.current.classList.remove('active');
                }
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        // Animation loop for the follower ring
        let animationFrameId;

        const animate = () => {
            // Linear interpolation (lerp) for smooth following
            const lerpFactor = 0.15;

            // If not hovering, update target to mouse pos (in case it moved without mouseover/out events triggering logic)
            if (!targetState.current.hovering) {
                targetState.current.x = cursorPos.current.x;
                targetState.current.y = cursorPos.current.y;
            }

            followerPos.current.x += (targetState.current.x - followerPos.current.x) * lerpFactor;
            followerPos.current.y += (targetState.current.y - followerPos.current.y) * lerpFactor;
            followerSize.current.width += (targetState.current.width - followerSize.current.width) * lerpFactor;
            followerSize.current.height += (targetState.current.height - followerSize.current.height) * lerpFactor;

            // For radius, we need to handle % vs px. 
            // Simplification: If hovering, we use px. If not, we treat 50 as %.
            // To animate smoothly, we can just apply it directly via CSS transition if we toggle a class, 
            // but for exact shape matching we might need inline styles.
            // Let's try to interpolate the numeric value and apply 'px' or '%' based on state.
            // Actually, mixing units is hard to lerp. 
            // Strategy: When active, use px radius. When inactive, use 50%.
            // We can just set borderRadius in the style directly.

            // Let's just lerp the numeric value. 
            // If target is 50 (%), and we are moving to 8 (px), it might look weird if we don't change unit.
            // Let's assume standard buttons are < 50px height, so 50px radius is basically a circle.
            // So we can treat 50% as effectively "height/2" px.

            let currentRadius = 0;
            if (targetState.current.hovering) {
                // Lerp towards target radius
                // We store the current interpolated radius in a ref if we want smooth transition
            }

            // Simplest approach: Let CSS handle radius transition, we handle position and size.
            // But we need to set the specific radius if we want to match the element.

            if (cursorRingRef.current) {
                cursorRingRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
                cursorRingRef.current.style.width = `${followerSize.current.width}px`;
                cursorRingRef.current.style.height = `${followerSize.current.height}px`;

                if (targetState.current.hovering) {
                    cursorRingRef.current.style.borderRadius = `${targetState.current.radius}px`;
                } else {
                    cursorRingRef.current.style.borderRadius = '50%';
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorRingRef} className="cursor-ring" />
        </>
    );
};

export default CursorFollower;
