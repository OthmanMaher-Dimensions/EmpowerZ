"use client";

import styles from './AboutMembership.module.css';

const AboutMembership = () => {
    return (
        <section className={styles.section}>
            {/* --- Man Image (Absolute Positioned) --- */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/assets/man-celebrating.png"
                alt="Excited Man"
                className={styles.manImage}
            />

            <div className={styles.container}>

                {/* --- Top Header Section --- */}
                <div className={styles.headerWrapper}>
                    <p className={styles.topDescription}>
                        Whether you're launching a startup, building your career, choosing your path after high school, or preparing for your first job, our community empowers you with the right skills, guidance, tools, and network to level up.
                    </p>

                    <div className={styles.soundwaveContainer}>
                        <h3 className={styles.aboutTitle}>About us....</h3>
                        {/* Soundwave Image */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/soundwave-purple.png"
                            alt="Soundwave"
                            className={styles.soundwaveImg}
                        />
                        <h2 className={styles.quote}>
                            <span className={styles.quoteMark}>“</span>
                            Empowerment is what we promise and deliver
                            <span className={styles.quoteMark}>”</span>
                        </h2>
                    </div>
                </div>

            </div>

            {/* --- Right: Content Box (Absolute Positioned) --- */}
            <div className={styles.textBoxWrapper}>
                <div className={styles.textBox}>
                    {/* Background Image Wrapper */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/message-border.png" alt="" className={styles.boxBorderBg} />

                    <div className={styles.boxContentOverlay}>
                        <h3 className={styles.boxTitle}>
                            How will my membership help me excel and land better opportunities in life, personally and professionally?
                        </h3>

                        <div className={styles.boxContent}>
                            <p>
                                According to the World Economic Forum, nearly 59% of workers globally will require significant training (reskilling or upskilling) by 2030, and 63% of employers say skill gaps are the biggest barrier to business transformation, and 85% plan to prioritize upskilling between now and 2030. Meanwhile, 70% intend to hire new talent with specialized skills.
                            </p>
                            <p>
                                Even socially, individuals who invest in soft skills like emotional intelligence report 31% higher life satisfaction.
                            </p>
                            <p>
                                Even socially, individuals who invest in soft skills like emotional intelligence report 31% higher life satisfaction.
                            </p>
                            <p>
                                The evidence is clear: skills unlock opportunity in work, business, and life.
                            </p>
                            <p>
                                We help you learn, upskill, network with peers and experts, grow, and be an agent of change.
                            </p>
                            <p>
                                Investing in learning and skill development is no longer just "nice to have"; it's a strategic imperative for success in the evolving global economy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMembership;
