"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './BlogsGrid.module.css';

const BlogsGrid = () => {
    // Mock Data based on the design
    const posts = [
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
        },
        {
            id: 4,
            title: "Smart Ways to Unlock the Full Value of Your Membership",
            description: "Your membership gives you more than access. Learn easy strategies to explore your benefits, avoid missing out, and get the most value from your membership.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 5,
            title: "How We Design Membership Perks That Truly Matter",
            description: "Discover the process behind how we create and select membership perks, ensuring every benefit adds something meaningful to your overall experience.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 6,
            title: "The Benefits You Should Be Using (But Probably Aren't)",
            description: "Some valuable perks often go unnoticed. This guide helps you discover overlooked benefits and shows you how to start using them right away.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 7,
            title: "Why Our Perks Go Beyond Discounts to Deliver Real, Lasting Value",
            description: "Our perks are built to deliver more than savings. They focus on convenience, experiences, and value that lasts beyond a single offer.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 8,
            title: "Top Membership Perks Members Are Loving Right Now",
            description: "Discover the most popular perks among members and explore why they continue to stand out for delivering real value, everyday convenience, and enjoyed benefits.",
            image: "/assets/blogs/article-cover.png"
        },
        {
            id: 9,
            title: "Maximizing Your Membership: Tips to Unlock Hidden Benefits",
            description: "Many members don't realize the value waiting for them. This guide shows how to discover overlooked perks, use them effectively, and get more from your membership daily.",
            image: "/assets/blogs/article-cover.png"
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Grid */}
                <div className={styles.grid}>
                    {posts.map((post) => (
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

                {/* Pagination */}
                <div className={styles.pagination}>
                    <button className={styles.pageArrow} disabled>
                        <ArrowLeft size={20} />
                    </button>

                    <button className={`${styles.pageNumber} ${styles.activePage}`}>
                        1
                    </button>
                    <button className={styles.pageNumber}>
                        2
                    </button>
                    <button className={styles.pageNumber}>
                        3
                    </button>

                    <button className={styles.pageArrow}>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogsGrid;
