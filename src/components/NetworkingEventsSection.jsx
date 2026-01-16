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

const NetworkingEventsSection = ({
    title = "Networking Events",
    subtitle = "Connect with mentors, peers, and collaborators who challenge and inspire you.",

    event1Title = "Industry Meetups", event1Desc = "Gatherings for tech, finance, healthcare, creative, and other sectors.", event1Icon = "/assets/what-we-offer/icons/industry.png",
    event2Title = "Career Fairs", event2Desc = "Direct connection with employers, recruiters, and internship providers", event2Icon = "/assets/what-we-offer/icons/career.png",
    event3Title = "Leadership Summits", event3Desc = "Exclusive events with inspiring leaders and changemakers.", event3Icon = "/assets/what-we-offer/icons/leadership.png",
    event4Title = "Mentorship Circles", event4Desc = "Small group sessions with experienced professionals", event4Icon = "/assets/what-we-offer/icons/mentorship.png",
    event5Title = "Startup & Entrepreneur Mixers", event5Desc = "For aspiring founders, investors, and innovators.", event5Icon = "/assets/what-we-offer/icons/startup.png",
    event6Title = "Youth & Student Conferences", event6Desc = "Focused on Gen Z-driven innovation and activism.", event6Icon = "/assets/what-we-offer/icons/youth.png",
    event7Title = "Skill-Sharing Sessions", event7Desc = "Peer-to-peer networking through workshops and live demos", event7Icon = "/assets/what-we-offer/icons/skill.png",
    event8Title = "Global Exchange Events", event8Desc = "International student and youth networking opportunities.", event8Icon = "/assets/what-we-offer/icons/global.png",
    event9Title = "Alumni & Community Gatherings", event9Desc = "Reconnecting members and strengthening long-term ties.", event9Icon = "/assets/what-we-offer/icons/alumni.png",
    event10Title = "Virtual Networking Lounges", event10Desc = "Online events for global reach and inclusivity.", event10Icon = "/assets/what-we-offer/icons/virtual.png",
    style = {}
}) => {
    const events = [
        { title: event1Title, description: event1Desc, icon: event1Icon, color: "#E76A8A" }, // Pinkish Red
        { title: event2Title, description: event2Desc, icon: event2Icon, color: "#A97FD1" }, // Purple
        { title: event3Title, description: event3Desc, icon: event3Icon, color: "#FCB889" }, // Orange
        { title: event4Title, description: event4Desc, icon: event4Icon, color: "#DB80CF" }, // Pink/Purple
        { title: event5Title, description: event5Desc, icon: event5Icon, color: "#73C2A5" }, // Green
        { title: event6Title, description: event6Desc, icon: event6Icon, color: "#92FFD8" }, // Cyan/Mint
        { title: event7Title, description: event7Desc, icon: event7Icon, color: "#CADB7F" }, // Lime Green
        { title: event8Title, description: event8Desc, icon: event8Icon, color: "#bc7ba6" }, // Hot Pink
        { title: event9Title, description: event9Desc, icon: event9Icon, color: "#899DD0" }, // Periwinkle Blue
        { title: event10Title, description: event10Desc, icon: event10Icon, color: "#FEC23D" } // Yellow/Gold
    ];

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.yellowBlock}></div>
                    <h2 className={styles.title}>{title}</h2>
                </div>

                <p className={styles.subtitle}>
                    {subtitle}
                </p>

                <div className={styles.grid}>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ backgroundColor: event.color }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={event.icon} alt={event.title} className={styles.customIcon} />
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
