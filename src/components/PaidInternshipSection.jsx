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

const PaidInternshipSection = () => {
    const opportunities = [
        {
            title: "Business & Management",
            icon: "/assets/what-we-offer/icons/business.png",
            color: "linear-gradient(0deg, rgba(231, 106, 138, 0.18), rgba(231, 106, 138, 0.18)), #FFFFFF", // Pinkish Gradient
            isCustomIcon: true,
            items: [
                "Business Administration",
                "Project Management",
                "Human Resources",
                "Sales & Marketing",
                "Customer Service"
            ]
        },
        {
            title: "Finance & Economics",
            icon: "/assets/what-we-offer/icons/finance.png",
            color: "linear-gradient(0deg, rgba(252, 184, 137, 0.18), rgba(252, 184, 137, 0.18)), #FFFFFF", // Peach Gradient
            isCustomIcon: true,
            items: [
                "Accounting & Auditing",
                "Financial Analysis",
                "Banking & Investment",
                "Economics Research"
            ]
        },
        {
            title: "Technology & Data",
            icon: "/assets/what-we-offer/icons/tech.png",
            color: "rgba(115, 194, 165, 0.18)", // Green/Teal
            isCustomIcon: true,
            items: [
                "Software Development",
                "Web & Mobile App Development",
                "Data Analysis & Data Science",
                "AI & Machine Learning",
                "Cybersecurity",
                "Cloud Computing & IT Support"
            ]
        },
        {
            title: "Creative & Media",
            icon: "/assets/what-we-offer/icons/creative.png",
            color: "rgba(202, 219, 127, 0.18)", // Light Green
            isCustomIcon: true,
            items: [
                "Graphic Design",
                "UX/UI Design",
                "Animation & Motion Graphics",
                "Video Production & Photography",
                "Content Creation & Copywriting",
                "Social Media Management"
            ]
        },
        {
            title: "Law & Public Policy",
            icon: "/assets/what-we-offer/icons/law.png",
            color: "linear-gradient(0deg, rgba(137, 157, 208, 0.18), rgba(137, 157, 208, 0.18)), #FFFFFF", // Blue Gradient
            isCustomIcon: true,
            items: [
                "Legal Research & Translation",
                "Policy Analysis",
                "International Relations",
                "Human Rights & NGOs"
            ]
        },
        {
            title: "Healthcare & Life Sciences",
            icon: "/assets/what-we-offer/icons/health.png",
            color: "linear-gradient(0deg, rgba(169, 127, 209, 0.18), rgba(169, 127, 209, 0.18)), #FFFFFF", // Purple Gradient
            isCustomIcon: true,
            items: [
                "Public Health",
                "Medical Research Assistance",
                "Pharmacy & Pharmacology Support",
                "Nutrition & Wellness",
                "Healthcare Administration"
            ]
        },
        {
            title: "Engineering & Architecture",
            icon: "/assets/what-we-offer/icons/engineering.png",
            color: "linear-gradient(0deg, rgba(254, 207, 54, 0.18), rgba(254, 207, 54, 0.18)), #FFFFFF", // Yellow Gradient
            isCustomIcon: true,
            items: [
                "Civil Engineering",
                "Mechanical Engineering",
                "Electrical Engineering",
                "Architecture & Urban Planning",
                "3D Modeling & CAD Design"
            ]
        },
        {
            title: "Education & Training",
            icon: "/assets/what-we-offer/icons/education.png",
            color: "linear-gradient(0deg, rgba(251, 47, 181, 0.18), rgba(251, 47, 181, 0.18)), #FFFFFF", // Pink Gradient
            isCustomIcon: true,
            items: [
                "Teaching Assistance",
                "Curriculum Development",
                "E-learning & EdTech Support",
                "Language Tutoring"
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Paid Internship Opportunities</h2>
                    <p className={styles.subtitle}>
                        Exciting internship opportunities offering a pathway to kick-start your career through invaluable experiences to shape your professional journey.
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
                                    {item.isCustomIcon ? (
                                        <img src={item.icon} alt={item.title} className={styles.customIcon} />
                                    ) : (
                                        item.icon
                                    )}
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
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
