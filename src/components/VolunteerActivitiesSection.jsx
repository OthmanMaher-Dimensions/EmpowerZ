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

const VolunteerActivitiesSection = ({
    title = "Volunteer Activities",
    subtitle = "Connect with mentors, peers, and collaborators who challenge and inspire you.",

    activity1Title = "Community Service", activity1Desc = "Local outreach, elderly care, and neighborhood support", activity1Icon = "/assets/what-we-offer/icons/community-service.png",
    activity2Title = "Environmental Action", activity2Desc = "Tree planting, recycling programs, beach clean-ups, and climate initiatives.", activity2Icon = "/assets/what-we-offer/icons/environmental-action.png",
    activity3Title = "Education Support", activity3Desc = "Tutoring, literacy programs, and mentoring schoolchildren", activity3Icon = "/assets/what-we-offer/icons/education-support.png",
    activity4Title = "Social Impact Projects", activity4Desc = "Supporting NGOs, fundraising, and advocacy campaigns", activity4Icon = "/assets/what-we-offer/icons/social-impact.png",
    activity5Title = "Event Volunteering", activity5Desc = "Helping in conferences, cultural events, and exhibitions.", activity5Icon = "/assets/what-we-offer/icons/event-volunteering.png",
    activity6Title = "Health & Wellness Volunteering", activity6Desc = "Assisting in hospitals, health campaigns, and awareness drives", activity6Icon = "/assets/what-we-offer/icons/health-wellness.png",
    activity7Title = "Animal Care & Protection", activity7Desc = "Volunteering at shelters, wildlife rescue, and animal welfare", activity7Icon = "/assets/what-we-offer/icons/animal-care.png",
    activity8Title = "Tech for Good", activity8Desc = "Assisting NGOs with digital solutions, websites, and IT support.", activity8Icon = "/assets/what-we-offer/icons/tech-for-good.png",
    activity9Title = "Youth & Children Engagement", activity9Desc = "Summer camps, after-school programs, and youth clubs.", activity9Icon = "/assets/what-we-offer/icons/youth-engagement.png",
    activity10Title = "Emergency & Relief Work", activity10Desc = "Disaster response, humanitarian aid, and crisis support.", activity10Icon = "/assets/what-we-offer/icons/emergency-relief.png",
    style = {}
}) => {
    const activities = [
        { title: activity1Title, titleProp: "activity1Title", description: activity1Desc, descProp: "activity1Desc", icon: activity1Icon, iconProp: "activity1Icon", color: "#E76A8A" },
        { title: activity2Title, titleProp: "activity2Title", description: activity2Desc, descProp: "activity2Desc", icon: activity2Icon, iconProp: "activity2Icon", color: "#73C2A5" },
        { title: activity3Title, titleProp: "activity3Title", description: activity3Desc, descProp: "activity3Desc", icon: activity3Icon, iconProp: "activity3Icon", color: "#A97FD1" },
        { title: activity4Title, titleProp: "activity4Title", description: activity4Desc, descProp: "activity4Desc", icon: activity4Icon, iconProp: "activity4Icon", color: "#FCB889" },
        { title: activity5Title, titleProp: "activity5Title", description: activity5Desc, descProp: "activity5Desc", icon: activity5Icon, iconProp: "activity5Icon", color: "#899DD0" },
        { title: activity6Title, titleProp: "activity6Title", description: activity6Desc, descProp: "activity6Desc", icon: activity6Icon, iconProp: "activity6Icon", color: "#92FFD8" },
        { title: activity7Title, titleProp: "activity7Title", description: activity7Desc, descProp: "activity7Desc", icon: activity7Icon, iconProp: "activity7Icon", color: "#FEC23D" },
        { title: activity8Title, titleProp: "activity8Title", description: activity8Desc, descProp: "activity8Desc", icon: activity8Icon, iconProp: "activity8Icon", color: "#CADB7F" },
        { title: activity9Title, titleProp: "activity9Title", description: activity9Desc, descProp: "activity9Desc", icon: activity9Icon, iconProp: "activity9Icon", color: "#DB80CF" },
        { title: activity10Title, titleProp: "activity10Title", description: activity10Desc, descProp: "activity10Desc", icon: activity10Icon, iconProp: "activity10Icon", color: "#bc7ba6" }
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

                <div className={styles.grid}>
                    {activities.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ backgroundColor: item.color }}
                        >
                            <div className={styles.iconWrapper}>
                                <img src={item.icon} alt={item.title} className={styles.customIcon} data-builder-prop={item.iconProp} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle} data-builder-prop={item.titleProp}>{item.title}</h3>
                                <p className={styles.cardDescription} data-builder-prop={item.descProp}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VolunteerActivitiesSection;
