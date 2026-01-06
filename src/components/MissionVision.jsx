"use client";

import React from 'react';
import styles from './MissionVision.module.css';

const MissionVision = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Mission Block - Text Left, Image Right (on Desktop) */}
                <div className={styles.block}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>OUR MISSION</h2>
                        <p className={styles.description}>
                            Our mission is to hype up and empower Gen Z to reach their full potential, gain an edge, grab opportunities with confidence, and level up through free and affordable learning experiences plus the life and business skills that actually matter.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/about/mission-image.png"
                            alt="Group of happy colleagues"
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Vision Block - Image Left, Text Right (on Desktop) */}
                <div className={`${styles.block} ${styles.reverseBlock}`}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/about/vision-image.png"
                            alt="Colleagues talking"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>OUR VISION</h2>
                        <p className={styles.description}>
                            To inspire and equip 100,000 young changemakers across the MENA region within the next five years, enabling hundreds of thousands of learning experiences, career opportunities, and social impact initiatives, creating a generation empowered to lead, innovate, and transform their communities....
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
