"use client";

import React from 'react';
import {
    Briefcase,
    TrendingUp,
    BarChart3,
    MonitorSmartphone,
    Palette,
    Scale,
    HeartPulse,
    Building2,
    GraduationCap
} from 'lucide-react';
import styles from './PaidInternshipSection.module.css';

const PaidInternshipSection = ({
    title = "Paid Internship Opportunities",
    subtitle = "Exciting internship opportunities offering a pathway to kick-start your career through invaluable experiences to shape your professional journey.",

    opp1Title = "Business & Management", opp1Icon = "/assets/what-we-offer/icons/business.png", opp1Items = "Business Administration, Project Management, Human Resources, Sales & Marketing, Customer Service",
    opp2Title = "Finance & Economics", opp2Icon = "/assets/what-we-offer/icons/finance.png", opp2Items = "Accounting & Auditing, Financial Analysis, Banking & Investment, Economics Research",
    opp3Title = "Technology & Data", opp3Icon = "/assets/what-we-offer/icons/tech.png", opp3Items = "Software Development, Web & Mobile App Development, Data Analysis & Data Science, AI & Machine Learning, Cybersecurity, Cloud Computing & IT Support",
    opp4Title = "Creative & Media", opp4Icon = "/assets/what-we-offer/icons/creative.png", opp4Items = "Graphic Design, UX/UI Design, Animation & Motion Graphics, Video Production & Photography, Content Creation & Copywriting, Social Media Management",
    opp5Title = "Law & Public Policy", opp5Icon = "/assets/what-we-offer/icons/law.png", opp5Items = "Legal Research & Translation, Policy Analysis, International Relations, Human Rights & NGOs",
    opp6Title = "Healthcare & Life Sciences", opp6Icon = "/assets/what-we-offer/icons/health.png", opp6Items = "Public Health, Medical Research Assistance, Pharmacy & Pharmacology Support, Nutrition & Wellness, Healthcare Administration",
    opp7Title = "Engineering & Architecture", opp7Icon = "/assets/what-we-offer/icons/engineering.png", opp7Items = "Civil Engineering, Mechanical Engineering, Electrical Engineering, Architecture & Urban Planning, 3D Modeling & CAD Design",
    opp8Title = "Education & Training", opp8Icon = "/assets/what-we-offer/icons/education.png", opp8Items = "Teaching Assistance, Curriculum Development, E-learning & EdTech Support, Language Tutoring",
    style = {}
}) => {

    const parseItems = (itemsString) => itemsString ? itemsString.split(',').map(i => i.trim()).filter(Boolean) : [];

    const opportunities = [
        { title: opp1Title, titleProp: "opp1Title", icon: opp1Icon, iconProp: "opp1Icon", color: "linear-gradient(0deg, rgba(231, 106, 138, 0.18), rgba(231, 106, 138, 0.18)), #FFFFFF", items: parseItems(opp1Items), itemsProp: "opp1Items" },
        { title: opp2Title, titleProp: "opp2Title", icon: opp2Icon, iconProp: "opp2Icon", color: "linear-gradient(0deg, rgba(252, 184, 137, 0.18), rgba(252, 184, 137, 0.18)), #FFFFFF", items: parseItems(opp2Items), itemsProp: "opp2Items" },
        { title: opp3Title, titleProp: "opp3Title", icon: opp3Icon, iconProp: "opp3Icon", color: "rgba(115, 194, 165, 0.18)", items: parseItems(opp3Items), itemsProp: "opp3Items" },
        { title: opp4Title, titleProp: "opp4Title", icon: opp4Icon, iconProp: "opp4Icon", color: "rgba(202, 219, 127, 0.18)", items: parseItems(opp4Items), itemsProp: "opp4Items" },
        { title: opp5Title, titleProp: "opp5Title", icon: opp5Icon, iconProp: "opp5Icon", color: "linear-gradient(0deg, rgba(137, 157, 208, 0.18), rgba(137, 157, 208, 0.18)), #FFFFFF", items: parseItems(opp5Items), itemsProp: "opp5Items" },
        { title: opp6Title, titleProp: "opp6Title", icon: opp6Icon, iconProp: "opp6Icon", color: "linear-gradient(0deg, rgba(169, 127, 209, 0.18), rgba(169, 127, 209, 0.18)), #FFFFFF", items: parseItems(opp6Items), itemsProp: "opp6Items" },
        { title: opp7Title, titleProp: "opp7Title", icon: opp7Icon, iconProp: "opp7Icon", color: "linear-gradient(0deg, rgba(254, 207, 54, 0.18), rgba(254, 207, 54, 0.18)), #FFFFFF", items: parseItems(opp7Items), itemsProp: "opp7Items" },
        { title: opp8Title, titleProp: "opp8Title", icon: opp8Icon, iconProp: "opp8Icon", color: "linear-gradient(0deg, rgba(251, 47, 181, 0.18), rgba(251, 47, 181, 0.18)), #FFFFFF", items: parseItems(opp8Items), itemsProp: "opp8Items" }
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title} data-builder-prop="title">{title}</h2>
                    <p className={styles.subtitle} data-builder-prop="subtitle">
                        {subtitle}
                    </p>
                </div>

                <div className={styles.grid}>
                    {opportunities.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ background: item.color }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <img src={item.icon} alt={item.title} className={styles.customIcon} data-builder-prop={item.iconProp} />
                                </div>
                            </div>
                            <h3 className={styles.cardTitle} data-builder-prop={item.titleProp}>{item.title}</h3>
                            <ul className={styles.list}>
                                {item.items.map((subItem, i) => (
                                    <li key={i} className={styles.listItem}>
                                        <span className={styles.bullet}>•</span> {subItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaidInternshipSection;
