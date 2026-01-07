"use client";

import React from 'react';
import Link from 'next/link';
import styles from './RelevantBlogs.module.css';

const RelevantBlogs = () => {
    // Reusing the same data structure as BlogsGrid but only 3 items
    const relevantPosts = [
        {
            id: 1,
            title: "How to Make the Most Out of Every Membership Perk and Benefit",
            description: "Discover practical ways to enjoy your membership more by exploring perks that match your lifestyle, maximize your value, and are easily accessible from your dashboard.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 2,
            title: "Why We Carefully Select Quality Perks That Add Real Value",
            description: "Learn how we carefully select each perk to guarantee it brings exclusive value, long-term usefulness, and a thoughtful experience that goes beyond ordinary offers.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 3,
            title: "This Month's Top Picks from Our Most Loved Partner Brands",
            description: "Explore the latest handpicked perks from our top partner brands and see which benefits are trending right now across the platform and among active members.",
            image: "/assets/blogs/article-cover.png"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>RELEVANT BLOGS</h2>

                <div className={styles.grid}>
                    {relevantPosts.map((post) => (
                        <div key={post.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>
                                    <Link href={`/blogs/post-${post.id}`} className={styles.titleLink}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className={styles.cardDescription}>{post.description}</p>
                                <Link href={`/blogs/post-${post.id}`} className={styles.readMore}>
                                    READ MORE
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RelevantBlogs;
