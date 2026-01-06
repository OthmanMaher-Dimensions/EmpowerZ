"use client";

import React from 'react';
import styles from './MembershipBenefits.module.css';

const benefits = [
    {
        text: "Access Exclusive Perks",
        color: "#E76A8A"
    },
    {
        text: "Discover Available Scholarships",
        color: "#73C2A5"
    },
    {
        text: "Learn from International Experts",
        color: "#899DD0"
    },
    {
        text: "Make New Friends and Meet Like-Minded People",
        color: "#DB80CF"
    },
    {
        text: "Save Loads of Cash with Our Discounts",
        color: "#CADB7F"
    }
];

const MembershipBenefits = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Stats Row */}
                <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                        <h3 className={styles.statNumber}>50,000+</h3>
                        <p className={styles.statText}>
                            Potential members to benefit from the offerings of our membership
                        </p>
                    </div>
                    <div className={styles.statBox}>
                        <h3 className={styles.statNumber}>10,000+</h3>
                        <p className={styles.statText}>
                            US dollars to save with our exclusive perks and deals.
                        </p>
                    </div>
                </div>

                {/* Subtitle */}
                <h4 className={styles.subtitle}>
                    Through our exclusive membership based community, you will be able to....
                </h4>

                {/* Benefits Grid */}
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={styles.benefitCard}
                            style={{ backgroundColor: benefit.color }}
                        >
                            <p className={styles.benefitText}>{benefit.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MembershipBenefits;
