"use client";

import React from 'react';
import { School, GraduationCap, FileText, Medal, User } from 'lucide-react';
import styles from './WhoWeServe.module.css';

const WhoWeServe = () => {
    const cards = [
        {
            title: "University Students",
            desc: "Learn what they don't teach in class—real-world business skills, personal branding, networking strategies, and job market readiness.",
            color: "#FBE4EA",
            imgSrc: "icon-university-2.png",
        },
        {
            title: "Fresh Graduates",
            desc: "Step into the workforce prepared. Our training helps you sharpen your communication, confidence, and career game plan.",
            color: "#EAEDF6",
            imgSrc: "icon-fresh-grad-2.png",
        },
        {
            title: "High School Students",
            desc: "Gain a head start with mentoring, foundational courses, and clarity on your academic and career direction.",
            color: "#E6F4EF",
            imgSrc: "icon-high-school-2.png",
        },
        {
            title: "Professionals",
            desc: "Accelerate your career with world-class upskilling opportunities, thought-leader webinars, and exclusive corporate discounts.",
            color: "#EFE8F7",
            imgSrc: "icon-professional-2.png",
        },
        {
            title: "Entrepreneurs",
            desc: "Access strategic tools, partner perks, investor insights, and access to business resources to grow smarter, not harder.",
            color: "#F5F8E8",
            imgSrc: "icon-entrepreneur-2.png",
        },
    ];

    return (
        <section className={styles.section}>
            {/* Title Section */}
            <div className={styles.titleContainer}>
                <div className={styles.titleDecor}></div>
                <h2 className={styles.heading}>Who We Serve</h2>
            </div>

            {/* Cards Section */}
            <div className={styles.cardsGrid}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        style={{ backgroundColor: card.color }}
                    >
                        <div className={styles.iconContainer}>
                            <img
                                src={`/assets/${card.imgSrc}`}
                                alt={card.title}
                                className={styles.cardIcon}
                            />
                        </div>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDescription}>{card.desc}</p>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSectionWrapper}>
                <div className={styles.bottomSection}>
                    <div className={styles.bottomImageContainer}>
                        <img
                            src="/assets/who-we-serve-bottom.png"
                            alt="People connecting"
                            className={styles.bottomImage}
                        />
                    </div>
                    <div className={styles.bottomContent}>
                        <h3 className={styles.bottomTitle}>
                            What we offer is no longer a luxury or an option; it is imperative and a necessity if you wish to succeed in life, personally and professionally.
                        </h3>
                        <p className={styles.bottomDescription}>
                            It is a global movement that will enable you to overcome life challenges, make new friends, learn the rights skills, gain knowledge from peers and international experts, and enjoy a world of exclusive perks and benefits.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
