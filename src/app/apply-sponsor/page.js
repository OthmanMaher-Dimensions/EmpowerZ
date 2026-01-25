import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import { getNavLinks } from '../../lib/getNavLinks';
import Footer from '@/components/Footer';
import SponsorApplicationForm from '@/components/forms/SponsorApplicationForm';

export default async function SponsorApplyPage() {
    const navLinks = await getNavLinks();
    return (
        <>
            <SiteHeader dynamicLinks={navLinks} />
            <SponsorApplicationForm />
            <Footer />
        </>
    );
}
