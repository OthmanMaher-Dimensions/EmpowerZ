import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import { getNavLinks } from '../../lib/getNavLinks';
import Footer from '@/components/Footer';
import MemberApplicationForm from '@/components/forms/MemberApplicationForm';

export default async function MemberApplyPage() {
    const navLinks = await getNavLinks();
    return (
        <>
            <SiteHeader dynamicLinks={navLinks} />
            <MemberApplicationForm />
            <Footer />
        </>
    );
}
