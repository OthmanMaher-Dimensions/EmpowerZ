"use client";

import React from 'react';
import {
    HandHeart,
    Leaf,
    BookOpen,
    Users,
    Calendar,
    HeartPulse,
    PawPrint,
    Cpu,
    Gamepad2,
    Siren
} from 'lucide-react';
import styles from './VolunteerActivitiesSection.module.css';

const VolunteerActivitiesSection = () => {
    const activities = [
        {
            title: "Community Service",
            description: "Local outreach, elderly care, and neighborhood support",
            icon: "/assets/what-we-offer/icons/community-service.png",
            isCustomIcon: true,
            color: "#E76A8A"
        },
        {
            title: "Environmental Action",
            description: "Tree planting, recycling programs, beach clean-ups, and climate initiatives.",
            icon: "/assets/what-we-offer/icons/environmental-action.png",
            isCustomIcon: true,
            color: "#73C2A5"
        },
        {
            title: "Education Support",
            description: "Tutoring, literacy programs, and mentoring schoolchildren",
            icon: "/assets/what-we-offer/icons/education-support.png",
            isCustomIcon: true,
            color: "#A97FD1"
        },
        {
            title: "Social Impact Projects",
            description: "Supporting NGOs, fundraising, and advocacy campaigns",
            icon: "/assets/what-we-offer/icons/social-impact.png",
            isCustomIcon: true,
            color: "#FCB889"
        },
        {
            title: "Event Volunteering",
            description: "Helping in conferences, cultural events, and exhibitions.",
            icon: "/assets/what-we-offer/icons/event-volunteering.png",
            isCustomIcon: true,
            color: "#899DD0"
        },
        {
            title: "Health & Wellness Volunteering",
            description: "Assisting in hospitals, health campaigns, and awareness drives",
            icon: "/assets/what-we-offer/icons/health-wellness.png",
            isCustomIcon: true,
            color: "#92FFD8"
        },
        {
            title: "Animal Care & Protection",
            description: "Volunteering at shelters, wildlife rescue, and animal welfare",
            icon: "/assets/what-we-offer/icons/animal-care.png",
            isCustomIcon: true,
            color: "#FEC23D"
        },
        {
            title: "Tech for Good",
            description: "Assisting NGOs with digital solutions, websites, and IT support.",
            icon: "/assets/what-we-offer/icons/tech-for-good.png",
            isCustomIcon: true,
            color: "#CADB7F"
        },
        {
            title: "Youth & Children Engagement",
            description: "Summer camps, after-school programs, and youth clubs.",
            icon: "/assets/what-we-offer/icons/youth-engagement.png",
            isCustomIcon: true,
            color: "#DB80CF"
        },
        {
            title: "Emergency & Relief Work",
            description: "Disaster response, humanitarian aid, and crisis support.",
            icon: "/assets/what-we-offer/icons/emergency-relief.png",
            isCustomIcon: true,
            color: "#FB2FB5"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>Volunteer Activities</h2>
                </div>

                <p className={styles.subtitle}>
                    Connect with mentors, peers, and collaborators who challenge and inspire you.
                </p>

                <div className={styles.grid}>
                    {activities.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ backgroundColor: item.color }}
                        >
                            <div className={styles.iconWrapper}>
                                {item.isCustomIcon ? (
                                    <img src={item.icon} alt={item.title} className={styles.customIcon} />
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VolunteerActivitiesSection;
