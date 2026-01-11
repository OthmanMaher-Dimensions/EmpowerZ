"use client";

import React from 'react';
import styles from './AboutHero.module.css';

const AboutHero = () => {
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
                    <div className={styles.badge}>
                        EmpowerZ's Story
                    </div>

                    <h1 className={styles.headline}>
                        <span className={styles.headlineSpark}>How a</span>
                        <span className={styles.headlinePassion}>Spark of Passion</span>
                        <span className={styles.subHeadline}>Grew into a</span>
                        <span className={styles.headlineMovement}>Movement <br /> of Change.</span>
                    </h1>

                    {/* Dotted Arrow - positioned absolutely relative to container handled by CSS */}
                    <div className={styles.arrowContainer}>
                        <img src="/assets/about/arrow-icons.png" alt="" className={styles.arrowImage} />
                    </div>

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
                        <p>
                            Empower Z Foundation is more than a community...it is a global movement with a big mission. We are here for young go-getters, entry-level professionals, and entrepreneurs across the MENA region. Through learning, hands-on training, networking, and real-world volunteering, we give our members the unique skills they need to crush it, personally and professionally.
                        </p>
                        <p>
                            Our platform is all about giving you the good stuff, exclusive perks and curated experiences that actually fit your vibe, making you feel unique and valued.
                            We believe everyone deserves access to offers, services, and skills that bring real value to daily life and open doors to epic experiences.
                        </p>
                        <p>
                            That is why we're always levelling up, building smarter learning environments and pulling the best perks and services into one place, so your journey as a member is smooth, elevated, and anything but ordinary.
                        </p>
                    </div>
                </div>
            </div>
            {/* Social Sidebar */}
            <div className={styles.socialSidebar}>
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

export default AboutHero;
