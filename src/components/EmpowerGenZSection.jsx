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
        benefit1, benefit2, benefit3, benefit4,
        benefit5, benefit6, benefit7, benefit8
    ].filter(Boolean);

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                {/* Content Row */}
                <div className={styles.contentRow}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.heading} style={{ whiteSpace: 'pre-line' }}>
                            {heading}
                        </h2>
                    </div>
                    <div className={styles.rightColumn}>
                        <ul className={styles.benefitList}>
                            {listItems.map((item, index) => (
                                <li key={index} className={styles.benefitItem}>
                                    <span className={styles.bullet}>•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats Row */}
                <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                        <h3 className={styles.statNumber}>{stat1Number}</h3>
                        <p className={styles.statText}>
                            {stat1Text}
                        </p>
                    </div>
                    <div className={styles.statBox}>
                        <h3 className={styles.statNumber}>{stat2Number}</h3>
                        <p className={styles.statText}>
                            {stat2Text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmpowerGenZSection;
