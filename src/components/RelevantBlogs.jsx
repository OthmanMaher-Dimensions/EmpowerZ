"use client";

import React from 'react';
import Link from 'next/link';
import styles from './RelevantBlogs.module.css';

const RelevantBlogs = ({ currentPostId }) => {
    const [relevantPosts, setRelevantPosts] = React.useState([]);

    React.useEffect(() => {
        const fetchRelevantBlogs = async () => {
            try {
                const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
                const res = await fetch(`${adminUrl}/api/public/blogs`);
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data)) {
                        // Filter out current post and limit to 3
                        const filtered = data
                            .filter(post => post.id !== currentPostId)
                            .slice(0, 3)
                            .map(post => ({
                                id: post.id,
                                title: post.title,
                                description: post.excerpt || post.content?.replace(/<[^>]+>/g, '')?.substring(0, 150) + "..." || "",
                                image: post.coverImage
                                    ? (post.coverImage.startsWith('http') ? post.coverImage : `${adminUrl}${post.coverImage}`)
                                    : "/assets/blogs/article-cover.png",
                                slug: post.slug
                            }));
                        setRelevantPosts(filtered);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch relevant blogs:", error);
            }
        };

        fetchRelevantBlogs();
    }, [currentPostId]);

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
                                    <Link href={`/blogs/${post.slug || post.id}`} className={styles.titleLink}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className={styles.cardDescription}>{post.description}</p>
                                <Link href={`/blogs/${post.slug || post.id}`} className={styles.readMore}>
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
