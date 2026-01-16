"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import Typewriter from './Typewriter';
import { getSocialLinks } from '../utils/socialLinks';
// Force rebuild
import PartnersSection from './PartnersSection';
import Script from 'next/script';

const Hero = ({
    eyebrow = "A New Learning",
    heading = "Journey",
    subheading = "Investing in Your Potential",
    dividerText = "A world of benefits",
    empowerPrefix = "We Empower",
    typewriterWords = ['Professionals', 'Students', 'Graduates'],
    ctaText = "Join the Movement",
    style = {}
}) => {
    const [socialLinks, setSocialLinks] = useState({
        facebook: '#', twitter: '#', instagram: '#', linkedin: '#', youtube: '#'
    });

    useEffect(() => {
        getSocialLinks().then(setSocialLinks);
    }, []);
    return (
        <section className={styles.hero} style={style}>

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
                        {eyebrow}
                        <span className={styles.eyebrowLine}></span>
                    </h2>

                    {/* Heading: JOURNEY */}
                    <h1 className={`${styles.heading} ${styles.animateIn} ${styles.delay2}`}>
                        {heading}
                    </h1>

                    {/* Subheading: INVESTING IN YOUR POTENTIAL */}
                    <h3 className={`${styles.subheading} ${styles.animateIn} ${styles.delay3}`}>
                        {subheading}
                    </h3>

                    {/* Divider/Subtitle: ---- A WORLD OF BENEFITS */}
                    <div className={`${styles.dividerContainer} ${styles.animateIn} ${styles.delay4}`}>
                        <span className={styles.dividerLine}></span>
                        <span className={styles.dividerText}>
                            {dividerText}
                        </span>
                    </div>

                    {/* Empower Statement: WE EMPOWER ENTREPRENEURS */}
                    <p className={`${styles.empowerText} ${styles.animateIn} ${styles.delay5}`}>
                        {empowerPrefix}{' '}
                        <Typewriter
                            words={typewriterWords}
                            textClassName={styles.empowerTextStrong}
                            cursorClassName={styles.empowerTextCursor}
                            typeSpeed={100}
                            deleteSpeed={50}
                            delay={2000}
                        />
                    </p>

                    {/* CTA Button: Join the Movement */}
                    <Link href="/apply-member" className={styles.ctaButton}>
                        <span className="hero-cta-text">{ctaText}</span> <ArrowRight className={styles.ctaArrow} size={24} strokeWidth={2.5} />
                    </Link>

                    {/* Mobile Social Icons Row */}
                    <div className={styles.mobileSocials}>
                        {[
                            { img: '/assets/icon-youtube-gold.png', href: socialLinks.youtube },
                            { img: '/assets/icon-x-gold.png', href: socialLinks.twitter },
                            { img: '/assets/icon-facebook-gold.png', href: socialLinks.facebook },
                            { img: '/assets/icon-instagram-gold.png', href: socialLinks.instagram },
                            { img: '/assets/icon-linkedin-gold.png', href: socialLinks.linkedin }
                        ].map((item, i) => (
                            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
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
                    { img: '/assets/icon-youtube-gold.png', href: socialLinks.youtube },
                    { img: '/assets/icon-x-gold.png', href: socialLinks.twitter },
                    { img: '/assets/icon-facebook-gold.png', href: socialLinks.facebook },
                    { img: '/assets/icon-instagram-gold.png', href: socialLinks.instagram },
                    { img: '/assets/icon-linkedin-gold.png', href: socialLinks.linkedin }
                ].map((item, i) => (
                    <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                        <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Hero;
