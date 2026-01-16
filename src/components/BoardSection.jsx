"use client";

import React from 'react';
import styles from './BoardSection.module.css';

const getCountryCode = (name) => {
    const map = {
        'USA': 'us',
        'United States': 'us',
        'UK': 'gb',
        'United Kingdom': 'gb',
        'Canada': 'ca',
        'Australia': 'au',
        'Germany': 'de',
        'France': 'fr',
        'UAE': 'ae',
        'United Arab Emirates': 'ae',
        'KSA': 'sa',
        'Saudi Arabia': 'sa',
        'India': 'in',
        'China': 'cn',
        'Japan': 'jp',
        'Brazil': 'br',
        'Jordan': 'jo',
        'Egypt': 'eg',
        'Lebanon': 'lb',
        'Kuwait': 'kw',
        'Oman': 'om',
        'Bahrain': 'bh',
        'Qatar': 'qa',
        'Turkey': 'tr',
        // Add more as needed or use a robust library if requested
    };
    return map[name] || 'xx'; // 'xx' will likely fail to load, triggering onError
};

const BoardSection = ({
    title = "OUR BOARD MEMBERS",
    placeholderImage = "/assets/about/board-member-placeholder.png",
    style = {}
}) => {
    const [members, setMembers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchTeam = async () => {
            try {
                const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
                const res = await fetch(`${adminUrl}/api/public/team`, { next: { revalidate: 10 } });
                if (res.ok) {
                    const data = await res.json();
                    setMembers(data);
                }
            } catch (error) {
                console.error("Failed to fetch team", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, []);

    if (loading) return null; // Or a loading spinner

    if (members.length === 0) return null; // Hide if no members

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                {/* Big Text Overlay */}
                <h2 className={styles.overlayTitle}>
                    {title}
                </h2>

                {/* Cards Container */}
                <div className={styles.cardGrid}>
                    {members.map((member, index) => (
                        <div key={member.id || index} className={styles.card}>
                            <img
                                src={member.image ? (member.image.startsWith('http') ? member.image : `${process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000'}${member.image}`) : placeholderImage}
                                alt={member.name}
                                className={styles.cardBg}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = placeholderImage;
                                }}
                            />

                            <div className={styles.cardOverlay}>
                                <h3 className={styles.name}>{member.name}</h3>
                                <div className={styles.role}>{member.role}</div>
                                <p className={styles.description}>
                                    {member.bio}
                                </p>

                                {member.country && (
                                    <div className={styles.countryInfo}>
                                        <img
                                            src={`https://flagcdn.com/24x18/${getCountryCode(member.country)}.png`}
                                            alt={member.country}
                                            className={styles.flagIcon}
                                            onError={(e) => e.target.style.display = 'none'} // Hide if no flag found
                                        />
                                        <span className={styles.countryName}>{member.country}</span>
                                    </div>
                                )}

                                <div className={styles.socials}>
                                    {member.social?.linkedin && (
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                                            <img src="/assets/about/linkedin-gold.png" alt="LinkedIn" />
                                        </a>
                                    )}
                                    {member.social?.facebook && (
                                        <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                                            <img src="/assets/about/facebook-gold.png" alt="Facebook" />
                                        </a>
                                    )}

                                    {member.social?.instagram && (
                                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                            <img src="/assets/about/instagram-gold.png" alt="Instagram" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardSection;
