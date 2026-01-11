"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
// Force rebuild
import PartnersSection from './PartnersSection';
import Script from 'next/script';

const Hero = () => {
    return (
        <section className={styles.hero}>

            {/* Background Image Container */}
            <div className={styles.heroBgContainer}>
                {/* The Image */}
                <div className={styles.heroBgImage} />

                {/* The Gradient Overlay */}
                <div className={styles.gradientOverlay} />

                {/* Top Gradient Blend for Mobile */}
                <div className={styles.topBlend} />

                {/* Bottom Gradient Blend for Mobile */}
                <div className={styles.bottomBlend} />
            </div>

            {/* Content Area */}
            <div className={styles.contentArea}>

                <div className={styles.contentInner}>

                    {/* Eyebrow: A NEW LEARNING ----- */}
                    <h2 className={`${styles.eyebrow} ${styles.animateIn} ${styles.delay1}`}>
                        A New Learning
                        <span className={styles.eyebrowLine}></span>
                    </h2>

                    {/* Heading: JOURNEY */}
                    <h1 className={`${styles.heading} ${styles.animateIn} ${styles.delay2}`}>
                        Journey
                    </h1>

                    {/* Subheading: INVESTING IN YOUR POTENTIAL */}
                    <h3 className={`${styles.subheading} ${styles.animateIn} ${styles.delay3}`}>
                        Investing in Your Potential
                    </h3>

                    {/* Divider/Subtitle: ---- A WORLD OF BENEFITS */}
                    <div className={`${styles.dividerContainer} ${styles.animateIn} ${styles.delay4}`}>
                        <span className={styles.dividerLine}></span>
                        <span className={styles.dividerText}>
                            A world of benefits
                        </span>
                    </div>

                    {/* Empower Statement: WE EMPOWER ENTREPRENEURS */}
                    <p className={`${styles.empowerText} ${styles.animateIn} ${styles.delay5}`}>
                        We Empower{' '}
                        <span className={styles.empowerTextStrong}>Entrepreneurs</span>
                    </p>

                    {/* CTA Button: Join the Movement */}
                    <Link href="/apply-member" className={styles.ctaButton}>
                        <span className="hero-cta-text">Join the Movement</span> <ArrowRight className={styles.ctaArrow} size={24} strokeWidth={2.5} />
                    </Link>

                    {/* Mobile Social Icons Row */}
                    <div className={styles.mobileSocials}>
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

                </div>

                {/* Partners Footer - Replaced by Component */}
                <div className={`${styles.partnersFooter} ${styles.animateIn} ${styles.delay10}`}>
                    <PartnersSection variant="hero" />
                </div>

            </div>

            {/* Social Sidebar */}
            <div className={`${styles.socialSidebar} ${styles.animateIn} ${styles.delay8}`}>
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
    );
};

export default Hero;
