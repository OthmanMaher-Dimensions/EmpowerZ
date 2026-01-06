"use client";

import React from 'react';
import styles from './EmpowerGenZSection.module.css';

const EmpowerGenZSection = () => {
    const listItems = [
        "Exclusive Perks & Discounts",
        "Full and Partial Scholarships",
        "Courses & Training",
        "Paid Internship Opportunities",
        "Exclusive Networking Events",
        "Social and Volunteer Activities",
        "Mentorship & Guidance",
        "Lifetime Changing Experiences"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Content Row */}
                <div className={styles.contentRow}>
                    <div className={styles.leftColumn}>
                        <h2 className={styles.heading}>
                            WE <br />
                            EMPOWER <br />
                            GEN Z TO <br />
                            HAVE FULL <br />
                            ACCESS TO...
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
            </div>
        </section>
    );
};

export default EmpowerGenZSection;
