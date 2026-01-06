"use client";

import styles from './SponsorBanner.module.css';

const SponsorBanner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerContainer}>
                <div className={styles.leftContent}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.bannerText}>
                        Do you support our mission?<br />
                        Sponsor a Member Now.
                    </h2>
                </div>

                <button className={styles.sponsorBtn}>
                    SPONSOR A MEMBER
                    <span className={styles.arrowIcon}>→</span>
                </button>
            </div>
        </section>
    );
};

export default SponsorBanner;
