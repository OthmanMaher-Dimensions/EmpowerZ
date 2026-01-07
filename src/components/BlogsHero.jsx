"use client";

import React from 'react';
import { Search } from 'lucide-react';
import SiteHeader from './SiteHeader';
import styles from './BlogsHero.module.css';

const BlogsHero = () => {
    return (
        <section className={styles.hero}>
            {/* Background Image Container */}
            <div className={styles.heroBgContainer}>
                {/* The Image */}
                <div className={styles.heroBgImage} />
                {/* The Gradient Overlay */}
                <div className={styles.gradientOverlay} />
            </div>

            <SiteHeader />

            <div className={styles.contentArea}>
                <div className={styles.contentInner}>
                    <h1 className={styles.heading}>
                        FREE GUIDES <br />
                        <span className={styles.headingAmp}>&</span> TIPS
                    </h1>

                    <p className={styles.subheading}>
                        To Help You Unlock Your Membership <br />
                        Perks & Enjoy Every Benefit to the Full!
                    </p>

                    {/* Search Bar */}
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            placeholder="Search"
                            className={styles.searchInput}
                        />
                        <button className={styles.searchButton} aria-label="Search">
                            <Search className={styles.searchIcon} size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Social Sidebar */}
            <div className={styles.socialSidebar}>
                {[
                    { img: '/assets/icon-youtube-gold.png', href: '#' },
                    { img: '/assets/icon-x-gold.png', href: '#' },
                    { img: '/assets/icon-facebook-gold.png', href: '#' },
                    { img: '/assets/icon-instagram-gold.png', href: '#' },
                    { img: '/assets/icon-linkedin-gold.png', href: '#' }
                ].map((item, i) => (
                    <a key={i} href={item.href} className={styles.socialIconLink}>
                        <img src={item.img} alt="Social Icon" className={styles.socialIconImg} />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default BlogsHero;
