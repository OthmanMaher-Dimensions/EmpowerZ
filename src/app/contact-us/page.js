import ContactUsHero from '@/components/ContactUsHero';
import ContactFormSection from '@/components/ContactFormSection';
import OfficeLocationSection from '@/components/OfficeLocationSection';
import ConnectSection from '@/components/ConnectSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function ContactUs() {
    return (
        <main>
            <ContactUsHero />
            <ContactFormSection />
            <OfficeLocationSection />
            <ConnectSection />
            <GallerySection />
            <Footer />
        </main>
    );
}
