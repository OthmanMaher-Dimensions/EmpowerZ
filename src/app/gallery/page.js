import GalleryHero from '@/components/GalleryHero';
import GalleryGrid from '@/components/GalleryGrid';
import Header from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import ConnectSection from '@/components/ConnectSection';
import { getNavLinks } from '@/lib/getNavLinks';

export default async function Gallery() {
    const navLinks = await getNavLinks();

    return (
        <main>
            <Header dynamicLinks={navLinks} />
            <GalleryHero />
            <GalleryGrid />
            <ConnectSection />
            <Footer />
        </main>
    );
}
