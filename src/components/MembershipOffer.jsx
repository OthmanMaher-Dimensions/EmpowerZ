"use client";

import React from 'react';
import { Rocket, Gem, Gift } from 'lucide-react';
import styles from './MembershipOffer.module.css';

const MembershipOffer = () => {
    return (
        <section className={styles.section} id="membership-offer">
            {/* Background Image */}
            <img
                src="/assets/membership-bg.png"
                alt="Community background"
                className={styles.bgImage}
            />
            <div className={styles.overlay} />

            <div className={styles.container}>

                {/* Top Quote Section */}
                <div className={styles.topQuoteContainer}>
                    <p className={styles.topQuote}>
                        <span className={styles.quoteIcon}>❝</span>
                        You do not have to spend a fortune to access high-profile courses
                        and learn new skills. For less than a dollar a day, you will unpack a load of learning opportunities and networking events that are worth thousands of dollars.
                        <span className={styles.quoteIcon}>❞</span>

                    </p>
                </div>

                {/* Gold Border Box */}
                <div className={styles.contentBox}>

                    <h2 className={styles.title}>
                        Every coin counts,<br />
                        every skill hits different.
                    </h2>

                    <p className={styles.description}>
                        This is a Limited-Time Opportunity. Once the Target Number of Members is Achieved, Membership Will be Closed.
                    </p>

                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>1000</div>
                            <div className={styles.statLabel}>Target Members</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>50%</div>
                            <div className={styles.statLabel}>Exclusive Student Discount</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>500</div>
                            <div className={styles.statLabel}>Target Events</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>$10,000</div>
                            <div className={styles.statLabel}>Worth of Perks</div>
                        </div>
                    </div>

                    <div className={styles.oneStepText}>
                        One Step Changes Everything!
                    </div>

                    {/* Feature Cards Row */}
                    <div className={styles.featureCardsRow}>
                        {/* Blue Card */}
                        <div className={`${styles.featureCard} ${styles.cardBlue}`}>
                            <div className={styles.featureIcon}>🔵</div>
                            <div className={styles.featureText}>
                                Join a world full of perks and exclusive experiences.
                            </div>
                        </div>

                        {/* Green Card */}
                        <div className={`${styles.featureCard} ${styles.cardGreen}`}>
                            <div className={styles.featureIcon}>💸</div>
                            <div className={styles.featureText}>
                                Choose uniqueness and enjoy a different experience every day.
                            </div>
                        </div>

                        {/* Pink Card */}
                        <div className={`${styles.featureCard} ${styles.cardPink}`}>
                            <div className={styles.featureIcon}>💎</div>
                            <div className={styles.featureText}>
                                Your membership unlocks exclusive opportunities here.
                            </div>
                        </div>
                    </div>

                    {/* CTA Button overlapping the bottom */}
                    <div className={styles.ctaContainer}>
                        <button className={styles.ctaButton}>
                            <Rocket size={24} />
                            Start Your Journey to Exclusive Perks
                        </button>
                        <img
                            src="/assets/membership-arrow.png"
                            alt="Arrow"
                            className={styles.arrowImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipOffer;
