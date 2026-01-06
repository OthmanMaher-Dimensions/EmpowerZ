"use client";

import React from 'react';
import styles from './SocialEventsSection.module.css';

const SocialEventsSection = () => {
    const events = [
        {
            title: "Cultural Nights & Festivals",
            description: "Celebrating diversity through food and traditions.",
            color: "#E76A8A"
        },
        {
            title: "Networking Mixers",
            description: "Fun, casual meetups to connect with peers and professionals.",
            color: "#899DD0"
        },
        {
            title: "Movie & Documentary Screenings",
            description: "With discussions on social themes and inspiring stories",
            color: "#FCB889"
        },
        {
            title: "Youth-Led Dialogues",
            description: "Informal conversations on culture, lifestyle, and trending topics",
            color: "#DB80CF"
        },
        {
            title: "Sports & Games Tournaments",
            description: "Football, e-sports, board games, and fitness challenges",
            color: "#CADB7F"
        },
        {
            title: "Community Dinners & Picnics",
            description: "Sharing meals to strengthen bonds and friendships",
            color: "#73C2A5"
        },
        {
            title: "Art & Creativity Exhibitions",
            description: "Showcasing youth talent in painting, photography, and design.",
            color: "#A97FD1"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>Social Events</h2>
                </div>

                <p className={styles.subtitle}>
                    Connect with mentors, peers, and collaborators who challenge and inspire you.
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
