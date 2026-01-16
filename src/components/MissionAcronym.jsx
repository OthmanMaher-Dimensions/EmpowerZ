"use client";

import styles from './MissionAcronym.module.css';

const MissionAcronym = ({
    backgroundColor,
    titlePrefix = "Mission Statement",
    titleSuffix = "Acronym",
    empowermentTitle = "Empowerment",
    empowermentDesc = "Fostering a sense of confidence and capability",
    motivationTitle = "Motivation",
    motivationDesc = "Inspiring and driving action toward success",
    potentialTitle = "Potential",
    potentialDesc = "Helping individuals recognize and reach their full capabilities",
    resilienceTitle = "Resilience",
    resilienceDesc = "Building strength to overcome challenges & seize opportunities.",
    wisdomTitle = "Wisdom",
    wisdomDesc = "Equipping with knowledge and essential life/business skills",
    educationTitle = "Education",
    educationDesc = "Offering affordable and free learning opportunities",
    opportunityTitle = "Opportunity:",
    opportunityDesc = "Providing access to resources and chances for growth",
    desktopImage = "/assets/mission-acronym-desktop.png",
    mobileImage = "/assets/mission-acronym-mobile.png",
    style = {}
}) => {
    return (
        <section className={styles.section} style={{ backgroundColor: backgroundColor || '#100820', ...style }}>
            <div className={styles.container}>
                {/* Title Section */}
                <div className={styles.titleWrapper}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.title}>
                        {titlePrefix}<br />
                        <span className={styles.subtitle}>{titleSuffix}</span>
                    </h2>
                </div>

                {/* Central Graphic */}
                <div className={styles.graphicContainer}>

                    {/* Desktop Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={desktopImage}
                        alt="Mission Acronym Desktop"
                        className={`${styles.centralImage} ${styles.desktopOnly}`}
                    />

                    {/* Mobile/Tablet Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={mobileImage}
                        alt="Mission Acronym Mobile"
                        className={`${styles.centralImage} ${styles.mobileOnly}`}
                    />

                    {/* Text Blocks - Positioned absolutely via classes */}

                    {/* --- Row 1 (Top) --- */}

                    {/* Empowerment (Orange) */}
                    <div className={`${styles.textGroup} ${styles.posEmpowerment}`}>
                        <div className={styles.textBlockUp}>
                            <h3 className={styles.itemTitle} style={{ color: '#FCB889' }}>{empowermentTitle}</h3>
                            <p className={styles.itemDesc}>{empowermentDesc}</p>
                        </div>
                    </div>

                    {/* Motivation (Lime) */}
                    <div className={`${styles.textGroup} ${styles.posMotivation}`}>
                        <div className={styles.textBlockUp}>
                            <h3 className={styles.itemTitle} style={{ color: '#CADB7F' }}>{motivationTitle}</h3>
                            <p className={styles.itemDesc}>{motivationDesc}</p>
                        </div>
                    </div>

                    {/* Potential (Purple) */}
                    <div className={`${styles.textGroup} ${styles.posPotential}`}>
                        <div className={styles.textBlockUp}>
                            <h3 className={styles.itemTitle} style={{ color: '#A97FD1' }}>{potentialTitle}</h3>
                            <p className={styles.itemDesc}>{potentialDesc}</p>
                        </div>
                    </div>


                    {/* --- Row 2 (Bottom) --- */}

                    {/* Resilience (Pink - Left) */}
                    <div className={`${styles.textGroup} ${styles.posResilience}`}>
                        <div className={styles.textBlockLeft}>
                            <h3 className={styles.itemTitle} style={{ color: '#E76A' }}>{resilienceTitle}</h3>
                            <p className={styles.itemDesc}>{resilienceDesc}</p>
                        </div>
                    </div>

                    {/* Wisdom (Teal) */}
                    <div className={`${styles.textGroup} ${styles.posWisdom}`}>
                        <div className={styles.textBlockDown}>
                            <h3 className={styles.itemTitle} style={{ color: '#73C2A5' }}>{wisdomTitle}</h3>
                            <p className={styles.itemDesc}>{wisdomDesc}</p>
                        </div>
                    </div>

                    {/* Education (Blue) */}
                    <div className={`${styles.textGroup} ${styles.posEducation}`}>
                        <div className={styles.textBlockDown}>
                            <h3 className={styles.itemTitle} style={{ color: '#899DDD' }}>{educationTitle}</h3>
                            <p className={styles.itemDesc}>{educationDesc}</p>
                        </div>
                    </div>

                    {/* Opportunity (Magenta - Right) */}
                    <div className={`${styles.textGroup} ${styles.posOpportunity}`}>
                        <div className={styles.textBlockRight}>
                            <h3 className={styles.itemTitle} style={{ color: '#DB80CF' }}>{opportunityTitle}</h3>
                            <p className={styles.itemDesc}>{opportunityDesc}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionAcronym;
