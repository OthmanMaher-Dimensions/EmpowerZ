"use client";

import React from 'react';
import styles from './MissionVision.module.css';

const MissionVision = ({
    missionTitle = "OUR MISSION",
    missionDesc = "Our mission is to hype up and empower Gen Z to reach their full potential, gain an edge, grab opportunities with confidence, and level up through free and affordable learning experiences plus the life and business skills that actually matter.",
    missionImage = "/assets/about/mission-image.png",
    visionTitle = "OUR VISION",
    visionDesc = "To inspire and equip 100,000 young changemakers across the MENA region within the next five years, enabling hundreds of thousands of learning experiences, career opportunities, and social impact initiatives, creating a generation empowered to lead, innovate, and transform their communities....",
    visionImage = "/assets/about/vision-image.png",
    style = {}
}) => {
    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>

                {/* Mission Block - Text Left, Image Right (on Desktop) */}
                <div className={styles.block}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title} data-builder-prop="missionTitle">{missionTitle}</h2>
                        <p className={styles.description} data-builder-prop="missionDesc">
                            {missionDesc}
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <img
                            src={missionImage}
                            alt="Mission"
                            className={styles.image}
                            data-builder-prop="missionImage"
                        />
                    </div>
                </div>

                {/* Vision Block - Image Left, Text Right (on Desktop) */}
                <div className={`${styles.block} ${styles.reverseBlock}`}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={visionImage}
                            alt="Vision"
                            className={styles.image}
                            data-builder-prop="visionImage"
                        />
                    </div>
                    <div className={styles.textContent}>
                        <h2 className={styles.title} data-builder-prop="visionTitle">{visionTitle}</h2>
                        <p className={styles.description} data-builder-prop="visionDesc">
                            {visionDesc}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionVision;
