"use client";

import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';
import MemberApplicationForm from '@/components/forms/MemberApplicationForm';

export default function MemberApplyPage() {
    return (
        <>
            <SiteHeader />
            <MemberApplicationForm />
            <Footer />
        </>
    );
}
