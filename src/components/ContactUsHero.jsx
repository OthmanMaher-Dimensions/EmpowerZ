"use client";

import React, { useState, useEffect } from 'react';
import styles from './ContactUsHero.module.css';
import { getSocialLinks } from '../utils/socialLinks';

import SiteHeader from './SiteHeader';

export default function ContactUsHero({ showHeader = true }) {
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
                            GET IN <span className={styles.headingGold}>TOUCH</span>
                        </h1>

                        <p className={styles.subtitle}>
                            WE'D LOVE TO HEAR FROM YOU. REACH OUT WITH ANY QUESTIONS OR INQUIRIES.
                        </p>
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
