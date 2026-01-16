"use client";

import styles from './SponsorBanner.module.css';
import Link from 'next/link';

const SponsorBanner = ({
    titlePrefix = "Do you support our mission?",
    titleSuffix = "Sponsor a Member Now.",
    ctaText = "SPONSOR A MEMBER",
    style = {}
}) => {
    return (
        <section className={styles.bannerSection} style={style}>
            <div className={styles.bannerContainer}>
                <div className={styles.leftContent}>
                    <div className={styles.pinkBar}></div>
                    <h2 className={styles.bannerText}>
                        {titlePrefix}<br />
                        <span className={styles.highlightText}>{titleSuffix}</span>
                    </h2>
                </div>

                <Link href="/apply-sponsor" className={styles.sponsorBtn}>
                    {ctaText}
                    <span className={styles.arrowIcon}>→</span>
                </Link>
            </div>
        </section>
    );
};

export default SponsorBanner;
