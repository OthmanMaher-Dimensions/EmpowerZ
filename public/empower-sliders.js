/**
 * Empower Sliders Script
 * Handles Static JS logic for:
 * 1. Community Slider (Desktop & Mobile)
 * 2. Testimonials Slider (Mobile Only)
 * 
 * Uses Event Delegation to bypass React Hydration issues.
 */
(function () {
    console.log('--- EMPOWER SLIDERS SCRIPT LOADED v1 ---');

    // --- STATE MANAGEMENT ---
    const state = {
        community: {
            index: 0,
            count: 8
        },
        testimonials: {
            index: 0,
            count: 3
        }
    };

    // --- HELPER FUNCTIONS ---

    function getSlidesToShow(type) {
        if (type === 'community') {
            return window.innerWidth < 768 ? 1 : 3;
        }
        if (type === 'testimonials') {
            return window.innerWidth < 768 ? 1 : 3; // 3 slides on desktop
        }
        return 1;
    }

    function updateCommunitySlider() {
        const track = document.getElementById('community-slider-track');
        const prevBtn = document.getElementById('community-slider-prev');
        const nextBtn = document.getElementById('community-slider-next');

        if (!track || !prevBtn || !nextBtn) return;

        const slidesToShow = getSlidesToShow('community');
        const count = state.community.count;
        const maxIndex = Math.max(0, count - slidesToShow);

        // Clamp
        if (state.community.index < 0) state.community.index = 0;
        if (state.community.index > maxIndex) state.community.index = maxIndex;

        // Move
        const percent = -(state.community.index * (100 / slidesToShow));
        track.style.transform = `translateX(${percent}%)`;

        // Buttons
        prevBtn.toggleAttribute('disabled', state.community.index === 0);
        nextBtn.toggleAttribute('disabled', state.community.index >= maxIndex);
    }

    function updateTestimonialsSlider() {
        const track = document.getElementById('testimonials-track');
        const prevBtn = document.getElementById('testimonials-prev');
        const nextBtn = document.getElementById('testimonials-next');

        if (!track || !prevBtn || !nextBtn) return;

        const slidesToShow = getSlidesToShow('testimonials');
        // We added duplicated data (6 items). Let's update count or detect it?
        // Ideally we detect children count.
        const realCount = track.children.length;
        // fallback to state count if 0, but usually we should trust DOM
        const count = realCount || state.testimonials.count;

        const maxIndex = Math.max(0, count - slidesToShow);

        // Clamp
        if (state.testimonials.index < 0) state.testimonials.index = 0;
        if (state.testimonials.index > maxIndex) state.testimonials.index = maxIndex;

        // Move
        const percent = -(state.testimonials.index * (100 / slidesToShow));
        track.style.transform = `translateX(${percent}%)`;

        // Buttons
        // We use setAttribute/removeAttribute to ensure CSS selectors [disabled] work
        if (state.testimonials.index === 0) prevBtn.setAttribute('disabled', 'true');
        else prevBtn.removeAttribute('disabled');

        if (state.testimonials.index >= maxIndex) nextBtn.setAttribute('disabled', 'true');
        else nextBtn.removeAttribute('disabled');
    }

    function updateAll() {
        updateCommunitySlider();
        updateTestimonialsSlider();
    }

    // --- EVENT DELEGATION ---
    document.addEventListener('click', function (e) {
        // COMMUNITY SLIDER
        const cPrev = e.target.closest('#community-slider-prev');
        const cNext = e.target.closest('#community-slider-next');

        if (cPrev && !cPrev.hasAttribute('disabled')) {
            e.preventDefault(); e.stopPropagation();
            state.community.index--;
            updateCommunitySlider();
            return;
        }
        if (cNext && !cNext.hasAttribute('disabled')) {
            e.preventDefault(); e.stopPropagation();
            state.community.index++;
            updateCommunitySlider();
            return;
        }

        // TESTIMONIALS SLIDER
        const tPrev = e.target.closest('#testimonials-prev');
        const tNext = e.target.closest('#testimonials-next');

        if (tPrev && !tPrev.hasAttribute('disabled')) {
            e.preventDefault(); e.stopPropagation();
            state.testimonials.index--;
            updateTestimonialsSlider();
            return;
        }
        if (tNext && !tNext.hasAttribute('disabled')) {
            e.preventDefault(); e.stopPropagation();
            state.testimonials.index++;
            updateTestimonialsSlider();
            return;
        }
    }, true); // Capture phase

    // --- INIT & RESIZE ---
    window.addEventListener('resize', updateAll);

    // Loop to auto-heal/init
    setInterval(() => {
        // Try to update. If elements missing, function just returns.
        updateAll();
    }, 500);

})();
