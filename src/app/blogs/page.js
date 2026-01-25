import BlogsHero from '@/components/BlogsHero';
import { getNavLinks } from '../../lib/getNavLinks';
import BlogsGrid from '@/components/BlogsGrid';
import Footer from '@/components/Footer';
import ConnectSection from '@/components/ConnectSection';
import GallerySection from '@/components/GallerySection';

import { generatePageMetadata } from '@/utils/seo';

export async function generateMetadata() {
    return generatePageMetadata(
        'blogs',
        "Blogs | EmpowerZ",
        "Read our latest insights and updates."
    );
}

export default async function Blogs() {
    const navLinks = await getNavLinks();
    return (
        <main>
            <BlogsHero dynamicLinks={navLinks} />
            <BlogsGrid />
            <ConnectSection />
            <GallerySection />
            <Footer />
        </main>
    );
}
