"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './PartnersSection.module.css';

const PartnersSection = ({ enableSignup = false }) => {
    // Array of partner logos - currently reusing the Microsoft logo as placeholder
    // In a real scenario, this would be a list of different partner logos
    const partners = [
        "/assets/logo-microsoft.png",
        "/assets/logo-microsoft.png",
        "/assets/logo-microsoft.png",
        "/assets/logo-microsoft.png",
        "/assets/logo-microsoft.png",
        "/assets/logo-microsoft.png",
        "/assets/logo-microsoft.png",
    ];

    return (
        <section className={styles.partnersSection}>
            <span className={styles.partnersTitle}>Partners and Patrons</span>

            {/* Marquee Container */}
            <div className={styles.marqueeContainer}>
                {/* Track - Two sets of logos for seamless loop */}
                <div className={styles.partnerTrack}>
                    {/* First Set */}
                    {partners.map((src, i) => (
                        <img
                            key={`a-${i}`}
                            src={src}
                            alt="Partner"
                            className={styles.partnerLogo}
                        />
                    ))}
                    {/* Duplicate Set */}
                    {partners.map((src, i) => (
                        <img
                            key={`b-${i}`}
                            src={src}
                            alt="Partner"
                            className={styles.partnerLogo}
                        />
                    ))}
                    {/* Triplicate Set for wider screens if needed to ensure no gap */}
                    {partners.map((src, i) => (
                        <img
                            key={`c-${i}`}
                            src={src}
                            alt="Partner"
                            className={styles.partnerLogo}
                        />
                    ))}
                </div>
            </div>

            {enableSignup && (
                <>
                    <button className={styles.signupBtn}>
                        Sign Up Now <ArrowRight size={16} />
                    </button>
                    <hr className={styles.divider} />
                </>
            )}
        </section>
    );
};

export default PartnersSection;
