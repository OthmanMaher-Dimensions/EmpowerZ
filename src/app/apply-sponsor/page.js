"use client";

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import SponsorApplicationForm from '@/components/forms/SponsorApplicationForm';

export default function SponsorApplyPage() {
    return (
        <>
            <SiteHeader />
            <SponsorApplicationForm />
            <Footer />
        </>
    );
}
