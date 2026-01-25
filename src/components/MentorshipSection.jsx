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

const MentorshipSection = ({
    title = "Mentorship",
    subtitle = "Connect with mentors, peers, and collaborators who challenge and inspire you.",

    top1Title = "Career Guidance", top1Desc = "One-on-one support for career planning and progression", top1Icon = "/assets/what-we-offer/icons/career-guidance.png",
    top2Title = "Academic Mentorship", top2Desc = "Support for study strategies, university applications, and scholarships.", top2Icon = "/assets/what-we-offer/icons/academic.png",
    top3Title = "Entrepreneurship Mentorship", top3Desc = "Guidance from founders, investors, and startup advisors.", top3Icon = "/assets/what-we-offer/icons/entrepreneurship.png",
    top4Title = "Leadership Coaching", top4Desc = "Building confidence, communication, and decision-making skills.", top4Icon = "/assets/what-we-offer/icons/leadership-coaching.png",
    top5Title = "Skill-Specific Mentorship", top5Desc = "Focused on tech, design, finance, law, or creative industries", top5Icon = "/assets/what-we-offer/icons/skill-specific.png",

    bottom1Title = "Personal Development Mentorship", bottom1Desc = "Life skills, time management, and self-growth coaching.", bottom1Icon = "/assets/what-we-offer/icons/personal-development.png",
    bottom2Title = "Industry-Specific Mentorship", bottom2Desc = "Tailored insights from professionals in targeted sectors", bottom2Icon = "/assets/what-we-offer/icons/industry-specific.png",
    bottom3Title = "Peer-to-Peer Mentorship", bottom3Desc = "Young leaders mentoring others in shared fields of interest.", bottom3Icon = "/assets/what-we-offer/icons/peer-to-peer.png",
    bottom4Title = "Community Impact Mentorship", bottom4Desc = "Training youth to lead social impact and volunteer initiatives.", bottom4Icon = "/assets/what-we-offer/icons/community-impact.png",
    style = {}
}) => {
    // Top Row: 5 items
    const topRow = [
        { title: top1Title, titleProp: "top1Title", description: top1Desc, descProp: "top1Desc", icon: top1Icon, iconProp: "top1Icon" },
        { title: top2Title, titleProp: "top2Title", description: top2Desc, descProp: "top2Desc", icon: top2Icon, iconProp: "top2Icon" },
        { title: top3Title, titleProp: "top3Title", description: top3Desc, descProp: "top3Desc", icon: top3Icon, iconProp: "top3Icon" },
        { title: top4Title, titleProp: "top4Title", description: top4Desc, descProp: "top4Desc", icon: top4Icon, iconProp: "top4Icon" },
        { title: top5Title, titleProp: "top5Title", description: top5Desc, descProp: "top5Desc", icon: top5Icon, iconProp: "top5Icon" }
    ];

    // Bottom Row: 4 items
    const bottomRow = [
        { title: bottom1Title, titleProp: "bottom1Title", description: bottom1Desc, descProp: "bottom1Desc", icon: bottom1Icon, iconProp: "bottom1Icon" },
        { title: bottom2Title, titleProp: "bottom2Title", description: bottom2Desc, descProp: "bottom2Desc", icon: bottom2Icon, iconProp: "bottom2Icon" },
        { title: bottom3Title, titleProp: "bottom3Title", description: bottom3Desc, descProp: "bottom3Desc", icon: bottom3Icon, iconProp: "bottom3Icon" },
        { title: bottom4Title, titleProp: "bottom4Title", description: bottom4Desc, descProp: "bottom4Desc", icon: bottom4Icon, iconProp: "bottom4Icon" }
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title} data-builder-prop="title">{title}</h2>
                </div>

                <p className={styles.subtitle} data-builder-prop="subtitle">
                    {subtitle}
                </p>

                {/* Top Row Grid - 5 Columns */}
                <div className={styles.gridTop}>
                    {topRow.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <img src={item.icon} alt={item.title} className={styles.customIcon} data-builder-prop={item.iconProp} />
                            </div>
                            <h3 className={styles.cardTitle} data-builder-prop={item.titleProp}>{item.title}</h3>
                            <p className={styles.cardDescription} data-builder-prop={item.descProp}>{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row Grid - 4 Columns */}
                <div className={styles.gridBottom}>
                    {bottomRow.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <img src={item.icon} alt={item.title} className={styles.customIcon} data-builder-prop={item.iconProp} />
                            </div>
                            <h3 className={styles.cardTitle} data-builder-prop={item.titleProp}>{item.title}</h3>
                            <p className={styles.cardDescription} data-builder-prop={item.descProp}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorshipSection;
