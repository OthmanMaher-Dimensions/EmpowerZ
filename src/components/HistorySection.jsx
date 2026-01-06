"use client";

import React from 'react';
import styles from './HistorySection.module.css';

const HistorySection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Row 1: Text Left, Image Right */}
                <div className={styles.row}>
                    <div className={styles.textCol}>
                        <p className={styles.paragraph}>
                            It all started with a simple truth: Gen Z is full of potential with ambition through the roof. They want to prove themselves, but the labor market is fast paced, fiercely competitive, and constantly evolving, making it tough to stand out without the right skills, guidance and support.
                        </p>
                    </div>
                    <div className={styles.imageCol}>
                        <div className={`${styles.polaroid} ${styles.rotateRight}`}>
                            <div className={styles.imageInner}>
                                <img src="/assets/about/history-1.png" alt="Team brainstorming" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Image Left, Text Right */}
                <div className={`${styles.row} ${styles.reverseMobile}`}>
                    <div className={styles.imageCol}>
                        <div className={`${styles.polaroid} ${styles.rotateLeft}`}>
                            <div className={styles.imageInner}>
                                <img src="/assets/about/history-2.png" alt="Collaborative workspace" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.textCol}>
                        <p className={styles.paragraph}>
                            Empower Z was born to create an ecosystem that’s inclusive, flexible, and tailored to close learning gaps and meet real market needs. We are here to help them upskill, gain the right tools, and be equipped with real-world knowledge to become agents of change, crush it in today’s cutthroat job market, and land decent work opportunities. Our goal is to provide mentorship and learning opportunities without breaking the bank, helping Gen Z become financially independent, confident, and part of a global community that shares their challenges, dreams, and vision.
                        </p>
                    </div>
                </div>

                {/* Row 3: Text Left, Image Right */}
                <div className={styles.row}>
                    <div className={styles.textCol}>
                        <p className={styles.paragraph}>
                            Empower Z is more than an initiative — it’s a global movement. We champion many of the Sustainable Development Goals, and we work hand-in-hand with changemakers and partners to make sustainable impact real. By teaming up with changemakers and partners around the world, we’re proving that when we unite, nothing’s impossible.
                        </p>
                    </div>
                    <div className={styles.imageCol}>
                        <div className={`${styles.polaroid} ${styles.rotateRight}`}>
                            <div className={styles.imageInner}>
                                <img src="/assets/about/history-3.png" alt="Global community" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HistorySection;
