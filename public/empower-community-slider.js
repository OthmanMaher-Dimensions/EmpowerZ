/**
 * Empower Community Slider Script v2
 * Uses Event Delegation (The "Header Trick") to survive React Hydration.
 */
(function () {
    console.log('--- SLIDER SCRIPT v2 (DELEGATION) ---');

    let currentIndex = 0;
    const slidesCount = 8;

    // Globals to track state
    window.empowerSlider = {
        index: 0
    };

    function getSlidesToShow() {
        return window.innerWidth < 768 ? 1 : 3;
    }

    function updateUI() {
        // ALWAYS re-query elements because React replaces them
        const track = document.getElementById('community-slider-track');
        const prevBtn = document.getElementById('community-slider-prev');
        const nextBtn = document.getElementById('community-slider-next');

        if (!track || !prevBtn || !nextBtn) return;

        const slidesToShow = getSlidesToShow();
        const maxIndex = Math.max(0, slidesCount - slidesToShow);

        // Bounds
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        // Move
        const percent = -(currentIndex * (100 / slidesToShow));
        track.style.transform = `translateX(${percent}%)`;

        // Buttons CSS State
        if (currentIndex === 0) {
            prevBtn.setAttribute('disabled', 'true');
        } else {
            prevBtn.removeAttribute('disabled');
        }

        if (currentIndex >= maxIndex) {
            nextBtn.setAttribute('disabled', 'true');
        } else {
            nextBtn.removeAttribute('disabled');
        }
    }

    // GLOBAL CLICK LISTENER (Delegation)
    document.addEventListener('click', function (e) {
        // Find closest button if user clicked on SVG/Path
        const pBtn = e.target.closest('#community-slider-prev');
        const nBtn = e.target.closest('#community-slider-next');

        if (pBtn) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Prev Clicked');

            if (!pBtn.hasAttribute('disabled')) {
                currentIndex--;
                updateUI();
            }
        }
        else if (nBtn) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Next Clicked');

            if (!nBtn.hasAttribute('disabled')) {
                currentIndex++;
                updateUI();
            }
        }
    }, true); // Capture phase to beat React listeners if any

    // Handle Resize
    window.addEventListener('resize', updateUI);

    // Auto-Init to set initial state
    const interval = setInterval(() => {
        const track = document.getElementById('community-slider-track');
        if (track) {
            updateUI();
            // We don't clear interval because we want to constantly 
            // "heal" the visual state if React re-renders and wipes inline styles
        }
    }, 500);

})();
