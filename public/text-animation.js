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

    function startAnimation() {
        console.log('[TextHandler] Elements found, starting animation');
        startTyping();
        startCursorBlink();
    }

    function startTyping() {
        if (!textElement) return;

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

    // Polling mechanism to wait for React to render the elements
    const checkInterval = setInterval(() => {
        textElement = document.getElementById('hero-typewriter-text');
        cursorElement = document.getElementById('hero-typewriter-cursor');

        if (textElement && cursorElement) {
            clearInterval(checkInterval);
            startAnimation();
        }
    }, 100);

    // Stop polling after 10 seconds to save resources if something is really wrong
    setTimeout(() => {
        clearInterval(checkInterval);
    }, 10000);

})();
