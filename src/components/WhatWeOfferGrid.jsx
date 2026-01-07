"use client";

import React from 'react';
import styles from './WhatWeOfferGrid.module.css';

const gridItems = [
    {
        title: "EMPOWERZ SKILLS",
        desc: "Level up fast, gain real skills, learn from subject-matter experts, and turn talent into action now.",
        image: "/assets/what-we-offer/grid-placeholder.png"
    },
    {
        title: "EMPOWERZ EVENTS",
        desc: "Experience epic events, meet like-minded people, changemakers, and build your own network.",
        image: "/assets/what-we-offer/grid-2.png"
    },
    {
        title: "EMPOWERZ PERKS",
        desc: "Unpack cool perks, exclusive rewards, special discounts, and surprises that make life more awesome.",
        image: "/assets/what-we-offer/grid-3.png"
    },
    {
        title: "EMPOWERZ COMMUNITY",
        desc: "Join a bold, inspiring community of like-minded people where every voice is heard and valued.",
        image: "/assets/what-we-offer/grid-4.png"
    },
    {
        title: "EMPOWERZ LEARNING",
        desc: "Learn from the best institutions, grow your confidence and know-how, and crush your goals with us.",
        image: "/assets/what-we-offer/grid-5.png"
    },
    {
        title: "EMPOWERZ SOCIAL",
        desc: "Make real impact, pay your debt to society, challenge norms, and create a better world together.",
        image: "/assets/what-we-offer/grid-6.png"
    },
];

const WhatWeOfferGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Step Into the World of Empowerz</h2>
                    <p className={styles.subtitle}>
                        a platform to grow skills, build connections, and inspire change.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {gridItems.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.image}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOfferGrid;
