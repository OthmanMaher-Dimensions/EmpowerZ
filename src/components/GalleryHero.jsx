"use client";

import React, { useState, useEffect } from 'react';
import styles from './GalleryHero.module.css';
import { getSocialLinks } from '../utils/socialLinks';

export default function GalleryHero({ showHeader = true }) {
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
        <section className={styles.section}>
            <div className={styles.bgImage} />
            <div className={styles.overlay} />

            <div className={styles.container}>
                <h1 className={styles.title}>
                    GALLERY
                </h1>

                <p className={styles.subtitle}>
                    Capturing moments of growth, connection, and success.
                </p>
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
    );
}
