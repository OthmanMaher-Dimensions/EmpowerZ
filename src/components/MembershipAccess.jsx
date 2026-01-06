"use client";

import React from 'react';
import styles from './MembershipAccess.module.css';

const MembershipAccess = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Membership Brings to Your Plate More Than Just Access.
                    </h2>

                    <p className={styles.description}>
                        Our membership is designed to deliver a hassle-free personalized learning experience in an enabling environment where you can learn from international experts, upskill like a pro, and access the right tools that will help you excel and succeed in your personal and professional life.
                    </p>

                    <p className={styles.description}>
                        Our exclusive community allows its members to access exclusive deals, perks, discounts, training courses, certificates, and scholarships – to name a few.
                    </p>

                    <div className={styles.highlightBox}>
                        <p className={styles.highlightText}>
                            For USD 1 per day, which is cheaper than a small French fries, you will be guaranteed to receive offers and deals worth thousands of dollars.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipAccess;
