"use client";

import React from 'react';
import styles from './PlatformSection.module.css';

const PlatformSection = ({
    mainTitlePrefix = "EMPOWERZ",
    mainTitleSuffix = "PLATFORM",
    subtitle = "Join. Explore. Enjoy. All in One Smooth Experience.",
    desc1 = "Our platform is designed with you in mind. From the moment you log in, you’ll feel right at home. With an ultra-friendly interface and effortless navigation, finding what you need is as easy as a tap or a click.",
    desc2 = "Browse through all sections, offerings, and exclusive events without missing a beat. Whether you’re discovering new perks, signing up for activities, or connecting with other members, every step flows naturally — no confusion, no clutter, just pure ease.",
    desc3 = "Because when technology feels invisible, you’re free to focus on what matters most: enjoying your membership to the fullest.",
    highlightTitle = "Screenshots Highlight...",

    screenshot1Image = "/assets/about/project-screenshot-1.png", screenshot1Caption = "All your stats under one roof",
    screenshot2Image = "/assets/about/project-screenshot-2.png", screenshot2Caption = "Your dashboard, your control",
    screenshot3Image = "/assets/about/project-screenshot-3.png", screenshot3Caption = "Learn and connect with your network",
    screenshot4Image = "/assets/about/project-screenshot-4.png", screenshot4Caption = "Friendly user experience",
    screenshot5Image = "/assets/about/project-screenshot-5.png", screenshot5Caption = "Everything is one click away",
    style = {}
}) => {

    const screenshots = [
        { src: screenshot1Image, caption: screenshot1Caption },
        { src: screenshot2Image, caption: screenshot2Caption },
        { src: screenshot3Image, caption: screenshot3Caption },
        { src: screenshot4Image, caption: screenshot4Caption },
        { src: screenshot5Image, caption: screenshot5Caption },
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.yellowBar}></div>
                    <h2 className={styles.mainTitle}>
                        <span className={styles.underlined}>{mainTitlePrefix}</span> {mainTitleSuffix}
                    </h2>
                </div>
                {/* hr removed */}

                {/* Subtitle & Description */}
                <div className={styles.textDetails}>
                    <h3 className={styles.subtitle}>{subtitle}</h3>
                    <p className={styles.description}>{desc1}</p>
                    <p className={styles.description}>{desc2}</p>
                    <p className={styles.description}>{desc3}</p>
                </div>

                {/* Screenshots Area */}
                <div className={styles.screenshotsArea}>
                    <h4 className={styles.highlightTitle}>{highlightTitle}</h4>

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
