import BlogsHero from '@/components/BlogsHero';
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

export default function Blogs() {
    return (
        <main>
            <BlogsHero />
            <BlogsGrid />
            <ConnectSection />
            <GallerySection />
            <Footer />
        </main>
    );
}
