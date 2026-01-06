"use client";

import React from 'react';
import {
    TrendingUp,
    BookOpen,
    Lightbulb,
    Users,
    Share2,
    BarChart,
    Briefcase,
    ArrowRightLeft,
    HeartHandshake
} from 'lucide-react';
import styles from './MentorshipSection.module.css';

const MentorshipSection = () => {
    // Top Row: 5 items
    const topRow = [
        {
            title: "Career Guidance",
            description: "One-on-one support for career planning and progression",
            icon: "/assets/what-we-offer/icons/career-guidance.png",
            isCustomIcon: true
        },
        {
            title: "Academic Mentorship",
            description: "Support for study strategies, university applications, and scholarships.",
            icon: "/assets/what-we-offer/icons/academic.png",
            isCustomIcon: true
        },
        {
            title: "Entrepreneurship Mentorship",
            description: "Guidance from founders, investors, and startup advisors.",
            icon: "/assets/what-we-offer/icons/entrepreneurship.png",
            isCustomIcon: true
        },
        {
            title: "Leadership Coaching",
            description: "Building confidence, communication, and decision-making skills.",
            icon: "/assets/what-we-offer/icons/leadership-coaching.png",
            isCustomIcon: true
        },
        {
            title: "Skill-Specific Mentorship",
            description: "Focused on tech, design, finance, law, or creative industries",
            icon: "/assets/what-we-offer/icons/skill-specific.png",
            isCustomIcon: true
        }
    ];

    // Bottom Row: 4 items
    const bottomRow = [
        {
            title: "Personal Development Mentorship",
            description: "Life skills, time management, and self-growth coaching.",
            icon: "/assets/what-we-offer/icons/personal-development.png",
            isCustomIcon: true
        },
        {
            title: "Industry-Specific Mentorship",
            description: "Tailored insights from professionals in targeted sectors",
            icon: "/assets/what-we-offer/icons/industry-specific.png",
            isCustomIcon: true
        },
        {
            title: "Peer-to-Peer Mentorship",
            description: "Young leaders mentoring others in shared fields of interest.",
            icon: "/assets/what-we-offer/icons/peer-to-peer.png",
            isCustomIcon: true
        },
        {
            title: "Community Impact Mentorship",
            description: "Training youth to lead social impact and volunteer initiatives.",
            icon: "/assets/what-we-offer/icons/community-impact.png",
            isCustomIcon: true
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>Mentorship</h2>
                </div>

                <p className={styles.subtitle}>
                    Connect with mentors, peers, and collaborators who challenge and inspire you.
                </p>

                {/* Top Row Grid - 5 Columns */}
                <div className={styles.gridTop}>
                    {topRow.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {item.isCustomIcon ? (
                                    <img src={item.icon} alt={item.title} className={styles.customIcon} />
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row Grid - 4 Columns */}
                <div className={styles.gridBottom}>
                    {bottomRow.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {item.isCustomIcon ? (
                                    <img src={item.icon} alt={item.title} className={styles.customIcon} />
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
