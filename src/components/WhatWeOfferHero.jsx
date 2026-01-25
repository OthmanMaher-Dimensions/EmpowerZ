"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './WhatWeOfferHero.module.css';
import { trackCta } from '../lib/trackCta';
import { getSocialLinks } from '../utils/socialLinks';

const WhatWeOfferHero = ({
    showHeader = true,
    headingLine1 = "Discover",
    headingLine2 = "An Exclusive",
    subheadingLine1 = "World Of",
    subheadingLine2 = "Limitless Perks",
    subheadingLine3 = "And Benefits",
    ctaText = "Join Now"
}) => {
    const [socialLinks, setSocialLinks] = useState({
        facebook: '#', twitter: '#', instagram: '#', linkedin: '#', youtube: '#'
    });

    useEffect(() => {
        getSocialLinks().then(setSocialLinks);
    }, []);

    const handleCtaClick = () => {
        trackCta('Offer Hero - Join Now', 'What We Offer');
    };

    const socialIcons = [
        { name: 'Youtube', img: '/assets/icon-youtube-gold.png', href: socialLinks.youtube },
        { name: 'X', img: '/assets/icon-x-gold.png', href: socialLinks.twitter },
        { name: 'Facebook', img: '/assets/icon-facebook-gold.png', href: socialLinks.facebook },
        { name: 'Instagram', img: '/assets/icon-instagram-gold.png', href: socialLinks.instagram },
        { name: 'LinkedIn', img: '/assets/icon-linkedin-gold.png', href: socialLinks.linkedin },
    ];

    return (
        <>
            <section className={styles.hero}>
                {/* Background Image Container */}
                <div className={styles.heroBgContainer}>
                    {/* The Image */}
                    <div className={styles.heroBgImage} />

                    {/* The Gradient Overlay */}
                    <div className={styles.gradientOverlay} />
                </div>

                {/* Content Area */}
                <div className={styles.contentArea}>
                    <div className={styles.contentInner}>
                        {/* Heading: DISCOVER AN EXCLUSIVE */}
                        <h1 className={`${styles.heading} ${styles.animateIn} ${styles.delay1}`}>
                            <span className={styles.desktopOnly}>
                                <span className={styles.headingGold}>{headingLine1}</span>
                                <br />
                                <span className={styles.headingGold}>{headingLine2}</span>
                            </span>
                            <span className={styles.mobileOnly}>
                                <span className={styles.headingGold}>{headingLine1} {headingLine2.split(" ")[0]}</span>
                                <br />
                                <span className={styles.headingGold}>{headingLine2.split(" ").slice(1).join(" ")}</span>
                            </span>
                        </h1>

                        {/* Subheading: WORLD OF LIMITLESS PERKS AND BENEFITS */}
                        <h2 className={`${styles.subheading} ${styles.animateIn} ${styles.delay2}`}>
                            <span className={styles.desktopOnly}>
                                {subheadingLine1}
                                <br />
                                <span className={styles.subheadingBold}>{subheadingLine2}</span>
                                <br />
                                <span className={styles.subheadingBold}>{subheadingLine3}</span>
                            </span>
                            <span className={styles.mobileOnly}>
                                {subheadingLine1} <span className={styles.subheadingBold}>{subheadingLine2.split(" ")[0]}</span>
                                <br />
                                <span className={styles.subheadingBold}>{subheadingLine2.split(" ").slice(1).join(" ")} {subheadingLine3}</span>
                            </span>
                        </h2>
                        {/* CTA Button: Join Now */}
                        <Link href="/apply-member" className={`${styles.ctaButton} ${styles.animateIn} ${styles.delay3}`} onClick={handleCtaClick}>
                            <span>{ctaText}</span>
                            <ArrowRight className={styles.ctaArrow} size={24} strokeWidth={2.5} />
                        </Link>

                        {/* Mobile Social Icons Row */}
                        <div className={styles.mobileSocials}>
                            {socialIcons.map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                                    <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Sidebar */}
                <div className={`${styles.socialSidebar} ${styles.animateIn} ${styles.delay4}`}>
                    {socialIcons.map((item, i) => (
                        <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                            <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                        </a>
                    ))}
                </div>
            </section >
        </>
    );
};

export default WhatWeOfferHero;
