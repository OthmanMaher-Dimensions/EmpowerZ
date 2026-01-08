"use client";
import React, { useEffect, useRef } from 'react';

const Typewriter = ({
    words = [],
    textClassName,
    cursorClassName,
    typeSpeed = 100,
    deleteSpeed = 50,
    delay = 2000
}) => {
    const textRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const cursorElement = cursorRef.current;

        if (!textElement || words.length === 0) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        const type = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                textElement.innerText = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.innerText = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeedCurrent = typeSpeed;

            if (isDeleting) {
                typeSpeedCurrent = deleteSpeed;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                // Finished typing word
                typeSpeedCurrent = delay;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeedCurrent = 500; // Pause before typing next
            }

            timeoutId = setTimeout(type, typeSpeedCurrent);
        };

        // Start typing
        type();

        // Cursor blinking effect (simple interval)
        const cursorInterval = setInterval(() => {
            if (cursorElement) {
                cursorElement.style.opacity = cursorElement.style.opacity === '0' ? '1' : '0';
            }
        }, 500);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(cursorInterval);
        };
    }, [words, typeSpeed, deleteSpeed, delay]);

    return (
        <>
            <span ref={textRef} className={textClassName}></span>
            <span ref={cursorRef} className={cursorClassName}>|</span>
        </>
    );
};

export default Typewriter;
