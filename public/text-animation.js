/**
 * Hero Text Animation Handler
 * Handles the typewriter effect for the hero section.
 */
(function () {
    console.log('[TextHandler] Script loaded');

    const WORDS = ['Entrepreneurs', 'Professionals', 'Students', 'Graduates'];
    const TYPE_SPEED = 100;
    const DELETE_SPEED = 50;
    const DELAY = 2000;

    let textElement = null;
    let cursorElement = null;
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId = null;
    let cursorIntervalId = null;

    function init() {
        textElement = document.getElementById('hero-typewriter-text');
        cursorElement = document.getElementById('hero-typewriter-cursor');

        if (!textElement || !cursorElement) {
            // Retry if not found immediately (e.g. hydration timing)
            // console.warn('Elements not found, retrying...');
            setTimeout(init, 500);
            return;
        }

        console.log('[TextHandler] Elements found, starting animation');
        startTyping();
        startCursorBlink();
    }

    function startTyping() {
        const currentWord = WORDS[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let currentSpeed = TYPE_SPEED;

        if (isDeleting) {
            currentSpeed = DELETE_SPEED;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Finished typing word
            currentSpeed = DELAY;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting
            isDeleting = false;
            wordIndex = (wordIndex + 1) % WORDS.length;
            currentSpeed = 500;
        }

        timeoutId = setTimeout(startTyping, currentSpeed);
    }

    function startCursorBlink() {
        if (cursorIntervalId) clearInterval(cursorIntervalId);

        cursorIntervalId = setInterval(() => {
            if (cursorElement) {
                const currentOpacity = window.getComputedStyle(cursorElement).opacity;
                cursorElement.style.opacity = currentOpacity === '0' ? '1' : '0';
            }
        }, 500);
    }

    // Start on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // slight delay to allow React hydration to start/finish
        setTimeout(init, 100);
    }

})();
