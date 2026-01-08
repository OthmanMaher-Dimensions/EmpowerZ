import GalleryHero from '@/components/GalleryHero';
import GalleryGrid from '@/components/GalleryGrid';
import Header from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import ConnectSection from '@/components/ConnectSection';

export default function Gallery() {
    return (
        <main>
            <Header />
            <GalleryHero />
            <GalleryGrid />
            <ConnectSection />
            <Footer />
        </main>
    );
}
