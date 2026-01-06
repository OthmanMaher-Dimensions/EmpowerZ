"use client";

import React from 'react';
import styles from './BoardSection.module.css';

const BoardSection = () => {
    // Mock data based on the design
    const members = Array(7).fill({
        name: "Jana Bader",
        role: "Publicity & Networking",
        description: "Empower Z Foundation is more than a community...it is a global movement with a big mission. We are here for young go-getters, entry-level professionals.",
        image: "/assets/about/board-member-placeholder.png"
    });

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Big Text Overlay */}
                <h2 className={styles.overlayTitle}>
                    OUR BOARD OF DIRECTORS
                </h2>

                {/* Cards Container */}
                <div className={styles.cardGrid}>
                    {members.map((member, index) => (
                        <div key={index} className={styles.card}>
                            <img
                                src={member.image}
                                alt={member.name}
                                className={styles.cardBg}
                            />

                            <div className={styles.cardOverlay}>
                                <h3 className={styles.name}>{member.name}</h3>
                                <div className={styles.role}>{member.role}</div>
                                <p className={styles.description}>
                                    {member.description}
                                </p>

                                <div className={styles.socials}>
                                    <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                        <img src="/assets/about/linkedin-gold.png" alt="LinkedIn" />
                                    </a>
                                    <a href="#" className={styles.socialIcon} aria-label="Facebook">
                                        <img src="/assets/about/facebook-gold.png" alt="Facebook" />
                                    </a>
                                    <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                        <img src="/assets/about/instagram-gold.png" alt="Instagram" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardSection;
