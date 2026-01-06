"use client";

import React from 'react';
import styles from './ContactUsHero.module.css';
import Header from './Header';

const ContactUsHero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBgContainer}>
                {/* The Image */}
                <div className={styles.heroBgImage} />

                {/* The Gradient Overlay */}
                <div className={styles.gradientOverlay} />
            </div>

            <Header />

            <div className={styles.contentArea}>
                <div className={styles.contentInner}>
                    <h1 className={styles.heading}>
                        <span className={styles.headingGold}>GET IN TOUCH</span> WITH OUR TEAM
                    </h1>
                    <p className={styles.subtitle}>
                        WE'RE HERE TO ANSWER YOUR QUESTIONS AND SUPPORT YOU EVERY STEP.
                    </p>
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

export default ContactUsHero;
