"use client";

import styles from './AboutMembership.module.css';

const AboutMembership = ({
    topDescription = "Whether you're launching a startup, building your career, choosing your path after high school, or preparing for your first job, our community empowers you with the right skills, guidance, tools, and network to level up.",
    aboutTitle = "About us....",
    quote = "Empowerment is what we promise and deliver",
    boxTitle = "How will my membership help me excel and land better opportunities in life, personally and professionally?",
    boxContent = `According to the World Economic Forum, nearly 59% of workers globally will require significant training (reskilling or upskilling) by 2030, and 63% of employers say skill gaps are the biggest barrier to business transformation, and 85% plan to prioritize upskilling between now and 2030. Meanwhile, 70% intend to hire new talent with specialized skills.

Even socially, individuals who invest in soft skills like emotional intelligence report 31% higher life satisfaction.

Even socially, individuals who invest in soft skills like emotional intelligence report 31% higher life satisfaction.

The evidence is clear: skills unlock opportunity in work, business, and life.

We help you learn, upskill, network with peers and experts, grow, and be an agent of change.

Investing in learning and skill development is no longer just "nice to have"; it's a strategic imperative for success in the evolving global economy.`,
    manImage = "/assets/man-celebrating.png",
    soundwaveImage = "/assets/soundwave-purple.png",
    borderImage = "/assets/message-border.png",
    style = {}
}) => {
    return (
        <section className={styles.section} style={style}>
            {/* --- Man Image (Absolute Positioned) --- */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={manImage}
                alt="Excited Man"
                className={styles.manImage}
            />

            <div className={styles.container}>

                {/* --- Top Header Section --- */}
                <div className={styles.headerWrapper}>
                    <p className={styles.topDescription}>
                        {topDescription}
                    </p>

                    <div className={styles.soundwaveContainer}>
                        <h3 className={styles.aboutTitle}>{aboutTitle}</h3>
                        {/* Soundwave Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={soundwaveImage}
                            alt="Soundwave"
                            className={styles.soundwaveImg}
                        />
                        <h2 className={styles.quote}>
                            <span className={styles.quoteMark}>❝</span>
                            {quote}
                            <span className={styles.quoteMark}>❞</span>
                        </h2>
                    </div>
                </div>

            </div>

            {/* --- Right: Content Box (Absolute Positioned) --- */}
            <div className={styles.textBoxWrapper}>
                <div className={styles.textBox}>
                    {/* Background Image Wrapper */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={borderImage} alt="" className={styles.boxBorderBg} />

                    <div className={styles.boxContentOverlay}>
                        <h3 className={styles.boxTitle}>
                            {boxTitle}
                        </h3>

                        <div className={styles.boxContent}>
                            {boxContent.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMembership;
