import Header from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { RenderSections } from '../../utils/RenderSections';
import { notFound } from 'next/navigation';

async function getPageData(slug) {
    try {
        const res = await fetch(`http://localhost:3000/api/builder/pages?slug=${slug}`, {
            next: { revalidate: 0 }
        });
        if (!res.ok) return null;
        return await res.json();
    } catch (e) {
        console.error("Fetch error:", e);
        return null;
    }
}

export default async function DynamicPage({ params }) {
    const { slug } = await params;
    const slugString = slug.join('/');

    const pageData = await getPageData(slugString);

    if (!pageData) {
        notFound();
    }

    return (
        <main>
            <Header />
            <RenderSections sections={pageData.sections} />
            <Footer />
        </main>
    );
}
