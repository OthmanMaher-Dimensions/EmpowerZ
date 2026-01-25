"use client";

import React from 'react';
import styles from './EmpowerGenZSection.module.css';

const EmpowerGenZSection = ({
    heading = "WE \nEMPOWER \nGEN Z TO \nHAVE FULL \nACCESS TO...",
    stat1Number = "50,000+", stat1Text = "Potential members to benefit from the offerings of our membership",
    stat2Number = "10,000+", stat2Text = "US dollars to save with our exclusive perks and deals.",

    benefit1 = "Exclusive Perks & Discounts",
    benefit2 = "Full and Partial Scholarships",
    benefit3 = "Courses & Training",
    benefit4 = "Paid Internship Opportunities",
    benefit5 = "Exclusive Networking Events",
    benefit6 = "Social and Volunteer Activities",
    benefit7 = "Mentorship & Guidance",
    benefit8 = "Lifetime Changing Experiences",
    style = {}
}) => {
    const listItems = [
        { text: benefit1, prop: 'benefit1' },
        { text: benefit2, prop: 'benefit2' },
        { text: benefit3, prop: 'benefit3' },
        { text: benefit4, prop: 'benefit4' },
        { text: benefit5, prop: 'benefit5' },
        { text: benefit6, prop: 'benefit6' },
        { text: benefit7, prop: 'benefit7' },
        { text: benefit8, prop: 'benefit8' }
    ].filter(item => item.text);

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                {/* Content Row */}
                <div className={styles.contentRow}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.heading} style={{ whiteSpace: 'pre-line' }} data-builder-prop="heading">
                            {heading}
                        </h2>
                    </div>
                    <div className={styles.rightColumn}>
                        <ul className={styles.benefitList}>
                            {listItems.map((item, index) => (
                                <li key={index} className={styles.benefitItem}>
                                    <span className={styles.bullet}>•</span>
                                    <span data-builder-prop={item.prop}>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

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
            </div>
        </section>
    );
};

export default EmpowerGenZSection;
