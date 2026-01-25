"use client";

import React, { useState, useEffect } from 'react';
import styles from './AboutHero.module.css';
import { getSocialLinks } from '../utils/socialLinks';

const AboutHero = ({
    showHeader = true,
    badgeText = "EmpowerZ's Story",
    headlineSpark = "How a",
    headlinePassion = "Spark of Passion",
    headlineGrow = "Grew into a",
    headlineMovement = "Movement <br /> of Change.",
    textP1 = "Empower Z Foundation is more than a community...it is a global movement with a big mission. We are here for young go-getters, entry-level professionals, and entrepreneurs across the MENA region. Through learning, hands-on training, networking, and real-world volunteering, we give our members the unique skills they need to crush it, personally and professionally.",
    textP2 = "Our platform is all about giving you the good stuff, exclusive perks and curated experiences that actually fit your vibe, making you feel unique and valued. We believe everyone deserves access to offers, services, and skills that bring real value to daily life and open doors to epic experiences.",
    textP3 = "That is why we're always levelling up, building smarter learning environments and pulling the best perks and services into one place, so your journey as a member is smooth, elevated, and anything but ordinary."
}) => {
    const [socialLinks, setSocialLinks] = useState({
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
        youtube: '',
        tiktok: '',
        snapchat: ''
    });

    useEffect(() => {
        import('../utils/socialLinks').then(({ getSocialLinks }) => {
            const links = getSocialLinks();
            setSocialLinks(prev => ({ ...prev, ...links }));
        });
    }, []);

    return (
        <section className={styles.section}>
            {/* Background */}
            <div className={styles.bgContainer}>
                <div className={styles.bgImage} />
                <div className={styles.gradientOverlay} />
            </div>

            <div className={styles.container}>
                {/* Top Content */}
                <div className={styles.contentLeft}>
                    <div className={styles.badge} data-builder-prop="badgeText">
                        {badgeText}
                    </div>

                    <h1 className={styles.headline}>
                        <span className={styles.headlineSpark} data-builder-prop="headlineSpark">{headlineSpark}</span>
                        <span className={styles.headlinePassion} data-builder-prop="headlinePassion">{headlinePassion}</span>
                        <span className={styles.subHeadline} data-builder-prop="headlineGrow">{headlineGrow}</span>
                        <span className={styles.headlineMovement} dangerouslySetInnerHTML={{ __html: headlineMovement }} data-builder-prop="headlineMovement" />
                    </h1>

                    {/* Dotted Arrow - positioned absolutely relative to container handled by CSS */}
                    <div className={styles.arrowContainer}>
                        <img src="/assets/about/arrow-icons.png" alt="" className={styles.arrowImage} />
                    </div>

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

                {/* Bottom Content */}
                <div className={styles.bottomArea}>
                    {/* Frame Image */}
                    <div className={styles.frameContainer}>
                        <img
                            src="/assets/about/hero-frame-image.png"
                            alt="Founder"
                            className={styles.frameImage}
                        />
                    </div>

                    {/* Yellow Text Box */}
                    <div className={styles.textBox}>
                        <p data-builder-prop="textP1">{textP1}</p>
                        <p data-builder-prop="textP2">{textP2}</p>
                        <p data-builder-prop="textP3">{textP3}</p>
                    </div>
                </div>
            </div>
            {/* Social Sidebar */}
            <div className={styles.socialSidebar}>
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

export default AboutHero;
