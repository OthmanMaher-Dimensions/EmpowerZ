
import Header from '../../components/SiteHeader';
import Hero from '../../components/Hero';
import Philosophy from '../../components/Philosophy';
import MissionAcronym from '../../components/MissionAcronym';
import AboutMembership from '../../components/AboutMembership';
import SponsorBanner from '../../components/SponsorBanner';
import SignUpProcess from '../../components/SignUpProcess';
import CommunitySlider from '../../components/CommunitySlider';
import MembershipOffer from '../../components/MembershipOffer';
import WhoWeServe from '../../components/WhoWeServe';
import PartnersSection from '../../components/PartnersSection';
import Testimonials from '../../components/Testimonials';
import ConnectSection from '../../components/ConnectSection';
import GallerySection from '../../components/GallerySection';
import Footer from '../../components/Footer';

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

export default async function DynamicPage({ params }) {
    const { slug } = await params;
    const pageSlug = slug.join('/');
    let sections = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'}/api/public/pages/${pageSlug}`, {
            next: { revalidate: 10 }
        });

        if (res.ok) {
            const data = await res.json();
            const pageData = data.page || data;
            const components = data.components || [];

            const componentDefaults = {};
            components.forEach(comp => {
                componentDefaults[comp.name] = comp.defaultProps || {};
            });

            if (pageData.sections && Array.isArray(pageData.sections)) {
                sections = pageData.sections.map(section => {
                    const defaults = componentDefaults[section.component] || {};
                    return {
                        ...section,
                        props: { ...defaults, ...section.props }
                    };
                });
            } else if (pageData.content && Array.isArray(pageData.content)) {
                sections = pageData.content;
            }
        } else {
            // Page not found or error
            return (
                <main>
                    <Header />
                    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                        <h1>Page Not Found</h1>
                        <p>The page "{pageSlug}" does not exist.</p>
                    </div>
                    <Footer />
                </main>
            );
        }
    } catch (error) {
        console.error("Failed to fetch dynamic page:", error);
        return (
            <main>
                <Header />
                <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <h1>Error Loading Page</h1>
                    <p>Please try again later.</p>
                </div>
                <Footer />
            </main>
        );
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
