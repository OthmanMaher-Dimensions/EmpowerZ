"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './PartnersSection.module.css';

import { trackCta } from '../lib/trackCta';

const PartnersSection = ({
    title = "Our Partners",
    subtitle = "Collaborating with industry leaders to bring you the best opportunities.",
    enableSignup = false,
    signupLink = "/apply-member",
    signupText = "Sign Up Now",
    initialPartners = [],
    variant = 'default',
    style = {}
}) => {
    const handleCtaClick = () => {
        trackCta('Partners - Sign Up', 'Home');
    };

    // List of partner logos
    const [partners, setPartners] = React.useState(initialPartners.length > 0 ? initialPartners : [
        { url: "/assets/clients/logo.png", name: "Partner" },
        { url: "/assets/clients/logo1.png", name: "Partner" },
        { url: "/assets/clients/logo2.png", name: "Partner" },
        { url: "/assets/clients/logo3.png", name: "Partner" },
        { url: "/assets/clients/logo4.png", name: "Partner" },
        { url: "/assets/clients/logo5.png", name: "Partner" },
        { url: "/assets/clients/logo6.png", name: "Partner" },
        { url: "/assets/clients/logo7.png", name: "Partner" },
        { url: "/assets/clients/logo8.png", name: "Partner" },
        { url: "/assets/clients/logo9.png", name: "Partner" },
        { url: "/assets/clients/logo10.png", name: "Partner" },
        { url: "/assets/clients/logo11.png", name: "Partner" },
        { url: "/assets/clients/logo12.png", name: "Partner" },
        { url: "/assets/clients/logo13.png", name: "Partner" },
        { url: "/assets/clients/logo14.png", name: "Partner" },
        { url: "/assets/clients/logo15.png", name: "Partner" },
        { url: "/assets/clients/logo16.png", name: "Partner" },
        { url: "/assets/clients/logo17.png", name: "Partner" },
        { url: "/assets/clients/logo18.png", name: "Partner" },
        { url: "/assets/clients/logo19.png", name: "Partner" },
    ]);

    React.useEffect(() => {
        const fetchPartners = async () => {
            try {
                const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
                const res = await fetch(`${adminUrl}/api/partners`);
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        // Extract URLs if data is objects
                        const formattedPartners = data.map(p => {
                            if (typeof p === 'string') return { url: p, name: 'Partner' };
                            return {
                                ...p,
                                url: p.url.startsWith('http') ? p.url : `${adminUrl}${p.url}`
                            };
                        });
                        setPartners(formattedPartners);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch partners:", error);
            }
        };

        fetchPartners();
    }, []);

    return (
        <section
            className={`${styles.partnersSection} ${variant === 'hero' ? styles.heroSection : ''}`}
            style={style}
        >
            <span className={styles.partnersTitle}>{title}</span>

            {/* Marquee Container */}
            <div className={styles.marqueeContainer}>
                {/* Track - Two sets of logos for seamless loop */}
                <div className={styles.partnerTrack}>
                    {/* First Set */}
                    {partners.map((partner, i) => (
                        <div key={`a-${i}`} className={styles.partnerWrapper}>
                            <img
                                src={partner.url}
                                alt={partner.name || "Partner"}
                                className={styles.partnerLogo}
                            />
                            {partner.name && (
                                <div className={styles.partnerNameTooltip}>
                                    {partner.name}
                                </div>
                            )}
                        </div>
                    ))}
                    {/* Duplicate Set */}
                    {partners.map((partner, i) => (
                        <div key={`b-${i}`} className={styles.partnerWrapper}>
                            <img
                                src={partner.url}
                                alt={partner.name || "Partner"}
                                className={styles.partnerLogo}
                            />
                            {partner.name && (
                                <div className={styles.partnerNameTooltip}>
                                    {partner.name}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {enableSignup && (
                <>
                    <div className={styles.ctaWrapper}>
                        <Link
                            href={signupLink}
                            className={styles.signupBtn}
                            onClick={handleCtaClick}
                        >
                            {signupText}
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                    <hr className={styles.divider} />
                </>
            )}
        </section>
    );
};

export default PartnersSection;
