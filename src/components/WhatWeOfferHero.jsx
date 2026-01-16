"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './WhatWeOfferHero.module.css';
import SiteHeader from './SiteHeader';
import { getSocialLinks } from '../utils/socialLinks';

const WhatWeOfferHero = ({ showHeader = true }) => {
    const [socialLinks, setSocialLinks] = useState({
        facebook: '#', twitter: '#', instagram: '#', linkedin: '#', youtube: '#'
    });

    useEffect(() => {
        getSocialLinks().then(setSocialLinks);
    }, []);

    const socialIcons = [
        { name: 'Youtube', img: '/assets/icon-youtube-gold.png', href: socialLinks.youtube },
        { name: 'X', img: '/assets/icon-x-gold.png', href: socialLinks.twitter },
        { name: 'Facebook', img: '/assets/icon-facebook-gold.png', href: socialLinks.facebook },
        { name: 'Instagram', img: '/assets/icon-instagram-gold.png', href: socialLinks.instagram },
        { name: 'LinkedIn', img: '/assets/icon-linkedin-gold.png', href: socialLinks.linkedin },
    ];

    return (
        <>
            {showHeader && <SiteHeader />}
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
                                <span className={styles.headingGold}>Discover</span>
                                <br />
                                <span className={styles.headingGold}>An Exclusive</span>
                            </span>
                            <span className={styles.mobileOnly}>
                                <span className={styles.headingGold}>Discover An</span>
                                <br />
                                <span className={styles.headingGold}>Exclusive</span>
                            </span>
                        </h1>

                        {/* Subheading: WORLD OF LIMITLESS PERKS AND BENEFITS */}
                        <h2 className={`${styles.subheading} ${styles.animateIn} ${styles.delay2}`}>
                            <span className={styles.desktopOnly}>
                                World Of
                                <br />
                                <span className={styles.subheadingBold}>Limitless Perks</span>
                                <br />
                                <span className={styles.subheadingBold}>And Benefits</span>
                            </span>
                            <span className={styles.mobileOnly}>
                                World Of <span className={styles.subheadingBold}>Limitless</span>
                                <br />
                                <span className={styles.subheadingBold}>Perks And Benefits</span>
                            </span>
                        </h2>

                        {/* CTA Button: Join Now */}
                        <a href="#join" className={`${styles.ctaButton} ${styles.animateIn} ${styles.delay3}`}>
                            <span>Join Now</span>
                            <ArrowRight className={styles.ctaArrow} size={24} strokeWidth={2.5} />
                        </a>

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
            </section>
        </>
    );
};

export default WhatWeOfferHero;
