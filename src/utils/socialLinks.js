export const getSocialLinks = async () => {
    try {
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
        const res = await fetch(`${adminUrl}/api/public/social`, {
            cache: 'no-store'
        });

        if (res.ok) {
            return await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch social links", error);
    }

    // Fallback default links
    return {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#',
        youtube: '#'
    };
};
