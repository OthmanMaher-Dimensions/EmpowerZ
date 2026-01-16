"use client";

import React from 'react';
import styles from './SocialEventsSection.module.css';

const SocialEventsSection = ({
    title = "Social Events",
    subtitle = "Connect with mentors, peers, and collaborators who challenge and inspire you.",

    event1Title = "Cultural Nights & Festivals", event1Desc = "Celebrating diversity through food and traditions.",
    event2Title = "Networking Mixers", event2Desc = "Fun, casual meetups to connect with peers and professionals.",
    event3Title = "Movie & Documentary Screenings", event3Desc = "With discussions on social themes and inspiring stories",
    event4Title = "Youth-Led Dialogues", event4Desc = "Informal conversations on culture, lifestyle, and trending topics",
    event5Title = "Sports & Games Tournaments", event5Desc = "Football, e-sports, board games, and fitness challenges",
    event6Title = "Community Dinners & Picnics", event6Desc = "Sharing meals to strengthen bonds and friendships",
    event7Title = "Art & Creativity Exhibitions", event7Desc = "Showcasing youth talent in painting, photography, and design.",
    style = {}
}) => {
    const events = [
        { title: event1Title, description: event1Desc, color: "#E76A8A" },
        { title: event2Title, description: event2Desc, color: "#899DD0" },
        { title: event3Title, description: event3Desc, color: "#FCB889" },
        { title: event4Title, description: event4Desc, color: "#DB80CF" },
        { title: event5Title, description: event5Desc, color: "#CADB7F" },
        { title: event6Title, description: event6Desc, color: "#73C2A5" },
        { title: event7Title, description: event7Desc, color: "#A97FD1" }
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <p className={styles.subtitle}>
                    {subtitle}
                </p>

                <div className={styles.grid}>
                    {events.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ backgroundColor: item.color }}
                        >
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialEventsSection;
