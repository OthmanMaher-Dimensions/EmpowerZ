"use client";

import React from 'react';
import styles from './MembershipAccess.module.css';

const MembershipAccess = ({
    title = "Membership Brings to Your Plate More Than Just Access.",
    desc1 = "Our membership is designed to deliver a hassle-free personalized learning experience in an enabling environment where you can learn from international experts, upskill like a pro, and access the right tools that will help you excel and succeed in your personal and professional life.",
    desc2 = "Our exclusive community allows its members to access exclusive deals, perks, discounts, training courses, certificates, and scholarships – to name a few.",
    highlightText = "For USD 1 per day, which is cheaper than a small French fries, you will be guaranteed to receive offers and deals worth thousands of dollars.",
    style = {}
}) => {
    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>

                    <p className={styles.description}>
                        {desc1}
                    </p>

                    <p className={styles.description}>
                        {desc2}
                    </p>

                    <div className={styles.highlightBox}>
                        <p className={styles.highlightText}>
                            {highlightText}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipAccess;
