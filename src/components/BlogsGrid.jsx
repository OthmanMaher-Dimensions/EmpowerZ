"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './BlogsGrid.module.css';

const BlogsGrid = () => {
    // Mock Data based on the design
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const MOCK_POSTS = [
        {
            id: 1,
            title: "How to Make the Most Out of Every Membership Perk and Benefit",
            description: "Discover practical ways to enjoy your membership more by exploring perks that match your lifestyle, maximize your value, and are easily accessible from your dashboard.",
            image: "/assets/blogs/article-cover.png",
            slug: "how-to-make-the-most"
        },
        // ... (keep one or two as fallback if needed)
    ];

    React.useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
                const res = await fetch(`${adminUrl}/api/public/blogs`);
                if (res.ok) {
                    const data = await res.json();
                    console.log("Blogs API Response:", data);
                    if (Array.isArray(data) && data.length > 0) {
                        const stripHtml = (html) => {
                            if (!html) return "";
                            const tmp = document.createElement("DIV");
                            tmp.innerHTML = html;
                            return tmp.textContent || tmp.innerText || "";
                        };

                        const mappedPosts = data.map(post => ({
                            id: post.id,
                            title: post.title,
                            description: post.excerpt || (post.content ?
                                stripHtml(post.content)
                                    .replace(/\s+/g, ' ') // Collapse all whitespace (newlines, tabs, spaces) into single space
                                    .trim()
                                    .substring(0, 150)
                                : ""),
                            image: post.coverImage
                                ? (post.coverImage.startsWith('http') ? post.coverImage : `${adminUrl}${post.coverImage}`)
                                : "/assets/blogs/article-cover.png",
                            slug: post.slug
                        }));
                        console.log("Mapped Posts:", mappedPosts);
                        setPosts(mappedPosts);
                        setLoading(false);
                        return;
                    } else {
                        console.log("Blogs data is empty or not an array");
                    }
                } else {
                    console.error("Blogs fetch failed with status:", res.status);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            }
            setLoading(false);
        };

        fetchBlogs();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Pagination Logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    if (loading) {
        return (
            <section className={styles.section}>
                <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
                    <div className={styles.spinner}></div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Grid */}
                <div className={styles.grid}>
                    {currentPosts.map((post) => (
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button
                            className={styles.pageArrow}
                            onClick={handlePrev}
                            disabled={currentPage === 1}
                        >
                            <ArrowLeft size={20} />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                            <button
                                key={number}
                                onClick={() => handlePageChange(number)}
                                className={`${styles.pageNumber} ${currentPage === number ? styles.activePage : ''}`}
                            >
                                {number}
                            </button>
                        ))}

                        <button
                            className={styles.pageArrow}
                            onClick={handleNext}
                            disabled={currentPage === totalPages}
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogsGrid;
