"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './JourneySection.module.css';

const JourneySection = ({
    mainTitle = "Your journey begins here",

    card1Title = "Exclusive Perks...",
    card1Desc = "Save loads of cash with our discounts and enjoy member only offers from top brands, services, and tools that support your success.",
    card1Items = "Cafés & Coffee Shops, Spas & Wellness Centers, Beauty & Grooming, Entertainment & Leisure, Travel & Hospitality, Sports & Outdoor Activities, Healthcare & Dental Clinics, Tech & Electronics, Transportation & Mobility, Fashion & Accessories, Bookstores & Stationery, Coworking Spaces, Home & Lifestyle, Fitness & Nutrition",

    card2Title = "Exclusive Scholarships...",
    card2Desc = "Access partial and full scholarships for selected programs, empowering you to learn without financial barriers. (terms and conditions apply).",
    card2Items = "University Scholarships, Vocational & Technical Training, Online Learning & Certification, Study Abroad & Exchange Programs, Entrepreneurship & Innovation Grants",

    card3Title = "Courses & Training...",
    card3Desc = "Access on-demand and live sessions covering business, leadership, communication, tech, and personal growth free and discounted rates...",
    card3Items = "Education & Professional Skills, Communication & Soft Skills, Business & Entrepreneurship, Technology & Data, Creative Arts & Design, Medical & Health",
    style = {}
}) => {

    const parseItems = (itemsString) => {
        if (!itemsString) return [];
        return itemsString.split(',').map(item => item.trim()).filter(Boolean);
    };

    const cards = [
        {
            title: card1Title,
            titleProp: "card1Title",
            description: card1Desc,
            descProp: "card1Desc",
            items: parseItems(card1Items),
            itemsProp: "card1Items"
        },
        {
            title: card2Title,
            titleProp: "card2Title",
            description: card2Desc,
            descProp: "card2Desc",
            items: parseItems(card2Items),
            itemsProp: "card2Items"
        },
        {
            title: card3Title,
            titleProp: "card3Title",
            description: card3Desc,
            descProp: "card3Desc",
            items: parseItems(card3Items),
            itemsProp: "card3Items"
        }
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle} data-builder-prop="mainTitle">{mainTitle}</h2>

                <div className={styles.cardsWrapper}>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle} data-builder-prop={card.titleProp}>{card.title}</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.description} data-builder-prop={card.descProp}>{card.description}</p>
                                <ul className={styles.list}>
                                    {card.items.map((item, i) => (
                                        <li key={i} className={styles.listItem}>
                                            <CheckCircle2 className={styles.checkIcon} size={18} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;
