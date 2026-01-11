/**
 * Form Handler Script
 * Handles static event delegation and UI state management for multi-step forms.
 * Bypasses React's navigation handling completely to ensure reliability.
 */
(function () {
    console.log('[FormHandler] Script loaded v2 (Static Navigation)');

    // --- State Management ---
    const state = {
        member: {
            currentStep: 1,
            maxSteps: 6
        },
        sponsor: {
            currentStep: 1,
            maxSteps: 6
        }
    };

    // --- Helper Functions ---

    function updateFormUI(type) {
        const s = state[type];
        const prefix = type === 'member' ? 'member' : 'sponsor';

        // 1. Update Stepper UI
        // Assuming stepper items have ID: {prefix}-step-indicator-X
        // and CSS class 'active' or 'completed' (from FormComponents.module.css or equivalent)
        // Wait, the CSS modules usually hash classes, but if we used global or unique IDs, we can target them.
        // But since we can't easily guess module hash, let's look for known structure or data attributes.
        // We added `data-step="X"` to stepper items. Good.
        // But styling relies on module classes. This is tricky with static JS targeting module classes.
        // However, the React render puts the 'active' class on step 1. We just need to move that class.
        // BUT better: let's rely on data-attributes and have global CSS or assume we can manipulate the classList safely
        // by looking at what classList Step 1 has.

        // Actually, simpler: Toggle `display: block/none` on step content containers.
        for (let i = 1; i <= s.maxSteps; i++) {
            const stepContent = document.getElementById(`${prefix}-step-${i}`);
            if (stepContent) {
                stepContent.style.display = (i === s.currentStep) ? 'block' : 'none';
            }

            // Stepper
            const stepperItem = document.getElementById(`${prefix}-step-indicator-${i}`);
            if (stepperItem) {
                // We need to know which class is 'active' and 'completed'.
                // Since we can't import styles here, we might fail to apply the *exact* hashed class.
                // However, usually module classes look like `FormComponents_active__XYZ`.
                // A trick is to find the stepper container and see what classes the *active* one has (Step 1 initially).
                // Or we can just modify style directly if classes are hard.
                // Let's try to infer classes from the DOM or just use inline styles for the circle.
                // OR: The user asked to render them.

                // Let's try to just toggle opacity/color manually if we can't find class,
                // OR iterate classLists.

                // Simplified approach: Set generic 'active' attribute and let CSS attribute selector handle it IF we added it.
                // We didn't add attribute selectors in CSS.

                // Let's reuse the classes found on the elements.
                // Find all stepper items.
                // We know step 1 is active initially.

                // ... For now, let's just make sure the CONTENT toggles. Stepper visual update is secondary but important.
                // We will try to add a global 'active' class if the module supports it, or use inline styles for the circle.
                if (i < s.currentStep) {
                    stepperItem.style.opacity = '0.5'; // Completed
                    stepperItem.querySelector('div').innerText = '✓';
                    stepperItem.querySelector('div').style.backgroundColor = '#fec23d';
                    stepperItem.querySelector('div').style.color = '#000';
                } else if (i === s.currentStep) {
                    stepperItem.style.opacity = '1';
                    stepperItem.querySelector('div').innerText = i;
                    stepperItem.querySelector('div').style.backgroundColor = '#fec23d';
                    stepperItem.querySelector('div').style.color = '#000';
                } else {
                    stepperItem.style.opacity = '0.5';
                    stepperItem.querySelector('div').innerText = i;
                    stepperItem.querySelector('div').style.backgroundColor = 'transparent';
                    stepperItem.querySelector('div').style.color = '#fff';
                }
            }
        }

        // 2. Update Buttons
        const prevBtn = document.getElementById(type === 'member' ? 'btn-prev' : 'btn-prev-sponsor');
        const nextBtn = document.getElementById(type === 'member' ? 'btn-next' : 'btn-next-sponsor');
        const submitBtn = document.getElementById(type === 'member' ? 'btn-submit' : 'btn-submit-sponsor');

        if (prevBtn) {
            if (s.currentStep === 1) {
                prevBtn.disabled = true;
                prevBtn.style.opacity = '0.5';
                prevBtn.style.cursor = 'not-allowed';
            } else {
                prevBtn.disabled = false;
                prevBtn.style.opacity = '1';
                prevBtn.style.cursor = 'pointer';
            }
        }

        // Next vs Submit
        if (s.currentStep === s.maxSteps) {
            if (nextBtn) nextBtn.style.display = 'none';
            if (submitBtn) submitBtn.style.display = 'block'; // or 'inline-block'
        } else {
            if (nextBtn) nextBtn.style.display = 'block'; // or 'inline-block'
            if (submitBtn) submitBtn.style.display = 'none';
        }
    }

    // --- Event Listeners ---

    document.addEventListener('click', function (e) {

        // --- MEMBER FORM ---
        const memberNext = e.target.closest('#btn-next');
        const memberPrev = e.target.closest('#btn-prev');

        if (memberNext) {
            e.preventDefault(); e.stopPropagation();
            if (state.member.currentStep < state.member.maxSteps) {
                state.member.currentStep++;
                console.log('[FormHandler] Member Next -> Step', state.member.currentStep);
                updateFormUI('member');
                window.scrollTo(0, 0);
            }
            return;
        }

        if (memberPrev) {
            e.preventDefault(); e.stopPropagation();
            if (state.member.currentStep > 1) {
                state.member.currentStep--;
                console.log('[FormHandler] Member Prev -> Step', state.member.currentStep);
                updateFormUI('member');
                window.scrollTo(0, 0);
            }
            return;
        }

        // --- SPONSOR FORM ---
        const sponsorNext = e.target.closest('#btn-next-sponsor');
        const sponsorPrev = e.target.closest('#btn-prev-sponsor');

        if (sponsorNext) {
            e.preventDefault(); e.stopPropagation();
            if (state.sponsor.currentStep < state.sponsor.maxSteps) {
                state.sponsor.currentStep++;
                console.log('[FormHandler] Sponsor Next -> Step', state.sponsor.currentStep);
                updateFormUI('sponsor');
                window.scrollTo(0, 0);
            }
            return;
        }

        if (sponsorPrev) {
            e.preventDefault(); e.stopPropagation();
            if (state.sponsor.currentStep > 1) {
                state.sponsor.currentStep--;
                console.log('[FormHandler] Sponsor Prev -> Step', state.sponsor.currentStep);
                updateFormUI('sponsor');
                window.scrollTo(0, 0);
            }
            return;
        }

    }, true); // Capture phase

    // Initialize UI on load to ensure correct state if navigating back
    window.addEventListener('load', () => {
        updateFormUI('member');
        updateFormUI('sponsor');
    });
    // Or simpler: run once now
    setTimeout(() => {
        updateFormUI('member');
        updateFormUI('sponsor');
    }, 500);

})();
