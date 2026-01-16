export async function fetchPageSeo(slug) {
    try {
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
        const res = await fetch(`${adminUrl}/api/public/seo`, { next: { revalidate: 60 } });

        if (!res.ok) {
            console.error('Failed to fetch SEO data');
            return {};
        }

        const seoMap = await res.json();
        return seoMap[slug] || {};
    } catch (error) {
        console.error(`Error fetching SEO for ${slug}:`, error);
        return {};
    }
}

export async function generatePageMetadata(slug, defaultTitle, defaultDescription) {
    const seoData = await fetchPageSeo(slug);

    return {
        title: seoData.title || defaultTitle || "EmpowerZ",
        description: seoData.description || defaultDescription || "Empowering individuals and businesses.",
        keywords: seoData.keywords || "",
        icons: {
            icon: '/assets/logo.png',
        },
    };
}
