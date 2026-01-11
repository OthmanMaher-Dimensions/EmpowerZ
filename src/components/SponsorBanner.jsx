"use client";

import styles from './SponsorBanner.module.css';
import Link from 'next/link';

const SponsorBanner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerContainer}>
                <div className={styles.leftContent}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.bannerText}>
                        Do you support our mission?<br />
                        <span className={styles.highlightText}>Sponsor a Member Now.</span>
                    </h2>
                </div>

                <Link href="/apply-sponsor" className={styles.sponsorBtn}>
                    SPONSOR A MEMBER
                    <span className={styles.arrowIcon}>→</span>
                </Link>
            </div>
        </section>
    );
};

export default SponsorBanner;
