"use client";

import React from 'react';
import Link from 'next/link';
import { Rocket, Gem, Gift } from 'lucide-react';
import styles from './MembershipOffer.module.css';
import { trackCta } from '../lib/trackCta';

const MembershipOffer = ({
    backgroundImage = "/assets/membership-bg.png",
    arrowImage = "/assets/membership-arrow.png",
    quote = "You do not have to spend a fortune to access high-profile courses and learn new skills. For less than a dollar a day, you will unpack a load of learning opportunities and networking events that are worth thousands of dollars.",
    title = "Every coin counts,\nevery skill hits different.",
    description = "This is a Limited-Time Opportunity. Once the Target Number of Members is Achieved, Membership Will be Closed.",
    stat1Value = "1000",
    stat1Label = "Target Members",
    stat2Value = "50%",
    stat2Label = "Exclusive Student Discount",
    stat3Value = "500",
    stat3Label = "Target Events",
    stat4Value = "$10,000",
    stat4Label = "Worth of Perks",
    oneStepText = "One Step Changes Everything!",
    card1Text = "Join a world full of perks and exclusive experiences.",
    card2Text = "Choose uniqueness and enjoy a different experience every day.",
    card3Text = "Your membership unlocks exclusive opportunities here.",
    ctaText = "Start Your Journey to Exclusive Perks",
    style = {}
}) => {
    const handleCtaClick = () => {
        trackCta('Membership - Start Journey', 'Home');
    };

    return (
        <section className={styles.section} id="membership-offer" style={style}>
            {/* Background Image */}
            <img
                src={backgroundImage}
                alt="Community background"
                className={styles.bgImage}
            />
            <div className={styles.overlay} />

            <div className={styles.container}>

                {/* Top Quote Section */}
                <div className={styles.topQuoteContainer}>
                    <p className={styles.topQuote}>
                        <span className={styles.quoteIcon}>❝</span>
                        {quote}
                        <span className={styles.quoteIcon}>❞</span>
                    </p>
                </div>

                {/* Gold Border Box */}
                <div className={styles.contentBox}>

                    <h2 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
                        {title}
                    </h2>

                    <p className={styles.description}>
                        {description}
                    </p>

                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{stat1Value}</div>
                            <div className={styles.statLabel}>{stat1Label}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{stat2Value}</div>
                            <div className={styles.statLabel}>{stat2Label}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{stat3Value}</div>
                            <div className={styles.statLabel}>{stat3Label}</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statValue}>{stat4Value}</div>
                            <div className={styles.statLabel}>{stat4Label}</div>
                        </div>
                    </div>

                    <div className={styles.oneStepText}>
                        {oneStepText}
                    </div>

                    {/* Feature Cards Row */}
                    <div className={styles.featureCardsRow}>
                        {/* Blue Card */}
                        <div className={`${styles.featureCard} ${styles.cardBlue}`}>
                            <div className={styles.featureIcon}>🔵</div>
                            <div className={styles.featureText}>
                                {card1Text}
                            </div>
                        </div>

                        {/* Green Card */}
                        <div className={`${styles.featureCard} ${styles.cardGreen}`}>
                            <div className={styles.featureIcon}>💸</div>
                            <div className={styles.featureText}>
                                {card2Text}
                            </div>
                        </div>

                        {/* Pink Card */}
                        <div className={`${styles.featureCard} ${styles.cardPink}`}>
                            <div className={styles.featureIcon}>💎</div>
                            <div className={styles.featureText}>
                                {card3Text}
                            </div>
                        </div>
                    </div>

                    {/* CTA Button overlapping the bottom */}
                    <div className={styles.ctaContainer}>
                        <Link href="/apply-member" style={{ textDecoration: 'none' }}>
                            <button className={styles.ctaButton} onClick={handleCtaClick}>
                                <Rocket size={24} />
                                {ctaText}
                            </button>
                        </Link>
                        <img
                            src={arrowImage}
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
