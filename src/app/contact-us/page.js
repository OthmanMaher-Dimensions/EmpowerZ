import ContactUsHero from '@/components/ContactUsHero';
import ContactFormSection from '@/components/ContactFormSection';
import OfficeLocationSection from '@/components/OfficeLocationSection';
import ConnectSection from '@/components/ConnectSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import { getNavLinks } from '../../lib/getNavLinks';

import { generatePageMetadata } from '@/utils/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return generatePageMetadata(
        'contact-us',
        "Contact Us | EmpowerZ",
        "Get in touch with us."
    );
}

async function getOffices() {
    try {
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
        const res = await fetch(`${adminUrl}/api/public/offices`, { cache: 'no-store' });
        if (!res.ok) return [];
        return res.json();
    } catch (error) {
        console.error("Failed to fetch offices:", error);
        return [];
    }
}

export default async function ContactUs() {
    const offices = await getOffices();
    const navLinks = await getNavLinks();

    return (
        <main>
            <ContactUsHero dynamicLinks={navLinks} />
            <ContactFormSection />
            <OfficeLocationSection offices={offices} />
            <ConnectSection />
            <GallerySection />
            <Footer />
        </main>
    );
}
