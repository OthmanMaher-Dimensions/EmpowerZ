import WhatWeOfferHero from '@/components/WhatWeOfferHero';
import WhatWeOfferGrid from '@/components/WhatWeOfferGrid';
import MembershipAccess from '@/components/MembershipAccess';
import EmpowerGenZSection from '@/components/EmpowerGenZSection';
import PartnersSection from '@/components/PartnersSection';
import JourneySection from '@/components/JourneySection';
import PaidInternshipSection from '@/components/PaidInternshipSection';
import NetworkingEventsSection from '@/components/NetworkingEventsSection';
import MentorshipSection from '@/components/MentorshipSection';
import VolunteerActivitiesSection from '@/components/VolunteerActivitiesSection';
import SocialEventsSection from '@/components/SocialEventsSection';
import MembershipBenefits from '@/components/MembershipBenefits';
import Testimonials from '@/components/Testimonials';
import ConnectSection from '@/components/ConnectSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import WhoWeServe from '@/components/WhoWeServe';

export default function WhatWeOffer() {
    return (
        <main>
            <WhatWeOfferHero />
            <WhatWeOfferGrid />
            <MembershipAccess />
            <EmpowerGenZSection />
            <PartnersSection />
            <JourneySection />
            <PaidInternshipSection />
            <NetworkingEventsSection />
            <MentorshipSection />
            <VolunteerActivitiesSection />
            <SocialEventsSection />
            <MembershipBenefits />
            <Testimonials />
                  <WhoWeServe />

            <ConnectSection />
            <GallerySection />
            <Footer />
        </main>
    );
}
