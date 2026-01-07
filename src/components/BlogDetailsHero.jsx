"use client";

import React from 'react';
import SiteHeader from './SiteHeader';
import styles from './BlogDetailsHero.module.css';

const BlogDetailsHero = () => {
    return (
        <section className={styles.hero}>
            <SiteHeader />

            <div className={styles.contentContainer}>
                <h1 className={styles.title}>
                    HOW TO MAKE THE MOST <br />
                    OUT OF EVERY MEMBERSHIP <br />
                    PERK AND BENEFIT
                </h1>
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

export default BlogDetailsHero;
