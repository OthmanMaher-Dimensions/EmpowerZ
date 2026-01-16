"use client";

import React, { useState, useEffect } from 'react';
import styles from './BlogsHero.module.css';
import { getSocialLinks } from '../utils/socialLinks';
import { Search } from 'lucide-react';

import SiteHeader from './SiteHeader';

export default function BlogsHero({ showHeader = true }) {
    const [socialLinks, setSocialLinks] = useState({
        facebook: '#', twitter: '#', instagram: '#', linkedin: '#', youtube: '#'
    });

    useEffect(() => {
        getSocialLinks().then(setSocialLinks);
    }, []);

    const socialIcons = [
        { name: 'Youtube', icon: '/assets/icon-youtube-gold.png', link: socialLinks.youtube },
        { name: 'X', icon: '/assets/icon-x-gold.png', link: socialLinks.twitter },
        { name: 'Facebook', icon: '/assets/icon-facebook-gold.png', link: socialLinks.facebook },
        { name: 'Instagram', icon: '/assets/icon-instagram-gold.png', link: socialLinks.instagram },
        { name: 'LinkedIn', icon: '/assets/icon-linkedin-gold.png', link: socialLinks.linkedin },
    ];

    return (
        <>
            {showHeader && <SiteHeader />}
            <section className={styles.hero}>
                <div className={styles.heroBgContainer}>
                    <div className={styles.heroBgImage} />
                    <div className={styles.gradientOverlay} />
                </div>

                <div className={styles.contentArea}>
                    <div className={styles.contentInner}>
                        <h1 className={styles.heading}>
                            OUR <span className={styles.headingGold}>BLOG</span>
                        </h1>

                        <p className={styles.subheading}>
                            Stay updated with the latest insights, news, and stories from the EmpowerZ community.
                        </p>

                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                className={styles.searchInput}
                            />
                            <button className={styles.searchButton}>
                                <Search size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.socialSidebar}>
                    {socialIcons.map((social) => (
                        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                            <img src={social.icon} alt={social.name} className={styles.socialIconImg} />
                        </a>
                    ))}
                </div>

                <div className={styles.mobileSocials}>
                    {socialIcons.map((social) => (
                        <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                            <img src={social.icon} alt={social.name} className={styles.socialIconImg} />
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}
