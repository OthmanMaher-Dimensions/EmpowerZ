/**
 * Track CTA button clicks.
 * Sends an event to the Admin API.
 * 
 * @param {string} label - The label/name of the button (e.g., "Join Hero")
 * @param {string} page - The page name where the click occurred (e.g., "Home")
 */
export const trackCta = async (label, page) => {
    try {
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';

        // Fire and forget (don't await strictly if not needed, but good to log)
        await fetch(`${adminUrl}/api/analytics/cta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                label,
                page,
                timestamp: new Date().toISOString()
            }),
        });
    } catch (error) {
        console.error("Tracking Error:", error);
    }
};
