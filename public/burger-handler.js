/**
 * Burger Menu Handler (Delegation Version)
 * Uses document-level event delegation to handle clicks.
 * This persists even if React replaces the button element during hydration.
 */

(function () {
    console.log('[BurgerHandler] Script loaded (Delegation Version)');

    function toggleMenu(forceClose = false) {
        const overlay = document.getElementById('mobile-menu-overlay');

        if (!overlay) {
            console.warn('[BurgerHandler] Overlay not found');
            return;
        }

        if (forceClose) {
            overlay.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
            console.log('[BurgerHandler] Menu closed');
            return;
        }

        const isOpen = overlay.classList.contains('mobile-menu-open');
        if (isOpen) {
            overlay.classList.remove('mobile-menu-open');
            document.body.style.overflow = '';
            console.log('[BurgerHandler] Menu closed');
        } else {
            overlay.classList.add('mobile-menu-open');
            document.body.style.overflow = 'hidden';
            console.log('[BurgerHandler] Menu opened');
        }
    }

    // Global Click Listener
    document.addEventListener('click', function (e) {
        // 1. Check for Toggle Button Click
        const toggleBtn = e.target.closest('#mobile-menu-toggle');
        if (toggleBtn) {
            e.preventDefault();
            e.stopPropagation(); // Stop React from seeing this if possible
            console.log('[BurgerHandler] Toggle button clicked');
            toggleMenu();
            return;
        }

        // 2. Check for Link Click (Close menu)
        // We check if the click is inside the overlay AND on a link
        const overlay = document.getElementById('mobile-menu-overlay');
        if (overlay && overlay.contains(e.target)) {
            const link = e.target.closest('a');
            if (link) {
                console.log('[BurgerHandler] Link clicked, closing menu');
                toggleMenu(true);
            }
        }
    }, true); // Use capture phase to ensure we catch it before React might stop it? 
    // Actually bubbling is usually fine, but capture is safer if React stops propagation on the element.
    // Let's stick to standard bubbling for now, but if it fails, try capture: true.
    // Reset: removing the 'true' for bubbling phase unless needed. 
    // Wait, React synthetic events bubble. Native events capture/bubble. 
    // Mixing them: React attaches at root. 
    // Listening at document level should work.


    console.log('[BurgerHandler] Global listener attached.');

    // --- HEADER SCROLL LOGIC (Static Fix) ---
    function handleScroll() {
        const header = document.getElementById('site-header');
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add('scrolled-mode');
        } else {
            header.classList.remove('scrolled-mode');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Init check
    handleScroll();

})();
