
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


const COMPONENT_MAP = {
  'Hero': Hero,
  'Philosophy': Philosophy,
  'MissionAcronym': MissionAcronym,
  'AboutMembership': AboutMembership,
  'SponsorBanner': SponsorBanner,
  'SignUpProcess': SignUpProcess,
  'CommunitySlider': CommunitySlider,
  'MembershipOffer': MembershipOffer,
  'WhoWeServe': WhoWeServe,
  'PartnersSection': PartnersSection,
  'Testimonials': Testimonials,
  'ConnectSection': ConnectSection,
  'GallerySection': GallerySection,
};

const DEFAULT_SECTIONS = [
  { id: 'hero', component: 'Hero' },
  { id: 'philosophy', component: 'Philosophy' },
  { id: 'mission', component: 'MissionAcronym' },
  { id: 'about', component: 'AboutMembership' },
  { id: 'signup', component: 'SignUpProcess' },
  { id: 'community', component: 'CommunitySlider' },
  { id: 'membership', component: 'MembershipOffer' },
  { id: 'serve', component: 'WhoWeServe' },
  { id: 'partners', component: 'PartnersSection' },
  { id: 'sponsor', component: 'SponsorBanner' },
  { id: 'testimonials', component: 'Testimonials' },
  { id: 'connect', component: 'ConnectSection' },
  { id: 'gallery', component: 'GallerySection' },
];

export default async function Home() {
  let sections = DEFAULT_SECTIONS;

  try {
    // Attempt to fetch from Admin API
    const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
    const res = await fetch(`${ADMIN_URL}/api/public/pages/home`, {
      next: { revalidate: 10 } // Revalidate every 10 seconds
    });
    if (res.ok) {
      const data = await res.json();

      // Structure is now { page: {...}, components: [...] }
      const pageData = data.page || data; // Fallback for old API structure
      const components = data.components || [];

      // Create lookup for component defaults
      const componentDefaults = {};
      components.forEach(comp => {
        // Map by component name (e.g., 'Hero') or ID if needed. 
        // The page sections store 'component' name like 'Hero'.
        // The DB components have 'name': 'Hero'.
        componentDefaults[comp.name] = comp.defaultProps || {};
      });

      if (pageData && Array.isArray(pageData.sections)) {
        // Merge defaults with section props
        sections = pageData.sections.map(section => {
          const defaults = componentDefaults[section.component] || {};
          return {
            ...section,
            props: { ...defaults, ...section.props }
          };
        });
      }
    }
  } catch (error) {
    console.warn("Failed to fetch page config, using default layout.", error);
  }

  return (
    <main>
      <Header />
      {sections.map(section => {
        const Component = COMPONENT_MAP[section.component];
        if (!Component) return null;
        return <Component key={section.id} {...section.props} />;
      })}
      <Footer />
    </main>
  );
}
