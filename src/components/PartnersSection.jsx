"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './PartnersSection.module.css';

const PartnersSection = ({
    enableSignup = false,
    variant = 'default',
    title = "Partners and Patrons",
    signupText = "Sign Up Now",
    style = {}
}) => {
    // List of partner logos
    const [partners, setPartners] = React.useState([
        "/assets/clients/logo.png",
        "/assets/clients/logo1.png",
        "/assets/clients/logo2.png",
        "/assets/clients/logo3.png",
        "/assets/clients/logo4.png",
        "/assets/clients/logo5.png",
        "/assets/clients/logo6.png",
        "/assets/clients/logo7.png",
        "/assets/clients/logo8.png",
        "/assets/clients/logo9.png",
        "/assets/clients/logo10.png",
        "/assets/clients/logo11.png",
        "/assets/clients/logo12.png",
        "/assets/clients/logo13.png",
        "/assets/clients/logo14.png",
        "/assets/clients/logo15.png",
        "/assets/clients/logo16.png",
        "/assets/clients/logo17.png",
        "/assets/clients/logo18.png",
        "/assets/clients/logo19.png",
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
                        const urls = data.map(p => {
                            const url = typeof p === 'string' ? p : p.url;
                            if (url.startsWith('http')) return url;
                            return `${adminUrl}${url}`;
                        });
                        setPartners(urls);
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
                    {partners.map((src, i) => (
                        <img
                            key={`a-${i}`}
                            src={src}
                            alt="Partner"
                            className={styles.partnerLogo}
                        />
                    ))}
                    {/* Duplicate Set */}
                    {partners.map((src, i) => (
                        <img
                            key={`b-${i}`}
                            src={src}
                            alt="Partner"
                            className={styles.partnerLogo}
                        />
                    ))}
                </div>
            </div>

            {enableSignup && (
                <>
                    <Link href="/apply-member" className={styles.signupBtn}>
                        Sign Up Now <ArrowRight size={16} />
                    </Link>
                    <hr className={styles.divider} />
                </>
            )}
        </section>
    );
};

export default PartnersSection;
