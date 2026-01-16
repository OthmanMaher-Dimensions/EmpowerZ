"use client";

import React from 'react';
import styles from './WhatWeOfferGrid.module.css';

const WhatWeOfferGrid = ({
    title = "Step Into the World of Empowerz",
    subtitle = "a platform to grow skills, build connections, and inspire change.",

    card1Title = "EMPOWERZ SKILLS", card1Desc = "Level up fast, gain real skills, learn from subject-matter experts, and turn talent into action now.", card1Image = "/assets/what-we-offer/grid-placeholder.png",
    card2Title = "EMPOWERZ EVENTS", card2Desc = "Experience epic events, meet like-minded people, changemakers, and build your own network.", card2Image = "/assets/what-we-offer/grid-2.png",
    card3Title = "EMPOWERZ PERKS", card3Desc = "Unpack cool perks, exclusive rewards, special discounts, and surprises that make life more awesome.", card3Image = "/assets/what-we-offer/grid-3.png",
    card4Title = "EMPOWERZ COMMUNITY", card4Desc = "Join a bold, inspiring community of like-minded people where every voice is heard and valued.", card4Image = "/assets/what-we-offer/grid-4.png",
    card5Title = "EMPOWERZ LEARNING", card5Desc = "Learn from the best institutions, grow your confidence and know-how, and crush your goals with us.", card5Image = "/assets/what-we-offer/grid-5.png",
    card6Title = "EMPOWERZ SOCIAL", card6Desc = "Make real impact, pay your debt to society, challenge norms, and create a better world together.", card6Image = "/assets/what-we-offer/grid-6.png",
    style = {}
}) => {

    const gridItems = [
        { title: card1Title, desc: card1Desc, image: card1Image },
        { title: card2Title, desc: card2Desc, image: card2Image },
        { title: card3Title, desc: card3Desc, image: card3Image },
        { title: card4Title, desc: card4Desc, image: card4Image },
        { title: card5Title, desc: card5Desc, image: card5Image },
        { title: card6Title, desc: card6Desc, image: card6Image },
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>
                        {subtitle}
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
