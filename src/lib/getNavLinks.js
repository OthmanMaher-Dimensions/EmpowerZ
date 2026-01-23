// Server-side helper to fetch navigation links
export async function getNavLinks() {
    try {
        const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
        const res = await fetch(`${ADMIN_URL}/api/public/pages`, {
            next: { revalidate: 60 } // Cache for 60 seconds
        });

        if (res.ok) {
            const pages = await res.json();
            // Filter out home and map to nav link format
            return pages
                .filter(p => p.slug !== 'home' && p.slug !== '/')
                .map(p => ({
                    name: p.name,
                    href: `/${p.slug}`
                }));
        }
    } catch (error) {
        console.error("Failed to fetch nav links:", error);
    }

    return []; // Return empty array on error
}
