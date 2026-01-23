import AboutHero from '@/components/AboutHero';
import Header from '@/components/SiteHeader';
import BoardSection from '@/components/BoardSection';
import PartnersSection from '@/components/PartnersSection';
import MissionAcronym from '@/components/MissionAcronym';
import MissionVision from '@/components/MissionVision';
import SponsorBanner from '@/components/SponsorBanner';
import HistorySection from '@/components/HistorySection';
import ImpactSection from '@/components/ImpactSection';
import PlatformSection from '@/components/PlatformSection';
import MembershipBenefits from '@/components/MembershipBenefits';
import Testimonials from '@/components/Testimonials';
import ConnectSection from '@/components/ConnectSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import { getNavLinks } from '@/lib/getNavLinks';

import { generatePageMetadata } from '@/utils/seo';

export async function generateMetadata() {
    return generatePageMetadata(
        'about-us',
        "About Us | EmpowerZ",
        "Learn more about EmpowerZ and our mission."
    );
}

export default async function AboutUs() {
    const navLinks = await getNavLinks();

    return (
        <main>
            <Header dynamicLinks={navLinks} />
            <AboutHero />
            <BoardSection />
            <PartnersSection enableSignup={true} />
            <MissionAcronym backgroundColor="#020617" />
            <MissionVision />
            <SponsorBanner />
            <HistorySection />
            <ImpactSection />
            <PlatformSection />
            <MembershipBenefits />
            <Testimonials />
            <ConnectSection />
            <GallerySection />
            <Footer />
        </main>
    );
}
