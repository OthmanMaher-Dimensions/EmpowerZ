"use client";

import styles from './MissionAcronym.module.css';

const MissionAcronym = ({ backgroundColor }) => {
    return (
        <section className={styles.section} style={{ backgroundColor: backgroundColor || '#100820' }}>
            <div className={styles.container}>
                {/* Title Section */}
                <div className={styles.titleWrapper}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.title}>
                        Mission Statement<br />
                        <span className={styles.subtitle}>Acronym</span>
                    </h2>
                </div>

                {/* Central Graphic */}
                <div className={styles.graphicContainer}>

                    {/* Desktop Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/mission-acronym-desktop.png"
                        alt="Mission Acronym Desktop"
                        className={`${styles.centralImage} ${styles.desktopOnly}`}
                    />

                    {/* Mobile/Tablet Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/assets/mission-acronym-mobile.png"
                        alt="Mission Acronym Mobile"
                        className={`${styles.centralImage} ${styles.mobileOnly}`}
                    />

                    {/* Text Blocks - Positioned absolutely via classes */}

                    {/* --- Row 1 (Top) --- */}

                    {/* Empowerment (Orange) */}
                    <div className={`${styles.textGroup} ${styles.posEmpowerment}`}>
                        <div className={styles.textBlockUp}>
                            <h3 className={styles.itemTitle} style={{ color: '#FCB889' }}>Empowerment</h3>
                            <p className={styles.itemDesc}>Fostering a sense of confidence and capability</p>
                        </div>
                    </div>

                    {/* Motivation (Lime) */}
                    <div className={`${styles.textGroup} ${styles.posMotivation}`}>
                        <div className={styles.textBlockUp}>
                            <h3 className={styles.itemTitle} style={{ color: '#CADB7F' }}>Motivation</h3>
                            <p className={styles.itemDesc}>Inspiring and driving action toward success</p>
                        </div>
                    </div>

                    {/* Potential (Purple) */}
                    <div className={`${styles.textGroup} ${styles.posPotential}`}>
                        <div className={styles.textBlockUp}>
                            <h3 className={styles.itemTitle} style={{ color: '#A97FD1' }}>Potential</h3>
                            <p className={styles.itemDesc}>Helping individuals recognize and reach their full capabilities</p>
                        </div>
                    </div>


                    {/* --- Row 2 (Bottom) --- */}

                    {/* Resilience (Pink - Left) */}
                    <div className={`${styles.textGroup} ${styles.posResilience}`}>
                        <div className={styles.textBlockLeft}>
                            <h3 className={styles.itemTitle} style={{ color: '#E76A' }}>Resilience</h3>
                            <p className={styles.itemDesc}>Building strength to overcome challenges & seize opportunities.</p>
                        </div>
                    </div>

                    {/* Wisdom (Teal) */}
                    <div className={`${styles.textGroup} ${styles.posWisdom}`}>
                        <div className={styles.textBlockDown}>
                            <h3 className={styles.itemTitle} style={{ color: '#73C2A5' }}>Wisdom</h3>
                            <p className={styles.itemDesc}>Equipping with knowledge and essential life/business skills</p>
                        </div>
                    </div>

                    {/* Education (Blue) */}
                    <div className={`${styles.textGroup} ${styles.posEducation}`}>
                        <div className={styles.textBlockDown}>
                            <h3 className={styles.itemTitle} style={{ color: '#899DDD' }}>Education</h3>
                            <p className={styles.itemDesc}>Offering affordable and free learning opportunities</p>
                        </div>
                    </div>

                    {/* Opportunity (Magenta - Right) */}
                    <div className={`${styles.textGroup} ${styles.posOpportunity}`}>
                        <div className={styles.textBlockRight}>
                            <h3 className={styles.itemTitle} style={{ color: '#DB80CF' }}>Opportunity:</h3>
                            <p className={styles.itemDesc}>Providing access to resources and chances for growth</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionAcronym;
