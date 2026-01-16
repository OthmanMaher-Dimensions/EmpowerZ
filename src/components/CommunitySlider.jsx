"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CommunitySlider.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CommunitySlider = ({
    headline = "Our community is committed to providing you with tailored training courses, learning opportunities, tools and skills to land better opportunities, personally and professionally.",
    ctaText = "SIGN UP NOW",
    slide1Title = "Courses & Training",
    slide1Desc = "Access on-demand and live sessions covering business, leadership, communication, tech, and personal growth – free and discounted rates.",
    slide1Image = "/assets/community-slide-1.png",
    slide2Title = "Exclusive Perks & Partner Discounts",
    slide2Desc = "Enjoy member-only offers from top brands, services, and tools that support your success.",
    slide2Image = "/assets/community-slide-2.png",
    slide3Title = "Networking Events",
    slide3Desc = "Connect with mentors, peers, and collaborators who challenge and inspire you.",
    slide3Image = "/assets/community-slide-3.png",
    slide4Title = "Paid Internship",
    slide4Desc = "Exciting internship opportunities offering a pathway to kick-start your career through invaluable experiences to shape your professional journey.",
    slide4Image = "/assets/community-slide-4.png",
    slide5Title = "Scholarship Opportunities",
    slide5Desc = "Access partial and full scholarships for selected programs, empowering you to learn without financial barriers. (terms and conditions apply)",
    slide5Image = "/assets/community-slide-5.png",
    slide6Title = "Mentorship",
    slide6Desc = "Get guidance from experienced mentors who will help you grow, learn, and navigate your career journey with confidence!",
    slide6Image = "/assets/community-slide-6.png",
    slide7Title = "Social Events",
    slide7Desc = "Exciting social events, fun and team-building activities to connect, unwind, and build lasting friendships with like-minded peers!",
    slide7Image = "/assets/community-slide-7.png",
    slide8Title = "Volunteer Activities",
    slide8Desc = "Engage in meaningful social initiatives and volunteer programs to build skills, give back to the community, and expand your network.",
    slide8Image = "/assets/community-slide-8.png",
    style = {}
}) => {
    // Reconstruct slides array from props
    const slides = [
        { title: slide1Title, desc: slide1Desc, image: slide1Image },
        { title: slide2Title, desc: slide2Desc, image: slide2Image },
        { title: slide3Title, desc: slide3Desc, image: slide3Image },
        { title: slide4Title, desc: slide4Desc, image: slide4Image },
        { title: slide5Title, desc: slide5Desc, image: slide5Image },
        { title: slide6Title, desc: slide6Desc, image: slide6Image },
        { title: slide7Title, desc: slide7Desc, image: slide7Image },
        { title: slide8Title, desc: slide8Desc, image: slide8Image },
    ];

    // Split headline for styling if needed, or just display as is. 
    // The original had <strong>Our community</strong>... 
    // We'll use a simple parser or just render the text. 
    // For simplicity in this refactor, I will just render the text, 
    // but to keep the bolding, I might need a separate prop or HTML parsing.
    // Let's keep it simple: just text for now, or use dangerouslySetInnerHTML if rich text is needed later.
    // The original code was: <p><strong>Our community</strong> is committed...</p>
    // I'll leave the bolding part out of the prop for now to avoid complexity, 
    // or I can make "Our community" a separate prefix prop if critical.
    // Let's assume the user edits the whole string. I will render it inside the p tag.

    return (
        <section className={styles.section} style={style}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className={styles.headline}>
                        {headline}
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <button
                        id="community-slider-prev"
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        aria-label="Previous slide"
                        type="button"
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
                        {ctaText} <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CommunitySlider;
