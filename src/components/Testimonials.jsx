"use client";

import React from 'react';
import styles from './Testimonials.module.css';
import Link from 'next/link';

const Testimonials = ({
    title = "SEE WHAT OUR \nMEMBERS REALLY SAY...",
    ctaText = "Start Your Journey to Exclusive Perks",
    style = {}
}) => {
    const [testimonials, setTestimonials] = React.useState([]);

    React.useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_URL}/api/public/testimonials`);
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.length > 0) {
                        setTestimonials(data);
                    } else {
                        // Fallback data if API returns empty
                        setTestimonials(DEFAULT_TESTIMONIALS);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch testimonials:", error);
                setTestimonials(DEFAULT_TESTIMONIALS);
            }
        };

        fetchTestimonials();
    }, []);

    const DEFAULT_TESTIMONIALS = [
        {
            id: 1,
            name: "Sonia Gibson",
            role: "STAGE Workshop Attendee,",
            date: "June 2024",
            quote: "This platform helped me get clarity, confidence, and community...all in one place.",
            image: "/assets/testimonial-person.png"
        },
        {
            id: 2,
            name: "Shane Stone",
            role: "STAGE Workshop Attendee,",
            date: "June 2024",
            quote: "I landed my first job after graduation, and I know this community gave me the edge.",
            image: "/assets/testimonial-person.png"
        },
        {
            id: 3,
            name: "Aleksandra Pinneri",
            role: "Adelaide's leading Hair & Makeup Artist Stage Virtual Masterclass, October 2024",
            date: "",
            quote: "The discounts alone paid for the membership. But the knowledge and network? Priceless.",
            image: "/assets/testimonial-person.png"
        }
    ];

    return (
        <section className={styles.testimonialsSection} style={style}>
            <div className={styles.container}>
                <h2 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
                    {title}
                </h2>

                <div
                    id="testimonials-slider-wrapper"
                    className={styles.contentWrapper}
                >
                    <button
                        id="testimonials-prev"
                        className={`${styles.navButton} ${styles.prevBtn}`}
                        aria-label="Previous"
                        disabled // Default disabled at start
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19L8 12L15 5V19Z" fill="#ff007f" />
                        </svg>
                    </button>

                    <div className={styles.sliderWindow}>
                        <div
                            id="testimonials-track"
                            className={styles.cardsGrid}
                        >
                            {testimonials.map((item) => (
                                <div key={item.id} className={styles.card}>
                                    <div className={styles.cardInner}>
                                        <img
                                            src="/assets/quote-icon.png"
                                            alt="Quote"
                                            className={styles.quoteIcon}
                                        />
                                        <div className={styles.cardHeader}>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className={styles.userImage}
                                            />
                                            <div className={styles.userInfo}>
                                                <h3 className={styles.userName}>{item.name}</h3>
                                                <p className={styles.userRole}>{item.role}</p>
                                                {item.date && <span className={styles.date}>{item.date}</span>}
                                            </div>
                                        </div>
                                        <div className={styles.quoteContent}>
                                            <p className={styles.quoteText}>{item.quote}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        id="testimonials-next"
                        className={`${styles.navButton} ${styles.nextBtn}`}
                        aria-label="Next"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19V5Z" fill="#ff007f" />
                        </svg>
                    </button>
                </div>

                <Link href="/apply-member">
                    <button className={styles.ctaButton}>
                        {ctaText}
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Testimonials;
