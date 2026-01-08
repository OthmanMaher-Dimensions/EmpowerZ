"use client";

import React from 'react';
import {
    Factory,
    Crown,
    Lightbulb,
    ClipboardList,
    GraduationCap,
    Briefcase,
    MessageCircle,
    Users,
    Globe,
    Monitor
} from 'lucide-react';
import styles from './NetworkingEventsSection.module.css';

const NetworkingEventsSection = () => {
    const events = [
        {
            title: "Industry Meetups",
            description: "Gatherings for tech, finance, healthcare, creative, and other sectors.",
            icon: "/assets/what-we-offer/icons/industry.png",
            isCustomIcon: true,
            color: "#E76A8A" // Pinkish Red
        },
        {
            title: "Career Fairs",
            description: "Direct connection with employers, recruiters, and internship providers",
            icon: "/assets/what-we-offer/icons/career.png",
            isCustomIcon: true,
            color: "#A97FD1" // Purple
        },
        {
            title: "Leadership Summits",
            description: "Exclusive events with inspiring leaders and changemakers.",
            icon: "/assets/what-we-offer/icons/leadership.png",
            isCustomIcon: true,
            color: "#FCB889" // Orange
        },
        {
            title: "Mentorship Circles",
            description: "Small group sessions with experienced professionals",
            icon: "/assets/what-we-offer/icons/mentorship.png",
            isCustomIcon: true,
            color: "#DB80CF" // Pink/Purple
        },
        {
            title: "Startup & Entrepreneur Mixers",
            description: "For aspiring founders, investors, and innovators.",
            icon: "/assets/what-we-offer/icons/startup.png",
            isCustomIcon: true,
            color: "#73C2A5" // Green
        },
        {
            title: "Youth & Student Conferences",
            description: "Focused on Gen Z-driven innovation and activism.",
            icon: "/assets/what-we-offer/icons/youth.png",
            isCustomIcon: true,
            color: "#92FFD8" // Cyan/Mint
        },
        {
            title: "Skill-Sharing Sessions",
            description: "Peer-to-peer networking through workshops and live demos",
            icon: "/assets/what-we-offer/icons/skill.png",
            isCustomIcon: true,
            color: "#CADB7F" // Lime Green
        },
        {
            title: "Global Exchange Events",
            description: "International student and youth networking opportunities.",
            icon: "/assets/what-we-offer/icons/global.png",
            isCustomIcon: true,
            color: "#bc7ba6" // Hot Pink
        },
        {
            title: "Alumni & Community Gatherings",
            description: "Reconnecting members and strengthening long-term ties.",
            icon: "/assets/what-we-offer/icons/alumni.png",
            isCustomIcon: true,
            color: "#899DD0" // Periwinkle Blue
        },
        {
            title: "Virtual Networking Lounges",
            description: "Online events for global reach and inclusivity.",
            icon: "/assets/what-we-offer/icons/virtual.png",
            isCustomIcon: true,
            color: "#FEC23D" // Yellow/Gold
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>Networking Events</h2>
                </div>

                <p className={styles.subtitle}>
                    Connect with mentors, peers, and collaborators who challenge and inspire you.
                </p>

                <div className={styles.grid}>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ backgroundColor: event.color }}
                        >
                            <div className={styles.iconWrapper}>
                                {event.isCustomIcon ? (
                                    <img src={event.icon} alt={event.title} className={styles.customIcon} />
                                ) : (
                                    event.icon
                                )}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{event.title}</h3>
                                <p className={styles.cardDescription}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NetworkingEventsSection;
