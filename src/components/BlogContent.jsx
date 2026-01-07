"use client";

import React from 'react';
import styles from './BlogContent.module.css';

const BlogContent = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Featured Image */}
                <div className={styles.imageWrapper}>
                    <img
                        src="/assets/blogs/article-cover.png"
                        alt="Meeting Discussion"
                        className={styles.featuredImage}
                    />
                </div>

                {/* Article Content */}
                <div className={styles.articleBody}>
                    <p className={styles.paragraph}>
                        Membership perks can sometimes feel overwhelming or underused, but with a little guidance, they can add real value to your daily life. This blog explores practical ways to fully enjoy your membership by identifying perks that align with your lifestyle, optimizing their use, and accessing them easily from your dashboard.
                    </p>

                    <h2 className={styles.heading}>What You'll Learn:</h2>
                    <ul className={styles.list}>
                        <li>1- How to identify the perks that matter most to you.</li>
                        <li>2- Simple strategies to maximize the value of every membership benefit.</li>
                        <li>3- Tips to integrate perks seamlessly into your daily routine.</li>
                        <li>4- Ways to track and access your benefits quickly through your dashboard.</li>
                    </ul>

                    <h2 className={styles.heading}>Why It Matters:</h2>
                    <p className={styles.paragraph}>
                        A membership is more than just access — it's a curated experience designed to give you convenience, savings, and exclusive opportunities. Learning to use your perks effectively ensures that you get the most out of what you've invested in.
                    </p>

                    <h2 className={styles.heading}>Takeaway:</h2>
                    <p className={styles.paragraph}>
                        By the end of this blog, you'll feel confident in navigating your membership, uncovering hidden benefits, and making every perk count in a way that genuinely enhances your lifestyle.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogContent;
