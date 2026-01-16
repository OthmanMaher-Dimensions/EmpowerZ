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

const ImpactSection = ({
    mainTitle = "HOW WE MAKE\nAN IMPACT",
    goal1Number = "4", goal1Title = "Quality Education", goal1Desc = "We open doors to learning that goes beyond the classroom, equipping young people with the skills, confidence, and tools to dream big and make those dreams real.", goal1Image = "/assets/about/icon-education.png",
    goal2Number = "5", goal2Title = "Gender Equality", goal2Desc = "We stand for equal chances and equal voices. By uplifting women and girls, we’re breaking barriers and proving that leadership has no gender.", goal2Image = "/assets/about/icon-gender.png",
    goal3Number = "8", goal3Title = "Decent Work & Economic Growth", goal3Desc = "We fuel creativity, innovation, and entrepreneurship, helping young people turn their ideas into opportunities and shaping a future where work is meaningful and fair.", goal3Image = "/assets/about/icon-work.png",
    goal4Number = "10", goal4Title = "Reduced Inequalities", goal4Desc = "We celebrate diversity and push for inclusion. No matter your background, we’re here to make sure everyone has a seat at the table.", goal4Image = "/assets/about/icon-equality.png",
    goal5Number = "13", goal5Title = "Climate Action", goal5Desc = "We raise our voices and roll up our sleeves for the planet, backing green initiatives, spreading awareness, and leading the fight against climate change.", goal5Image = "/assets/about/icon-climate.png",
    goal6Number = "15", goal6Title = "Life on Land", goal6Desc = "We protect the earth we call home. From biodiversity to sustainable living, we support actions that keep our lands thriving for generations to come.", goal6Image = "/assets/about/icon-life.png",
    goal7Number = "17", goal7Title = "Partnerships for the Goals", goal7Desc = "We know change is bigger than any one of us. That’s why we team up with schools, startups, NGOs, and communities worldwide proving that when we work together, nothing is out of reach.", goal7Image = "/assets/about/icon-partnerships.png",
    style = {}
}) => {

    const goals = [
        { number: goal1Number, title: goal1Title, description: goal1Desc, icon: goal1Image, color: "#E76A8A" }, // Pink
        { number: goal2Number, title: goal2Title, description: goal2Desc, icon: goal2Image, color: "#899DD0" }, // Periwinkle
        { number: goal3Number, title: goal3Title, description: goal3Desc, icon: goal3Image, color: "#73C2A5" }, // Green
        { number: goal4Number, title: goal4Title, description: goal4Desc, icon: goal4Image, color: "#DB80CF" }, // Orchid
        { number: goal5Number, title: goal5Title, description: goal5Desc, icon: goal5Image, color: "#A97FD1" }, // Purple
        { number: goal6Number, title: goal6Title, description: goal6Desc, icon: goal6Image, color: "#FCB889" }, // Orange
        { number: goal7Number, title: goal7Title, description: goal7Desc, icon: goal7Image, color: "#CADB7F" }  // Lime
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.bgImage}></div>
            <div className={styles.overlay}></div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.mainTitle} style={{ whiteSpace: 'pre-line' }}>
                        {mainTitle}
                    </h2>
                </div>

                <div className={styles.goalsList}>
                    {goals.map((goal, index) => (
                        <div
                            key={index}
                            className={styles.goalCard}
                            style={{ backgroundColor: goal.color }}
                        >
                            <div className={styles.numberWrapper}>
                                <span className={styles.goalNumber}>{goal.number}</span>
                            </div>
                            <div className={styles.iconWrapper}>
                                <img src={goal.icon} alt={goal.title} className={styles.iconImage} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.goalTitle}>{goal.title}</h3>
                                <p className={styles.goalDesc}>{goal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
