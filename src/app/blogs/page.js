import BlogsHero from '@/components/BlogsHero';
import BlogsGrid from '@/components/BlogsGrid';
import Footer from '@/components/Footer';
import ConnectSection from '@/components/ConnectSection';
import GallerySection from '@/components/GallerySection';

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
