"use client";

import React from 'react';
import styles from './MembershipBenefits.module.css';

const MembershipBenefits = ({
    stat1Number = "50,000+", stat1Text = "Potential members to benefit from the offerings of our membership",
    stat2Number = "10,000+", stat2Text = "US dollars to save with our exclusive perks and deals.",
    subtitle = "Through our exclusive membership based community, you will be able to....",

    benefit1Text = "Access Exclusive Perks",
    benefit2Text = "Discover Available Scholarships",
    benefit3Text = "Learn from International Experts",
    benefit4Text = "Make New Friends and Meet Like-Minded People",
    benefit5Text = "Save Loads of Cash with Our Discounts",
    style = {}
}) => {

    const benefits = [
        { text: benefit1Text, prop: 'benefit1Text', color: "#E76A8A" },
        { text: benefit2Text, prop: 'benefit2Text', color: "#73C2A5" },
        { text: benefit3Text, prop: 'benefit3Text', color: "#899DD0" },
        { text: benefit4Text, prop: 'benefit4Text', color: "#DB80CF" },
        { text: benefit5Text, prop: 'benefit5Text', color: "#CADB7F" }
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>

                {/* Stats Row */}
                <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                        <h3 className={styles.statNumber} data-builder-prop="stat1Number">{stat1Number}</h3>
                        <p className={styles.statText} data-builder-prop="stat1Text">
                            {stat1Text}
                        </p>
                    </div>
                    <div className={styles.statBox}>
                        <h3 className={styles.statNumber} data-builder-prop="stat2Number">{stat2Number}</h3>
                        <p className={styles.statText} data-builder-prop="stat2Text">
                            {stat2Text}
                        </p>
                    </div>
                </div>

                {/* Subtitle */}
                <h4 className={styles.subtitle} data-builder-prop="subtitle">
                    {subtitle}
                </h4>

                {/* Benefits Grid */}
                <div className={styles.benefitsGrid}>
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={styles.benefitCard}
                            style={{ backgroundColor: benefit.color }}
                        >
                            <p className={styles.benefitText} data-builder-prop={benefit.prop}>{benefit.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MembershipBenefits;
