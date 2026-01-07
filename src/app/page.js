

import Header from '../components/SiteHeader';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import MissionAcronym from '../components/MissionAcronym';
import AboutMembership from '../components/AboutMembership';
import SponsorBanner from '../components/SponsorBanner';
import SignUpProcess from '../components/SignUpProcess';
import CommunitySlider from '../components/CommunitySlider';
import MembershipOffer from '../components/MembershipOffer';
import WhoWeServe from '../components/WhoWeServe';
import PartnersSection from '../components/PartnersSection';
import Testimonials from '../components/Testimonials';
import ConnectSection from '../components/ConnectSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Philosophy />
      <MissionAcronym />
      <AboutMembership />
      {/* <SponsorBanner /> moved to bottom */}
      <SignUpProcess />
      <CommunitySlider />
      <MembershipOffer />
      <WhoWeServe />
      <PartnersSection />
      <SponsorBanner />
      <Testimonials />
      <ConnectSection />
      <GallerySection />
      <Footer />


      {/* Other sections will follow */}
    </main>
  );
}
