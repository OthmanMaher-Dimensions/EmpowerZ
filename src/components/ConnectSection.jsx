"use client";

import React from 'react';
import styles from './ConnectSection.module.css';

const ConnectSection = ({
    mainHeading = "You're one step away from success, opportunity, and growth.",
    subHeading = "We're accepting applications now but hurry! Spots are limited and closing soon! Invest in Your Future Now!",
    connectTitle = "LET'S CONNECT AND GROW",
    followLabel = "FOLLOW THE JOURNEY ON",
    followHandle = "@EMPOWERS",
    laptopImage = "/assets/laptop-mockup.png",
    style = {}
}) => {
    const [socialLinks, setSocialLinks] = React.useState({
        facebook: '#', twitter: '#', instagram: '#', linkedin: '#', youtube: '#'
    });

    React.useEffect(() => {
        import('../utils/socialLinks').then(({ getSocialLinks }) => {
            getSocialLinks().then(setSocialLinks);
        });
    }, []);

    const socialStats = [
        { icon: '/assets/icon-youtube-gold.png', label: 'YouTube', href: socialLinks.youtube },
        { icon: '/assets/icon-x-gold.png', label: 'X', href: socialLinks.twitter },
        { icon: '/assets/icon-facebook-gold.png', label: 'Facebook', href: socialLinks.facebook },
        { icon: '/assets/icon-instagram-gold.png', label: 'Instagram', href: socialLinks.instagram },
        { icon: '/assets/icon-linkedin-gold.png', label: 'LinkedIn', href: socialLinks.linkedin },
    ];

    return (
        <section className={styles.connectSection} style={style}>
            <div className={styles.container}>
                {/* The Bordered Box with Background */}
                <div className={styles.bgContainer}>
                    {/* Laptop Image - Overlapping */}
                    <img
                        src={laptopImage}
                        alt="EmpowerZ Platform"
                        className={styles.laptopImage}
                    />

                    <div className={styles.content}>
                        <div className={styles.textGroup}>
                            <h2 className={styles.mainHeading}>
                                {mainHeading}
                            </h2>
                            <p className={styles.subHeading}>
                                {subHeading}
                            </p>
                        </div>

                        <h3 className={styles.connectTitle}>
                            {connectTitle}
                        </h3>

                        <div className={styles.socialGrid}>
                            {socialStats.map((item, index) => (
                                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className={styles.socialIcon}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.bottomLabel}>
                    <span style={{ color: '#DEC48C' }}>{followLabel}</span> <span style={{ color: '#fff' }}>{followHandle}</span>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
