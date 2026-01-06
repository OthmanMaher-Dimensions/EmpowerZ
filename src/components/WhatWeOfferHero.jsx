"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './WhatWeOfferHero.module.css';
import Header from './Header';

const WhatWeOfferHero = () => {
    return (
        <>
            <Header />
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
                            <span className={styles.headingGold}>Discover</span>
                            <br />
                            <span className={styles.headingGold}>An Exclusive</span>
                        </h1>

                        {/* Subheading: WORLD OF LIMITLESS PERKS AND BENEFITS */}
                        <h2 className={`${styles.subheading} ${styles.animateIn} ${styles.delay2}`}>
                            World Of
                            <br />
                            <span className={styles.subheadingBold}>Limitless Perks</span>
                            <br />
                            <span className={styles.subheadingBold}>And Benefits</span>
                        </h2>

                        {/* CTA Button: Join Now */}
                        <a href="#join" className={`${styles.ctaButton} ${styles.animateIn} ${styles.delay3}`}>
                            <span>Join Now</span>
                            <ArrowRight className={styles.ctaArrow} size={24} strokeWidth={2.5} />
                        </a>
                    </div>
                </div>

                {/* Social Sidebar */}
                <div className={`${styles.socialSidebar} ${styles.animateIn} ${styles.delay4}`}>
                    {[
                        { img: '/assets/icon-youtube-gold.png', href: '#' },
                        { img: '/assets/icon-x-gold.png', href: '#' },
                        { img: '/assets/icon-facebook-gold.png', href: '#' },
                        { img: '/assets/icon-instagram-gold.png', href: '#' },
                        { img: '/assets/icon-linkedin-gold.png', href: '#' }
                    ].map((item, i) => (
                        <a key={i} href={item.href} className={styles.socialIconLink}>
                            <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
};

export default WhatWeOfferHero;
