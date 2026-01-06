"use client";

import { useState, useEffect } from 'react';
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

    const [imgIndex, setImgIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3); // Default to 3

    // Update slides to show based on window width
    useEffect(() => {
        const handleResize = () => {

            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Ensure state updates correctly
    const maxIndex = Math.max(0, slides.length - slidesToShow);

    // Translate calculation:
    // We want to move by 1 slide width.
    // 1 slide width = (100 / slidesToShow)% of the VIEWPORT (Container).
    // translateX is relative to the element (Track).
    // If Track is 100% wide (same as Viewport), then translateX(-33.33%) moves it left by 33.33% of Viewport.
    const translateX = -(imgIndex * (100 / slidesToShow));

    const nextSlide = () => {
        setImgIndex((prev) => {
            const next = prev + 1;
            return next > maxIndex ? 0 : next;
        });
    };

    const prevSlide = () => {
        setImgIndex((prev) => {
            const next = prev - 1;
            return next < 0 ? maxIndex : next;
        });
    };

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
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                        type="button"
                    >
                        <ArrowLeft size={40} color="#757575" />
                    </button>

                    <div className={styles.sliderWindow}>
                        <div className={styles.sliderTrack} style={{ transform: `translateX(${translateX}%)`, }} >

                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={styles.slideItem}
                                    style={{ flex: `0 0 ${100 / slidesToShow}%` }}
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
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={nextSlide}
                        aria-label="Next slide"
                        type="button"
                    >
                        <ArrowRight size={40} color="#fbbf24" />
                    </button>
                </div>

                <div className={styles.ctaContainer}>
                    <button className={styles.ctaButton}>
                        SIGN UP NOW <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CommunitySlider;
