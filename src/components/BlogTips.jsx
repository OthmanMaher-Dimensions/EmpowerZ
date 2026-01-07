"use client";

import React from 'react';
import styles from './BlogTips.module.css';

const BlogTips = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span className={styles.titleYellow}>Tips & Strategies</span> <br />
                        to Unlock Every Perk
                    </h2>

                    <p className={styles.description}>
                        Getting the most out of your membership isn't just about knowing what's available — it's about using it strategically. In this section, we break down actionable tips to help you:
                    </p>

                    <ul className={styles.list}>
                        <li>
                            <span className={styles.listHighlight}>1- Prioritize perks:</span> focus on benefits you'll actually use.
                        </li>
                        <li>
                            <span className={styles.listHighlight}>2- Track usage:</span> make sure nothing goes unnoticed.
                        </li>
                        <li>
                            <span className={styles.listHighlight}>3- Combine perks:</span> some work best together for extra value.
                        </li>
                        <li>
                            <span className={styles.listHighlight}>4- Stay updated:</span> check your dashboard for new offers.
                        </li>
                    </ul>

                    <p className={styles.summary}>
                        By following these strategies, you'll turn your membership from a list of options into a toolkit that genuinely enhances your daily life, saving you time, money, and effort.
                    </p>
                </div>


            </div>
        </section>
    );
};

export default BlogTips;
