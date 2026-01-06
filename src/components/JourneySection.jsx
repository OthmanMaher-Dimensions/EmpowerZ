"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import styles from './JourneySection.module.css';

const JourneySection = () => {
    const cards = [
        {
            title: "Exclusive Perks...",
            description: "Save loads of cash with our discounts and enjoy member only offers from top brands, services, and tools that support your success.",
            items: [
                "Cafés & Coffee Shops", "Spas & Wellness Centers",
                "Beauty & Grooming", "Entertainment & Leisure",
                "Travel & Hospitality", "Sports & Outdoor Activities",
                "Healthcare & Dental Clinics", "Tech & Electronics",
                "Transportation & Mobility", "Fashion & Accessories",
                "Bookstores & Stationery", "Coworking Spaces",
                "Home & Lifestyle", "Fitness & Nutrition"
            ]
        },
        {
            title: "Exclusive Scholarships...",
            description: "Access partial and full scholarships for selected programs, empowering you to learn without financial barriers. (terms and conditions apply).",
            items: [
                "University Scholarships", "Vocational & Technical Training",
                "Online Learning & Certification", "Study Abroad & Exchange Programs",
                "Entrepreneurship & Innovation Grants"
            ]
        },
        {
            title: "Courses & Training...",
            description: "Access on-demand and live sessions covering business, leadership, communication, tech, and personal growth free and discounted rates...",
            items: [
                "Education & Professional Skills", "Communication & Soft Skills",
                "Business & Entrepreneurship", "Technology & Data",
                "Creative Arts & Design", "Medical & Health"
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Your journey begins here</h2>

                <div className={styles.cardsWrapper}>
                    {cards.map((card, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.description}>{card.description}</p>
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
