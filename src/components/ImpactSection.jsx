"use client";

import React from 'react';
import {
    GraduationCap,
    Users,
    TrendingUp,
    Scale,
    ThermometerSun,
    Trees,
    Handshake
} from 'lucide-react';
import styles from './ImpactSection.module.css';

const goals = [
    {
        icon: "/assets/about/icon-education.png",
        isImage: true,
        title: "Quality Education",
        description: "We open doors to learning that goes beyond the classroom, equipping young people with the skills, confidence, and tools to dream big and make those dreams real.",
        color: "#E76A8A" // Pink
    },
    {
        icon: "/assets/about/icon-gender.png",
        isImage: true,
        title: "Gender Equality",
        description: "We stand for equal chances and equal voices. By uplifting women and girls, we’re breaking barriers and proving that leadership has no gender.",
        color: "#899DD0" // Periwinkle
    },
    {
        icon: "/assets/about/icon-work.png",
        isImage: true,
        title: "Decent Work & Economic Growth",
        description: "We fuel creativity, innovation, and entrepreneurship, helping young people turn their ideas into opportunities and shaping a future where work is meaningful and fair.",
        color: "#73C2A5" // Green
    },
    {
        icon: "/assets/about/icon-equality.png",
        isImage: true,
        title: "Reduced Inequalities",
        description: "We celebrate diversity and push for inclusion. No matter your background, we’re here to make sure everyone has a seat at the table.",
        color: "#DB80CF" // Orchid
    },
    {
        icon: "/assets/about/icon-climate.png",
        isImage: true,
        title: "Climate Action",
        description: "We raise our voices and roll up our sleeves for the planet, backing green initiatives, spreading awareness, and leading the fight against climate change.",
        color: "#A97FD1" // Purple
    },
    {
        icon: "/assets/about/icon-life.png", // Life on Land
        isImage: true,
        title: "Life on Land",
        description: "We protect the earth we call home. From biodiversity to sustainable living, we support actions that keep our lands thriving for generations to come.",
        color: "#FCB889" // Orange
    },
    {
        icon: "/assets/about/icon-partnerships.png",
        isImage: true,
        title: "Partnerships for the Goals",
        description: "We know change is bigger than any one of us. That’s why we team up with schools, startups, NGOs, and communities worldwide proving that when we work together, nothing is out of reach.",
        color: "#CADB7F" // Lime
    }
];

const ImpactSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.bgImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.mainTitle}>
                        HOW WE MAKE<br />
                        AN IMPACT
                    </h2>
                </div>

                <div className={styles.goalsList}>
                    {goals.map((goal, index) => {
                        const Icon = goal.icon;
                        return (
                            <div
                                key={index}
                                className={styles.goalCard}
                                style={{ backgroundColor: goal.color }}
                            >
                                <div className={styles.numberWrapper}>
                                    <span className={styles.goalNumber}>{index + 1}</span>
                                </div>
                                <div className={styles.iconWrapper}>
                                    {goal.isImage ? (
                                        <img src={goal.icon} alt={goal.title} className={styles.iconImage} />
                                    ) : (
                                        <Icon size={32} strokeWidth={1.5} />
                                    )}
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.goalTitle}>{goal.title}</h3>
                                    <p className={styles.goalDesc}>{goal.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
