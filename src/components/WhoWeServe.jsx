"use client";

import React from 'react';
import { School, GraduationCap, FileText, Medal, User } from 'lucide-react';
import styles from './WhoWeServe.module.css';

const WhoWeServe = ({
    title = "Who We Serve",
    card1Title = "University Students",
    card1Desc = "Learn what they don't teach in class—real-world business skills, personal branding, networking strategies, and job market readiness.",
    card1Image = "icon-university-2.png",
    card2Title = "Fresh Graduates",
    card2Desc = "Step into the workforce prepared. Our training helps you sharpen your communication, confidence, and career game plan.",
    card2Image = "icon-fresh-grad-2.png",
    card3Title = "High School Students",
    card3Desc = "Gain a head start with mentoring, foundational courses, and clarity on your academic and career direction.",
    card3Image = "icon-high-school-2.png",
    card4Title = "Professionals",
    card4Desc = "Accelerate your career with world-class upskilling opportunities, thought-leader webinars, and exclusive corporate discounts.",
    card4Image = "icon-professional-2.png",
    card5Title = "Entrepreneurs",
    card5Desc = "Access strategic tools, partner perks, investor insights, and access to business resources to grow smarter, not harder.",
    card5Image = "icon-entrepreneur-2.png",
    bottomTitle = "What we offer is no longer a luxury or an option; it is imperative and a necessity if you wish to succeed in life, personally and professionally.",
    bottomDesc = "It is a global movement that will enable you to overcome life challenges, make new friends, learn the rights skills, gain knowledge from peers and international experts, and enjoy a world of exclusive perks and benefits.",
    bottomImage = "/assets/who-we-serve-bottom.png",
    style = {}
}) => {
    const cards = [
        {
            title: card1Title,
            desc: card1Desc,
            color: "#FBE4EA",
            imgSrc: card1Image,
        },
        {
            title: card2Title,
            desc: card2Desc,
            color: "#EAEDF6",
            imgSrc: card2Image,
        },
        {
            title: card3Title,
            desc: card3Desc,
            color: "#E6F4EF",
            imgSrc: card3Image,
        },
        {
            title: card4Title,
            desc: card4Desc,
            color: "#EFE8F7",
            imgSrc: card4Image,
        },
        {
            title: card5Title,
            desc: card5Desc,
            color: "#F5F8E8",
            imgSrc: card5Image,
        },
    ];

    return (
        <section className={styles.section} style={style}>
            {/* Title Section */}
            <div className={styles.titleContainer}>
                <div className={styles.titleDecor}></div>
                <h2 className={styles.heading}>{title}</h2>
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
                                src={card.imgSrc.startsWith('http') || card.imgSrc.startsWith('/') ? card.imgSrc : `/assets/${card.imgSrc}`}
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
                            src={bottomImage}
                            alt="People connecting"
                            className={styles.bottomImage}
                        />
                    </div>
                    <div className={styles.bottomContent}>
                        <h3 className={styles.bottomTitle}>
                            {bottomTitle}
                        </h3>
                        <p className={styles.bottomDescription}>
                            {bottomDesc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
