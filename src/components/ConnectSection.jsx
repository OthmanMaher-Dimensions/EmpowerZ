"use client";

import React from 'react';
import styles from './ConnectSection.module.css';

const ConnectSection = () => {
    // Counts removed as requested "remove the numberes under every social media"
    // Just icons now.
    const socialStats = [
        { icon: '/assets/icon-youtube-gold.png', label: 'YouTube' },
        { icon: '/assets/icon-x-gold.png', label: 'X' },
        { icon: '/assets/icon-facebook-gold.png', label: 'Facebook' },
        { icon: '/assets/icon-instagram-gold.png', label: 'Instagram' },
        { icon: '/assets/icon-linkedin-gold.png', label: 'LinkedIn' },
    ];

    return (
        <section className={styles.connectSection}>
            <div className={styles.container}>
                {/* The Bordered Box with Background */}
                <div className={styles.bgContainer}>
                    {/* Laptop Image - Overlapping */}
                    <img
                        src="/assets/laptop-mockup.png"
                        alt="EmpowerZ Platform"
                        className={styles.laptopImage}
                    />

                    <div className={styles.content}>
                        <div className={styles.textGroup}>
                            <h2 className={styles.mainHeading}>
                                You're one step away from success, opportunity, and growth.
                            </h2>
                            <p className={styles.subHeading}>
                                We're accepting applications now but hurry! Spots are limited and closing soon! Invest in Your Future Now!
                            </p>
                        </div>

                        <h3 className={styles.connectTitle}>
                            LET'S CONNECT AND GROW
                        </h3>

                        <div className={styles.socialGrid}>
                            {socialStats.map((item, index) => (
                                <div key={index} className={styles.socialItem}>
                                    <img
                                        src={item.icon}
                                        alt={item.label}
                                        className={styles.socialIcon}
                                    />
                                    {/* Number removed */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.bottomLabel}>
                    <span style={{ color: '#DEC48C' }}>FOLLOW THE JOURNEY ON</span> <span style={{ color: '#fff' }}>@EMPOWERS</span>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
