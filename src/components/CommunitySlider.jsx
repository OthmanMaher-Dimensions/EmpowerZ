"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CommunitySlider.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CommunitySlider = () => {
    const slides = [
        {
            title: "Courses & Training",
            desc: "Access on-demand and live sessions covering business, leadership, communication, tech, and personal growth – free and discounted rates.",
            image: "/assets/community-slide-1.png"
        },
        {
            title: "Exclusive Perks & Partner Discounts",
            desc: "Enjoy member-only offers from top brands, services, and tools that support your success.",
            image: "/assets/community-slide-2.png"
        },
        {
            title: "Networking Events",
            desc: "Connect with mentors, peers, and collaborators who challenge and inspire you.",
            image: "/assets/community-slide-3.png"
        },
        {
            title: "Paid Internship",
            desc: "Exciting internship opportunities offering a pathway to kick-start your career through invaluable experiences to shape your professional journey.",
            image: "/assets/community-slide-4.png"
        },
        {
            title: "Scholarship Opportunities",
            desc: "Access partial and full scholarships for selected programs, empowering you to learn without financial barriers. (terms and conditions apply)",
            image: "/assets/community-slide-5.png"
        },
        {
            title: "Mentorship",
            desc: "Get guidance from experienced mentors who will help you grow, learn, and navigate your career journey with confidence!",
            image: "/assets/community-slide-6.png"
        },
        {
            title: "Social Events",
            desc: "Exciting social events, fun and team-building activities to connect, unwind, and build lasting friendships with like-minded peers!",
            image: "/assets/community-slide-7.png"
        },
        {
            title: "Volunteer Activities",
            desc: "Engage in meaningful social initiatives and volunteer programs to build skills, give back to the community, and expand your network.",
            image: "/assets/community-slide-8.png"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.headline}>
                        <strong>Our community</strong> is committed to providing you with tailored training courses, learning opportunities, tools and skills to land better opportunities, personally and professionally.
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <button
                        id="community-slider-prev"
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        aria-label="Previous slide"
                        type="button"
                        disabled // Disabled by default at start
                    >
                        {/* Solid Left Triangle - Bigger */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19l-7-7 7-7" strokeWidth="0" />
                            <path d="M14 6L8 12L14 18V6Z" />
                        </svg>
                    </button>

                    <div className={styles.sliderWindow}>
                        <div
                            id="community-slider-track"
                            className={styles.sliderTrack}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={styles.slideItem}
                                >
                                    <div className={styles.card}>
                                        <img src={slide.image} alt={slide.title} className={styles.cardImage} />
                                        <div className={styles.cardOverlay}>
                                            <h3 className={styles.cardTitle}>{slide.title}</h3>
                                            <p className={styles.cardDesc}>{slide.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        id="community-slider-next"
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        aria-label="Next slide"
                        type="button"
                    >
                        {/* Solid Right Triangle - Bigger */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6L16 12L10 18V6Z" />
                        </svg>
                    </button>
                </div>

                <div className={styles.ctaContainer}>
                    <Link href="/apply-member" className={styles.ctaButton}>
                        SIGN UP NOW <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CommunitySlider;
