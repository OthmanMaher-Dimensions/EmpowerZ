"use client";

import React from 'react';
import styles from './PlatformSection.module.css';

const screenshots = [
    {
        src: "/assets/about/project-screenshot-1.png",
        caption: "All your stats under one roof"
    },
    {
        src: "/assets/about/project-screenshot-2.png",
        caption: "Your dashboard, your control"
    },
    {
        src: "/assets/about/project-screenshot-3.png",
        caption: "Learn and connect with your network"
    },
    {
        src: "/assets/about/project-screenshot-4.png",
        caption: "Friendly user experience"
    },
    {
        src: "/assets/about/project-screenshot-5.png",
        caption: "Everything is one click away"
    }
];

const PlatformSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.yellowBar}></div>
                    <h2 className={styles.mainTitle}>
                        <span className={styles.underlined}>EMPOWERZ</span> PLATFORM
                    </h2>
                </div>
                {/* hr removed */}

                {/* Subtitle & Description */}
                <div className={styles.textDetails}>
                    <h3 className={styles.subtitle}>Join. Explore. Enjoy. All in One Smooth Experience.</h3>
                    <p className={styles.description}>
                        Our platform is designed with you in mind. From the moment you log in, you’ll feel right at home. With an ultra-friendly interface and effortless navigation, finding what you need is as easy as a tap or a click.
                    </p>
                    <p className={styles.description}>
                        Browse through all sections, offerings, and exclusive events without missing a beat. Whether you’re discovering new perks, signing up for activities, or connecting with other members, every step flows naturally — no confusion, no clutter, just pure ease.
                    </p>
                    <p className={styles.description}>
                        Because when technology feels invisible, you’re free to focus on what matters most: enjoying your membership to the fullest.
                    </p>
                </div>

                {/* Screenshots Area */}
                <div className={styles.screenshotsArea}>
                    <h4 className={styles.highlightTitle}>Screenshots Highlight...</h4>

                    <div className={styles.grid}>
                        {screenshots.map((item, index) => (
                            <div key={index} className={styles.screenshotCard}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={item.src}
                                        alt={item.caption}
                                        className={styles.image}
                                    />
                                </div>
                                <p className={styles.caption}>{item.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlatformSection;
